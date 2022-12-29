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
        <Link to="Sec2.2"><p>Sec 2.2 Definitions of Limits</p></Link>
        <p>Intro to Sec 2.2</p>
        <Link to="Sec2.3"><p>Sec 2.3 Techniques for Computing Limits</p></Link>
        <p>Intro to Sec 2.3</p>
        <Link to="Sec2.4"><p>Sec 2.4 Infinite Limits</p></Link>
        <p>Intro to Sec 2.4</p>
        <Link to="Sec2.5"><p>Sec 2.5 Limits at Infinity</p></Link>
        <p>Intro to Sec 2.5</p>
        <Link to="Sec2.6"><p>Sec 2.6 Continuity</p></Link>
        <p>Intro to Sec 2.6</p>
            .....
        </div>
    );
}