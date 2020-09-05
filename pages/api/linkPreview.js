const linkPreviewGenerator = require('link-preview-generator');
const fs = require('fs');
const path = require('path');

// Set some defaults (required if your JSON file is empty)
// db.defaults({ linkData: {} }).write();

export default async (req, res) => {
  const { url } = req.query;

  const linkData = JSON.parse(
    fs.readFileSync(`${process.cwd()}/pages/api/linkData.json`).toString()
  );
  let data = linkData[url];

  if (!linkData[url]) {
    try {
      data = await linkPreviewGenerator(url);
      linkData[url] = data;

      fs.writeFileSync(`${process.cwd()}/pages/api/linkData.json`, JSON.stringify(linkData));
    } catch (error) {}
  }

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(200).send(null);
  }
};
