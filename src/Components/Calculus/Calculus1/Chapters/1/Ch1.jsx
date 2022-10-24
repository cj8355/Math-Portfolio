import { Link } from "react-router-dom";
import { MathComponent } from "mathjax-react";
import "./ch1.css";

export default function Calculus1_Ch1() {
    
    
    return (
        <div className='container'> 
        Functions
        <p>A function is an expression that defines a relationship between one variable(commonolly denoted X) 
            and another variable(commonlloy denoted Y)</p>
            
            <span className="text1_1">=f(X) <MathComponent tex="e^{i \pi} = -1" /> grfesd</span>
            <MathComponent tex="e^{i \pi} = -1" />
            <p>For every X input there is 1 Y output</p>
            
        <Link to="Sec1.1"><p>Sec 1.1</p></Link>
        <p>Intro to Sec 1.1</p>
        <p>Sec 1.2</p>
        <p>Intro to Sec 1.2</p>
        <p>Sec 1.3</p>
        <p>Intro to Sec 1.3</p>
            .....
        </div>
    );
}