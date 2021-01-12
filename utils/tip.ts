import { getFolders, getSorted, getSlugs, getBySlug } from './content';

const path = 'tip';

export const getTipsFolders = () => getFolders(path);

export const getSortedTips = () => getSorted(path);

export const getTipsSlugs = () => getSlugs(path);

export const getTipBySlug = async (slug) => await getBySlug(path, slug);
