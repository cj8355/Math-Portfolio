import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch13.css";

export default function Calculus3_Ch13() {
    
    
    return (
        <div className='container'> 
        
        <p>Ch. 13 Vectors and the Geometry of Space</p>
            
           
            
        <Link to="Sec13.1"><p>Sec 13.1 Vectors in the Plane</p></Link>
        <p>Intro to Sec 6.1</p>
        <Link to="Sec13.2"><p>Sec 13.2 Vectors in Three Dimensions</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec13.3"><p>Sec 13.3 Dot Products</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec13.4"><p>Sec 13.4 Cross Products</p></Link>
        <p>Intro to Sec 2.3</p>
        
      
        </div>
    );
}