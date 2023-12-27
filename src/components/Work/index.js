import { FunctionComponent } from "react";
import Header from "../Header"
import "./index.css";

const Work = () => { 
  return (
    <div className="workpage">
      <Header/>
      <div className="mockup-1-wrapper">
        <img className="mockup-1-icon" alt="" src="/mockup-1@2x.png" />
      </div>
      <div className="shots-so-1-wrapper">
        <img className="shots-so-1-icon" alt="" src="/458shots-so-1@2x.png" />
      </div>
      <div className="shots-so-1-container">
        <img className="shots-so-1-icon1" alt="" src="/192shots-so-1@2x.png" />
      </div>
      <div className="shots-so-1-parent">
        <div className="shots-so-1" />
        <img className="shots-so-1-icon2" alt="" src="/548shots-so-1@2x.png" />
      </div>
      <div className="shaping-the-future-container">
        <p className="shaping-the-future-of">
          <span className="shaping-the">{`Shaping the `}</span>
          <span className="future">Future</span>
          <span>{` of `}</span>
        </p>
        <p className="shaping-the-future-of">Digital Experiences</p>
      </div>
      <div className="grocery-app">Grocery App</div>
      <div className="gym-app">Gym App</div>
      <div className="travel-agency">Travel agency</div>
      <div className="tasty-food-delivery">Tasty-Food Delivery</div>
      <div className="contact-parent">
        <div className="contact1">Contact</div>
        <div className="email">Email</div>
        <div className="umamaheshchinchulagmailcom">
          umamahesh.chinchula@gmail.com
        </div>
        <div className="linked-in">Linked in</div>
        <div className="instagram">Instagram</div>
        <div className="facebook">Facebook</div>
        <div className="dribble">Dribble</div>
      </div>
    </div>
  );
};

export default Work;
