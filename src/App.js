import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const githubLinkMain = "https://github.com/medinak044"
  const linkedInLink = "https://www.linkedin.com/in/kyle-medina/"

  const projectLink1 = "https://eventusappclient.azurewebsites.net"
  const githubLink1 = "https://github.com/medinak044/EventUs"

  return (
    <>
      <div className="AppX containerX">
        <div className='rowX'>
          <div id='page-side' className='col-2x bg-warningX'>
            <Navbar />
          </div>

          <div id='page-main' className='col-12x bg-primaryX'>
            <section className='column resume-section p-3 p-lg-5 align-items-center' style={{ position: 'relative' }}>
              <h1 id='name-main'>Kyle Medina</h1>
              <h3>Austin, TX | (737) 781-5242 | medinak044@gmail.com</h3>
              <div className='social-icons'>
                <a href={githubLinkMain} target="_blank" rel="noopener noreferrer"><i className='fa fa-github icon-color me-2'></i></a>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer"><i className='fa fa-brands fa-linkedin icon-color me-2'></i></a>
              </div>
              <p className='p-larger'>Multitalented C# software developer with a mission to keep on learning.</p>
            </section>

            <hr />

            <section className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Projects</h1>
              <h2 className='mt-5'><i className='fa fa-regular fa-calendar me-1'></i>EventUSApp</h2>
              <h3>Online Event Planning Platform</h3>
              <div className='social-icons'>
                <a href={projectLink1} target="_blank" rel="noopener noreferrer"><i className='fa fa-link icon-color me-2'></i></a>
                <a href={githubLink1} target="_blank" rel="noopener noreferrer"><i className='fa fa-github icon-color me-2'></i></a>
              </div>
              <p>Online app that allows users to organize and plan their events. Users can view all events relavent to them through a dashboard, and can create todo lists for attendees.</p>

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
              <br />
              <h4>Using:</h4>
              <ul className='ul-none'>
                <li><i className='fa fa-solid fa-check'></i> Angular</li>
                <li><i className='fa fa-solid fa-check'></i> ASP.NET Web API</li>
                <li><i className='fa fa-solid fa-check'></i> SQL Server</li>
                <li><i className='fa fa-solid fa-check'></i> Microsoft Azure</li>
              </ul>
            </section>

            <hr />

            <section className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Skills</h1>
              <h2 className='mt-5'><i className='fa fa-regular fa-calendar me-1'></i>EventUSApp</h2>
              <h3>Online Event Planning Platform</h3>
              <div className='social-icons'>
                <a href={projectLink1} target="_blank" rel="noopener noreferrer"><i className='fa fa-link icon-color me-2'></i></a>
                <a href={githubLink1} target="_blank" rel="noopener noreferrer"><i className='fa fa-github icon-color me-2'></i></a>
              </div>
              <p>Online app that allows users to organize and plan their events. Users can view all events relavent to them through a dashboard, and can create todo lists for attendees.</p>

            </section>

            <hr />

            <section className='resume-section p-3 p-lg-5 align-items-center'>
              <h1 className='h1-subject'>Interests</h1>
              <h2 className='mt-5'>Game Development<i className='fa fa-solid fa-gamepad icon-color ms-2'></i><img className='ms-2' style={{ "max-width": "2.5rem" }} src="https://imgs.search.brave.com/V8fy9Y1K8jR5xuO_gWKFTXdUsHNfZ1tgEMXM8XiuOqU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9j/LnBuZw" alt="C#" /></h2>

              <p>As a hobby, I love using the Unity game engine (using C#) to be able to create interactive experiences for my audience.</p>

              <h2 className='mt-5'>Music Production<i className='fa fa-solid fa-music icon-color ms-2'></i></h2>
              <p>In my spare time, I recreate older game soundtracks into orchestral versions of them to listen to. Creating hundreds of tracks really helped improve my music-making skills, and the embedded track below is an example of one of my own original works.</p>

              <audio controls="controls">
                <source src="https://docs.google.com/uc?export=download&id=1zDybbtelGQ5jDLRyBMA3fnPdi1C6QAnZ" />
              </audio>

              <h2 className='mt-5'>Philosophy
                {/* <i className='fa fa-solid fa-sun icon-color ms-2'></i> */}
                <i className='fa fa-solid fa-moon icon-color ms-2'></i>
              </h2>
              <p>Studying philosophy and applying these learned concepts has drastically improved the quality of my life. By indulging in self-improvement and a commitment to life-long learning, I've noticed I leave a much more positive impact on others. Every team I've led/worked with seemed to really appreciate my efforts.</p>


              <h2 className='mt-5'>Etc</h2>
              <p>Creating 3D animated films for fun, 2D art, 3D modeling, content creation, learning new skills.</p>

            </section>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
