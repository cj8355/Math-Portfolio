import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch1.css";

export default function ModernAlgebra_Ch1() {
    
    
    return (
        <div className='container'> 
        
        <p>Part 1</p>
            
            
            
        <Link to="Sec1.0"><p>Sec 0 Sets and Relations</p></Link>
        <p>Intro to Sec 1.1</p>
        <Link to="Sec1.1"><p>Sec 1 Binary Operations</p></Link>
        <p>Formulas, Graphs, Tables and Words</p>
        <Link to="Sec1.3"><p>Sec 1.3 Mathematical Induction</p></Link>
        <p>Properties of exponential functions, The Natural Exponential Function, Horizontal Line Test, Finding Inverse Functions</p>
        <Link to="Sec1.4"><p>Sec 1.4 The Fibonacci Numbers</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec1.5"><p>Sec 1.5 Divisibility</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        
            .....
        </div>
    );
}