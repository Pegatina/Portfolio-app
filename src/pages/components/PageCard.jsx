import { Link } from "react-router-dom";
import { technologies } from "../data/technologies";

export const PageCard = ({
    id,
    name,
    technologies: techNames,
    description
}) => {

    const pageImageUrl = `/pages/${id}.png`;

    return (
        <div className="col animate__animated animate__fadeInLeft">
            <Link to={`/page/${id}`} className="text-decoration-none">
                <div className="card overflow-hidden">
                    <div className="position-relative">
                        <img src={pageImageUrl} className="card-img-top" alt={name} />
                        <div className="overlay d-flex flex-column justify-content-center align-items-center">
                            <h5 className="text-white">{name}</h5>
                            <div className="tech-icons mt-2 d-flex align-items-center">
                                {techNames.map(techName => {
                                    const tech = technologies.find(t => t.name === techName);
                                    return (
                                        tech.icon ? (
                                            <i key={tech.name} className={`${tech.icon} ${tech.className}`} style={{ fontSize: '22px', margin: '0 5px' }}></i>
                                        ) : tech.img ? (
                                            <img
                                                key={tech.name}
                                                src={tech.img}
                                                alt={tech.name}
                                                width={22}
                                                height={22}
                                                className={tech.className}
                                                style={{ margin: '0 5px', alignSelf: 'center' }}
                                            />
                                        ) : null
                                    );
                                })}
                            </div>
                            <p className="text-white mt-2 mx-4">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};
