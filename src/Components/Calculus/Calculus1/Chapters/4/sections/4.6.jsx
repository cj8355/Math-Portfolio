import { Link } from "react-router-dom";
import "./4.6.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 6 Linear Approximation and Differentials</h1>
        <div className="sectionText">

        <h2>Linear Approximation to f at a</h2>
       
        <p>
          Suppose f is differentiable on an interval f containing the point a. The integer approximation to f at a
          is the linear function
          <MathComponent tex="L(x) = f(a) + f'(a)(x - a)" />, for x in L
          </p>

      *182


      <h2>Uses of Linear Approximation</h2>
       
      <ul>
        <li>To approximate f near x = a, use</li>
        <MathComponent tex="f(x) \approx L(x) = f(a) + f'(a)(x - a)" />
        <li>To approximate the change <MathComponent tex="\Delta y" /> in the dependent variable when the independent variable x changes from a to a 
          + <MathComponent tex="\Delta x" />, use
          <MathComponent tex="\Delta y \approx f'(a) \Delta x" />
        </li>
      </ul>
         
      
     *183


     <h2>Differentials</h2>
       
        <p>
         Let f be differentiable on an interval containing x. A asmall change in x is denoted by the differential dx.
         The corresponding change in f is approximated by the differential dy = f'(x) dx; that is,
          <MathComponent tex="\Delta y = f(x + dx) - f(x) \approx dy = f'(x) dx" />
          </p>

      *184




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