import { Link } from "react-router-dom";
import "./10.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 4 The Divergence and Integral Tests</h1>
        <div className="sectionText">

      <h2>Divergence Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges, \hspace{.2cm} then \hspace{.2cm} \lim_{k \to \infty} \hspace{.2cm} a_{k} = 0.}" />
        <MathComponent tex="\mathrm{Equivalently, \hspace{.2cm} if \hspace{.2cm} \lim_{k \to \infty} \hspace{.2cm} a_{k} \neq 0, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} series \hspace{.2cm} diverges.}" />
        *375
      </p>


      <h2>Harmonic Series</h2>
      <p className="textBorder">
       <p className="">
        The harmonic series <MathComponent tex="\sum_{k=1}^{\infty} \frac{1}{k} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + ..." /> diverges
        , even though the terms of the series approach zero.
       </p>
        
        *376
      </p>


      <h2>Integral Test</h2>
      <p className="textBorder">
        <p>Suppose f is a continuous, positive, decreasing function, for </p>
      <MathComponent tex="\mathrm{x \geq 1, \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} a_{k} = f(k), \hspace{.2cm} for \hspace{.2cm} k=1,2,3,... \hspace{.2cm} Then}" />
        <MathComponent tex="\sum_{k=1}^{\infty} a_{k} \hspace{.8cm} and \hspace{.8cm} \int_{1}^{\infty} f(x) \hspace{.2cm} dx" />
        <p>
            either both converge or both diverge. In the case of convergence, the value of the integral is not equal to the value of the series.
        </p>
        *377
      </p>

      <h2>Convergence of the p-series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} p-series \hspace{.2cm} \sum_{k=1}^{\infty} \frac{1}{k^{p}} \hspace{.2cm} converges \hspace{.2cm} for \hspace{.2cm} p > 1 \hspace{.2cm} and \hspace{.2cm} diverges \hspace{.2cm} for \hspace{.2cm} p \leq 1.}" />
        *378
      </p>

      <h2>Estimating Series with Positive Terms</h2>
      <p className="textBorder">
       <p className="">Let f be a continuous, positive, decreasing function, for <MathComponent tex="x \geq 1, \hspace{.2cm} \mathrm{and \hspace{.2cm} let \hspace{.2cm} a_{k} = f(k), \hspace{.2cm} for \hspace{.2cm} k=1,2,3,....}" /></p>
       <p className=""><MathComponent tex="\mathrm{Let \hspace{.2cm} S \hspace{.2cm} = \sum_{k=1}^{\infty} a_{k} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} convergent \hspace{.2cm} series \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} S_{n} = \sum_{k=1}^{n} a_{k}}" /> be the sume of the first n terms of the series.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} remainder \hspace{.2cm} R_{n} = S - S_{n} \hspace{.2cm} satisfies}" />
        <MathComponent tex="R_{n} < \int_{n}^{\infty} f(x) \hspace{.2cm} dx." />
        <p>Furethmore, the exact value of the series is bounded as follows:</p>
        <MathComponent tex="L_{n} = S_{n} + \int_{n+1}^{\infty} f(x) \hspace{.15cm} dx < \sum_{k=1}^{\infty} a_{k} < S_{n} + \int_{n}^{\infty} f(x) \hspace{.15cm} dx = U_{n} ." />
        *379
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