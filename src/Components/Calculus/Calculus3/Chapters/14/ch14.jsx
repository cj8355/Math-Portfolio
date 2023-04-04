import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch14.css";

export default function Calculus3_Ch14() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 14 Vector-Valued Functions</p>
            
           
            
        <Link to="Sec14.1"><p>Sec 14.1 Vector-Valued Functions</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec14.2"><p>Sec 14.2 Calculus of Vector-Valued Functions</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec14.3"><p>Sec 14.3 Dot Products</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec14.4"><p>Sec 14.4 Cross Products</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec14.5"><p>Sec 14.5 Lines and Planes in Space</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec13.6"><p>Sec 13.6 Cylinders and Quadric Surfaces</p></Link>
        <p>Intro to Sec 2.3</p>
        
      
        </div>
    );
}