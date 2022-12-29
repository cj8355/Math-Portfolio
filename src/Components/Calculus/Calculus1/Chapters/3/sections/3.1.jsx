import { Link } from "react-router-dom";
import "./3.1.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 1 Introducing the Derivative</h1>
        <div className="sectionText">

        <h2>Rate of Change and the Slope of the Tangent Line</h2>
        <span>
            <p>
            The average rate of change in f on the interval [a, x] is the slope of the corresponding secant line: 
            <MathComponent tex="m_{sec} = \frac{f(x) - f(a)}{x - a}" />
            </p>
            <p>
                The instantaneous rate of change in f at a is 
                <MathComponent tex="m_{tan} = \lim_{x\to a} \frac{f(x) - f(a)}{x - a}" />
            </p>
            <p>
                which is also the slope of the tangent line at (a, f(a)), provided this limit exists.
                The tangent line is the unique line through (a, f(a)) with slope 
                <MathComponent tex="m_{tan}" />
                Its equation is
                <MathComponent tex="y - f(a) = m_{tan} = (x - a)" />
            </p>
    
        </span> *57


      

            
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                        <p>Continuity at a Point</p>
                        <p>Determine whether the following function is continuous at a. Use the continuity checklist to justify your answer</p>
                        <MathComponent tex="f(x) = \frac{2x^{2} + 3x + 1}{x^{2} + 5x}" />
                        <MathComponent tex="a = -5" />

                        <p>Answer:</p>
                        <p>No, the function isn't continuous because <MathComponent tex="f(x) = \frac{something}{0}" /> so f(-5) will be undefined</p>
                    <span>
                        
                    </span> *
                </div>

              

                
            </div>
            </div>
           
    );
}