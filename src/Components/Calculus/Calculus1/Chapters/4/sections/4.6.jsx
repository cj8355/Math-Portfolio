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
                      <h4>Linear Approximation</h4>
                      <div>
                        <p><b>a.</b>Write the equation of the line that represents the linear approximation to the following
                          function at the given point a.
                        </p>
                        <p><b>b.</b>Use the linear approximation to estimate the given quantity.</p>
                        <p><b>c.</b>Compute the percent error in your approximation, 100 |approximation - exact|/|exact|,
                          where the exact value is given by a calculator.
                        </p>
                      </div>
                      
                      
                     <p>
                     <MathComponent tex="f(x) = 12 - x^{2}" /> a = 2; f(2.1)
                     </p>
                      
                      <p>
                        Answer:<br/>
                        a. <MathComponent tex="L(x) = -4x + 16" />
                        b. 7.6
                        c. 0.13% error
                      </p>

                    *185
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Linear Approximation</h4>
                      <div>
                        <p><b>a.</b>Write the equation of the line that represents the linear approximation to the following
                          function at the given point a.
                        </p>
                        <p><b>b.</b>Use the linear approximation to estimate the given quantity.</p>
                        <p><b>c.</b>Compute the percent error in your approximation, 100 |approximation - exact|/|exact|,
                          where the exact value is given by a calculator.
                        </p>
                      </div>
                      
                      
                     <p>
                     <MathComponent tex="f(x) = (8 + x)^{-1/3}" /> a = 0; f(-0.1)
                     </p>
                      
                      <p>
                        Answer:<br/>
                        a. <MathComponent tex="L(x) = \frac{1}{2} - \frac{x}{48}" />
                        b. 0.5
                        c. 0.003% error
                      </p>

                    *186
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Differentials</h4>
                      <div>
                        <p>Consider the following function and express the relationship between a small change in x and the corresponding change
                          in y in the form dy = f'(x)dx.
                        </p>
                        
                      </div>
                      
                      
                     <p>
                     <MathComponent tex="f(x) = 2x + 1" />
                     </p>
                      
                      <p>
                        Answer:
                        <MathComponent tex="dy = 2 dx" />
                        
                      </p>

                    *187
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Differentials</h4>
                      <div>
                        <p>Consider the following function and express the relationship between a small change in x and the corresponding change
                          in y in the form dy = f'(x)dx.
                        </p>
                        
                      </div>
                      
                      
                     <p>
                     <MathComponent tex="f(x) = 3x^{3} - 4x" />
                     </p>
                      
                      <p>
                        Answer:
                        <MathComponent tex="dy = (9x^{2} - 4) dx" />
                        
                      </p>

                    *188
                </div>

             
                
            </div>
            </div>
           
    );
}