import { Link } from "react-router-dom";
import "./16.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 4 Triple Integrals</h1>
        <div className="sectionText">

      
      <h2>Triple Integrals</h2>
      <p className="textBorder">
       <p>Let f be continuous over the region</p>
        <MathComponent tex="\mathrm{D = \{(x,y,z): \hspace{.2cm} a \leq x \leq b, \hspace{.2cm} g(x) \leq y \leq h(x), \hspace{.2cm} G(x,y) \leq z \leq H(x,y) \},}" />
        <p>
            where g, h, G, and H are continuous functions. Then f is integrable over D and the triple integral is evaluated as the iterated integral
        </p>
        <MathComponent tex="\int \int_{D} \int f(x,y,z) \hspace{.2cm} dV = \int_{a}^{b} \int_{g(x)}^{h(x)} \int_{G(x,y)}^{H(x,y)} f(x,y,z) \hspace{.2cm} dz \hspace{.2cm} dy \hspace{.2cm} dx. " />
        *623
      </p>


      <h2>Average Value of a Function of Three Variables</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} f \hspace{.2cm} is \hspace{.2cm} continuous \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} region \hspace{.2cm} D \hspace{.2cm} of \hspace{.2cm} , \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} average \hspace{.2cm} value \hspace{.2cm} of \hspace{.2cm} f \hspace{.2cm} over \hspace{.2cm} D \hspace{.2cm} is}" />
        <MathComponent tex="\mathrm{\bar{f} = \frac{1}{volume \hspace{.2cm} of \hspace{.2cm} D} \int \int_{D} \int f(x,y,z) \hspace{.2cm} dV.}" />
        *624
      </p>




            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Integrals over boxes</h4>
                      <p>
                        Evaluate the following integral. A sketch of the region of integration may be useful.
                      </p>
                      <MathComponent tex="\int_{-2}^{2} \int_{3}^{6} \int_{0}^{2} dx \hspace{.2cm} dy \hspace{.2cm} dz" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="24" />    
                         
                    </p>

                    *625
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Integrals over boxes</h4>
                      <p>
                        Evaluate the following integral. A sketch of the region of integration may be useful.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi /2} \int_{0}^{1} \int_{0}^{\pi /2} sin \hspace{.2cm} \pi x \hspace{.2cm} cos \hspace{.2cm} y \hspace{.2cm} sin \hspace{.2cm} 2z \hspace{.2cm} dy \hspace{.2cm} dx \hspace{.2cm} dz" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{2}{\pi}" />    
                         
                    </p>

                    *626
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Triple integrals</h4>
                      <p>
                      Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int_{0}^{2} \int_{0}^{4} \int_{y^{2}}^{4} \sqrt{x} \hspace{.2cm} dz \hspace{.2cm} dx \hspace{.2cm} dy" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{256}{9}" />    
                         
                    </p>

                    *627
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Triple integrals</h4>
                      <p>
                      Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int_{0}^{1} \int_{0}^{\sqrt{1-x^{2}}} \int_{0}^{\sqrt{1-x^{2}-y^{2}}} \hspace{.2cm} dz \hspace{.2cm} dy \hspace{.2cm} dx" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{2}{3}" />    
                         
                    </p>

                    *628
                    </div>
                </div>


                


            </div>
            </div>
           
    );
}