import { Link } from "react-router-dom";
import "./10.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 5 Comparison Tests</h1>
        <div className="sectionText">

      <h2>Comparison Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \sum a_{k} \hspace{.2cm} \hspace{.2cm}and \hspace{.2cm} \sum b_{k} \hspace{.2cm} be \hspace{.2cm} series \hspace{.2cm} with \hspace{.2cm} positive \hspace{.2cm} terms.}" />
        <MathComponent tex="1. \hspace{.2cm} \mathrm{If \hspace{.2cm} a_{k} \leq b_{k} \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} converges, \hspace{.2cm} then \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges.}" />
        <MathComponent tex="2. \hspace{.2cm} \mathrm{If \hspace{.2cm} b_{k} \leq a_{k} \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} diverges, \hspace{.2cm} then \hspace{.2cm} \sum a_{k} \hspace{.2cm} diverges.}" />
        *384
      </p>


      <h2>Limit Comparison Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \sum a_{k} \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} be \hspace{.2cm} series \hspace{.2cm} with \hspace{.2cm} positive \hspace{.2cm} terms \hspace{.2cm} and \hspace{.2cm} let}" />
        <MathComponent tex="\lim_{k \to \infty} \frac{a_{k}}{b_{k}} = L." />
        <MathComponent tex="\mathrm{1. \hspace{.2cm} If \hspace{.2cm} 0 < L < \infty \hspace{.2cm} (that \hspace{.2cm} is, \hspace{.2cm} L \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} finite \hspace{.2cm} positive \hspace{.2cm} number), \hspace{.2cm} then \hspace{.2cm} \sum a_{k} \hspace{.2cm} and \hspace{.2cm} \sum b_{k}}" />
        <p>
            either both converge or both diverge.
        </p>
        <MathComponent tex="\mathrm{2. \hspace{.2cm} If \hspace{.2cm} L = 0 \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} converges, \hspace{.2cm} then \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges.}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} If \hspace{.2cm} L = \infty \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} diverges, \hspace{.2cm} then \hspace{.2cm} \sum a_{k} \hspace{.2cm} diverges.}" />
        *385
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Comparison tests</h4>
                      <p>
                        Use the Comparison Test or the Limit Comparison Test to determine whether the following series converges.
                      </p>
                      <MathComponent tex="\sum_{k=1}^{\infty} \frac{1}{k^{2} + 4}" />
                     
                    <p>
                        Answer: <br/>
                         <p>Converges, series approaches zero.</p>   
                         
                    </p>

                    *386
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Comparison tests</h4>
                      <p>
                        Use the Comparison Test or the Limit Comparison Test to determine whether the following series converges.
                      </p>
                      <MathComponent tex="\sum_{k=1}^{\infty} \frac{k^{2}-1}{k^{3} + 4}" />
                     
                    <p>
                        Answer: <br/>
                         <p>Diverges, series approaches 1/k.</p>   
                         
                    </p>

                    *387
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Comparison tests</h4>
                      <p>
                        Use the Comparison Test or the Limit Comparison Test to determine whether the following series converges.
                      </p>
                      <MathComponent tex="\sum_{k=1}^{\infty} \frac{1}{4^{ln \hspace{.1cm} k}}" />
                     
                    <p>
                        Answer: <br/>
                         <p>Converges, series approaches zero.</p>   
                         
                    </p>

                    *388
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Choose your test</h4>
                      <p>
                        Use the test of your choice to determine whether the following series converges.
                      </p>
                      <MathComponent tex="\sum_{k=1}^{\infty} \bigg(1 + \frac{2}{k} \bigg)^{k}" />
                     
                    <p>
                        Answer: <br/>
                         <p>
                            Diverges, the series approaches 1.</p>  
                         
                    </p>

                    *389
                    </div>
                </div>


            </div>
            </div>
           
    );
}