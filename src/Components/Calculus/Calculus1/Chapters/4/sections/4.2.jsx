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
           
              
             
                
            </div>
            </div>
           
    );
}