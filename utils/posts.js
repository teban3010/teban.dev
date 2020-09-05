import { getFolders, getSorted, getSlugs, getBySlug } from './content';

const path = 'posts';

export const getPostsFolders = () => getFolders(path);

export const getSortedPosts = () => getSorted(path);

export const getPostsSlugs = () => getSlugs(path);

export const getPostBySlug = async (slug) => await getBySlug(path, slug);
