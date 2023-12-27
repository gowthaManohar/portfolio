import { FunctionComponent } from "react";
import Header from "../Header"
import "./index.css";

const Contact = () => {
  return (
    <div className="macbook-air-11">
     <Header/>
      <div className="my-motto">MY MOTTO</div>
      <div className="clear-parent">
        <div className="clear">Clear</div>
        <div className="design">Design</div>
        <div className="message">Message</div>
        <div className="trust">Trust</div>
      </div>
      <div className="macbook-air-11-child" />
      <div className="contact1">Contact</div>
      <div className="address">Address</div>
      <div className="div">+91 9390193755</div>
      <div className="umamaheshchinchulagmailcom">
        umamahesh.chinchula@gmail.com
      </div>
      <div className="hyderabad-tngo-">Hyderabad, TNGO - 500032</div>
      <a
        className="linked-in"
        href="http://www.linkedin.com/in/chinchula-uma-maheswara-rao-016b782a0"
        target="_blank"
      >
        Linked in
      </a>
      <a
        className="dribble"
        href={`https://dribbble.com/Nani93/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22Nani93%22&utm_content=%22About%20Nani93%22&utm_medium=Social_Share`}
        target="_blank"
      >
        Dribble
      </a>
    </div>
  );
};

export default Contact;
