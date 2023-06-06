import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch1.css";

export default function NumberTheory_Ch1() {
    
    
    return (
        <div className='container'> 
        Functions
        <p>Ch intro)</p>
            
            
            
        <Link to="Sec1.1"><p>Sec 1.1 Numbers and Sequences</p></Link>
        <p>Intro to Sec 1.1</p>
        <Link to="Sec1.2"><p>Sec 1.2 Sums and Products</p></Link>
        <p>Formulas, Graphs, Tables and Words</p>
        <Link to="Sec1.3"><p>Sec 1.3 Inverse, Exponential, and Logarithmic Functions</p></Link>
        <p>Properties of exponential functions, The Natural Exponential Function, Horizontal Line Test, Finding Inverse Functions</p>
        <Link to="Sec1.4"><p>Sec 1.4 Trigonometric Functions and Their Inverses</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        
            .....
        </div>
    );
}