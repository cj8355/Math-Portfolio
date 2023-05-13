import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch15.css";

export default function Calculus3_Ch15() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 15 Functions of Several Variables</p>
            
           
            
        <Link to="Sec15.1"><p>Sec 15.1 Graphs and Level Curves</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec15.2"><p>Sec 15.2 Limits and Continuity</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec15.3"><p>Sec 15.3 Partial Derivatives</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec15.4"><p>Sec 15.4 The Chain Rule</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec15.5"><p>Sec 15.5 Directional Derivatives and the Gradient</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec15.6"><p>Sec 15.6 Tangent Planes and Linear Approximation</p></Link>
        <p>Intro to Sec 2.3</p>
        
      
        </div>
    );
}