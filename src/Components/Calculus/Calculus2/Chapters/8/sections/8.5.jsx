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


      <h2>Partial Fractions for Repeated Linear Factors</h2>
      <p className="textBorder">
       <span className="">
        Suppose the repeated linear factor <MathComponent tex="(x-r)^{m}" /> appears in the denominator of a proper rationsal
        function in reduced form. The partial fraction decomposition has a partial fraction in reduced form. The partial decomposition
        has a partial fraction for each power of (x - r) up to and including the mth power; that is, the partial fraction decomposition
        contains the sum <MathComponent tex="\frac{A_{1}}{(x - r)} + \frac{A_{2}}{(x - r)^{2}} + \frac{A_{3}}{(x - r)^{3}} + ... + \frac{A_{m}}{(x - r)^{m}}" />
        where <MathComponent tex="A_{1}, ..., A_{m}" /> are constants to be determined.
       </span><br/>
        
        *336
      </p>

      <h2>Partial Fractions with Simple Irreducible Quadratic Factors</h2>
      <p className="textBorder">
       <span className="">
        Suppose a simple irreducible factor <MathComponent tex="ax^{2} + bx + c" /> appears in the denominator of a proper
        rational function in reduced form. The partial fraction decomposition contains a term of the form 
        <MathComponent tex="\frac{Ax + B}{ax^{2} + bx + c}," /> where A and B are unknown coefficients to be determined.
       </span>
        
        *337
      </p>

      <h2>Partial Fractions Decompositon</h2>
      <p className="textBorder">
       <p>
        Let f(x) = p(x)/q(x) be a proper rational function in reduced form. Assume the denominator q has been factored completly over
        the real numbers and m is a positive integer.
       </p>
       <div>
        <p><b>1. Simple linear factor</b> A factor x - r in the denominator requires the partial fraction <MathComponent tex="\frac{A}{x - r}" /></p>
        <p className=""><b>2. Repeated linear factor</b> A factor <MathComponent tex="(x-r)^{m} \hspace{.1cm} \mathrm{with} \hspace{.1cm} m > 1" />
            in the denominator requires the partial fractions <MathComponent tex="\frac{A_{1}}{(x - r)} + \frac{A_{2}}{(x - r)^{2}} + \frac{A_{3}}{(x - r)^{3}} + ... + \frac{A_{m}}{(x - r)^{m}}" />
        </p>
        <p><b>3. Simple irreducible quadratic factor </b> An irreducible factor <MathComponent tex="ax^{2} + bx + c" /> in the denominator
            requires the partial fraction <MathComponent tex="\frac{Ax + B}{ax^{2} + bx + c}." />
        </p>
        <p><b>4. Repeated irreducible quadratic factor </b> An irreducible factor <MathComponent tex="(ax^{2} + bx + c)^{m} \hspace{.1cm} \mathrm{with} \hspace{.1cm} m > 1" /> in the denominator
            requires the partial fractions <MathComponent tex="\frac{A_{1}x + B_{1}}{ax^{2} + bx + c} + \frac{A_{2}x + B_{2}}{(ax^{2} + bx + c)^{2}} + ... + \frac{A_{m}x + B_{m}}{(ax^{2} + bx + c)^{m}}" />
        </p>
       </div>
        
        *338
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Partial Fractions</h4>
                      <p>
                        Give the partial fraction decomposition for the following function.
                      </p>
                      <MathComponent tex="\frac{5x-7}{x^{2} - 3x + 2}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{2}{x-1} + \frac{3}{x-2}" />    
                         
                    </p>

                    *339
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Partial Fractions</h4>
                      <p>
                        Give the partial fraction decomposition for the following function.
                      </p>
                      <MathComponent tex="\frac{6}{x^{2} - 2x - 8}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{1}{x-4} - \frac{1}{x+2}" />    
                         
                    </p>

                    *340
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Integration</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int \frac{3}{(x-1)(x+2)} \hspace{.1cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="3 \bigg( \int \frac{1}{3(x-1)} \hspace{.1cm} dx - \int \frac{1}{3(x+2)} \hspace{.1cm} dx \bigg)" />    
                         <MathComponent tex="3 \bigg(\frac{1}{3} ln (\vert x - 1 \vert) - \frac{1}{3} ln (\vert x + 2 \vert)\bigg) \hspace{.1cm} + \hspace{.1cm} C" /> 
                         <MathComponent tex="ln \bigg\vert \frac{x-1}{x+2}\bigg\vert \hspace{.1cm} + \hspace{.1cm} C" /> 
                        
                         
                    </p>

                    *341
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Integration</h4>
                      <p>
                        Evaluate the following integrals.
                      </p>
                      <MathComponent tex="\int \frac{6x^{2}}{x^{4} - 5x^{2} + 4} \hspace{.1cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="6 \bigg( \int - \frac{1}{3(x+2)} \hspace{.1cm} dx + \int \frac{1}{3(x-2)} \hspace{.1cm} dx + \int \frac{1}{6(x+1)} \hspace{.1cm} dx + \int - \frac{1}{6(x-1)} \hspace{.1cm} dx\bigg)" />     
                         <MathComponent tex="ln \bigg\vert \frac{(x-2)^{2}(x+1)}{(x+2)^{2}(x-1)} \bigg\vert \hspace{.1cm} + \hspace{.1cm} C" /> 
                        
                         
                    </p>

                    *342
                    </div>
                </div>


    

            </div>
            </div>
           
    );
}