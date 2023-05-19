import { Link } from "react-router-dom";
import "./15.8.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 8 Lagrange Multipliers</h1>
        <div className="sectionText">

      
      <h2>Parallel Gradients</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} function \hspace{.2cm} in \hspace{.2cm} a \hspace{.2cm} region \hspace{.2cm} of \hspace{.2cm} \mathbb{R}^{2} \hspace{.2cm} that \hspace{.2cm} contains \hspace{.2cm} the \hspace{.2cm} smooth \hspace{.2cm} curve \hspace{.2cm} C \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} g(x,y) = 0.}" />
        <p>Assume f has a local extreme value on C at a point P(a,b).</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \nabla f(a,b) \hspace{.2cm} is \hspace{.2cm} orthogonal \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} line \hspace{.2cm} tangent \hspace{.2cm} to \hspace{.2cm} C \hspace{.2cm} at \hspace{.2cm} P.}" />
        <MathComponent tex="\mathrm{Assuming \hspace{.2cm} \nabla g(a,b) \neq 0, \hspace{.2cm} it \hspace{.2cm} follows \hspace{.2cm} that \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} real \hspace{.2cm} number \hspace{.2cm} \lambda (called \hspace{.2cm} a \hspace{.2cm} Larange \hspace{.2cm} multiplier) \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} \nabla f(a,b) = \lambda \nabla g(a,b).}" />
        *596
      </p>


      <h2>Lagrange Multipliers: Absolute Extrema on Closed and Bounded Constrint Curves</h2>
      <p className="textBorder">
       <p>Let the objective function f and the constraint function g be differentiable on a region of </p>
        <MathComponent tex="\mathrm{\mathbb{R}^{2} \hspace{.2cm} with \hspace{.2cm} \nabla g(x,y) \neq 0 \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} curve \hspace{.2cm} g(x,y) = 0.}" />
        <p>To locate the absolute maximum and minimum values of f subject to the constraint g(x,y) = 0, carry out the following steps.</p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} Find \hspace{.2cm} the \hspace{.2cm} values \hspace{.2cm} of \hspace{.2cm} x,y, \hspace{.2cm} and \hspace{.2cm} \lambda \hspace{.2cm} (if \hspace{.2cm} they \hspace{.2cm} exist) \hspace{.2cm} that \hspace{.2cm} satisfy \hspace{.2cm} the \hspace{.2cm} equations}" />
        <MathComponent tex="\mathrm{\nabla f(x,y) = \lambda \nabla g(x,y) \hspace{.2cm} and \hspace{.2cm} g(x,y) = 0.}" />
        <p>
            2. Evaluate f at the values (x,y) found in Step 1 and at the endpoints of the constrint curve (if they exist). Select the largest and smallest
            corresponding function values. These values are the absolute maximum and minimum values of f subject to the constraint.
        </p>
        *597
      </p>


      <h2>Lagrange Multipliers: Absolute Extrema on Closed and Bounded Constrint Surfaces</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} and \hspace{.2cm} g \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} region \hspace{.2cm} of \hspace{.2cm} \mathbb{R}^{3} \hspace{.2cm} with \hspace{.2cm} \nabla g(x,y,z) \neq 0 \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} surface \hspace{.2cm} g(x,y,z) = 0.}" />
        <p>
            To locate the absolute maximum and minimum values of f subject to the constraint g(x,y,z) = 0, carry out the following steps.
        </p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} Find \hspace{.2cm} the \hspace{.2cm} values \hspace{.2cm} of \hspace{.2cm} x,y,z, \hspace{.2cm} and \hspace{.2cm} \lambda \hspace{.2cm} that \hspace{.2cm} satisfy \hspace{.2cm} the \hspace{.2cm} equations}" />
        <MathComponent tex="\mathrm{\nabla f(x,y,z) = \lambda \nabla g(x,y,z) \hspace{.2cm} and \hspace{.2cm} g(x,y,z) = 0.}" />
        <p>
            2. Among the points (x,y,z) found in Step 1, select the largest and smallest corresponding function values. These values are the absolute
            maximum and minimum values of f subject to the constraint.
        </p>
        *598
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>




            </div>
            </div>
           
    );
}