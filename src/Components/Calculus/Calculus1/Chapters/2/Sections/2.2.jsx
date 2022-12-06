import { Link } from "react-router-dom";
import "./2.2.css";
import { MathComponent } from "mathjax-react";


export default function Calculus1_Ch2_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 2 Definitions of Limits</h1>
        <div className="sectionText">

        <h2>Limit of a Function</h2>
        <span>
        Suppose the function f is defined for all x near a except possibly at a. If f(x) is arbitrarily close to L for all x sufficiently close to a we write

        <MathComponent tex="\lim_{x\to a} f(x) = L" />
        and say the limit of f(x) as x approaches a equals L
        </span> * 13

          
            <div>
                <h2>One-Sided Limits </h2>
                
                    <span>
                        1. Right-sided limit
                        Suppose f is defined for all x near a with <MathComponent tex="x > a" />. If <MathComponent tex="f(x)" /> is arbitrarily close to L for all x sufficiently close to a with
                        <MathComponent tex="x > a" />, we write 
                        <MathComponent tex="\lim_{x\to a^{+}} f(x) = L" />
                        and say the limit of f(x) as x approaches a from the right eqauls L
                    
                    </span>

                    <span>
                        1. Left-sided limit
                        Suppose f is defined for all x near a with <MathComponent tex="x < a" />. If <MathComponent tex="f(x)" /> is arbitrarily close to L for all x sufficiently close to a with
                        <MathComponent tex="x < a" />, we write 
                        <MathComponent tex="\lim_{x\to a^{-}} f(x) = L" />
                        and say the limit of <MathComponent tex="f(x)" /> as x approaches a from the left eqauls L
                    
                    </span>
                    
                    
              
                </div>
                
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    <span><bold>Average Velocity</bold>The position of an object moving vertically along a line is given by the function <MathComponent tex="s(t) = -16t^{2} + 128t" />
                            Find the average velocity of the object over the following intervals:
                     </span>
                    
                    <span>
                        <p>a. [1,4]</p>
                        <MathComponent tex="=\frac{s(4) - s(1)}{4 - 1} = \frac{256 - 112}{3} = 48" /> 
                        <p>b. [1,3]</p>
                        <MathComponent tex="=\frac{s(3) - s(1)}{3 - 1} = \frac{240 - 112}{2} = 64" /> 
                        <p>c. [1,2]</p> 
                        <MathComponent tex="=\frac{s(2) - s(1)}{2 - 1} = \frac{192 - 112}{1} = 80" /> 
                    </span> *10
                </div>

                 
               

                
            </div>
            </div>
           
    );
}