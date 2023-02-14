import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch7.css";

export default function Calculus2_Ch7() {
    
    
    return (
        <div className='container'> 
        Logarithmic, Exponential, and Hyperbolic Functions
        <p></p>
            
           
            
        <Link to="Sec7.1"><p>Sec 7.1 Logarithmic and Exponential Functions Revisited</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec7.2"><p>Sec 7.2 Exponential Models</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec7.3"><p>Sec 7.3 Hyperbolic Functions</p></Link>
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