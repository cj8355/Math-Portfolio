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
                      <h4></h4>
                      
                     
                      <MathComponent tex="" />



                    *
                </div>



               
              
             
                
            </div>
            </div>
           
    );
}