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
                       <h2>Derivatives</h2>
                       <p>a. Use limits to find the derivative function f' for the following function f.</p>
                       <p>b. Evaluate f'(a) for the given values of a.</p>

                       <MathComponent tex="f(x) = 5x + 2" />
                       <MathComponent tex="a = 1, 2" />

                       <div>
                        Answer:
                       <p>a.<MathComponent tex="f' (x) = 5" /> </p> 
                       <p>b. <MathComponent tex="f'(1) = 5" />
                       <MathComponent tex="f'(2) = 5" />
                        </p> 
                       </div>
                    <span>
                        
                    </span> *68
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                       <h2>Derivatives</h2>
                       <p>a. Use limits to find the derivative function f' for the following function f.</p>
                       <p>b. Evaluate f'(a) for the given values of a.</p>

                       <MathComponent tex="f(s) = 4s^{3} + 3s" />
                       <MathComponent tex="a = -3, -1" />

                       <div>
                        Answer:
                       <p>a.<MathComponent tex="f' (s) = 12s^{2} + 3" /> </p> 
                       <p>b. <MathComponent tex="f'(-3) = 111" />
                       <MathComponent tex="f'(-1) = 15" />
                        </p> 
                       </div>
                    <span>
                        
                    </span> *69
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                       <h2>Velocity Functions</h2>
                       <p>A projectile is fired vertically upward into the air, and its position (in feet) above the ground after t seconds is given by the function s(t)</p>
                       <p>a. For the following functions s(t), find the instantaneous velocity functions v(t).
                        (Recall that the velocity function v is the derivative of the position function s.)</p>
                        <p>b. Determine the instantaneous velocity of the projectile at t = 1 and t = 2 seconds.</p>

                       <MathComponent tex="s(t)) = -16t^{2} + 100t" />
                       

                       <div>
                        Answer:
                       <p>a.<MathComponent tex="v(t) = -32t + 100" /> </p> 
                       <p>b. <MathComponent tex="v(1) = 68" /> ft/s
                       <MathComponent tex="v(2) = 36" /> ft/s
                        </p> 
                       </div>
                    <span>
                        
                    </span> *70
                </div>
              

                <div className="Example4">
                    <h3>Example 4</h3>
                       <h2>Tangent Lines</h2>
                       <p>a. Find the derivative function f' for the following functions f.</p>
                       <p>b. Find an equation of the line tangent to the graph of f at (a, f(a)) for the given value of a</p>
                        

                       <MathComponent tex="f(x)) = 3x^{2} + 2x - 10" />
                       <MathComponent tex="a = 1" />

                       <div>
                        Answer:
                       <p>a.<MathComponent tex="6x + 2" /> </p> 
                       <p>b. <MathComponent tex="y = 8x - 13" /> 
                       
                        </p> 
                       </div>
                    <span>
                        
                    </span> *71
                </div>
             
                
            </div>
            </div>
           
    );
}