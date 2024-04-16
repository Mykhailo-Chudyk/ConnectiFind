import { useEffect} from "react";
import firstExample from "../assets/example1.png";
import secondExample from "../assets/example2.png";
import thirdExample from "../assets/example3.png";
import Map from '../components/Map.js';
import "./styles/HomePage.css";

export default function HomePage() {


  useEffect(() => {
    document.title = "ConnectiFind | Home";
  }, []);

  return (
    <div className="home-page">
      <div className="hp-line"></div>
      <div className="hp-row">
          <div className="hp-description-container hp-text-center">
            <h2 className="hp-description" id="title">Building a bridge between organizers and attendees</h2>
          </div>
        </div>

      <div className="hp-row">
        <div className="hp-events-buttons" id="events">
            <button className="hp-event-button">Create Events</button>  
            <button className="hp-event-button">Join a Private Even</button>  
            <button className="hp-event-button">Join Events</button>  
        </div>
      </div>

      <div className="hp-row">

        <input className="hp-event-button" id = "code" placeholder="Enter the code..."></input>  
        </div>
      <div className="hp-row" id="hp-map">
          <Map />
      </div>
      <div className="hp-row">
        <div className="hp-text-center">
          <h2 className="hp-featured-title">READ MORE AND JOIN THE EVENTS</h2>
        </div>
      </div>
      <div className="hp-row">
        <div className="hp-filters">
            <button className="hp-featured-filter">All</button>  
            <button className="hp-featured-filter">Professional</button>  
            <button className="hp-featured-filter">Hobbies</button>  
            <button className="hp-featured-filter">Mass Events</button>  
            <button className="hp-featured-filter">Art</button>  
        </div>
      </div>
      <div className="hp-row">


        <div className="story-block"> 
          <img src={firstExample} alt="Story" className="story-image" />
          <div className="story-details">
            <div className="story-title-date">
              <h2 className="story-title">Bachata workshop</h2>
              <p className="story-date">05/02/2024 | 12pm - 2pm</p>
              <p className="story-date-distance">1.2 km </p>
            </div>
            </div>
            <h3 className="hp-featured-button-time-left">now</h3>
            <button className="hp-featured-button">Read</button>
          </div>

        <div className="story-block"> 
          <img src={secondExample} alt="Story" className="story-image" />
          <div className="story-details">
            <div className="story-title-date">
              <h2 className="story-title">Networking for software engineers</h2>
              <p className="story-date">05/02/2024 | 4pm - 5pm</p>
              <p className="story-date-distance">0.4 km </p>
            </div>
            </div>
            <h3 className="hp-featured-button-time-left">in 3 hours</h3>
            <button className="hp-featured-button">Read</button>
          </div>


        <div className="story-block"> 
          <img src={thirdExample} alt="Story" className="story-image" />
          <div className="story-details">
            <div className="story-title-date">
              <h2 className="story-title">Ukrainian protest against russian aggression</h2>
              <p className="story-date">06/02/2024 | 9am - 12pm</p>
              <p className="story-date-distance">1.8 km </p>
            </div>
            </div>
            <h3 className="hp-featured-button-time-left">in 15 hours</h3>
            <button className="hp-featured-button">Read</button>
          </div>


      </div>
      <div className="hp-homepage-container" id="fivestars">
      <div className="hp-line"></div>
        <div className="hp-row">
          <div className="hp-description-container hp-text-center">
            <h2 className="hp-description">
            ConnectiFind is a web application that bridges the gap between organizers and attendees of events. It’s not merely a tool to publicize events but also facilitates communication before, during, and after them. It allows attendees to view each other's profiles beforehand and communicate directly. Additionally, it enables the creation of group chats and the random division of participants into groups. Simplify the process of tracking the attendies, communicate with them directly and spend your time move effectively.
            </h2>
          </div>
        </div>
        <div className="hp-line"></div>
      </div>
    </div>
  );
}
