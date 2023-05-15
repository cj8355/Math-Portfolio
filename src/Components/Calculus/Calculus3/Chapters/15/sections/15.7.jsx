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


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
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