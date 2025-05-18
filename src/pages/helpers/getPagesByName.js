import { pages } from "../data/pages";

export const getPagesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim(); //toLocale convierte en el idioma local
    if (name.length === 0) return [];
    return pages.filter(
        page => page.name.toLocaleLowerCase().includes(name) //!TODO
    );
}
