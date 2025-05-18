import { useMemo, useState } from "react";
import { getPagesByTechnologies } from "../helpers";
import { PageCard } from ".";
import { technologies } from "../data/technologies";

export const PageList = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const handleFilterChange = (tech) => {
        if (selectedTechnologies.includes(tech)) {            
            setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
        } else {           
            setSelectedTechnologies([...selectedTechnologies, tech]);
        }
    };

    const filteredPages = useMemo(() => {
        return getPagesByTechnologies(selectedTechnologies);
    }, [selectedTechnologies]);

    return (
        <div>
            <div className="mb-3">
                <div className="d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Tecnologías">
                        {technologies.map(({ name, icon, img, className }) => (
                            <button
                                key={name}
                                type="button"
                                className={`btn btn-custom-outline btn-lg d-flex align-items-center ${selectedTechnologies.includes(name) ? 'selected' : ''}`}
                                onClick={() => handleFilterChange(name)}
                                title={name}
                            >
                                {icon ? (
                                    <i className={`${icon} ${className}`} style={{ fontSize: '22px' }}></i>
                                ) : img ? (
                                    <img
                                        src={img}
                                        alt={name}
                                        width={20}
                                        height={20}
                                        className={className}                                        
                                    />
                                ) : null}
                            </button>
                        ))}
                    </div>
                </div>
                <br />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1">
                    {filteredPages.map(page => (
                        <PageCard key={page.id} {...page} />
                    ))}
                </div>
            </div>
        </div>
    );
};
