import { Link } from "react-router-dom";
import "./1.2.css";
import { MathComponent } from "mathjax-react";
// import cosine from "./cossvg.svg"; 
// import cossin from "./cossingraph.svg"

export default function Calculus1_Ch1_Sec2() {
    
    
    return (
        <div className='container'> 
        Ch. 1 Sec 2 Representing Functions
        <div className="sectionText">
            <p>We consider four approaches to defining and representing functions: formulas, graphs, tables, and words. </p><i>*1</i>
            <h3>Formulas</h3>
            <span>Polynomials: <MathComponent tex="p(x) = a_n x^n + a_{n - 1} x^{n - 1} + ... + a_1 x + a_0" /></span>
            <span>Rational Functions: <MathComponent tex="f(x) = \frac{p(x)}{q(x)}" /></span>
            <span>Algebraic Functions: <MathComponent tex="f(x) = \sqrt{2x^3 + 4} g(x) = x^\frac{1}{4}(x^3 + 2)" /></span>
            <span>Exponential Functions: <MathComponent tex="f(x) = b^x" /></span>
            <span>Trigonometric Functions: <MathComponent tex="sin x, cos x, tan x, sec x, ..." /></span>
            <span>Transcendental Functions: </span>
            <p>Transcendental functions are composed of trigonometric, exponential, and logarithmic functions and more.</p>
            
            <h3>Graphs</h3>
            {/* <img src={cosine}/> */}
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <p>Example 1</p>
                    <span>How do you obtain the grpah of <MathComponent tex="y = f(x + 2)" /> from the grpah of 
                    <MathComponent tex="y = f(x)" />?
                    </span><br/>
                    <span>
                        Answer: Shift the grpah to the left 2 units
                    </span>
                </div>

                <div className="Example2">
                    <p>Example 2</p>
                    <span>How do you obtain the grpah of <MathComponent tex="y = f(3x)" /> from the grpah of 
                    <MathComponent tex="y = f(x)" />?
                    </span><br/>
                    <span>
                        Answer: Compress the grpah horizontally by <MathComponent tex="\frac{1}{3}" />
                    </span>
                </div>
            </div>

            <div className="Example3">
                    <p>Example 3</p>
                    <span><bold>Graph of a linear function</bold> Find and graph the linear function that passes through the points (1, 3) and (2, 5).
                    </span><br/>
                    <span>
                        Answer:  <MathComponent tex="f(x) = 2x + 1" />
                    </span>
                </div>

                <div className="Example4">
                    <p>Example 4</p>
                    <span>Sales records indicate that if Blu-ray players are priced at $250, then a large store sells an average of 12 units per day. 
                        If they are priced at $200, then the store sells an average of 15 units per day. Find ans graph the linear 
                        demand function for Blu-ray sales. For what prices is the demand function defined?
                    </span><br/>
                    <span>
                        Answer: <MathComponent tex="d = -\frac{3p}{50} + 27" />
                        <MathComponent tex="D = [0,450]" />
                        graph
                    </span>
                </div>

            </div>
            
           
    );
}