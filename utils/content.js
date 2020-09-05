import matter from 'gray-matter';
import fs from 'fs';
import axios from 'axios';

export const getFolders = (path) =>
  fs.readdirSync(`${process.cwd()}/content/${path}`).map((folderName) => ({
    directory: folderName,
    filename: `${folderName}.md`,
  }));

const formatPreviewLink = async (content) => {
  const regex = /\[\%card\]\((.*?)\)/g;
  let str = content;
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    let previewData;

    try {
      const response = await axios.get(
        `${process.env.BASE_API}api/linkPreview?url=${m[1]}`
      );
      previewData = response.data;
    } catch (error) {
      console.error(error);
    }

    let replaceData;

    if (previewData) {
      replaceData = `<a href="${m[1]}" target="blank" class="preview-card">
        <div class="preview-card-img-container">
          <img src="${previewData.img}" alt="${previewData.title}"/>
        </div>
        <div class="preview-card-description-container">
          <p class="preview-card-title">${previewData.title}</p>
          <p class="preview-card-description">${previewData.description}</p>
          <p class="preview-card-domain">${previewData.domain}</p>
        </div>
      </a>`;
    } else {
      const domain = m[1].replace('http://', '').replace('https://', '');

      replaceData = `<a href="${m[1]}" target="blank" class="preview-card-short-link">
          ${domain}
        </a>`;
    }

    str = str.replace(m[0], replaceData);
  }

  return str;
};

// Get day in format: Month day, Year. e.g. April 19, 2020
const getFormattedDate = (date) =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const getSorted = (path) => {
  const folders = getFolders(path);

  const content = folders
    .map(({ filename, directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/${path}/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content, ...others } = matter(
        markdownWithMetadata
      );

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace('.md', '');

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .filter((p) => !p.frontmatter.draft)
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return content;
};

export const getSlugs = (path) => {
  const folders = getFolders(path);

  return folders.map(({ filename }) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
};

export const getBySlug = async (path, slug) => {
  const posts = getSorted(path);

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return {
    frontmatter,
    post: { content: await formatPreviewLink(content), excerpt },
    previousPost,
    nextPost,
  };
};
