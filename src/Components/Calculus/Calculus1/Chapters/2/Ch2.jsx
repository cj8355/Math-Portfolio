import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch2.css";

export default function Calculus1_Ch2() {
    
    
    return (
        <div className='container'> 
        Limits
        <p>A function is an expression that defines a relationship between one variable(commonolly denoted X) 
            and another variable(commonlloy denoted Y)</p>
            
            <span className="text1_1">=f(X) <MathComponent tex="e^{i \pi} = -1" /> grfesd</span>
            <MathComponent tex="e^{i \pi} = -1" />
            <p>For every X input there is 1 Y output</p>
            
        <Link to="Sec2.1"><p>Sec 2.1 The Idea of Limits</p></Link>
        <p>Intro to Sec 2.1</p>
        
            .....
        </div>
    );
}