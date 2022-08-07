import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const githubLinkMain = "https://github.com/medinak044"

  const projectLink1 = "https://eventusappclient.azurewebsites.net"
  const githubLink1 = "https://github.com/medinak044/EventUs"

  return (
    <div className="App">
      <div className='row'>
        <div id='page-side' className='col-2'>
          <Navbar />

        </div>
        <div id='page-main' className='col-10'>
          <section className='resume-section'>
            <h1>Kyle Medina</h1>
            <a href={githubLinkMain}><i className='fa fa-github icon-color'></i></a>

          </section>
        </div>
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
