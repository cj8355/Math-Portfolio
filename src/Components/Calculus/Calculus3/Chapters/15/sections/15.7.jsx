import { Link } from "react-router-dom";
import "./15.7.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 7 Maximum/Minimum Problems</h1>
        <div className="sectionText">

      
      <h2>Local Maximum/Minimum Values</h2>
      <p className="textBorder">
       <p>Suppose (a,b) is a point in a region R on which f is defined.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} f(x,y) \leq f(a,b)}" />
        <p>for all (x,y) in the domain of f and in some open disk centered at (a,b), then f(a,b) is a local maximum value of f.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} f(x,y) \geq f(a,b)}" />
        <p>for all (x,y) in the domain of f and in some open disk centered at (a,b), then f(a,b) is a local minimum value of f.</p>
        <p>Local laximum and local minimum values are also called local extreme values or local extrema.</p>
        *585
      </p>


      <h2>Derivatives and Local Maximum/Minimum Values</h2>
      <p className="textBorder">
       <p>If f has a local maximum or minimum value at (a,b) and the partial derivatives</p>
        <MathComponent tex="\mathrm{f_{x} \hspace{.2cm} and \hspace{.2cm} f_{y} \hspace{.2cm} exist \hspace{.2cm} at \hspace{.2cm} (a,b), \hspace{.2cm} then \hspace{.2cm} f_{x}(a,b) = f_{y}(a,b)=0.}" />
        *586
      </p>


      <h2>Critical Point</h2>
      <p className="textBorder">
       <p>An interior point (a,b) in the domain of f is a critical point of f if either</p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} f_{x}(a,b) = f_{y}(a,b) = 0, \hspace{.2cm} or}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} at \hspace{.2cm} least \hspace{.2cm} one \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} partial \hspace{.2cm} derivatives \hspace{.2cm} f_{x} \hspace{.2cm} and \hspace{.2cm} f_{y} \hspace{.2cm} does \hspace{.2cm} not \hspace{.2cm} exist \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        *587
      </p>


      <h2>Saddle Point</h2>
      <p className="textBorder">
       <p>
        Consider a function f that is differentiable at a critical point (a,b). Then f has a saddle point at (a,b) if, in every open disk centered
        at (a,b), there are points (x,y) for which
       </p>
        <MathComponent tex="\mathrm{f(x,y)> f(a,b) \hspace{.2cm} and \hspace{.2cm} points \hspace{.2cm} for \hspace{.2cm} which \hspace{.2cm} f(x,y) < f(a,b).}" />
        *588
      </p>


      <h2>Second Derivative Test</h2>
      <p className="textBorder">
       <p>Suppose the second partial derivatives of f are continuous throughout an open disk centered at the point (a,b), where</p>
        <MathComponent tex="\mathrm{f_{x}(a,b) = f_{y}(a,b) = 0}" />
        <MathComponent tex="\mathrm{Let \hspace{.2cm} D(x,y) = f_{xx}(x,y) f_{yy}(x,y) - (f_{xy}(x,y))^{2}.}" />
        <MathComponent tex="\mathrm{1. \hspace{.2cm} If \hspace{.2cm} D(a,b) > 0 \hspace{.2cm} and \hspace{.2cm} f_{xx}(a,b) < 0, \hspace{.2cm} then \hspace{.2cm} f \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} local \hspace{.2cm} maximum \hspace{.2cm} value \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} If \hspace{.2cm} D(a,b) > 0 \hspace{.2cm} and \hspace{.2cm} f_{xx}(a,b) > 0, \hspace{.2cm} then \hspace{.2cm} f \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} local \hspace{.2cm} minimum \hspace{.2cm} value \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} If \hspace{.2cm} D(a,b) < 0, \hspace{.2cm} then \hspace{.2cm} f \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} saddle \hspace{.2cm} point \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        <p>4. If D(a,b) = 0, then the test is inconclusive.</p>
        *589
      </p>


      <h2>Absolute Maximum/Minimum Values</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} defined \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} R \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2} \hspace{.2cm} containing \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} (a,b).}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} f(a,b) \geq f(x,y)}" />
        <p>for every (x,y) in R, then f(a,b) is an absolute maximum value of f on R.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} f(a,b) \leq f(x,y)}" />
        <p>for every (x,y) in R, then f(a,b) is an absolute minimum value of f on R.</p>
        *590
      </p>


      <h2>Finding Absolute Maximum/Minimum Values on Closed Bounded Sets</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} continuous \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} closed \hspace{.2cm} bounded \hspace{.2cm} set \hspace{.2cm} R \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2}.}" />
        <p>To find the absolute maximum and minimum values of f on R:</p>
        <p>1. Determine the values of f at all critical points in R.</p>
        <p>2. Find the maximum and minimum values of f on the boundary of R.</p>
        <p>3. The greatest function value found in Steps 1 and 2 is the absolute maximum value of f on R, and the least function value
            found in Steps 1 and 2 is the absolute minimum value of f on R.
        </p>
        *591
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Critical points</h4>
                      <p>
                        Find all critical points of the following functions.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = 3x^{2} - 4y^{2}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{f_{x}(a,b) = f_{y}(a,b) = 0 \hspace{.2cm} at \hspace{.2cm} (0,0)}" />    
                         
                    </p>

                    *592
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Critical points</h4>
                      <p>
                        Find all critical points of the following functions.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = x^{4} - 2x^{2} + y^{2} - 4y + 5}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{The \hspace{.2cm} partial \hspace{.2cm} derivatives \hspace{.2cm} f_{x}/f_{y} \hspace{.2cm} don't \hspace{.2cm} exist \hspace{.2cm} at \hspace{.2cm} (0,2), \hspace{.2cm} (\pm 1, 2)}" />    
                         
                    </p>

                    *593
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Analyzing critical points</h4>
                      <p>
                        Find the critical points of the following function. Use the Second Derivative Test to determine (if possible) whether each
                        critical point corresponds to a local maximum, a local minimum, or a saddle point. If the Second Derivative Test is inconclusive, determine
                        the behavior of the function at the critical points.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = -4x^{2} + 8y^{2} - 3}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{Saddle \hspace{.2cm} point \hspace{.2cm} at \hspace{.2cm} (0,0)}" />    
                         
                    </p>

                    *594
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Analyzing critical points</h4>
                      <p>
                        Find the critical points of the following function. Use the Second Derivative Test to determine (if possible) whether each
                        critical point corresponds to a local maximum, a local minimum, or a saddle point. If the Second Derivative Test is inconclusive, determine
                        the behavior of the function at the critical points.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = f(x,y) = ye^{x} - e^{y}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{Saddle \hspace{.2cm} point \hspace{.2cm} at \hspace{.2cm} (0,0)}" />    
                         
                    </p>

                    *595
                    </div>
                </div>




            </div>
            </div>
           
    );
}