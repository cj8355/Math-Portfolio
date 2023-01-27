import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch4.css";

export default function Calculus1_Ch4() {
    
    
    return (
        <div className='container'> 
        Applications of the Derivative
        <p>A function is an expression that defines a relationship between one variable(commonolly denoted X) 
            and another variable(commonlloy denoted Y)</p>
            
           
            
        <Link to="Sec4.1"><p>Sec 4.1 Maxima and Minima</p></Link>
        <p>Intro to Sec 4.1</p>
        <Link to="Sec4.2"><p>Sec 4.2 Mean Value Theorem</p></Link>
        <p>Intro to Sec 4.2</p>
        <Link to="Sec4.3"><p>Sec 4.3 What Derivatives Tell Us</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec4.4"><p>Sec 4.4 Graphing Functions</p></Link>
        <p>Intro to Sec 2.4</p>
        <Link to="Sec4.5"><p>Sec 4.5 Optimization Problems</p></Link>
        <p>Intro to Sec 2.5</p>
        <Link to="Sec4.6"><p>Sec 4.6 Linear Approximation and Differentials</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.7"><p>Sec 3.7 The Chain Rule</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.8"><p>Sec 3.8 Implicit Differentiation</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.9"><p>Sec 3.9 Derivatives of Logarithmic and Exponential Functions</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.10"><p>Sec 3.10 Derivatives of Inverse Trigonometric Functions</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec4.11"><p>Sec 3.11 Related Rates</p></Link>
        <p>Intro to Sec 2.6</p>
            .....
        </div>
    );
}