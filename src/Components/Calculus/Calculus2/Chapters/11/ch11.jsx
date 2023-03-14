import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch11.css";

export default function Calculus2_Ch11() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 11 Power Series</p>
            
           
            
        <Link to="Sec11.1"><p>Sec 11.1 Approximating Functions with Polynomials</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec11.2"><p>Sec 11.2 Properties of Power Series</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec11.3"><p>Sec 11.3 Taylor Series</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec11.4"><p>Sec 11.4 Working with Taylor Series</p></Link>
        <p>Intro to Sec 2.3</p>
        
      
        </div>
    );
}