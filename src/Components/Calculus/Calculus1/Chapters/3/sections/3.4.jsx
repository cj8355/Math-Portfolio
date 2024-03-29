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
                      <h4>Derivatives</h4>
                    <p>Find and simplify the derivative of the following function.</p>
                    <MathComponent tex="f(x) = \frac{x}{x + 1}" />

                    <p>
                        Answer:
                        <MathComponent tex="\frac{1}{(x + 1)^{2}}" />
                    </p>
                    *87
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Derivatives</h4>
                    <p>Find and simplify the derivative of the following function.</p>
                    <MathComponent tex="f(x) = 3x^{-9}" />

                    <p>
                        Answer:
                        <MathComponent tex="-27x^{-10}" />
                    </p>
                    *88
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Derivatives</h4>
                    <p>Find and simplify the derivative of the following function.</p>
                    <MathComponent tex="g(w) = \frac{\sqrt{w} + w}{\sqrt{w} - w}" />

                    <p>
                        Answer:
                        <MathComponent tex="\frac{\sqrt{w}}{(\sqrt{w} - w)^{2}}" />
                    </p>
                    *89
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Higher-Order Derivatives</h4>
                    <p>Find f'(x), f''(x), f'''(x).</p>
                    <MathComponent tex="f(x) = x^{2} (2 + x^{-3})" />

                    <p>
                        Answer:
                        <MathComponent tex="f'(x) = 4x - \frac{1}{x^{2}}" />
                        <MathComponent tex="f''(x) = 2( \frac{1}{x^{3}} + 2)" />
                        <MathComponent tex="f'''(x) = - \frac{6}{x^{4}}" />
                    </p>
                    *90
                </div>


                <div className="Example5">
                    <h3>Example 5</h3>
                      <h4>First and second derivatives</h4>
                    <p>Find f'(x) and f''(x).</p>
                    <MathComponent tex="f(x) = \frac{x^{2} - 7x}{x + 1}" />

                    <p>
                        Answer:
                        <MathComponent tex="f'(x) = \frac{x^{2} + 2x - 7}{(x + 1)^{2}}" />
                        <MathComponent tex="f''(x) = \frac{16}{(x + 1)^{3}}" />
                        
                    </p>
                    *91
                </div>
             
             
                
            </div>
            </div>
           
    );
}