import { Link } from "react-router-dom";
import "./11.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch11_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 11 Sec. 4 Working with Taylor Series</h1>
        <div className="sectionText">

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
                      <h4>Limits</h4>
                      <p>
                        Evaluate the following limit using Taylor series.
                      </p>
                      <MathComponent tex="\lim_{x \to 0} \frac{e^{x}-1}{x}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="1" />    
                         
                    </p>

                    *415
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4>Power series for derivatives</h4>
                      <p>
                        a. Differentiate the Taylor series centered at 0 for the following function.
                      </p>
                      <p>
                        b. Identify the function represented by the differential series.
                      </p>
                      <p>
                        c. Give the interval of convergence of the power series for the derivative.
                      </p>
                      <MathComponent tex="f(x) = e^{x}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{a.} \hspace{.2cm} 1 + x + \frac{x^{2}}{2!} + ... + \frac{x^{n}}{n!} + ..." />    
                         <MathComponent tex="\mathrm{b.} \hspace{.2cm} e^{x}" /> 
                         <MathComponent tex="\mathrm{c.} \hspace{.2cm} - \infty < x < \infty" /> 
                         
                    </p>

                    *416
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Power series for derivatives</h4>
                      <p>
                        a. Differentiate the Taylor series centered at 0 for the following function.
                      </p>
                      <p>
                        b. Identify the function represented by the differential series.
                      </p>
                      <p>
                        c. Give the interval of convergence of the power series for the derivative.
                      </p>
                      <MathComponent tex="f(x) = e^{-2x}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{a.} \hspace{.2cm} -2 + 4x - 8 \cdot \frac{x^{2}}{2!} + ... + (-2)^{n} \frac{x^{n-1}}{(n-1)!} + ..." />    
                         <MathComponent tex="\mathrm{b.} \hspace{.2cm} -2e^{-2x}" /> 
                         <MathComponent tex="\mathrm{c.} \hspace{.2cm} - \infty < x < \infty" /> 
                         
                    </p>

                    *417
                    </div>
                </div>



            </div>
            </div>
           
    );
}