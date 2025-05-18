import { Link } from "react-router-dom";
import { pages } from "../data/pages";

export const ListProyects = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Enlaces externos de los proyectos</h2>
      <div className="row">
        {pages.map(({ id, name, url }) => (
          <div className="col-12 mb-3" key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navbar-purple"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
