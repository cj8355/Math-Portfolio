import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch10.css";

export default function Calculus2_Ch10() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 10 Sequences and Infinite Series</p>
            
           
            
        <Link to="Sec10.1"><p>Sec 10.1 An Overview</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec10.2"><p>Sec 10.2 Sequences</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec10.3"><p>Sec 8.3 Trigonometric Integrals</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec10.4"><p>Sec 8.4 Trigonometric Substitutions</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec10.5"><p>Sec 8.5 Partial Fractions</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec8.8"><p>Sec 8.8 Numerical Integration</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec8.9"><p>Sec 8.9 Improper Integrals</p></Link>
        <p>Intro to Sec 2.3</p>
      
        </div>
    );
}