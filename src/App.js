import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import audio1 from "./assets/TUS_060_1b2X.wav"
import { ttsprepAssets } from "./assets/ttsprep/ttsprep-asset-export"
import { eventusappAssets } from "./assets/eventUSApp/eventusapp-asset-export";
import React from "react";


function App() {
  const linkGithubMain = "https://github.com/medinak044"
  const linkLinkedIn = "https://www.linkedin.com/in/kyle-medina/"

  return (
    <>
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
        class="scrollspy-example" tabindex="0">
        <div className='rowX'>
          <div id='page-side' className='col-2x bg-warningX'>
            <Navbar />
          </div>

          <div id='page-main' className='col-12x bg-primaryX' da>
            <section id='about' className='column resume-section p-3 p-lg-5 align-items-center'
                     style={{position: 'relative'}}>
              <h1 id='name-main'>Kyle Medina</h1>
              <h3>Austin, TX | (737) 781-5242 | medinak044@gmail.com</h3>
              <div className='social-icons'>
                <a href={linkGithubMain} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-github icon-color me-2'></i></a>
                <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-brands fa-linkedin icon-color me-2'></i></a>
              </div>
              <p className='p-larger'>Multi-talented C# software developer with a mission to keep on learning.</p>
            </section>

            <hr/>

            {/*TTSPrep*/}
            <section id='projects' className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Projects</h1>
              <h2 className='mt-5'><i></i>TTSPrep</h2>
              <h3>TTS Text preparation tool</h3>
              <div className='social-icons'>
                <a href={ttsprepAssets.deployedLink} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-link icon-color me-2'></i></a>
                <a href={ttsprepAssets.repoLink} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-github icon-color me-2'></i></a>
              </div>
              <p>TTSPrep is an online text preparation tool to aid text-to-speech (TTS) AI voice generation.</p>
              <br/>
              <Carousel projectLink={ttsprepAssets.deployedLink} screenshotList={ttsprepAssets.imageList}
                        activeScreenshot={ttsprepAssets.imageList[0]}/>
              <button className='btn btn-secondary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev">{"< Prev"}</button>
              <button className='btn btn-primary me-2 mt-2' type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next">{"Next >"}</button>

              <h4>Using:</h4>
              <ul className='ul-none'>
                <li><i className='fa fa-solid fa-check'></i> Angular</li>
                <li><i className='fa fa-solid fa-check'></i> ASP.NET Web API</li>
                <li><i className='fa fa-solid fa-check'></i> ASP.NET MVC (Prototype)<a
                    href={ttsprepAssets.repoLinkMVC} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-github icon-color ms-1'></i></a></li>
                <li><i className='fa fa-solid fa-check'></i> SQL Server</li>
                <li><i className='fa fa-solid fa-check'></i> Microsoft Azure</li>
              </ul>

              {/*EventUSApp*/}
              <h2 className='mt-5'><i className='fa fa-regular fa-calendar me-1'></i>EventUSApp</h2>
              <h3>Online Event Planning Platform</h3>
              <div className='social-icons'>
                <a href={eventusappAssets.deployedLink} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-link icon-color me-2'></i></a>
                <a href={eventusappAssets.repoLink} target="_blank" rel="noopener noreferrer"><i
                    className='fa fa-github icon-color me-2'></i></a>
              </div>
              <p>Online app that allows users to organize and plan their events. Users can view all events relevant to
                them through a dashboard, and can create todo lists for attendees.</p>
              <br/>
              <Carousel projectLink={eventusappAssets.repoLink} screenshotList={eventusappAssets.imageList}
                        activeScreenshot={eventusappAssets.imageList[0]}/>
              <h4>Using:</h4>
              <ul className='ul-none'>
                <li><i className='fa fa-solid fa-check'></i> Angular</li>
                <li><i className='fa fa-solid fa-check'></i> ASP.NET Web API</li>
                <li><i className='fa fa-solid fa-check'></i> SQL Server</li>
                <li><i className='fa fa-solid fa-check'></i> Microsoft Azure</li>
              </ul>
            </section>

            <hr/>

            <section id='skills' className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Skills</h1>
              <ul className='ul-none' style={{"margin-top": "2%"}}>
                <li><i className='fa fa-brands fa-check'></i> Angular, React
                  <ul className='ul-none'>
                    <li>- HTML, CSS, JavaScript, TypeScript</li>
                    <li>- NodeJS</li>
                    <li>- NPM</li>
                  </ul>
                </li>
                <li><b>C#</b> .NET
                  <ul className='ul-none'>
                    <li>- ASP.NET Web API</li>
                    <li>- MVC</li>
                    <li>- Entity Framework Core</li>
                    <li>- Identity framework</li>
                    <li>- JWT Authentication</li>
                    <li>- Unit Testing</li>
                  </ul>
                </li>
                <li><i className="fa fa-brands fa-check"></i> Java Spring Boot
                  <ul className='ul-none'>
                    <li>- API</li>
                    <li>- MVC</li>
                  </ul>
                </li>
                <li><i className='fa fa-solid fa-database'></i> SQL Server, MongoDB</li>
                <li><i className='fa fa-solid fa-cloud'></i> Microsoft Azure, AWS</li>
                <li><i className='fa fa-github '></i> Github, Git</li>

              </ul>

            </section>

            <hr/>

            <section id='interests' className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Interests</h1>
              <h2 className='mt-5'>Game Development<i className='fa fa-solid fa-gamepad icon-color ms-2'></i><img
                  className='ms-2' style={{"maxWidth": "2.5rem"}}
                  src="https://imgs.search.brave.com/V8fy9Y1K8jR5xuO_gWKFTXdUsHNfZ1tgEMXM8XiuOqU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LnBuZw"
                  alt="C#"/></h2>

              <p>As a hobby, I love using the Unity game engine (using C#) to be able to create interactive experiences
                for my audience.</p>

              <h2 className='mt-5'>Music Production<i className='fa fa-solid fa-music icon-color ms-2'></i></h2>
              <p>In my spare time, I recreate older game soundtracks into orchestral versions of them to listen to.
                Creating hundreds of tracks really helped improve my music-making skills. The embedded track below is an
                example of one of my own original works.</p>

              <audio controls="controls">
                <source src={audio1}/>
              </audio>

              <h2 className='mt-5'>Philosophy
                {/* <i className='fa fa-solid fa-sun icon-color ms-2'></i> */}
                <i className='fa fa-solid fa-moon icon-color ms-2'></i>
              </h2>
              <p>Studying philosophy and applying these learned concepts has drastically improved the quality of my
                life. By indulging in self-improvement and a commitment to life-long learning, I've noticed I leave a
                much more positive impact on others. Every team I've led/worked with seemed to really appreciate my
                efforts.</p>


              <h2 className='mt-5'>Etc</h2>
              <p>Creating 3D animated films for fun, 2D art, 3D modeling, content creation, learning new skills.</p>

            </section>

            <hr/>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
