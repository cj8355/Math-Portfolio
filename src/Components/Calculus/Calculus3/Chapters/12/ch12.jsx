import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch12.css";

export default function Calculus3_Ch12() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 12 Parametric and Polar Curves</p>
            
           
            
        <Link to="Sec12.1"><p>Sec 12.1 Parametric Equations</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec12.2"><p>Sec 12.2 Polar Coordinates</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec12.3"><p>Sec 12.3 Calculus in Polar Coordinates</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec12.4"><p>Sec 12.4 Working with Taylor Series</p></Link>
        <p>Intro to Sec 2.3</p>
        
      
        </div>
    );
}