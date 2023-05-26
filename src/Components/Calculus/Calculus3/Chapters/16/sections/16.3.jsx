import { Link } from "react-router-dom";
import "./16.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 3 Double Integrals in Polar Coordinates</h1>
        <div className="sectionText">

      
      <h2>Change of Variables for Double Integrals over Polar Rectangle Regions</h2>
      <p className="textBorder">
       <p>Let f be continuous on the region R in the xy-plane expressed in polar coordinates as</p>
        <MathComponent tex="\mathrm{R = \{(r, \theta): 0 \leq a \leq r \leq b, \hspace{.2cm} \alpha \leq \theta \leq \beta \}, \hspace{.2cm} where \hspace{.2cm} \beta - \alpha \leq 2 \pi.}" />
        <p>Then f is integrable over R, and the double integral of f over R is</p>
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{\alpha}^{\beta} \int_{a}^{b} f(r \hspace{.2cm} cos \hspace{.2cm} \theta, \hspace{.2cm} r \hspace{.2cm} sin \hspace{.2cm} \theta) \hspace{.2cm} r \hspace{.2cm} dr \hspace{.2cm} d \theta ." />
        *617
      </p>


      <h2>Change of Variables for Double Integrals over More General Polar Regions</h2>
      <p className="textBorder">
       <p>Let f be continuous on the region R in the xy-plane expressed in polar coordinates as</p>
       <MathComponent tex="\mathrm{R = \{(r, \theta): 0 \leq g(\theta) \leq r \leq h(\theta), \hspace{.2cm} \alpha \leq \theta \leq \beta \},}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} 0 < \beta - \alpha \leq 2 \pi. \hspace{.2cm} Then}" />
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{\alpha}^{\beta} \int_{g(\theta)}^{h(\theta)} f(r \hspace{.2cm} cos \hspace{.2cm} \theta, \hspace{.2cm} r \hspace{.2cm} sin \hspace{.2cm} \theta) \hspace{.2cm} r \hspace{.2cm} dr \hspace{.2cm} d \theta ." />
        *618
      </p>


      <h2>Area of Polar Regions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} area \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} polar \hspace{.2cm} region \hspace{.2cm} R = \{(r, \theta): 0 \leq g(\theta) \leq r \leq h(\theta), \hspace{.2cm} \alpha \leq \theta \leq \beta \},}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} 0 < \beta - \alpha \leq 2 \pi, \hspace{.2cm} is }" />
        <MathComponent tex="\mathrm{A = \int_{R} \int \hspace{.2cm} dA = \int_{\alpha}^{\beta} \int_{g(\theta)}^{h(\theta)} r \hspace{.2cm} dr \hspace{.2cm} d \theta .}" />
        *619
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Cartesian to polar coordinates</h4>
                      <p>
                        Evaluate the following integral using polar coordinates.
                      </p>
                      <MathComponent tex="\mathrm{Assume \hspace{.2cm} (r, \theta) \hspace{.2cm} are \hspace{.2cm} polar \hspace{.2cm} coordinates.}" />
                      <MathComponent tex="\int_{R} \int (x^{2} + y^{2}) \hspace{.2cm} dA: \hspace{.2cm} R = \{(r, \theta): 0 \leq r \leq 4, \hspace{.2cm} 0 \leq \theta \leq 2 \pi \}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="128 \pi" />    
                         
                    </p>

                    *620
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Cartesian to polar coordinates</h4>
                      <p>
                        Evaluate the following integral using polar coordinates.
                      </p>
                      <MathComponent tex="\mathrm{Assume \hspace{.2cm} (r, \theta) \hspace{.2cm} are \hspace{.2cm} polar \hspace{.2cm} coordinates.}" />
                      <MathComponent tex="\int_{R} \int 2xy \hspace{.2cm} dA: \hspace{.2cm} R = \{(x,y): x^{2} + y^{2} \leq 9, \hspace{.2cm} y \geq 0 \}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="0" />    
                         
                    </p>

                    *621
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Cartesian to polar coordinates</h4>
                      <p>
                        Evaluate the following integral using polar coordinates.
                      </p>
                      <MathComponent tex="\mathrm{Assume \hspace{.2cm} (r, \theta) \hspace{.2cm} are \hspace{.2cm} polar \hspace{.2cm} coordinates.}" />
                      <MathComponent tex="\int_{R} \int \sqrt{x^{2} + y^{2}} \hspace{.2cm} dA: \hspace{.2cm} R = \{(x,y): 1 \leq x^{2} + y^{2} \leq 4 \}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{14 \pi}{3}" />    
                         
                    </p>

                    *622
                    </div>
                </div>



            </div>
            </div>
           
    );
}