import { Link } from "react-router-dom";
import "./8.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 5 Partial Fractions</h1>
        <div className="sectionText">

      <h2>Method of Partial Fractions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\begin{array} {c} \mathrm{Rational \hspace{.1cm} Function} &  & \mathrm{Partial \hspace{.1cm} fraction \hspace{.1cm} decomposition} \\  \frac{3x}{x^{2} + 2x - 8} & \mathrm{method \hspace{.1cm} of} & \frac{1}{x - 2} + \frac{2}{x + 4} \\  \mathrm{Difficult \hspace{.1cm} to \hspace{.1cm} integrate} & \overset{\mathrm{partial \hspace{.1cm} fractions}}{\longrightarrow} & \mathrm{Easy \hspace{.1cm} to \hspace{.1cm} integrate} \\  \int \frac{3x}{x^{2} + 2x - 8} \hspace{.1cm} dx &  & \int (\frac{1}{x - 2} + \frac{2}{x + 4}) \hspace{.15cm} dx \\   \end{array}" />
        *334
      </p>


      <h2>Partial Fractions with Simple Linear Factors</h2>
      <p className="textBorder">
       <p>
        Suppose f(x) = p(x)/q(y), where p and q are poltnomials with no common factors and with the degree of p less than
        the degree of q. Assume q is the product of simple linear factors. The partial fraction decomposition is obtained as follows.
       </p>
       <div>
        <span className="oneLine"><b>Step 1. </b> <b className="textLine">Factor the denominator q in the form </b> <MathComponent tex="(x - r_{1})(x - r_{2}) ... (x - r_{n})," /> where 
        <MathComponent tex="r_{1}, ..., r_{n}" /> are distinct real numbers.
        </span>
        <span className="oneLine"><b>Step 2. </b><b>Partial fraction decomposition </b> Form the partial fraction decomposition by writing
        <MathComponent tex="\frac{p(x)}{q(x)} = \frac{A_{1}}{(x-r_{1})} + \frac{A_{2}}{(x - r_{2})} + ... + \frac{A_{n}}{(x - r_{n})}" />
        </span>
        <span className="oneLine"><b>Step 3. </b><b>Clear denominators </b> Multiply both sides of the equation in Step 2 by <MathComponent tex="q(x) = (x - r_{1})(x - r_{2}) ... (x - r_{n})," />
        which produces conditions for <MathComponent tex="A_{1}, ..., A_{n}." />
        </span>
        <span className="oneLine"><b>Step 4. </b><b>Solve for coefficients </b> Equate like powers of x in Step 3 to solve for the undetermined coefficients
        <MathComponent tex="A_{1}, ..., A_{n}." />
        </span>
       </div>
        
        *335
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />
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