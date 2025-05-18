import { pages } from "../data/pages"

export const getPageById = (id) => {
    return pages.find(page => page.id === id);
}
