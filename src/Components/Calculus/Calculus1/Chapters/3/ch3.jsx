import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch3.css";

export default function Calculus1_Ch3() {
    
    
    return (
        <div className='container'> 
        Derivatives
        <p>A function is an expression that defines a relationship between one variable(commonolly denoted X) 
            and another variable(commonlloy denoted Y)</p>
            
            <span className="text1_1">=f(X) <MathComponent tex="e^{i \pi} = -1" /> grfesd</span>
            <MathComponent tex="e^{i \pi} = -1" />
            <p>For every X input there is 1 Y output</p>
            
        <Link to="Sec3.1"><p>Sec 3.1 Introducing the Derivative</p></Link>
        <p>Intro to Sec 3.1</p>
        <Link to="Sec3.2"><p>Sec 3.2 The Derivative as a Function</p></Link>
        <p>Intro to Sec 2.2</p>
        <Link to="Sec3.3"><p>Sec 3.3 Rules of Differentiation</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec3.4"><p>Sec 3.4 The Product and Quotient Rules</p></Link>
        <p>Intro to Sec 2.4</p>
        <Link to="Sec3.5"><p>Sec 3.5 Derivatives of Trigonometric Functions</p></Link>
        <p>Intro to Sec 2.5</p>
        <Link to="Sec3.6"><p>Sec 3.6 Derivatives as Rates of Change</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec3.7"><p>Sec 3.7 The Chain Rule</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec3.8"><p>Sec 3.8 Implicit Differentiation</p></Link>
        <p>Intro to Sec 2.6</p>
        <Link to="Sec3.9"><p>Sec 3.9 Derivatives of Logarithmic and Exponential Functions</p></Link>
        <p>Intro to Sec 2.6</p>
            .....
        </div>
    );
}