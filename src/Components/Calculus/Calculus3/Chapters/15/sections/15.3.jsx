import { Link } from "react-router-dom";
import "./15.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 3 Partial Derivatives</h1>
        <div className="sectionText">

      
      <h2>Partial Derivatives</h2>
      <p className="textBorder">
       <p>The partial derivative of f with respect to x at the point (a, b) is</p>
        <MathComponent tex="\mathrm{f_{x}(a,b) = \lim_{h \to 0} \frac{f(a+h, b) - f(a,b)}{h}}." />
        <p>The partial derivative of f with respect to y at the point (a, b) is</p>
        <MathComponent tex="\mathrm{f_{y}(a,b) = \lim_{h \to 0} \frac{f(a, b + h) - f(a,b)}{h}}." />
        <p>provided these limits exist.</p>
        
        *550
      </p>


      <h2>(Clairaut) Equality of Mixed Partial Derivatives</h2>
      <p className="textBorder">
       <p>Assume f is defined on an open set D of</p>
        <MathComponent tex="\mathrm{\mathbb{R}^{2}, \hspace{.2cm} and \hspace{.2cm} that \hspace{.2cm} f_{xy} \hspace{.2cm} and \hspace{.2cm} f_{yx} \hspace{.2cm} are \hspace{.2cm} continuous \hspace{.2cm} throughout \hspace{.2cm} D.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} f_{xy} = f_{yx} \hspace{.2cm} at \hspace{.2cm} all \hspace{.2cm} points \hspace{.2cm} of \hspace{.2cm} D.}" />
        *551
      </p>


      <h2>Differentiability</h2>
      <p className="textBorder">
       <p>
        THe function z = f(x,y) is differenitable at (a,b) provided 
       </p>
        <MathComponent tex="\mathrm{f_{x}(a,b) \hspace{.2cm} and \hspace{.2cm} f_{y}(a,b) \hspace{.2cm} exist \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} change \Delta z = f(a+ \Delta x, b + \Delta y) - f(a,b) \hspace{.2cm} equals}" />
        <MathComponent tex="\mathrm{\Delta z = f_{x} (a,b) \Delta x + f_{y} (a,b) \Delta y + \epsilon_{1} \Delta x + \epsilon_{2} \Delta y,}" />
        <p>where for fixed a and b,</p>
        <MathComponent tex="\mathrm{\epsilon_{1} \hspace{.2cm} and \hspace{.2cm} \epsilon_{2} \hspace{.2cm} are \hspace{.2cm} functions \hspace{.2cm} that \hspace{.2cm} depend \hspace{.2cm} only \hspace{.2cm} on \hspace{.2cm} \Delta x \hspace{.2cm} and \hspace{.2cm} \Delta y,}" />
        <MathComponent tex="\mathrm{with \hspace{.2cm} (\epsilon_{1}, \epsilon_{2}) \to (0,0) \hspace{.2cm} as \hspace{.2cm} (\Delta x, \Delta y) \to (0,0).}" />
        <p>A function is differentiable on an open set R if it is differentiable at every point of R.</p>
        *552
      </p>


      <h2>Conditions for Differentiability</h2>
      <p className="textBorder">
       <p>Suppose the function f has partial derivatives</p>
        <MathComponent tex="\mathrm{f_{x} \hspace{.2cm} and \hspace{.2cm} f_{y} \hspace{.2cm} defined \hspace{.2cm} on \hspace{.2cm} an \hspace{.2cm} open \hspace{.2cm} set \hspace{.2cm} containing \hspace{.2cm} (a,b), \hspace{.2cm} with \hspace{.2cm} f_{x} \hspace{.2cm} and \hspace{.2cm} f_{y} \hspace{.2cm} continuous \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        <p>Then f is differentiable at (a,b).</p>
        *553
      </p>


      <h2>Differentiable Implies Continuous</h2>
      <p className="textBorder">
       <p>If a function f is differentiable at (a, b), then it is continuous at (a, b).</p>
        
        *554
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Partial Derivatives</h4>
                      <p>
                        Find the first partial derivatives of the following functions.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = xe^{y}}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{f_{x} (x,y) = e^{y}; \hspace{.2cm} f_{y} (x,y) = xe^{y} }" />    
                         
                    </p>

                    *555
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Partial Derivatives</h4>
                      <p>
                        Find the first partial derivatives of the following functions.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = x \hspace{.2cm} cos \hspace{.2cm} xy}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{f_{x} (x,y) = cos \hspace{.2cm} xy - xy \hspace{.2cm} sin \hspace{.2cm} xy; \hspace{.2cm} f_{y} (x,y) = - x^{2} \hspace{.2cm} sin \hspace{.2cm} xy }" />    
                         
                    </p>

                    *556
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Partial Derivatives</h4>
                      <p>
                        Find the first partial derivatives of the following functions.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = x^{2y}}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{f_{x} (x,y) = 2yx^{2y - 1}; \hspace{.2cm} f_{y} (x,y) = 2x^{2y} \hspace{.2cm} ln \hspace{.2cm} x }" />    
                         
                    </p>

                    *557
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Second partial derivatives</h4>
                      <p>
                        Find the four second partial derivatives of the following function.
                      </p>
                      <MathComponent tex="\mathrm{h(x,y) = x^{2} + xy^{2} + 1}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{h_{xx}(x,y) = 6x; \hspace{.2cm} h_{xy}(x,y) = 2y = h_{yx}; \hspace{.2cm} h_{yy}(x,y) = 2x}" />    
                         
                    </p>

                    *558
                    </div>
                </div>


                

            </div>
            </div>
           
    );
}