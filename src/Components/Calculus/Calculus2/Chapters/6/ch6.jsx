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
        <Link to="Sec5.4"><p>Sec 5.4 Working with Integrals</p></Link>
        <p>Intro to Sec 2.4</p>
        <Link to="Sec5.5"><p>Sec 5.5 Substitution Rule</p></Link>
        <p>Intro to Sec 2.5</p>
        <Link to="Sec5.6"><p>Sec 4.6 Linear Approximation and Differentials</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec5.7"><p>Sec 4.7 L'Hopital's Rule</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec5.8"><p>Sec 4.8 Newton's Method</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec5.9"><p>Sec 4.9 Antiderivatives</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec5.10"><p>Sec 3.10 Derivatives of Inverse Trigonometric Functions</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.11"><p>Sec 3.11 Related Rates</p></Link>
        <p>Intro to Sec 2.6</p>
            .....
        </div>
    );
}