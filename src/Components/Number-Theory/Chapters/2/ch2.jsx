import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch2.css";

export default function NumberTheory_Ch2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch 2</h1>
        <p>Ch 2)</p>
            
            
            
        <Link to="Sec2.1"><p>Sec 2.1 Representations of Integers</p></Link>
        <p>Intro to Sec 1.1</p>
        <Link to="Sec2.2"><p>Sec 1.2 Sums and Products</p></Link>
        <p>Formulas, Graphs, Tables and Words</p>
        <Link to="Sec2.3"><p>Sec 1.3 Mathematical Induction</p></Link>
        <p>Properties of exponential functions, The Natural Exponential Function, Horizontal Line Test, Finding Inverse Functions</p>
        <Link to="Sec2.4"><p>Sec 1.4 The Fibonacci Numbers</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec1.5"><p>Sec 1.5 Divisibility</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        
            .....
        </div>
    );
}