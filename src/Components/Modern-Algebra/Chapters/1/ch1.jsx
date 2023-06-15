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
        <Link to="Sec1.2"><p>Sec 2 Groups</p></Link>
        <p>  </p>
        <Link to="Sec1.3"><p>Sec 3 Abelian Examples</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        <Link to="Sec1.4"><p>Sec 4 Nonabelian Examples</p></Link>
        <p>Radian Measure, Trigonometric Functions, Trigonometric Identities</p>
        
            .....
        </div>
    );
}