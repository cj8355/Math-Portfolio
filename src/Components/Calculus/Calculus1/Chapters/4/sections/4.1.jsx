import { Link } from "react-router-dom";
import "./4.1.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 1 Maxima and Minima</h1>
        <div className="sectionText">

        <h2>Absolute Maximum and Minimum</h2>
      <p>
         Let f be defined on a set D containing c. If 
            <MathComponent tex="f(c) \geq f(x)" />
            for every x in D, then f(c) is an absolute maximum value of f on D. If 
            <MathComponent tex="f(c) \leq f(x)" />
            for every x in D, then f(c) is an absolute minimum value of f on D.
            An absolute extereme value is either an absolute maximum value or an absolute minimum value.
           
            
            
            </p> *143

            
            <h2>Extreme Value Theorem</h2>
      <p>
         A function that is continuous on a closed interval [a, b] has an absolute maximum value and an absolute minimum
         value on that interval.
           
           
            
            </p> *144


            <h2>Local Maximum and Minimum Values</h2>
      <p>
         Suppose c is an interior point of some interval I on which f is defined. If
            <MathComponent tex="f(c) \geq f(x)" />
            for all x in I, then f(c) is a local maximum value of f. If 
            <MathComponent tex="f(c) \leq f(x)" />
            for all x in I, then f(c) is a local minimum value of f.
         
            
            </p> *145


            <h2>Local Extreme Value Theorem</h2>
      <p>
         If f has a local maximum or minimum value at c and f'(c) exists, then f'(c) = 0.
           
           
            
            </p> *146


            <h2>Critical Point</h2>
      <p>
         An interior point c of the domain of f at which f'(c) = 0 or f'(c) fails to exist is called a critical point of f.
           
           
            
            </p> *147


            <h2>Locating Absolute Extreme Values on a Closed Interval</h2>
      <p>
        Assume the function f is continuous on the closed interval [a, b].
        <div>
            <p>1. Locate the critical points c in (a, b), where f'(c) = 0 or f'(c) does not exist.
                These points are candidates for absolute maxima and minima.
            </p>
            <p>
                Evaluate f at the critical points and at the endpoints of [a, b].
            </p>
            <p>
                Choose the largest and smallest values of f from Step 2 for the absolute maximum and minimum values, respectively.
            </p>
        </div>
           
           
            
            </p> *148




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