import { Link } from "react-router-dom";
import "./2.6.css";
import { MathComponent } from "mathjax-react";
import graph6 from "./images/graph6.png";



export default function Calculus1_Ch2_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 6 Continuity</h1>
        <div className="sectionText">

        <h2>Continuity at a Point</h2>
        <span>
            A function f is continuous at a  if  
            <MathComponent tex="\lim_{x\to a} f(x) = f(a)" />

    
        </span> *41


        <h2>Continuity Checklist</h2>
        <span>
           In order for f to be continuous at a, the following three conditions must hold.
           <p>1. <MathComponent tex="f(a)" /> is defined (a is in the domain of f)</p>
           <p>2. <MathComponent tex="\lim_{x\to a} f(x)" /> exists</p>
           <p>3. <MathComponent tex="\lim_{x\to a} f(x) = f(a)" /> (the value of f equals the limit of f at a)</p>
            <MathComponent tex="\lim_{x\to a} f(x) = f(a)" />

    
        </span> *42


        <h2>Continuity Rules</h2>
        <span>
           If f and g are continuous at a, then the following functions are also continuous at a.
           Assume c is a constant and <MathComponent tex="n > 0" /> is an integer.
           <p>a. <MathComponent tex="f + g" /></p>
           <p>b. <MathComponent tex="f - g" /></p>
           <p>c. <MathComponent tex="cf" /></p>
           <p>d. <MathComponent tex="fg" /></p>
           <p>e. <MathComponent tex="f/g" />, provided <MathComponent tex="g(a) \neq 0" /></p>
           <p>f. <MathComponent tex="(f(x))^{n}" /></p>

    
        </span> *43

        <h2>Polynomial and Rational Functions</h2>
        <span>
           <p>a. A polynomial function is continuous for all x.</p>
           <p>b. A rational function (a function of the form <MathComponent tex="\frac{p}{q}" />, where p and q are polynomials)
           is continuous for all x for which <MathComponent tex="q(x) \neq 0" />
           </p>
          

    
        </span> *44


        <h2>Continuity of Composite Functions at a Point</h2>
        <span>
           <p>If g is continuous at a and f is continuous at g(a), then the composite functions
           <MathComponent tex="f \circ g" /> is continuous at a
           </p>
          
    
        </span> *45


        <h2>Limits of Composite Functions</h2>
        <span>
           <p>1. If g is continuous at a and f is continuous at g(a), then
           <MathComponent tex="\lim_{x\to a} f(g(x)) = f(\lim_{x\to a} g(x))" />
           </p>
           <p>2. If <MathComponent tex="\lim_{x\to a} g(x) = L" /> and f is continuous at L, then
           <MathComponent tex="\lim_{x\to a} f(g(x)) = f(\lim_{x\to a} g(x))" />
           </p>
          
    
        </span> *46


        <h2>Continuity at Endpoints</h2>
        <span>
           <p>A function f is continuous from the right (or right-continuous) at a if
           <MathComponent tex="\lim_{x\to a^{+}} f(x) = f(a)" />
           , and f is continuous from the left (or left-continuous) at b if
           <MathComponent tex="\lim_{x\to b^{-}} f(x) = f(b)" />
           </p>
          
    
        </span> *47


        <h2>Continuity on an Interval</h2>
        <span>
           <p>A function f is continuous on an interval I if it is continuous at all points of I. If I contains
            its endpoints, continuity on I means continuous from the right or left at the endpoints
           
           </p>
          
    
        </span> *48


        <h2>Continuity of Functions with Roots</h2>
        <span>
           <p>Assume n is a positive integer. If n is an odd integer, then  <MathComponent tex="(f(x))^{1/n}" />
           is continuous at all points at which f is continuous. If n is even, then <MathComponent tex="(f(x))^{1/n}" />
           is continuous at all points at a which f is continuous and <MathComponent tex="f(a) > 0" />.
           
           </p>
          
    
        </span> *49


        <h2>Continuity of Inverse Functions</h2>
        <span>
           <p>If a function f is continuous on an interval I and has an inverse on I, then its inverse <MathComponent tex="f^{-1}" />
           is also continuous (on the interval consisting of the points f(x), where x is in I).
           
           </p>
          
    
        </span> *50


        <h2>Continuity of Transcendental Functions</h2>
        <span>
           <p>The following functions are continuous at all points of their domains.
            

             <MathComponent tex="f^{-1}" />
           is also continuous (on the interval consisting of the points f(x), where x is in I).
           
           </p>

           <div>
            <p>Trigonometric</p>
            <div>
            <MathComponent tex="sin x" />
            <MathComponent tex="tan x" />
            <MathComponent tex="sec x" />
            </div>
            <div>
            <MathComponent tex="cos x" />
            <MathComponent tex="cot x" />
            <MathComponent tex="csc x" />
            </div>
           </div>

           <div>
            <p>Inverse Trigonometric</p>
            <div>
            <MathComponent tex="sin^{-1} x" />
            <MathComponent tex="tan^{-1} x" />
            <MathComponent tex="sec^{-1} x" />
            </div>
            <div>
            <MathComponent tex="cos^{-1} x" />
            <MathComponent tex="cot^{-1} x" />
            <MathComponent tex="csc^{-1} x" />
            </div>
           </div>

           <div>
            <p>Exponential</p>
            <div>
            <MathComponent tex="b^{x}" />
            </div>
            <div>
            <MathComponent tex="e^{x}" />
            </div>
           </div>

           <div>
            <p>Logarithmic</p>
            <div>
            <MathComponent tex="log_{b} x" />
            </div>
            <div>
            <MathComponent tex="ln x" />
            </div>
           </div>
          
    
        </span> *51


        <h2>Intermediate Value Theorem</h2>
        <span>
           <p>Suppose f is continuous on the interval [a,b] and L is a number strictly between f(a)
            and f(b), Then there exists at least one number c in (a,b) satisfying  <MathComponent tex="f(c) = L" />.
          
           
           </p>
          
    
        </span> *52

            
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
                        
                    </span> *53
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                        <p>Continuity</p>
                        <p>Determine the interval(s) on which the following function is continuous</p>
                        <MathComponent tex="f(x) = \frac{x^{5} + 6x + 17}{x^{2} - 9}" />

                        <p>Answer:</p>
                        <img src={graph6} alt="Graph of function" ></img>
                        <p> <MathComponent tex="(- \infty, -3), (-3, 3), (3, \infty)" /></p>
                    <span>
                        
                    </span> *54
                </div>
                
                <div className="Example3">
                    <h3>Example 3</h3>
                        <p>Limits</p>
                        <p>Evaluate each limit and justify your answer.</p>
                        <MathComponent tex="\lim_{x\to 0} (x^{8} - 3x^{6} - 1)^{40}" />

                        <p>Answer:</p>
                        <p>The first two terms will be zero leaving just the last term, -1. A negative number raised to an even exponent, will result in a positive number</p>
                        <p> <MathComponent tex="-1^{80} = 1" /></p>
                    <span>
                        
                    </span> *55
                </div>
             

                <div className="Example4">
                    <h3>Example 4</h3>
                        <p>Functions with roots</p>
                        <p>Determine the interval(s) on which the following function is continuous. At which finite endpoints
                            of the intervals of continuity is f continuous from the left or continuous from the right?</p>
                        <MathComponent tex="f(x) = \sqrt{2x^{2} - 16}" />

                        <p>Answer:</p>
                        
                        <p> <MathComponent tex="(- \infty, -2 \sqrt{2}], [2 \sqrt{2}, \infty)" /></p>
                        <p>Left-continuous at <MathComponent tex="-2 \sqrt{2}" /></p>
                        <p>Right-continuous at <MathComponent tex="2 \sqrt{2}" /></p>
                    <span>
                        
                    </span> *56
                </div>

                
            </div>
            </div>
           
    );
}