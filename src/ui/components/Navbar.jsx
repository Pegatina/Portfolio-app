import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-2"
            style={{
                background: 'linear-gradient(to bottom, #2E003E, #1B001E)'
            }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <Link
                    className="navbar-brand text-white mx-auto"
                    to="/"
                    style={{ width: '100px' }}
                >
                    <h1 style={{ margin: 0 }}>{isHomePage ? "Portfolio" : "Volver"}</h1>
                </Link>

                {/* Dropdown solo visible en la página de inicio */}
                {isHomePage && (
                    <div className="dropdown">
                        <button
                            className="btn btn-custom-outline dropdown-toggle text-white"
                            type="button"
                            id="portfolioDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Secciones
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="portfolioDropdown">
                            <li><Link className="dropdown-item" to="/proyects">URL</Link></li>
                            <li><Link className="dropdown-item" to="/contact">Contacto</Link></li>
                            <li><Link className="dropdown-item" to="/about">Acerca de mí</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
