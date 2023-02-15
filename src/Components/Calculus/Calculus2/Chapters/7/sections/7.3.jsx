import { Link } from "react-router-dom";
import "./7.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch7_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. 3 Hyperbolic Functions</h1>
        <div className="sectionText">

      <h2>Hyperbolic Functions</h2>
      <p className="textBorder">
      <div className="splitContainer">
       <div className="leftSide">
        <p><b>Hyperbolic cosine</b></p>
        <MathComponent tex="cosh \hspace{.1cm} x = \frac{e^{x} + e^{-x}}{2}" />
        <p><b>Hyperbolic tangent</b></p>
        <MathComponent tex="tanh \hspace{.1cm} x = \frac{sinh \hspace{.1cm} x }{cosh \hspace{.1cm} x } = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}" />
        <p><b>Hyperbolic secant</b></p>
        <MathComponent tex="sech \hspace{.1cm} x = \frac{1}{cosh \hspace{.1cm} x } = \frac{2}{e^{x} + e^{-x}}" />
       </div>
       <div className="rightSide">
        <p><b>Hyperbolic sine</b></p>
        <MathComponent tex="sinh \hspace{.1cm} x = \frac{e^{x} - e^{-x}}{2}" />
        <p><b>Hyperbolic cotangent</b></p>
        <MathComponent tex="coth \hspace{.1cm} x = \frac{cosh \hspace{.1cm} x }{sinh \hspace{.1cm} x } = \frac{e^{x} + e^{-x}}{e^{x} - e^{-x}}" />
        <p><b>Hyperbolic cosecant</b></p>
        <MathComponent tex="csch \hspace{.1cm} x = \frac{1}{sinh \hspace{.1cm} x } = \frac{2}{e^{x} - e^{-x}}" />
       </div>
       </div>
        
        *301
      </p>


      <h2>Hyperbolic Identities</h2>
      <p className="textBorder">
        <div className="splitContainer">
      <div className="leftSide">
        <MathComponent tex="cosh^{2} x - sinh^{2} x = 1" />
        <MathComponent tex="1 - tanh^{2} x = sech^{2} x" />
        <MathComponent tex="coth^{2} x - 1 = csch^{2} x" />
        <MathComponent tex="cosh \hspace{.1cm} 2x = cosh^{2} \hspace{.1cm} x + sinh^{2} \hspace{.1cm} x" />
        <MathComponent tex="cosh^{2} \hspace{.1cm} x = \frac{cosh \hspace{.1cm} 2x + 1}{2}" />
       </div>
       <div className="rightSide">
        <MathComponent tex="cosh(-x) = cosh \hspace{.1cm} x" />
        <MathComponent tex="sinh(-x) = - sinh \hspace{.1cm} x" />
        <MathComponent tex="tanh(-x) = - tanh \hspace{.1cm} x" />
        <MathComponent tex="sinh \hspace{.1cm} 2x = 2 sinh \hspace{.1cm} x cosh \hspace{.1cm} x" />
        <MathComponent tex="sinh^{2} x = \frac{cosh \hspace{.1cm} 2x - 1}{2}" />
       </div>
       </div>
        <MathComponent tex="cosh(x+y) = cosh \hspace{.1cm} x cosh \hspace{.1cm} y + sinh \hspace{.1cm} x sinh \hspace{.1cm} y" />
        <MathComponent tex="sinh(x+y) = sinh \hspace{.1cm} x cosh \hspace{.1cm} y + cosh \hspace{.1cm} x sinh \hspace{.1cm} y" />
        *302
      </p>


      <h2>Derivative and Integral Formulas</h2>
      <p className="textBorder extraWide">
       <ol className="textList">
        <li className="oneLine"><b>1.</b><MathComponent tex="\frac{d}{dx} (cosh \hspace{.1cm} x) = sinh \hspace{.1cm} x \hspace{.2cm} \Longrightarrow \hspace{.2cm} \int sinh \hspace{.1cm} x \hspace{.1cm} dx = cosh \hspace{.1cm} x + C" /></li>
        <li className="oneLine"><b>2.</b><MathComponent tex="\frac{d}{dx} (sinh \hspace{.1cm} x) = cosh \hspace{.1cm} x \hspace{.2cm} \Longrightarrow \hspace{.2cm} \int cosh \hspace{.1cm} x \hspace{.1cm} dx = sinh \hspace{.1cm} x + C" /></li>
        <li className="oneLine"><b>3.</b><MathComponent tex="\frac{d}{dx} (tanh \hspace{.1cm} x) = sech^{2} \hspace{.1cm} x \hspace{.2cm} \Longrightarrow \hspace{.2cm} \int sech^{2} \hspace{.1cm} x \hspace{.1cm} dx = tanh \hspace{.1cm} x + C" /></li>
        <li className="oneLine"><b>4.</b><MathComponent tex="\frac{d}{dx} (coth \hspace{.1cm} x) = -csch^{2} \hspace{.1cm} x \hspace{.2cm} \Longrightarrow \hspace{.2cm} \int csch^{2} \hspace{.1cm} x \hspace{.1cm} dx = -coth \hspace{.1cm} x + C" /></li>
        <li className="oneLine negativeAlign"><b>5.</b><MathComponent tex="\frac{d}{dx} (sech \hspace{.1cm} x) = -sech \hspace{.1cm} x \hspace{.1cm} tanh \hspace{.1cm} x \hspace{.1cm} \Longrightarrow \hspace{.05cm} \int sech \hspace{.1cm} x \hspace{.1cm}  tanh \hspace{.1cm} x \hspace{.1cm} dx = -sech \hspace{.1cm} x + C" /></li>
        <li className="oneLine negativeAlign"><b>6.</b><MathComponent tex="\frac{d}{dx} (csch \hspace{.1cm} x) = -csch \hspace{.1cm} x \hspace{.1cm} coth \hspace{.1cm} x \hspace{.1cm} \Longrightarrow \hspace{.05cm} \int csch \hspace{.1cm} x \hspace{.1cm} coth \hspace{.1cm} x \hspace{.1cm} dx = -csch \hspace{.1cm} x + C" /></li>
       </ol>
        
        *303
      </p>


      <h2>Integrals of Hyperbolic Functions</h2>
      <p className="textBorder">
       <div className="splitContainer">
        <div>
        <p className="oneLine"><b>1. </b><MathComponent tex="\int tanh \hspace{.1cm} x \hspace{.1cm} dx = ln cosh \hspace{.1cm} x + C" /></p>
        <p className="oneLine"><b>3. </b><MathComponent tex="\int sech \hspace{.1cm} x \hspace{.1cm} dx = tan^{-1} (sinh \hspace{.1cm} x) + C" /></p>
        </div>
        <div>
        <p className="oneLine"><b>2. </b><MathComponent tex="\int coth \hspace{.1cm} x \hspace{.1cm} dx = ln |sinh \hspace{.1cm} x| + C" /></p>
        <p className="oneLine"><b>4. </b><MathComponent tex="\int csch \hspace{.1cm} x \hspace{.1cm} dx = ln |tanh(x/2)| + C" /></p>
        </div>
       </div>
        
        *304
      </p>


      <h2>Inverses of the Hyperbolic Functions Expressed as Logarithms</h2>
      <p className="textBorder">
       <div className="splitContainer">
        <div>
        <MathComponent tex="cosh^{-1} \hspace{.1cm} x = ln(x + \sqrt{x^{2} - 1}) \hspace{.1cm} (x \geq 1)" />
        <MathComponent tex="sinh^{-1} \hspace{.1cm} x = ln(x + \sqrt{x^{2} + 1})" />
        <MathComponent tex="tanh^{-1} \hspace{.1cm} x = \frac{1}{2} ln (\frac{1+x}{1-x}) \hspace{.1cm} (|x| < 1)" />
        </div>
        <div>
        <MathComponent tex="sech^{-1} \hspace{.1cm} x = cosh^{-1} \frac{1}{x} (0 < x \leq 1)" />
        <MathComponent tex="csch^{-1} \hspace{.1cm} x = sinh^{-1} \frac{1}{x} (x \neq 0)" />
        <MathComponent tex="coth^{-1} \hspace{.1cm} x = tanh^{-1} \frac{1}{x} (|x| > 1)" />
        </div>
       </div>
        
        *305
      </p>


      <h2>Derivatives of the Inverse Hyperbolic Functions</h2>
      <p className="textBorder">
      <div className="splitContainer">
        <div>
        <MathComponent tex="\frac{d}{dx}(cosh^{-1} \hspace{.1cm} x) = \frac{1}{\sqrt{x^{2} - 1}} \hspace{.1cm} (x > 1)" />
        <MathComponent tex="\frac{d}{dx}(tanh^{-1} \hspace{.1cm} x) = \frac{1}{1 - x^{2}} \hspace{.1cm} (|x| < 1)" />
        <MathComponent tex="\frac{d}{dx}(sech^{-1} \hspace{.1cm} x) = - \frac{1}{x \sqrt{1 - x^{2}}} \hspace{.1cm} (0 < x < 1)" />
        </div>
        <div>
        <MathComponent tex="\frac{d}{dx}(sinh^{-1} \hspace{.1cm} x) = \frac{1}{\sqrt{x^{2} + 1}}" />
        <MathComponent tex="\frac{d}{dx}(coth^{-1} \hspace{.1cm} x) = \frac{1}{1 - x^{2}} \hspace{.1cm} (|x| > 1)" />
        <MathComponent tex="\frac{d}{dx}(csch^{-1} \hspace{.1cm} x) = - \frac{1}{|x| \sqrt{1 + x^{2}}} \hspace{.1cm} (x \neq 0)" />
        </div>
       </div>
        *306
      </p>


      <h2>Integral Formulas</h2>
      <p className="textBorder">
       <div>
        <p className="oneLine"><b>1. </b><MathComponent tex="\int \frac{dx}{\sqrt{x^{2} - a^{2}}} = cosh^{-1} \frac{x}{a} + C, \hspace{.1cm} for \hspace{.1cm} x > a" /></p>
        <p className="oneLine"><b>2. </b><MathComponent tex="\int \frac{dx}{\sqrt{x^{2} + a^{2}}} = sinh^{-1} \frac{x}{a} + C, \hspace{.1cm} for \hspace{.1cm} all \hspace{.1cm} x" /></p>
        <p className="oneLine"><b>3a. </b><MathComponent tex="\int \frac{dx}{a^{2} - x^{2}} = \frac{1}{a}tanh^{-1} \frac{x}{a} + C, \hspace{.1cm} for \hspace{.1cm} |x| < a" /></p>
        <p className="oneLine"><b>3b. </b><MathComponent tex="\int \frac{dx}{a^{2} - x^{2}} = \frac{1}{a}coth^{-1} \frac{x}{a} + C, \hspace{.1cm} for \hspace{.1cm} |x| > a" /></p>
        <p className="oneLine"><b>4. </b><MathComponent tex="\int \frac{dx}{x \sqrt{a^{2} - x^{2}}} = - \frac{1}{a}sech^{-1} \frac{x}{a} + C, \hspace{.1cm} for \hspace{.1cm} 0 < x < a" /></p>
        <p className="oneLine"><b>5. </b><MathComponent tex="\int \frac{dx}{x \sqrt{a^{2} + x^{2}}} = - \frac{1}{a}csch^{-1} \frac{|x|}{a} + C, \hspace{.1cm} for \hspace{.1cm} x \neq 0" /></p>
       </div>
        
        *307
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Derivatives</h4>
                      <p>
                        Find the derivative of the follwoing function.
                      </p>
                      <MathComponent tex="f(x) = sinh \hspace{.1cm} 4x" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="4 cosh(4x)" />    
                         
                    </p>

                    *308
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Derivatives</h4>
                      <p>
                        Find the derivative of the follwoing function.
                      </p>
                      <MathComponent tex="f(x) = cosh^{-1} \hspace{.1cm} 4x" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{4}{\sqrt{16x^{2} - 1}}" />    
                         
                    </p>

                    *309
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Integrals</h4>
                      <p>
                        Evaluate each integral.
                      </p>
                      <MathComponent tex="\int cosh \hspace{.1cm} 2x \hspace{.1cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{(sinh \hspace{.1cm} 2x)}{2 + C}" />    
                         
                    </p>

                    *310
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Integrals</h4>
                      <p>
                        Evaluate each integral.
                      </p>
                      <MathComponent tex="\int cosh \hspace{.1cm} 2x \hspace{.1cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{(sinh \hspace{.1cm} 2x)}{2 + C}" />    
                         
                    </p>

                    *311
                    </div>
                </div>


            </div>
            </div>
           
    );
}