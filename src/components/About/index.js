import { FunctionComponent } from "react";
import Header from "../Header"
import "./index.css";

const About = () => {
  return (
    <div className="about-page">
      <Header/>
      <div className="about-me">About me</div>
      <div className="tools">Tools</div>
      <div className="services">Services</div>
      <div className="emerging-uiux-designer-container">
        <span>{`Emerging `}</span>
        <span className="uiux-designer">UI/UX designer</span>
        <span>
          {" "}
          embracing cultural hues in digital crafting. Committed to innovative
          and user-focused design. Excited to contribute a distinct touch to the
          dynamic world of UI/UX, translating pixels into compelling stories."
        </span>
      </div>
      <div className="ux-research-wrapper">
        <div className="ux-research">UX Research</div>
      </div>
      <div className="mobile-apps-design-wrapper">
        <div className="mobile-apps-design">MOBILE APPS DESIGN</div>
      </div>
      <div className="ui-design-wrapper">
        <div className="ui-design">UI Design</div>
      </div>
      <div className="ui-ux-wrapper">
        <div className="ui-ux">UI / UX</div>
      </div>
      <div className="ux-design-wrapper">
        <div className="ui-design">UX Design</div>
      </div>
      <div className="web-design-wrapper">
        <div className="web-design">WEB DESIGN</div>
      </div>
      <div className="ai-wrapper">
        <b className="ai">Ai</b>
      </div>
      <div className="about-page-inner">
        <img className="frame-child" alt="" src="/group-6@2x.png" />
      </div>
      <div className="contact-parent">
        <div className="contact">Contact</div>
        <div className="email">Email</div>
        <div className="umamaheshchinchulagmailcom">
          umamahesh.chinchula@gmail.com
        </div>
        <div className="linked-in">Linked in</div>
        <div className="instagram">Instagram</div>
        <div className="facebook">Facebook</div>
        <div className="dribble">Dribble</div>
      </div>
     
      <img
        className="ant-designinstagram-outlined-icon"
        alt=""
        src="/antdesigninstagramoutlined@2x.png"
      />
      <img className="component-3-icon" alt="" src="/component-3@2x.png" />
      <div className="component-4">
        <div className="in-wrapper">
          <div className="in">in</div>
        </div>
      </div>
    </div>
  );
};

export default About;
