import { Link } from "react-router-dom";
import "./16.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 2 Double Integrals over General Regions</h1>
        <div className="sectionText">

      
      <h2>Double Integrals over Nonrectangular Regions</h2>
      <p className="textBorder">
       <p>
        Let R be a region bounded below and above by the graphs of the continuous functions y = g(x) and y = h(x), respectively, and by the lines
        x = a and x = b. If f is continuous on R, then
       </p>
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{a}^{b} \int_{g(x)}^{h(x)} f(x,y) \hspace{.2cm} dy \hspace{.2cm} dx." />
        <p>
        Let R be a region bounded below and above by the graphs of the continuous functions x = g(y) and x = h(y), respectively, and by the lines
        y = c and y = d. If f is continuous on R, then
       </p>
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{c}^{d} \int_{g(y)}^{h(y)} f(x,y) \hspace{.2cm} dx \hspace{.2cm} dy." />
        *611
      </p>


      <h2>Areas of Regions by Double Integrals</h2>
      <p className="textBorder">
       <p>Let R be a region in the xy-plane. Then</p>
        <MathComponent tex="\mathrm{area \hspace{.2cm} of \hspace{.2cm} R = \int_{R} \int \hspace{.2cm} dA.}" />
        *612
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Evaluating integrals</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int_{0}^{1} \int_{x}^{1} 6y \hspace{.2cm} dy \hspace{.2cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="2" />    
                         
                    </p>

                    *613
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Evaluating integrals</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int_{0}^{1} \int_{0}^{x} 2e^{x^{2}} \hspace{.2cm} dy \hspace{.2cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="e - 1" />    
                         
                    </p>

                    *614
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Evaluating integrals</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi / 2} \int_{y}^{\pi / 2} 6 \hspace{.2cm} sin \hspace{.2cm} (2x-3) \hspace{.2cm} dx \hspace{.2cm} dy" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="2" />    
                         
                    </p>

                    *615
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Evaluating integrals</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int_{\pi / 2}^{\pi} \int_{0}^{y^{2}} cos \hspace{.2cm} \frac{x}{y} \hspace{.2cm} dx \hspace{.2cm} dy" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\pi - 1" />    
                         
                    </p>

                    *616
                    </div>
                </div>



            </div>
            </div>
           
    );
}