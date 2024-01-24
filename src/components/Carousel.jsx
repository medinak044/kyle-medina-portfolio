import React from 'react'

const Carousel = ({projectLink, screenshotList, activeScreenshot}) => {
    return (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={activeScreenshot} alt={`${Object.keys({activeScreenshot})[0]} screenshot`} className="d-block w-100" />
                    </div>
                    {screenshotList.slice(1).map((screenshot, i)=> {
                        return(
                        <div className="carousel-item">
                            <img src={screenshot} alt={`${Object.keys({screenshot})[0]} screenshot`} className="d-block w-100"/>
                        </div>)
                    })}
                </div>
                {/*<button className='btn btn-secondary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">{"< Prev"}</button>*/}
                {/*<button className='btn btn-primary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">{"Next >"}</button>*/}
            </div>
        </a>
    )
}

// const Carousel = ({ link: { projectLink1 } }) => {
//     return (
//         <a href={projectLink1} target="_blank" rel="noopener noreferrer">
//             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={home} alt="home image" className="d-block w-100" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={login} className="d-block w-100" alt="login image" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={register} className="d-block w-100" alt="register image" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={profile} className="d-block w-100" alt="profile image" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={admin} className="d-block w-100" alt="admin image" />
//                     </div>
//                 </div>
//                 <button className='btn btn-secondary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">{"< Prev"}</button>
//                 <button className='btn btn-primary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">{"Next >"}</button>
//             </div>
//         </a>
//     )
// }

export default Carousel