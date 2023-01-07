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