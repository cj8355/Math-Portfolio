import { Link } from "react-router-dom";
import "./4.3.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 3 What Derivatives Tell Us</h1>
        <div className="sectionText">

        <h2>Increasing and Decreasing Functions</h2>
      <p>
         Suppose a function f is defined on an interval I. We say that f is increasing on f if 
         <MathComponent tex="f(x_{2}) > f(x_{1})" /> whenever <MathComponent tex="x_{1}" />
         and <MathComponent tex="x_{2}" /> are in I and <MathComponent tex="x_{2} > x_{1}" />.
         We say that f is decreasing on I if  <MathComponent tex="f(x_{2}) < f(x_{1})" />
         whenever <MathComponent tex="x_{1}" />and <MathComponent tex="x_{2}" /> are in I and
         <MathComponent tex="x_{2} > x_{1}" />
           
           
            </p> *161


            <h2>Test for Intervals of Increase and Decrease</h2>
      <p>
         Suppose f is continuous on an interval I and differentiable at all interior points
         of I. If <MathComponent tex="f'(x) > 0" /> at all interior points of I, then f is increasing
         on I. If  <MathComponent tex="f'(x) < 0" /> at all interior points of I, then f is decreasing on I.
         
           
            </p> *162


            <h2>First Derivative Test</h2>
      <p>
        Assume f is continuous on an interval that contains a critical point c, and assume f is
        differentiable on an interval containing c, except perhaps at c itself.
        <div>
            <ul>
                <li>If f' changes sign from positive to negative as x increases through c, then f has a
                    local maximum at c.
                </li>
                <li>If f' changes sign from negative to positive as x increases through c, then f has a
                    local minimum at c.
                </li>
                <li>If f' is positive on both sides near c or negative on both sides near c, then f has 
                    no local extreme value at c.
                </li>
            </ul>
        </div>
         
         
           
            </p> *163


            <h2>One Local Extremum Implies Absolute Extremum</h2>
      <p>
        Suppose f is continuous on an interval I that contains exactly one local extremum at c.
        <div>
            <ul>
                <li>If a local maximum occurs at c, then f(c) is the absolute maximum of f on I.
                </li>
                <li>If a local minimum occurs at c, then f(c) is the absolute minimum of f on I.
                </li>
                
            </ul>
        </div>
         
         
           
            </p> *164


            <h2>Concavity and Inflection Point</h2>
      <p>
         Let f be differentiable on an open interval I. If f' is increasing on I, then f is concave up on I.
         If f' is decreasing on I, then f is concave down on I. If f is continuous at c and f changes concavity
         at c(from up to down, or vice versa), then f has an inflection point at c.
         
         
           
            </p> *165


            
            <h2>Test for Concavity</h2>
      <p>
        Suppose f'' exists on an open interval I.
        <div>
            <ul>
                <li>If <MathComponent tex="f''(x) > 0" /> on I, then f is concave up on I.</li>
                <li>If <MathComponent tex="f''(x) < 0" /> on I, then f is concave down on I.</li>
                <li>If c is a point of I at which f'' changes sign at c(from positive to negative, or vice versa),
                    then f has an inflection point at c.
                </li>
            </ul>
        </div>
         
         
           
            </p> *166


            <h2>Second Derivative Test for Local Extrema</h2>
      <p>
        Suppose f'' is continuous on an open interval containing c with f'(c) = 0.
        <div>
            <ul>
                <li>If <MathComponent tex="f''(c) > 0" />, then f has a local minimum at c.</li>
                <li>If <MathComponent tex="f''(c) < 0" /> , then f has a local maximum at c.</li>
                <li>If <MathComponent tex="f''(c) = 0" />, then the test is inconclusive; f may have a local maximum, a
                local minimum, or neither at c.
                </li>
            </ul>
        </div>
         
         
           
            </p> *167
       


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Increasing and Decreasing functions</h4>
                      <p>Find the intervals on which f is increasing and the intervals on which it is decreasing.</p>
                     
                      <MathComponent tex="f(x) = 4 - x^{2}" />
                      <p>
                        Answer:
                        Increasing on <MathComponent tex="(- \infty, 0)" />;
                        Decreasing on <MathComponent tex="(0, \infty)" />
                      </p>


                    *168
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Increasing and Decreasing functions</h4>
                      <p>Find the intervals on which f is increasing and the intervals on which it is decreasing.</p>
                     
                      <MathComponent tex="f(x) = 12 + x - x^{2}" />
                      <p>
                        Answer:
                        Increasing on <MathComponent tex="(- \infty, 1/2)" />;
                        Decreasing on <MathComponent tex="(1/2, \infty)" />
                      </p>


                    *169
                </div>
               

                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>First Derivative Test</h4>
                      <div>
                        <p>a. Locate the critical points of f.</p>
                        <p>b. Use the First Derivative Test to locate the local maximum and minimum values.</p>
                        <p>c. Identify the absolute maximum and minimum values of the function on the given interval (when they exist)</p>
                      </div>
                     
                     <p> <MathComponent tex="f(x) = x^{2} + 3" /> on [-3, 2]</p>
                     
                      <p>
                        Answer:
                        <div>
                            <p>a. x = 0</p>
                            <p>b. Local min at x = 0</p>
                            <p>c. Abs. min: 3 at x = 0; Abs. max: 12 at x = -3</p>
                        </div>
                      </p>


                    *170
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Concavity</h4>
                      <p>Determine the intervals on which the following functions are concave up or concave down.
                        Identify any inflection points.
                      </p>
                     
                      <MathComponent tex="f(x) = x^{4} - 2x^{3} + 1" />
                      <p>
                        Answer:
                        Concave up on <MathComponent tex="(- \infty, 0), (1, \infty)" />;
                        Concave down on (0,1);
                        inflection points at x=0 and x=1
                      </p>


                    *171
                </div>


                <div className="Example5">
                    <h3>Example 5</h3>
                      <h4>Concavity</h4>
                      <p>Determine the intervals on which the following functions are concave up or concave down.
                        Identify any inflection points.
                      </p>
                     
                      <MathComponent tex="f(x) = e^{x}(x - 3)" />
                      <p>
                        Answer:
                        Concave down on <MathComponent tex="(- \infty, 1)" />;
                        Concave up on <MathComponent tex="(1, \infty)" />;
                        inflection points at x=1
                      </p>


                    *172
                </div>
              
             
                
            </div>
            </div>
           
    );
}