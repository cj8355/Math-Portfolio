import { Link } from "react-router-dom";
import "./4.2.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 2 Mean Value Theorem</h1>
        <div className="sectionText">

        <h2>Rolle's Theorem</h2>
      <p>
         Let f be continuous on a closed interval [a, b] and differentiable on (a, b) with f(a) = f(b).
         There is at least one point c in (a, b) such that f'(c) = 0. 
           
           
            </p> *153

        
            <h2>Mean Value Theorem</h2>
      <p>
         If f is continuous on a closed interval [a, b] and differentiable on (a, b), then
         there is at least one point c in (a, b) such that
         <MathComponent tex="\frac{f(b) - f(a)}{b - a} = f'(c)" />
           
           
            </p> *154


            <h2>Zero Derivative Implies Constant Function</h2>
      <p>
         If f is differentiable and f'(x) = 0 at all points of an open interval I, then f
         is a constant function on I.
           
           
            </p> *155


            <h2>Functions with Equal Derivatives Differ by a Constant</h2>
      <p>
         If two functions have the property that f'(x) = g'(x), for all x of an open interval I,
         then f(x) - g(x) = C on I, where C is a constant; that is, f and g differ by a constant.
           
            </p> *156



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Rolle's Theorem</h4>
                      <p>
                        Determine whether Rolle's Theorem applies to the following functions on the given interval.
                        If so, find the point(s) guaranteed to exist by Rolle's Theorem.
                      </p>
                     
                     
                      <MathComponent tex="f(x) = x(x - 1)^{2}" />; [0,1]

                      <p>
                        Answer:
                        <MathComponent tex="x = \frac{1}{3}" />
                      </p>


                    *157
                </div>



                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Rolle's Theorem</h4>
                      <p>
                        Determine whether Rolle's Theorem applies to the following functions on the given interval.
                        If so, find the point(s) guaranteed to exist by Rolle's Theorem.
                      </p>
                     
                     
                      <MathComponent tex="f(x) = 1 - x^{2/3}" />; [-1,1]

                      <p>
                        Answer:
                        Rolle's Theorem doesn't apply since
                        <MathComponent tex="f'(x) = - \frac{2}{3x^{\frac{1}{3}}}" />
                        doesn't = 0 at any point on the interval.
                      </p>


                    *158
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Mean Value Theorem</h4>
                      <p>
                        Consider the following function on the given interval [a, b].
                      </p>
                      <div>
                        <p>a. Determine whether the Mean Value Theorem applies to the following function on the given interval [a, b].</p>
                        <p>b. If so, find the point(s) that are guaranteed to exist by the Mean Value Theorem</p>
                      </div>
                     
                     
                      <MathComponent tex="f(x) = 7 - x^{2}" />; [-1,2]

                      <p>
                        Answer:
                        a. Yes
                        b. <MathComponent tex="c = \frac{1}{2}" />
                        
                      </p>


                    *159
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Mean Value Theorem</h4>
                      <p>
                        Consider the following function on the given interval [a, b].
                      </p>
                      <div>
                        <p>a. Determine whether the Mean Value Theorem applies to the following function on the given interval [a, b].</p>
                        <p>b. If so, find the point(s) that are guaranteed to exist by the Mean Value Theorem</p>
                      </div>
                     
                     
                      <MathComponent tex="f(x) = 2x^{1/3}" />; [-8,8]

                      <p>
                        Answer:
                        a. Does not apply
                        
                        
                      </p>


                    *160
                </div>
              
             
                
            </div>
            </div>
           
    );
}