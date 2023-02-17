import { Link } from "react-router-dom";
import "./8.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 2 Integration by Parts</h1>
        <div className="sectionText">

      <h2>Integration by Parts</h2>
      <p className="textBorder">
       <p>
        Suppose u and v are differentiable functions. Then
       </p>
        <MathComponent tex="\int \hspace{.1cm} u \hspace{.1cm} dv = uv \hspace{.1cm} - \hspace{.1cm} \int \hspace{.1cm} v \hspace{.1cm} du." />
        *318
      </p>


      <h2></h2>
      <p className="textBorder">
      <p>
        Let u and v be differentiable. Then
       </p>
        <MathComponent tex="\int_{a}^{b} u(x)v'(x) \hspace{.1cm} dx = u(x)v(x) \bigg\vert_{a}^{b} \hspace{.1cm} - \hspace{.1cm} \int_{a}^{b} v(x)u'(x) \hspace{.1cm} dx."  />
        *319
      </p>


      <h2>Integral of ln x</h2>
      <p className="textBorder">
       
        <MathComponent tex="\int ln \hspace{.1cm} x \hspace{.1cm} dx = x \hspace{.1cm} ln \hspace{.1cm} x - \hspace{.1cm} x \hspace{.1cm} + \hspace{.1cm} C" />
        *320
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Integration by parts</h4>
                      <p>
                        Evaluate the following integrals using integration by parts.
                      </p>
                      <MathComponent tex="\int x \hspace{.1cm} cos \hspace{.1cm} 5x \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="u = x, \hspace{.1cm} dv = cos(5x)" />
                         <MathComponent tex="= x(\frac{1}{5} sin (5x)) - \int \frac{1}{5} sin (5x) \hspace{.1cm} dx" />
                         <MathComponent tex="= \frac{1}{5} x sin(5x) \hspace{.1cm} - \hspace{.1cm} \frac{1}{5} \int sin(5x) \hspace{.1cm} dx" />
                         <MathComponent tex=" = \frac{1}{5} x sin(5x) \hspace{.1cm} + \hspace{.1cm} \frac{1}{25} cos(5x) \hspace{.1cm} + \hspace{.1cm} C" />    
                         
                    </p>

                    *321
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Integration by parts</h4>
                      <p>
                        Evaluate the following integrals using integration by parts.
                      </p>
                      <MathComponent tex="\int x \hspace{.1cm} 3^{x} \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="u = x, \hspace{.1cm} dv = 3^{x}" />
                         <MathComponent tex="= x(\frac{1}{ln(3)} \cdot 3^{x}) - \int \frac{1}{ln(3)} \cdot 3^{x} \hspace{.1cm} dx" />
                         <MathComponent tex="= \frac{x \cdot 3^{x}}{ln(3)} \hspace{.1cm} - \hspace{.1cm} \frac{1}{ln(3)} (\frac{3^{x}}{ln(3)} + C)" />
                         <MathComponent tex=" = \frac{3^{x}}{ln 3} (x - \frac{1}{ln 3}) \hspace{.1cm} + C" />    
                         
                    </p>

                    *322
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Integration by parts</h4>
                      <p>
                        Evaluate the following integrals using integration by parts.
                      </p>
                      <MathComponent tex="\int e^{x} \hspace{.1cm} cos \hspace{.1cm} x \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="u = cos \hspace{.1cm} x, \hspace{.1cm} dv = e^{x}" />
                         <MathComponent tex="= cos(x) e^{x} - \int e^{x} (-sin(x)) \hspace{.1cm} dx" />
                         <MathComponent tex="= cos(x) \hspace{.1cm} e^{x} + sin(x) \hspace{.1cm} e^{x} \hspace{.1cm} - \hspace{.1cm} \int e^{x} \hspace{.1cm} cos(x) \hspace{.1cm} dx" />
                         <MathComponent tex=" = \frac{e^{x}}{2} (sin \hspace{.1cm} x + cos \hspace{.1cm} x) \hspace{.1cm} + C" />    
                         
                    </p>

                    *323
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Integration by parts</h4>
                      <p>
                        Evaluate the following integrals using integration by parts.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi} x \hspace{.1cm} sin \hspace{.1cm} x \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="u = x, \hspace{.1cm} dv = sin(x)" />
                         <MathComponent tex="= x(-cos(x)) \bigg\vert_{0}^{\pi} \hspace{.1cm} - \hspace{.1cm} \int_{0}^{\pi} - cos(x) \hspace{.1cm} dx" />
                         <MathComponent tex="= x(-cos(x)) \bigg\vert_{0}^{\pi} \hspace{.1cm} + \hspace{.1cm} sin(x) \bigg\vert_{0}^{\pi}" />
                         <MathComponent tex=" = \pi \hspace{.1cm} + \hspace{.1cm} sin(\pi) = \hspace{.1cm} \pi" />    
                         
                    </p>

                    *324
                    </div>
                </div>



            </div>
            </div>
           
    );
}