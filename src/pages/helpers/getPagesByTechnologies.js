import { pages } from "../data/pages"

export const getPagesByTechnologies = (technologies = []) => {
    // Si no hay tecnologías seleccionadas, devolvemos todas las páginas
    if (technologies.length === 0) {
        return pages;
    }

    return pages.filter(page =>
        technologies.every(tech => page.technologies.includes(tech))
    );
}
