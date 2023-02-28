import { Link } from "react-router-dom";
import "./8.9.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec9() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 9 Improper Integrals</h1>
        <div className="sectionText">

      <h2>Improper Integrals over infinite Integrals</h2>
      <p className="textBorder">
       <span><b>1. </b> If f is continuous on <MathComponent tex="[a, \infty], \hspace{.2cm} \mathrm{then}" />
        <MathComponent tex="\int_{a}^{\infty} f(x) \hspace{.2cm} dx = \lim_{b\to \infty} \int_{a}^{b} f(x) \hspace{.2cm} dx." />
        </span>
        <span><b>2. </b> If f is continuous on <MathComponent tex="(- \infty, b], \hspace{.2cm} \mathrm{then}" />
        <MathComponent tex="\int_{- \infty}^{b} f(x) \hspace{.2cm} dx = \lim_{a\to - \infty} \int_{a}^{b} f(x) \hspace{.2cm} dx." />
        </span>
        <span><b>3. </b> If f is continuous on <MathComponent tex="(- \infty, \infty), \hspace{.2cm} \mathrm{then}" />
        <MathComponent tex="\int_{- \infty}^{\infty} f(x) \hspace{.2cm} dx = \lim_{a\to -\infty} \int_{a}^{c} f(x) \hspace{.2cm} dx + \lim_{b\to \infty} \int_{c}^{b} f(x) \hspace{.2cm} dx," />
        </span>
        <p>
            where c is any real number. It can be shown that the choice of c does not affect the value or convergence of the original
            integral. <br/>
            If the limits in cases 1-3 exist, then the improper integrals converge; otherwise, they diverge.
        </p>
        *351
      </p>


      <h2>Improper Integrals with an Unbounded Integrand</h2>
      <p className="textBorder">
      <span><b>1. </b> Suppose f is continuous on <MathComponent tex="(a, b], \hspace{.2cm} \mathrm{with \hspace{.2cm} \lim_{x\to a^{+}} f(x) = \pm \infty. \hspace{.2cm} Then}" />
        <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx = \lim_{c\to a^{+}} \int_{c}^{b} f(x) \hspace{.2cm} dx." />
        </span>
        <span><b>2. </b> Suppose f is continuous on <MathComponent tex="[a, b), \hspace{.2cm} \mathrm{with \hspace{.2cm} \lim_{x\to b^{-}} f(x) = \pm \infty. \hspace{.2cm} Then}" />
        <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx = \lim_{c\to b^{-}} \int_{a}^{c} f(x) \hspace{.2cm} dx." />
        </span>
        <span><b>3. </b> Suppose f is continuous on [a,b] except at the interior point p where f is unbounded. Then
        <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx = \lim_{c\to p^{-}} \int_{a}^{c} f(x) \hspace{.2cm} dx + \lim_{d\to p^{+}} \int_{d}^{b} f(x) \hspace{.2cm} dx." />
        </span>
        <p>
            If the limits in cases 1-3 exist, then the improper integrals converge; otherwise, they diverge.
        </p>
        *352
      </p>


      <h2>Comparison Test for Improper Integrals</h2>
      <p className="textBorder">
       <span>
        Suppose the functions f and g are continuous on the interval  <MathComponent tex="[a, \infty), \hspace{.2cm} \mathrm{with \hspace{.2cm} f(x) \geq g(x) \geq 0, \hspace{.2cm} for \hspace{.2cm} x \geq a.}" />
       </span>
       <span className="oneLine"><b>1. </b>If <MathComponent tex="\int_{a}^{\infty} f(x) \hspace{.2cm} dx \hspace{.2cm} \mathrm{converges, \hspace{.2cm} then, \int_{a}^{\infty} g(x) \hspace{.2cm} dx \hspace{.2cm} converges.}" /></span>
       <span className="oneLine"><b>2. </b>If <MathComponent tex="\int_{a}^{\infty} g(x) \hspace{.2cm} dx \hspace{.2cm} \mathrm{diverges, \hspace{.2cm} then, \int_{a}^{\infty} f(x) \hspace{.2cm} dx \hspace{.2cm} diverges.}" /></span>
        *353
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Improper integrals</h4>
                      <p>
                        Evaluate the following integral or state that it diverges.
                      </p>
                      <MathComponent tex="\int_{3}^{\infty} \frac{dx}{x^{2}}" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="=\lim_{\to \infty} \int_{3}^{t} \hspace{.2cm} x^{-2} \hspace{.2cm} dx" />
                        <MathComponent tex="=\lim_{\to \infty} -t^{-1} \hspace{.2cm} + \hspace{.2cm} \frac{1}{3}" /> 
                         <MathComponent tex="=\frac{1}{3}" />    
                         
                    </p>

                    *354
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Improper integrals</h4>
                      <p>
                        Evaluate the following integral or state that it diverges.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi} cos \hspace{.1cm} x \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                        Diverges 
                         
                    </p>

                    *355
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Improper integrals</h4>
                      <p>
                        Evaluate the following integral or state that it diverges.
                      </p>
                      <MathComponent tex="\int_{0}^{2} \frac{dx}{(x-1)^{2}}" />
                     
                      <p>
                        Answer: <br/>
                        Diverges  
                         
                    </p>

                    *356
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Improper integrals</h4>
                      <p>
                        Evaluate the following integral or state that it diverges.
                      </p>
                      <MathComponent tex="\int_{0}^{1} ln \hspace{.1cm} x \hspace{.1cm} dx" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="= x \hspace{.2cm} ln \hspace{.2cm} x - x \bigg\vert_{0}^{1}" />
                        <MathComponent tex="= (1 \hspace{.2cm} ln \hspace{.2cm} (1) - 1) - (0 \hspace{.2cm} ln \hspace{.2cm} (0) - 0) " /> 
                         <MathComponent tex="= -1" />    
                         
                    </p>

                    *357
                    </div>
                </div>




            </div>
            </div>
           
    );
}