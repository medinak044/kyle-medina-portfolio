import React from 'react'
import logo from '../logo.svg';
import profilePic from '../assets/Kyle_Medina_Photo_01b2 (256x256).jpg';


const Navbar = () => {
    // const profileImgUrl = 'https://drive.google.com/uc?export=view&id=1TuLfMJGftdcJ3B2fHZpo_DpgqlZXNNi_'
    const profileImgUrl = 'https://drive.google.com/uc?export=view&id=1TuLfMJGftdcJ3B2fHZpo_DpgqlZXNNi_'
    const linkedInLink = "https://www.linkedin.com/in/kyle-medina/"

    return (
        <>
            <div className='containerX text-center'>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                    <img id='profileImg' className="img-fluid img-profile rounded-circle mx-auto mb-5" src={profilePic} alt="Profile image"></img>
                </a>

                <div id='side-list' className="">
                    <li className="list-group-item mb-4"><a className='side-text' href='#about'><b>About</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#projects'><b>Projects</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#skills'><b>Skills</b></a></li>
                    <li className="list-group-item mb-4"><a className='side-text' href='#interests'><b>Interests</b></a></li>
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