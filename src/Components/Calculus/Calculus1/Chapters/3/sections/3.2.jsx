import { Link } from "react-router-dom";
import "./3.1.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 2 The Derivative as a Function</h1>
        <div className="sectionText">

        <h2>The Derivative Function</h2>
        <span>
            <p>
            The derivative of f is the function
            <MathComponent tex="f' (x) = \lim_{h\to 0} \frac{f(x + h) - f(x)}{h}" />
            </p>
            <p>
              provided the limit exists and x is in the domain of f. If f'(x) exists, we say that f is differentiable at x.
              If f is differentiable at every point of an open interval I, we say that f is differentiable on I.
            </p>
           
        </span> *64


        <h2>Differentiable Implies Continuous</h2>
        <span>
           
            <p>
              If f is differentiable at a, then f is continuous at a.
            </p>
           
        </span> *65


        <h2>Not Continuous Implies Not Differentiable </h2>
        <span>
           
            <p>
              If f is not continuous at a, then f is not differentiable at a.
            </p>
           
        </span> *66


        <h2>When Is a Function Not Differentiable at a Point? </h2>
        <span>
           
            <p>
              A function f is not differentiable at a if at least one of the following conditions holds:
            </p>
            <ul>
                <li>a. f is not continuous at a</li>
                <li>b. f has a corner at a</li>
                <li>c. f has a vertical tangent at a</li>
            </ul>
           
        </span> *67

            
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                       
                    <span>
                        
                    </span> *
                </div>

              
             
                
            </div>
            </div>
           
    );
}