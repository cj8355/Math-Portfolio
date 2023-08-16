import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch7.css";

export default function NumberTheory_Ch7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch 7</h1>
        <p>Ch 66</p>
            
            
            
        <Link to="Sec7.1"><p>Sec 7.1 The Euler Phi-Function</p></Link>
        <p>Intro to Sec 1.1</p>
        <Link to="Sec7.2"><p>Sec 7.2 The Sum and Number of Divisors</p></Link>
        <p>Formulas, Graphs, Tables and Words</p>
        <Link to="Sec7.3"><p>Sec 7.3 Perfect Numbers and Mersenne Primes</p></Link>
        <p>Properties of exponential functions, The Natural Exponential Function, Horizontal Line Test, Finding Inverse Functions</p>
        <Link to="Sec4.4"><p>Sec 3.4 The Euclidean Algorithm</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec4.5"><p>Sec 3.5 The Fundamental Theorem of Arithmetic</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec4.6"><p>Sec 3.6 Factorization Methods and the Fermat Numbers</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec4.7"><p>Sec 3.7 Linear Diophantine Equations</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
            .....
        </div>
    );
}