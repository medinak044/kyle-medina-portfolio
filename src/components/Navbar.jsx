import React from 'react'
import logo from '../logo.svg';


const Navbar = () => {
    const profileImgUrl = 'https://drive.google.com/uc?export=view&id=12n03nsCFmF0Iw38VJwLvN0MLw7w8DwL6'
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Kyle Medina</span>
                    <span className="d-none d-lg-block">
                        <img id='profileImg' className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImgUrl} alt="Profile image"></img>
                    </span></a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger active" href="#experience">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Certifications</a></li>
                    </ul>
                </div>
            </nav> */}

            <div className='container'>
                <img id='profileImg' className="img-fluid img-profile rounded-circle mx-auto mb-5" src={profileImgUrl} alt="Profile image"></img>

                <div id='side-list' className="">
                    <li className="list-group-item mb-4"><a className='side-text' href='#'><b>About</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#'><b>Projects</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#'><b>Skills</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#'><b>Interests</b></a></li>
                </div>
            </div>
            <div id='react-note' className='row'>
                <img src={logo} className="App-logo" alt="logo" />
                {/* <p className='col-9'>(Made with React)</p> */}
            </div>
        </>
    )
}

export default Navbar