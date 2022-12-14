import { Link } from "react-router-dom";
import "./3.1.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 1 Introducing the Derivative</h1>
        <div className="sectionText">

        <h2>Rate of Change and the Slope of the Tangent Line</h2>
        <span>
            <p>
            The average rate of change in f on the interval [a, x] is the slope of the corresponding secant line: 
            <MathComponent tex="m_{sec} = \frac{f(x) - f(a)}{x - a}" />
            </p>
            <p>
                The instantaneous rate of change in f at a is 
                <MathComponent tex="m_{tan} = \lim_{x\to a} \frac{f(x) - f(a)}{x - a}" />
            </p>
            <p>
                which is also the slope of the tangent line at (a, f(a)), provided this limit exists.
                The tangent line is the unique line through (a, f(a)) with slope 
                <MathComponent tex="m_{tan}" />
                Its equation is
                <MathComponent tex="y - f(a) = m_{tan} = (x - a)" />
            </p>
    
        </span> *57


        <h2>Rate of Change and the Slope of the Tangent Line</h2>
        <span>
            <p>
            The average rate of change in f on the interval [a, a + h] is the slope of the corresponding secant line: 
            <MathComponent tex="m_{sec} = \frac{f(a + h) - f(a)}{h}" />
            </p>
            <p>
                The instantaneous rate of change in f at a is 
                <MathComponent tex="m_{tan} = \lim_{h\to 0} \frac{f(a + h) - f(a)}{h}" />
            </p>
            <p>
                which is also the slope of the tangent line at (a, f(a)), provided this limit exists.
                
            </p>
    
        </span> *58


        <h2>The Derivative of a Function at a Point</h2>
        <span>
            <p>
            The derivative of f at a, denoted f'(a), is given by either of the two following limits,
            provided the limits exist and a is in the domain of f: 
            <MathComponent tex="f'(a) = \lim_{x\to a} \frac{f(x) - f(a)}{x - a}" /> (1)
            </p>
            <p>or</p>
            <p>
              
                <MathComponent tex="f'(a) = \lim_{h\to 0} \frac{f(a + h) - f(a)}{h}" />
                (2)
            </p>
            <p>
                If f'(a) exists, we say that f is differentiable at a.
                
            </p>
    
        </span> *59
      

            
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                        <p>Derivatives and tangent lines</p>
                        <p>a. For the following functions and values of a, find f'(a).</p>
                        <p>b. Determine an equation of the line tangent to the graph of f at the point (a, f(a)) for the given value of a.</p>
                        <MathComponent tex="f(x) = 8x" />
                        <MathComponent tex="a = -3" />

                        <p>Answer:</p>
                        <p>a. 8 </p>
                        <p>b.  <MathComponent tex="y = 8x" /></p>

                        <div>
                        <MathComponent tex="f(x) = \frac{1}{x + 5}" />
                        <MathComponent tex="a = 5" />

                        <p>Answer:</p>
                        <p>a.  <MathComponent tex="- \frac{1}{100}" /></p>
                        <p>b.  <MathComponent tex="y = - \frac{x}{100} + \frac{3}{20}" /></p>
                        </div>
                    <span>
                        
                    </span> *60
                </div>

              
                <div className="Example2">
                    <h3>Example 2</h3>
                        <p>Derivatives Calculations</p>
                        <p>Evaluate the derivative of the following functions at the given point.</p>
                        
                        <div>
                        <MathComponent tex="f(t) = \frac{1}{t + 1}" />
                        <MathComponent tex="a = 1" />

                        <p>Answer:</p>
                        <p><MathComponent tex="- \frac{1}{4}" /></p>
                        
                        </div>
                    <span>
                        
                    </span> *61
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                        <p>Find the Function</p>
                        <p>The following limits represent the slope of a curve <MathComponent tex="y = f(x)" /> at the point (a, f(a)).
                            Determine a possible function f and number a; then calculate the limit.
                        </p>
                        
                        <div>
                        <MathComponent tex="\lim_{x\to 2} \frac{5x^{2} - 20}{x - 2}" />
                        

                        <p>Answer:</p>
                        <p><MathComponent tex="f(x) = 5x^{2}" />
                        <MathComponent tex="a = 2" />
                        Limit  = 20
                        </p>
                        
                        </div>
                    <span>
                        
                    </span> *62
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                        <p>Find the Function</p>
                        <p>The following limits represent the slope of a curve <MathComponent tex="y = f(x)" /> at the point (a, f(a)).
                            Determine a possible function f and number a; then calculate the limit.
                        </p>
                        
                        <div>
                        <MathComponent tex="\lim_{h\to 0} \frac{(2 + h)^{4} - 16}{h}" />
                        

                        <p>Answer:</p>
                        <p><MathComponent tex="f(x) = x^{4}" />
                        <MathComponent tex="a = 2" />
                        Limit  = 32
                        </p>
                        
                        </div>
                    <span>
                        
                    </span> *63
                </div>

                
            </div>
            </div>
           
    );
}