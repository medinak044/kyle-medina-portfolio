import React from 'react'

const Carousel1 = (projectLink1) => {
    return (
        <a href={projectLink1} target="_blank" rel="noopener noreferrer">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://drive.google.com/uc?export=view&id=15sWcJZfZdjRs-4LYTsHvJBZjMj2vWwt6" alt="..." className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://drive.google.com/uc?export=view&id=1hNuYquP9mD7XCSpsSIR0YTvGMV_8Uhjj" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://drive.google.com/uc?export=view&id=1iHz2dbMC7406yKP0m7E3LWGcKpYfhY5a" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://drive.google.com/uc?export=view&id=1HIxzPovzOmHcSA-ycfVh43y2UJWanYop" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://drive.google.com/uc?export=view&id=19e7GS7pQ6nSi_38w7BVOM_sbddfFAj64" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className='btn btn-secondary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">{"< Prev"}</button>
                <button className='btn btn-primary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">{"Next >"}</button>
            </div>
        </a>
    )
}

export default Carousel1