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
                    <h4>Implicit Differentiation</h4>
                      <p>Carry out the following steps</p>
                      <p>
                        a. Use implicit differentiation to find <MathComponent tex="\frac{dy}{dx}" />
                        b. Find the slope of the curve at the given point.
                      </p>
                     
                      <MathComponent tex="x^{4} + y^{4} = 2" /> (1, -1)


                    <p>
                        Answer:
                        a.
                        <MathComponent tex="y^{4} = 2 - x^{4}" />
                        <MathComponent tex="- \frac{x^{3}}{y^{3}}" />
                        b.
                        1
                    </p>
                    *118
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                    <h4>Implicit Differentiation</h4>
                      
                      <p>
                        Use implicit differentiation to find <MathComponent tex="\frac{dy}{dx}" />
                       
                      </p>
                     
                      <MathComponent tex="sinx + siny = y" /> 


                    <p>
                        Answer:
                        <MathComponent tex="\frac{cos x}{1 - cos y}" />
                        
                    </p>
                    *119
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                    <h4>Implicit Differentiation</h4>
                      
                      <p>
                        Use implicit differentiation to find <MathComponent tex="\frac{dy}{dx}" />
                       
                      </p>
                     
                      <MathComponent tex="6x^{3} + 7y^{3} = 13xy" /> 


                    <p>
                        Answer:
                        <MathComponent tex="\frac{13y - 18x^{2}}{21y^{2} - 13x}" />
                        
                    </p>
                    *120
                </div>

                <div className="Example4">
                    <h3>Example 4</h3>
                    <h4>Second Derivatives</h4>
                      
                      <p>
                        Find <MathComponent tex="\frac{d^{2}y}{dx^{2}}" />
                       
                      </p>
                     
                      <MathComponent tex="x + y^{2} = 1" /> 


                    <p>
                        Answer:
                        <MathComponent tex="- \frac{1}{4y^{3}}" />
                        
                    </p>
                    *121
                </div>
           
             
                
            </div>
            </div>
           
    );
}