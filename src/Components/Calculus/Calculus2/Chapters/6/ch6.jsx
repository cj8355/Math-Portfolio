import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch6.css";

export default function Calculus2_Ch6() {
    
    
    return (
        <div className='container'> 
        Applications of Integration
        <p></p>
            
           
            
        <Link to="Sec6.1"><p>Sec 6.1 Velocity and Net Change</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec6.2"><p>Sec 6.2 Regions Between Curves</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec6.3"><p>Sec 6.3 Volume by Slicing</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec6.4"><p>Sec 6.4 Volume by Shells</p></Link>
        <p>Intro to Sec 2.4</p>
        <Link to="Sec6.5"><p>Sec 6.5 Length of Curves</p></Link>
        <p>Intro to Sec 2.5</p>
        <Link to="Sec6.6"><p>Sec 6.6 Surface Area</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec6.7"><p>Sec 6.7 Physical Applications</p></Link>
        <p>Intro to Sec 2.6</p>
      
        </div>
    );
}