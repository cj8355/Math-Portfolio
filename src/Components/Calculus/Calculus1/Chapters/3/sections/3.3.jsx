import { Link } from "react-router-dom";
import "./3.3.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 3 Rules of Differentiation</h1>
        <div className="sectionText">

        <h2>Constant Rule</h2>
      <p>
            If c is a real number , then <MathComponent tex="\frac{d}{dx} (c) = 0" />
            </p> *72

            

            <h2>Power Rule</h2>
      <p>
            If n is a nonnegative integer , then <MathComponent tex="\frac{d}{dx} (x^{n}) = nx^{n - 1}" />
            </p> *73


            <h2>Constant Multiple Rule</h2>
      <p>
            If f is differentiable at x and c is a constant , then <MathComponent tex="\frac{d}{dx} (cf(x)) = cf'(x)" />
            </p> *74

            <h2>Sum Rule</h2>
      <p>
            If f and g are differentiable at x , then <MathComponent tex="\frac{d}{dx} (f(x) + g(x)) = f'(x) + g'(x)" />
            </p> *75


            <h2> The Number e</h2>
      <p>
            The number e = 2.718281828459... satisfies <MathComponent tex="\lim_{h\to 0} \frac{e^{h} - 1}{h} = 1" />
            It is the base of the batural exponential function <MathComponent tex="f(x) = e^{x}" />
            </p> *76

            <h2>The Derivative of e^x</h2>
            <p>
                The function <MathComponent tex="f(x) = e^{x}" /> is differentiable for all real numbers x, and
                <MathComponent tex="\frac{d}{dx} (e^{x}) = e^{x}" />
            </p> *77

            <h2>Higher-Order Derivatives</h2>
            <p>
                Assuming  <MathComponent tex="y = f(x)" /> can be differentiated as often as necessary. the second derivative of f is
                <MathComponent tex="f''(x) = \frac{d}{dx} (f'(x))" />
                For integers <MathComponent tex="n \geq 1" /> the nth derivative of f is
                <MathComponent tex="f^{('')} (x) = \frac{d}{dx} (f^{(n - 1)} (x))" />
            </p> *78


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                      
                        
                    *
                </div>

             
             
                
            </div>
            </div>
           
    );
}