
import './App.css';
import banner from './images/bg_body.png';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import trophy from './images/Sports icon-2.png';
import bottle from "./images/Sports icon.png";
import game from './images/Sports icon-1.png';
import path from "./images/Path.png"
import banner_image from './images/nitish86_a_diorama_of_the_Qatar_football_stadium__cinematic_pro_2987a2a2-4b88-49bc-bef0-e268c5983e0f 1.png'
import search from './images/Group.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import allgame from "./images/allgame.png";
import baseball from './images/baseball.png';
import basketball from "./images/basketball.png";
import chess from "./images/chess.png";
import golf from "./images/golf.png";
import pingpong from "./images/ping pong.png";
import rugby from "./images/rugby.png";
import soccer from "./images/soccer.png";
import swimming from "./images/Swimming.png";
import tennis from "./images/tennis.png";
import next from "./images/next.png";
import firstgame from "./images/firstgame.png";
import second from "./images/second.png";
import third from "./images/third.png";
import fourth from './images/fourth.png';
import fifth from "./images/fifth.png";
import sixth from "./images/sixth.png";
import seventh from "./images/eight.png";
import eight from "./images/Rectangle 25-6.png";
import facebook from "./images/facebook.png";
import linkedin from './images/linkedin.png';
import instagram from "./images/insta.png";
import tiktok from "./images/tiktok.png";
import checkmark from "./images/checkmark-sqaure.png"

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
        <div className='top_box'>
        <div className="banner">
          <div className='banner-body'>
            <div>Game on:</div>
            <h1>Book Your Next Sports Adventure Today!</h1>
            <p>Find new training partners and opponents for your favorite sports</p>
            <button className='button'>Find Venue</button>
          </div>
        </div>

        <section>
          <div className='chooseplan_text'>
            <div className='choose-plan'>Choose a Plan That Fits Your Needs</div>
            <div className='choose-plan-desc'>
              Find the perfect plan for your sports team or organization, whether you're<br /> just starting out or looking to take your game to the next level.
            </div>
          </div>
        </section>
        <div className='top_gradient'></div>
        <div className='top_blueGradient'></div>
        <div className='top_right_blueGradient'></div>
        </div>
        <div className='card-container'>
          <div className='card_1'>
            <div className="top-conatiner">
              <img src={bottle} className='img-container' alt="failed to load" />
              <div className='text-container'>
                <h1>Premium</h1>
                <p>Basic</p>
              </div>
            </div>
            <div className='firstline'></div>
            <div className='second_box'>
              <div className='price_list'>
                    <h1>Free</h1>
                    <p></p>
                  </div>
                <button className='btn-current'>Current</button>
              </div>
            <div className='firstline'></div>
            <div className='list-container'>
              <ul className='ul_list'>
                <li>
                  <img src={checkmark}/>
                  Free to use
                </li>
                <li>
                  <img src={checkmark}/>
                  Access to all platform features
                </li>
                <li>
                  <img src={checkmark}/>
                  Pay-as-you-go venue reservations
                </li>
                <li>
                  <img src={checkmark}/>
                  Limited customer support
                </li>
                <li>
                  <img src={checkmark}/>
                  No discounts or exclusive access
                </li>
              </ul>
              <div className='card_gradient'></div>
            </div>
            
          </div>
          <div className='card_2'>
            <div className="top-conatiner">
                <img src={game} className='img-container' alt="failed to load" />
                <div className='text-container'>
                  <h1>Amateur</h1>
                  <p>Basic</p>
                </div>
              </div>
              <div className='firstline'></div>
              <div className='second_box'>
                <div className='price_list'>
                  <h1>45 USDT</h1>
                  <p>/per month</p>
                </div>
                <button className='btn-upgrade'>Upgrade</button>
              </div>
              <div className='firstline'></div>
              <div className='list-container'>
                <ul className='ul_list'>
                  <li>
                    <img src={checkmark}/>
                    45 USDT per month
                  </li>
                  <li>
                    <img src={checkmark}/>
                    Access to all platform features
                  </li>
                  <li>
                    <img src={checkmark}/>
                    10% discount on venue reservations
                  </li>
                  <li>
                    <img src={checkmark}/>
                    Access to exclusive competitions
                  </li>
                  <li>
                    <img src={checkmark}/>
                    Priority customer support
                  </li>
                </ul>
              </div>
              <div className='card_gradient'></div>
          </div>
          <div className='card_3'>
            <div className="top-conatiner">
                  <img src={trophy} className='img-container' alt="failed to load" />
                  <div className='text-container'>
                    <h1>Professional</h1>
                    <p>Basic</p>
                  </div>
                </div>
                <div className='firstline'></div>
                <div className='second_box'>
                <div className='price_list'>
                  <h1>90 USDT</h1>
                  <p>/per month</p>
                </div>
                  <button className='btn-upgrade'>Upgrade</button>
                </div>
                <div className='firstline'></div>
                <div className='list-container'>
                  <ul className='ul_list'>
                    <li>
                      <img src={checkmark}/>
                      Custom branding
                    </li>
                    <li>
                      <img src={checkmark}/>
                      Advanced analytics and reporting
                    </li>
                    <li>
                      <img src={checkmark}/>
                      Dedicated account management
                    </li>
                    <li>
                      <img src={checkmark}/>
                      Bulk reservations and payments
                    </li>
                    <li>
                      <img src={checkmark}/>
                      On-site support and training
                    </li>
                  </ul>
            </div>
            <div className='card_gradient'></div>
          </div>

        </div>
        <div className='search_game'>
            <div className='filter_venue'>
              <h1>Book Your Dream Venue Today: Find, Reserve, and Play with Ease!</h1>
              <div className='filter_tab'>
              <div className='search_venue'>
                <img src={search} alt="no image" className='serach_icon'/>
                <input type='search' placeholder='Venue Type'></input>
              </div>
              <div className='Date'>
                <p>Date</p>
                <img src={path} alt="no image"></img>
              </div>
              <div className='Location'>
                <p>Location</p>
                <img src={path} alt="no image"></img>
              </div>
                <button className='search_filter_tab'>Search</button>
              </div>
            </div>
            <div className='eclispe_right'></div>
            <div className='eclispe_left'></div>
        </div>
        <div className='filter_game'>
          <div className='allgames'>
            <ul className='ul_allgames'>
              <li>
                <img src={allgame} alt="#"/>
                <p style={{color: "white"}} >All</p>
              </li>
              <li>
                <img src={basketball} alt="#"/>
                <p>BasketBall</p>
              </li>
              <li>
                <img src={tennis} alt="#"/>
                <p>Tennis</p>
              </li>
              <li>
                <img src={pingpong} alt="#"/>
                <p>Ping Pong</p>
              </li>
              <li>
                <img src={soccer} alt="#"/>
                <p>Soccer</p>
              </li>
              <li>
                <img src={rugby} alt="#"/>
                <p>Rugby</p>
              </li>
              <li>
                <img src={golf} alt="#"/>
                <p>Golf</p>
              </li>
              <li>
                <img src={swimming} alt="#"/>
                <p>Swimming</p>
              </li>
              <li>
                <img src={baseball} alt="#"/>
                <p>Baseball</p>
              </li>
              <li>
                <img src={chess} alt="#"/>
                <p>Chess</p>
              </li>
              <li className='next_btn'>
                <img src={next} alt="#"/>
              </li>
              <li>
                <button className='filter_button'>filter</button>
              </li>
            </ul>
            <div className='tabpane'>
              <div className='active_tab'></div>
            </div>
          </div>
          <div className='game_grid'>
            <div className='game_card'>
              <img className='game_image' src={firstgame} alt="#"></img>
              <div className='childrens'>
                <h1>Victory Park Sports Complex</h1>
                <p>Golf</p>
                <p>DownTown</p>
                <h2 className='price'>$45 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={second} alt="#"></img>
              <div className='childrens'>
                <h1>Spin City Tennis Club</h1>
                <p>Tennis</p>
                <p>Eastside</p>
                <h2 className='price'>$20 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={third} alt="#"></img>
              <div className='childrens'>
                <h1>NetBusters Basketball Arena</h1>
                <p>Basketball / Rubgy</p>
                <p>West End</p>
                <h2 className='price'>$25 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={fourth} alt="#"></img>
              <div className='childrens'>
                <h1>Field of Dreams Soccer Fields</h1>
                <p>Soccer / Basketball</p>
                <p>North Shore</p>
                <h2 className='price'>$45 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={fifth} alt="#"></img>
              <div className='childrens'>
                <h1>Hoops Central Basketball Courts</h1>
                <p>Tennis / Basketball / Rugby / Soccer</p>
                <p>DownTown</p>
                <h2 className='price'>$15 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={sixth} alt="#"></img>
              <div className='childrens'>
                <h1>Handball Heaven</h1>
                <p>Pools / Table Tennis / Basketball</p>
                <p>DownTown</p>
                <h2 className='price'>$15 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={seventh} alt="#"></img>
              <div className='childrens'>
                <h1>Ace Ping Pong Palace</h1>
                <p>Tennis</p>
                <p>uptoen</p>
                <h2 className='price'>$19 hour</h2>
              </div>
            </div>

            <div className='game_card'>
              <img className='game_image' src={eight} alt="#"></img>
              <div className='childrens'>
                <h1>The Cage Indoor Football Center</h1>
                <p>Golf</p>
                <p>uptown</p>
                <h2 className='price'>$80 hour</h2>
              </div>
            </div>
          </div>
          <div className='divider'></div>

          <div className='bottom_box'>
            <div className='contact_us'>
              <div className='about_us'>
                <img src={logo} alt="Your Logo" />
                <p>Book, Play, Connect - Elevate Your Game!</p>
                <div className='social_icons'>
                  <img src={linkedin} alt="#" className='icon'/>
                  <img src={facebook} alt="#" className='icon'/>
                  <img src={tiktok} alt="#" className='icon'/>
                  <img src={instagram} alt="#" className='icon'/>
                </div>
              </div>
              <div className='links'>
                <ul>
                  <li><a href='#' style={{ textDecoration: 'none' , color:"white"}}>Home Page</a></li>
                  <li><a href='#' style={{ textDecoration: 'none' , color:"white"}}>All venue</a></li>
                  <li><a href='#' style={{ textDecoration: 'none' , color:"white"}}>Our mission</a></li>
                  <li><a href='/contact_us' style={{ textDecoration: 'none' , color:"white"}}>Contact Us</a></li>
                </ul>
              </div>
              <div className='email_alert'>
                <p>We’ll send you a nice letter once per week. No spam, we promise.</p>
                <div className='email_form'>
                  <input type='text' placeholder='Enter you email'></input>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          <div className='divider'></div>
          <footer>Copyright © 2023 SportVen LLC. All rights Reserved.</footer>
          <span className='bottom_eclpise'></span>
          <span className='eclispe_bottom'></span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
