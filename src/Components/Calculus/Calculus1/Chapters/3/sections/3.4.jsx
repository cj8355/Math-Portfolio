import { Link } from "react-router-dom";
import "./3.4.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 4 The Product and Quotient Rules</h1>
        <div className="sectionText">

        <h2>Product Rule</h2>
      <p>
            If f and g are differentiable at x, then <MathComponent tex="\frac{d}{dx} (f(x)g(x)) = f'(x)g(x) + f(x)g'(x)" />
            </p> *84

            
            <h2>Quotient Rule</h2>
      <p>
            If f and g are differentiable at x and <MathComponent tex="g(x) \neq 0" />, then the derivative of f/g at x exists and
             <MathComponent tex="\frac{d}{dx} ( \frac{f(x)}{g(x)} )= \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^{2}}" />
            </p> *85


            <h2>Power Rule</h2>
      <p>
            If n is any real number, then
             <MathComponent tex="\frac{d}{dx} (x^{n})= nx^{n - 1}" />
            </p> *86


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                      <h2></h2>
                    
                        
                    *
                </div>

             
             
                
            </div>
            </div>
           
    );
}