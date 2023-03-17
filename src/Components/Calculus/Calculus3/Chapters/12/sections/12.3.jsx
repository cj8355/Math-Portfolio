import { Link } from "react-router-dom";
import "./12.3.css";
import { MathComponent } from "mathjax-react";
import graph2 from "./images/graph2.png";
import graph3 from "./images/graph3.png";


export default function Calculus3_Ch12_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 12 Sec. 3 Calculus in Polar Coordinates</h1>
        <div className="sectionText">

      <h2>Slope of a Tangent Line</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} at \hspace{.2cm} \theta_{0}.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} slope \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} line \hspace{.2cm} tangent \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} curve \hspace{.2cm} r = f(\theta) \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} (f(\theta_{0}), \theta_{0}) \hspace{.2cm} is}" />
        <MathComponent tex="\frac{dy}{dx} = \frac{f'(\theta_{0}) \hspace{.2cm} sin \hspace{.2cm} \theta_{0} + f(\theta_{0}) \hspace{.2cm} cos \hspace{.2cm} \theta_{0}}{f'(\theta_{0}) \hspace{.2cm} cos \hspace{.2cm} \theta_{0} - f(\theta_{0}) \hspace{.2cm} sin \hspace{.2cm} \theta_{0}}," />
        <p>provided the denominator is nonzero at the point.</p>
        <MathComponent tex="\mathrm{At \hspace{.2cm} angles \hspace{.2cm} \theta_{0} \hspace{.2cm} for \hspace{.2cm} which \hspace{.2cm} f(\theta_{0}) = 0, \hspace{.2cm} f'(\theta_{0}) \neq 0, \hspace{.2cm} and \hspace{.2cm} cos \hspace{.2cm} \theta_{0} \neq 0, \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{the \hspace{.2cm} tangent \hspace{.2cm} line \hspace{.2cm} is \hspace{.2cm}\theta = \theta_{0} \hspace{.2cm} with \hspace{.2cm} slope \hspace{.2cm} tan \hspace{.2cm} \theta_{0}.}" /> 
        *432
      </p>


      <h2>Area of Regions in Polar Coordinates</h2>
      <p className="textBorder">
       <p>Let R be the region bounded by the graphs of </p>
        <MathComponent tex="r = f(\theta) \hspace{.2cm} \mathrm{and} \hspace{.2cm} r = g(\theta), \hspace{.2cm} \mathrm{between} \hspace{.2cm} \theta = \alpha \hspace{.2cm} \mathrm{and} \hspace{.2cm} \theta = \beta," />
        <p>where f and g are continuous and </p>
        <MathComponent tex="f(\theta) \geq g(\theta) \geq 0 \hspace{.2cm} \mathrm{on} \hspace{.2cm} [\alpha, \beta]," />
        <p>The area of R is</p>
        <MathComponent tex="\int_{\alpha}^{\beta} \frac{1}{2} (f(\theta)^{2} - g(\theta)^{2}) \hspace{.2cm} d\theta." />
        *433
      </p>


      <h2>Arc Length of a Polar Curve</h2>
      <p className="textBorder">
       <p> </p>
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} have \hspace{.2cm} a \hspace{.2cm} continuous \hspace{.2cm} derivative \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} interval \hspace{.2cm} [\alpha, \beta].}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} arc \hspace{.2cm} length \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} polar \hspace{.2cm} curve \hspace{.2cm} r = f(\theta) \hspace{.2cm} on \hspace{.2cm} [\alpha, \beta] \hspace{.2cm} is}" />
        <MathComponent tex="L = \int_{\alpha}^{\beta} \sqrt{f(\theta)^{2} + f'(\theta)^{2}} \hspace{.2cm} d\theta." /> 
        *434
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Slopes of tangent lines</h4>
                      <p>
                        Find the slope of the line tangent to the following polar curve at the given points.
                      </p>
                      <MathComponent tex="r = 1 - sin \hspace{.2cm} \theta; \hspace{.2cm} \bigg(\frac{1}{2}, \frac{\pi}{6} \bigg)" /> 
                     
                    <p>
                        Answer: <br/>
                        0  
                         
                    </p>

                    *435
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Slopes of tangent lines</h4>
                      <p>
                        Find the slope of the line tangent to the following polar curve at the given points.
                      </p>
                      <MathComponent tex="r = 6 + 3cos \hspace{.2cm} \theta; \hspace{.2cm} (3,\pi) \hspace{.2cm} \mathrm{and} \hspace{.2cm} (9,0)" /> 
                     
                    <p>
                        Answer: <br/>
                        Undefined, undefined
                         
                    </p>

                    *436
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Areas of regions</h4>
                      <p>
                        Make a sketch of the region and its bounding curves. Find the area of the region.
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} region \hspace{.2cm} inside \hspace{.2cm} the \hspace{.2cm} curve \hspace{.2cm} r = \sqrt{cos \hspace{.1cm} \theta}}" />
                     
                    <p>
                        Answer: <br/>
                        <img src={graph2} alt="Graph of function" ></img>
                         <p>Area = 1</p>    
                         
                    </p>

                    *437
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Areas of regions</h4>
                      <p>
                        Make a sketch of the region and its bounding curves. Find the area of the region.
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} region \hspace{.2cm} inside \hspace{.2cm} the \hspace{.2cm} limacon \hspace{.2cm} r = 2 + cos \hspace{.1cm} \theta}" />
                     
                    <p>
                        Answer: <br/>
                        <img src={graph3} alt="Graph of function" ></img>
                        <MathComponent tex="\mathrm{Area = \frac{9\pi}{2}}" />  
                         
                    </p>

                    *438
                    </div>
                </div>



            </div>
            </div>
           
    );
}