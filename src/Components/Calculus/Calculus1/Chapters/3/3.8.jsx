import { Link } from "react-router-dom";
import "./3.8.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch3_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 8 Implicit Differentiation</h1>
        <div className="sectionText">

        <h2>Using Implicit Differentiation</h2>
      <p>
        Relations between variables are often expressed implicitly. For example, the equation for a unit circle
            <MathComponent tex="x^{2} + y^{2} = 1" />
            does not specify y directly, but y is defined implicity.
            Solving for y you get 2 equations
           
            <MathComponent tex="y = - \sqrt{1 - x^{2}}" />
            <MathComponent tex="y = \sqrt{1 - x^{2}}" />
            </p> *115


            <h2>Implicit Differentiation Definition</h2>
      <p>
       The goal of Implicit Differentiation is to find a single expression for the derivative directly
       from an equation without first solving for y
            </p> *116


            <h2>Higher-Order Derivatives of Implicit Functions</h2>
      <p>
       Finding higher-order derivatives for implicit functions can be found using the same approach as previous sections
       <MathComponent tex="y = - \sqrt{1 - x^{2}}" />
       by first calculating 
       <MathComponent tex="\frac{dy}{dx}, \frac{d^{2}y}{dx^{2}}, ..., and \frac{d^{n-1} y}{dx^{n - 1}}" />
            </p> *117

          
         
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      
                </div>

           
             
                
            </div>
            </div>
           
    );
}