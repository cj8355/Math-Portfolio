import { Link } from "react-router-dom";
import "./1.3.css";
import { MathComponent } from "mathjax-react";
// import cosine from "./cossvg.svg"; 
// import cossin from "./cossingraph.svg"

export default function Calculus1_Ch1_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec 3 Inverse, Exponential, and Logarithmic Functions</h1>
        <div className="sectionText">
           <span>Exponential Functions are functions with the form <MathComponent tex="f(x) = b^x" /> where b <MathComponent tex="\neq" /> 1</span>
            <div>
                <h2>Properties of Exponential Functions: </h2>
                    
                    <span>
                1. The domain of f is <MathComponent tex="(-\infty,\infty)" />
                <MathComponent tex="b^x > 0" /> so the range is <MathComponent tex="(0,\infty)" />
                2.<MathComponent tex="b^0 = 1 " /> and therefore <MathComponent tex=" f(0) = 1" />
                3. If <MathComponent tex="b > 1" /> then f is an increasing function *2
                4. If <MathComponent tex="0 < b < 1" /> then f is a decreasing function of x *3
                </span>
                <span>
                    The Natural Exponential Function
                    <MathComponent tex="f(x) = e^x" />
                    <MathComponent tex="e = 2.718281828459..." />
                </span>
                <span>
                    Inverse Functions
                    The inverse of a function f is a function <MathComponent tex="f^{-1}" /> such that <MathComponent tex="y = f(x)" />
                    and <MathComponent tex="f^{-1} (y) = x" /> *4
                </span><br/>
                <span>
                    Horizontal Line Test:
                    A horizontal line intersects the graph of a one-to-one function only once
                </span>
                <span>
                    Logarithmic Functions
                    <MathComponent tex="y = log_{b} x" /> 
                    The inverse of <MathComponent tex="b = e" /> is the natural logarithm function <MathComponent tex="y = ln x" />  *5
                </span>
                <span>
                    Change of Base Rules
                    <MathComponent tex="b^x = e^{x lnb}" /> and <MathComponent tex="log_b x = \frac{ln x}{ln b} for x > 0" />
                    <MathComponent tex="b^x = c^{x log_c b}" /> and <MathComponent tex="log_b x = \frac{log_c x}{log_c b} for x > 0" /> *6
                </span>
                </div>
                
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    <span>Determine the largest possible sets of points on which the following function has an inverse</span>
                    <MathComponent tex="f(x) = 3x + 4" />
                    <span>Answer:
                        For every x input there is 1 y output, therefore the functions inverse would have a set of points from <MathComponent tex="(-\infty,\infty)" />
                    </span>
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                    <span>Find the inverse <MathComponent tex="f^{-1} (x)" /> of the function </span>
                    <MathComponent tex="f(x) = e^{2x+6}" />
                    <span>Answer:
                       <MathComponent tex="f^{-1} (x) = \frac{1}{2} ln x - 3" />
                    </span>
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                    <span>Assume <MathComponent tex="log_{b} x = 0.36" /> <MathComponent tex="log_{b} z = 0.83" /> </span>
                    Evaluate <MathComponent tex="log_{b} xz" />
                    <span>Answer:
                    <MathComponent tex="log_{b} xz" /> 0.36 + 0.83 = 1.19
                    </span>
                </div>

                <div className="Example4">
                    <h3>Example 4</h3>
                    <span>Solve the following equation <MathComponent tex="log_{10} x = 3" /> </span>
                    
                    <span>Answer:
                    <MathComponent tex="log_{10} x = 3" /> <MathComponent tex="10^3" /> = 1000
                    </span>
                </div>

                
            </div>
            </div>
           
    );
}