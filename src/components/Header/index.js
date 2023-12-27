import { FunctionComponent } from "react";

import {Link} from "react-router-dom"
import "./index.css";


const Header= () => {
  return (
    <div className="header">
      <div className="component-2">
        <div className="c-wrapper">
          <div className="c">C</div>
        </div>
        <div className="u-wrapper">
          <div className="u">U</div>
        </div>
      </div>
      <Link to="/contact" className="contact">Contact</Link>
      <Link to="/work" className="work">Work</Link>
      <Link to="/about" className="about">About</Link></div>
    
  );
};

export default Header;



