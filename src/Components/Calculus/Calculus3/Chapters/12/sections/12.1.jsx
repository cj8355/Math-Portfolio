import { Link } from "react-router-dom";
import "./12.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch12_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 12 Sec. 1 Parametric Equations</h1>
        <div className="sectionText">

      <h2>Positive Orientation</h2>
      <p className="textBorder">
       
        <p>
            The direction in which a parametris curve is generated as the parameter increases is called the positive orientation
            of the curve (and is indicated by arrows on the curve).
        </p>
        *415
      </p>


      <h2>Parametric Equations of a Line</h2>
      <p className="textBorder">
       <p>The equations</p>
        <MathComponent tex="x = x_{0} + at, \hspace{.2cm} y = y_{0} + bt, \hspace{.2cm} \mathrm{for} \hspace{.2cm} - \infty < t < \infty," />
        <MathComponent tex="\mathrm{where \hspace{.2cm} x_{0}, y_{0}, a, \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} constants \hspace{.2cm} with \hspace{.2cm} a \neq 0, \hspace{.2cm} describe \hspace{.2cm} a \hspace{.2cm} line \hspace{.2cm} with \hspace{.2cm} slope \hspace{.2cm} \frac{b}{a}}" />
        <MathComponent tex="\mathrm{passing \hspace{.2cm} through \hspace{.2cm} the \hspace{.2cm}point \hspace{.2cm} (x_{0},y_{0}). \hspace{.2cm} If \hspace{.2cm} a=0 \hspace{.2cm} and \hspace{.2cm} b \neq 0, \hspace{.2cm} the \hspace{.2cm} line \hspace{.2cm} is \hspace{.2cm} vertical.}" />
        *416
      </p>


      <h2>Derivative for Paramteric Curves</h2>
      <p className="textBorder">
       <p>
        Let x = f(x) and y = g(t), where f and g are differentiable on an interval [a,b]. Then the slope of the line tangent to the curve at the
        point corresponding to t is
       </p>
        <MathComponent tex="\frac{dy}{dx} = \frac{dy/dt}{dx/dt} =  \frac{g'(t)}{f'(t)}." />
        <MathComponent tex="\mathrm{provided \hspace{.2cm} f'(t) \neq 0.}" />
        *417
      </p>
      

      <h2>Arc Length for Curves Defined by Parametric Equations</h2>
      <p className="textBorder">
       <p>
        Consider the curve described by the parametric equations x = f(t), y = g(t), where f' and g' are continuous, and
        the curve is traversed once for
       </p>
        <MathComponent tex="a \leq t \leq b." />
        <p>The arc length of the curve between (f(a),g(a)) and (f(b),g(b)) is</p>
        <MathComponent tex="L = \int_{a}^{b} \sqrt{f'(t)^{2} + g'(t)^{2}} \hspace{.2cm} dt." /> 
        *418
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