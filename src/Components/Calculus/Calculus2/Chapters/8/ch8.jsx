import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch8.css";

export default function Calculus2_Ch8() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 8 Integration Techniques</p>
            
           
            
        <Link to="Sec8.1"><p>Sec 8.1 Basic Approaches</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec8.2"><p>Sec 8.2 Integration by Parts</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec8.3"><p>Sec 8.3 Trigonometric Integrals</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec8.4"><p>Sec 8.4 Hyperbolic Functions</p></Link>
        <p>Intro to Sec 2.3</p>
      
        </div>
    );
}