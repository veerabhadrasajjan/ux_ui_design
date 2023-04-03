
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import Select from "react-select";
import DatePicker from "react-datepicker";
import PlanCard from "./PlanCard"
import GameCard from './GameCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import logo from './images/logo.png';
import trophy from './images/Sports icon-2.png';
import bottle from "./images/Sports icon.png";
import game from './images/Sports icon-1.png';
import search from './images/Group.png'
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



function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const options = [
    { value: "Bangalore", label: "Bangalore" },
    { value: "Hubli", label: "Hubli" },
    { value: "Delhi", label: "Delhi" }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const gameList = [{
    gameImage: firstgame,
    name: "Victory Park Sports Complex",
    type: "Golf",
    place: "DownTown",
    price: "$45 hour"
  },
  {
    gameImage: second,
    name: "Spin City Tennis Club",
    type: "GolTennisf",
    place: "Eastside",
    price: "$20 hour"
  },
  {
    gameImage: third,
    name: "NetBusters Basketball Arena",
    type: "Basketball / Rubgy",
    place: "West End",
    price: "$25 hour"
  },
  {
    gameImage: fourth,
    name: "Field of Dreams Soccer Fields",
    type: "Soccer / Basketball",
    place: "North Shore",
    price: "$45 hour"
  },
  {
    gameImage: fifth,
    name: "Hoops Central Basketball Courts",
    type: "Tennis / Basketball / Rugby / Soccer",
    place: "DownTown",
    price: "$15 hour"
  },
  {
    gameImage: sixth,
    name: "Handball Heaven",
    type: "Pools / Table Tennis / Basketball",
    place: "DownTown",
    price: "$15 hour"
  },
  {
    gameImage: seventh,
    name: "Ace Ping Pong Palace",
    type: "Tennis",
    place: "uptoen",
    price: "$19 hour"
  },
  {
    gameImage: eight,
    name: "The Cage Indoor Football Center",
    type: "Golf",
    place: "uptown",
    price: "$80 hour"
  }]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      color: "#FFF",
      backgroundColor: "#434449",
      border: "none",
      minHeight: "50px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      svg: {
        fill: '#d0fd3e', // Change the fill color of the indicator container
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#434449" : "#434449",
      color: "#FFF",
      cursor: "pointer"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FFF",
    })
  };

  return (
    <div className="App">
      <header className="App-header">
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
        <div className='top_circle'></div>
        <div className='top_right_circle'></div>
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

          <PlanCard
            planName="Premium"
            planImage={bottle}
            planDesc="Basic"
            planPrice="Free"
            isCrrentPrice={true}
            planBenefits={[
              "Free to use",
              "Access to all platform features",
              "Pay-as-you-go venue reservations",
              "Limited customer support",
              "No discounts or exclusive access"
            ]}
          />

          <PlanCard
            planName="Amateur"
            planImage={game}
            planDesc="Basic"
            planPrice="45 USDT"
            planDuration='/per month'
            isCrrentPrice={false}
            planBenefits={[
              "45 USDT per month",
              "Access to all platform features",
              "10% discount on venue reservations",
              "Access to exclusive competitions",
              "Priority customer support"
            ]}
          />

          <PlanCard
            planName="Professional"
            planImage={trophy}
            planDesc="Basic"
            planPrice="90 USDT"
            planDuration='/per month'
            isCrrentPrice={false}
            planBenefits={[
              "Custom branding",
              "Advanced analytics and reporting",
              "Dedicated account management",
              "Bulk reservations and payments",
              "On-site support and training"
            ]}
          />

        </div>
        <div className='search_game'>
          <div className='filter_venue'>
            <h1>Book Your Dream Venue Today: Find, Reserve, and Play with Ease!</h1>
            <div className='filter_tab'>
              <div className='search_venue'>
                <img src={search} alt="search" className='serach_icon' />
                <input type='search' placeholder='Venue Type'></input>
              </div>
              <div>
                <DatePicker
                  placeholderText="Date"
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className='Date'
                />
              </div>
              <div>
                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  placeholder="Location"
                  className='Location'
                  styles={customStyles}
                />
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
                <img src={allgame} alt="#" />
                <p style={{ color: "white" }} >All</p>
              </li>
              <li>
                <img src={basketball} alt="#" />
                <p>BasketBall</p>
              </li>
              <li>
                <img src={tennis} alt="#" />
                <p>Tennis</p>
              </li>
              <li>
                <img src={pingpong} alt="#" />
                <p>Ping Pong</p>
              </li>
              <li>
                <img src={soccer} alt="#" />
                <p>Soccer</p>
              </li>
              <li>
                <img src={rugby} alt="#" />
                <p>Rugby</p>
              </li>
              <li>
                <img src={golf} alt="#" />
                <p>Golf</p>
              </li>
              <li>
                <img src={swimming} alt="#" />
                <p>Swimming</p>
              </li>
              <li>
                <img src={baseball} alt="#" />
                <p>Baseball</p>
              </li>
              <li>
                <img src={chess} alt="#" />
                <p>Chess</p>
              </li>
              <li className='next_btn'>
                <img src={next} alt="#" />
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

            {
              gameList.map((game, index) => {
                return <GameCard
                  gameImage={game.gameImage}
                  name={game.name}
                  type={game.type}
                  place={game.place}
                  price={game.price}
                />
              })
            }
          </div>
          <div className='divider'></div>

          <div className='bottom_box'>
            <div className='contact_us'>
              <div className='about_us'>
                <img src={logo} alt="Your Logo" />
                <p>Book, Play, Connect - Elevate Your Game!</p>
                <div className='social_icons'>
                  <img src={linkedin} alt="#" className='icon' />
                  <img src={facebook} alt="#" className='icon' />
                  <img src={tiktok} alt="#" className='icon' />
                  <img src={instagram} alt="#" className='icon' />
                </div>
              </div>
              <div className='links'>
                <ul>
                  <li><a href='#' style={{ textDecoration: 'none', color: "white" }}>Home Page</a></li>
                  <li><a href='#' style={{ textDecoration: 'none', color: "white" }}>All venue</a></li>
                  <li><a href='#' style={{ textDecoration: 'none', color: "white" }}>Our mission</a></li>
                  <li><a href='/contact_us' style={{ textDecoration: 'none', color: "white" }}>Contact Us</a></li>
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
