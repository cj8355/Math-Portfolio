import { Link } from "react-router-dom";
import "./7.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch7_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. Logarithmic and Exponential Functions Revisited</h1>
        <div className="sectionText">

      <h2>The Natural Logarithm</h2>
      <p className="textBorder">
       <p>
        The <b>natural logarithm</b> of a number <MathComponent tex="x > 0" /> is <MathComponent tex="ln x = \int_{1}^{x} \frac{1}{t}dt." />
       </p>
        
        *287
      </p>


      <h2>Properties of the Natural Logarithm</h2>
      <p className="textBorder">
       <ol className="textList">
        <li><b>1.</b> The domain and range of ln x are <MathComponent tex="(0, \infty) \hspace{.2cm} and \hspace{.2cm} (- \infty, \infty)," />respectively.</li>
        <li><b>2.</b> ln xy = ln x + ln y, for  <MathComponent tex="x>0 \hspace{.2cm} and \hspace{.2cm} y>0" /></li>
        <li><b>3.</b> ln(x/y) = ln x - ln y, for <MathComponent tex="x>0 \hspace{.2cm} and \hspace{.2cm} y>0" /></li>
        <li><b>4.</b> <MathComponent tex="ln x^{p} = pln x, \hspace{.2cm} for \hspace{.2cm} x > 0" /> and p a rational number</li>
        <li><b>5.</b> <MathComponent tex="\frac{d}{dx} (ln|x|) = \frac{1}{x}, \hspace{.2cm} for \hspace{.2cm} x \neq 0" /> </li>
        <li><b>6.</b> <MathComponent tex="\frac{d}{dx} (ln|u(x)|) = \frac{u'(x)}{u(x)}, \hspace{.2cm} for \hspace{.2cm} u(x) \neq 0" /></li>
        <li><b>7.</b> <MathComponent tex="\int \frac{1}{x} dx = ln|x| + C" /></li>
       </ol>
        
        *288
      </p>


      <h2>The number e</h2>
      <p className="textBorder">
       <p>
        The number e is the real number that satisfies <MathComponent tex="ln e = \int_{1}^{e} \frac{dt}{t} = 1" />
       </p>
        
        *289
      </p>
      

      <h2>The Exponential Function</h2>
      <p className="textBorder">
       <p>
        For any real number x, <MathComponent tex="y = e^{x} = exp(x), \hspace{.2cm} where \hspace{.2cm} x = lny." />
       </p>
        
        *290
      </p>

      <h2>Properties of e^x</h2>
      <p className="textBorder">
      <ol className="textList">
        <li><b>1.</b> <MathComponent tex="e^{x + y} = e^{x}e^{y}" /></li>
        <li><b>2.</b> <MathComponent tex="e^{x - y} = e^{x}/e^{y}" /></li>
        <li><b>3.</b> <MathComponent tex="(e^{x})^{p} = e^{xp}," />where p is a rational number</li>
        <li><b>4.</b> <MathComponent tex="ln (e^{x}) = x" />  </li>
        <li><b>5.</b> <MathComponent tex="e^{lnx} = x, \hspace{.05cm} for \hspace{.05cm} x > 0" /> </li>
       </ol>
        *291
      </p>


      <h2>Derivative and Integral of the Exponential Function</h2>
      <p className="textBorder">
       <p>
        For real numbers x.
        <MathComponent tex="\frac{d}{dx} (e^{u(x)}) = e^{u(x)} u'(x)" /> and
        <MathComponent tex="\int e^{x} dx = e^{x} + C." />
       </p>
        
        *292
      </p>


      <h2>Exponential Functions with General Bases</h2>
      <p className="textBorder">
       <p>
        Let b be a positive real number with <MathComponent tex="b \neq 1." />
        Then for all real x, <MathComponent tex="b^{x} = e^{x ln b}" />
       </p>
        
        *293
      </p>


      <h2>Derivatives and Integral with Other Bases</h2>
      <p className="textBorder">
       <p>
        Let <MathComponent tex="b > 0 \hspace{.2cm} and \hspace{.2cm} b \neq 1." /> Then
        <MathComponent tex="\frac{d}{dx} (lob_{b} |u(x)|) = \frac{1}{lnb} \frac{u'(x)}{u(x)}, \hspace{.2cm} for \hspace{.2cm} u(x) \neq 0" />
        and
        <MathComponent tex="\frac{d}{dx} (b^{u(x)}) = (lnb)b^{u(x)} u'(x)." />
        For <MathComponent tex="b > 0 \hspace{.2cm} and \hspace{.2cm} b \neq 1, \hspace{.2cm} \int b^{x} dx = \frac{1}{lnb} b^{x} + C." />
       </p>
        *294
      </p>


      <h2>General Power Rule</h2>
      <p className="textBorder">
       <p>
        For any real number p,
       </p>
        <MathComponent tex="\frac{d}{dx} (x^{p}) = px^{p-1} \hspace{.2cm} and \hspace{.2cm} \frac{d}{dx} (u(x)^{p}) = pu(x)^{p-1} u'(x)." />
        *295
      </p>

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Derivatives</h4>
                      <p>
                        Evaluate the following derivative
                      </p>
                      <MathComponent tex="\frac{d}{dx} (x ln x^{3})" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="3(lnx + 1)" />    
                         
                    </p>

                    *296
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Derivatives</h4>
                      <p>
                        Evaluate the following derivative
                      </p>
                      <MathComponent tex="\frac{d}{dx} ((2x)^{4x})" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="4^{2x+1} x^{4x} (1 + ln 2 x)" />    
                         
                    </p>

                    *297
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Integrals</h4>
                      <p>
                        Evaluate the following integral. Include absolute values only when needed.
                      </p>
                      <MathComponent tex="\int_{0}^{3} \frac{2x - 1}{x + 1} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="6(1 - ln2)" />    
                         
                    </p>

                    *298
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Integrals</h4>
                      <p>
                        Evaluate the following integral. Include absolute values only when needed.
                      </p>
                      <MathComponent tex="\int_{-1}^{1} 10^{x} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{99}{10 ln 10}" />    
                         
                    </p>

                    *299
                    </div>
                </div>



            </div>
            </div>
           
    );
}