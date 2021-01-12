import { getFolders, getSorted, getSlugs, getBySlug } from './content';

const path = 'talks';

export const getTalksFolders = () => getFolders(path);

export const getSortedTalks = () => getSorted(path);

export const getTalksSlugs = () => getSlugs(path);

export const getTalkBySlug = async (slug) => await getBySlug(path, slug);
