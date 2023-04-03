
import './App.css';
import banner from './images/bg_body.png';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={banner} className="app-banner" alt="logo" /> */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} alt="Your Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">All Venues</Nav.Link>
                <Nav.Link href="#">Our Mission</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className='d-flex nav-right'>
              <Nav.Link href="#">Login</Nav.Link>
              <button className='ml-md-4 button outline'>Sign Up</button>
            </div>
          </Container>
        </Navbar>
      </header>
      <div className='app-body'>

        <div className="banner">
          <div className='banner-body'>
            <div>Game on:</div>
            <h1>Book Your Next Sports Adventure Today!</h1>
            <p>Find new training partners and opponents for your favorite sports</p>
            <button className='button'>Find Venue</button>
          </div>
        </div>

        <section>
          <div>
            <div className='choose-plan'>Choose a Plan That Fits Your Needs</div>
            <div className='choose-plan-desc'>
              Find the perfect plan for your sports team or organization, whether you're just starting out or looking to take your game to the next level.
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;
