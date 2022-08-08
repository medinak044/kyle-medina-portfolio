import React from 'react'
import logo from '../logo.svg';


const Navbar = () => {
    const profileImgUrl = 'https://drive.google.com/uc?export=view&id=1TuLfMJGftdcJ3B2fHZpo_DpgqlZXNNi_'

    return (
        <>
            <div className='containerXXX text-center'>
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