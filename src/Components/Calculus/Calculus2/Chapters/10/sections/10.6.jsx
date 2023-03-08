import { Link } from "react-router-dom";
import "./10.6.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 6 Alternating Series </h1>
        <div className="sectionText">

      <h2>Alternating Series Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} alternating \hspace{.2cm} series \hspace{.2cm} \sum (-1)^{k+1} a_{k} \hspace{.2cm} converges \hspace{.2cm} provided}" />
        <p>1. the terms of the series are nonincreasing in magnitude
        <MathComponent tex="(0 < a_{k+1} \leq a_{k}, \hspace{.2cm} \mathrm{for \hspace{.2cm} k \hspace{.2cm} greater \hspace{.2cm} than \hspace{.2cm} some \hspace{.2cm} index \hspace{.2cm} N) \hspace{.2cm} and}" />
        </p>
        <MathComponent tex="2. \hspace{.4cm} \lim_{k \to \infty} a_{k} = 0." />
        *386
      </p>


      <h2>Alternating Harmonic Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} alternating \hspace{.2cm} harmonic \hspace{.2cm} series \hspace{.2cm} \sum_{k=1}^{\infty} \frac{(-1)^{k+1}}{k} \hspace{.2cm} converges}" />
        <MathComponent tex="\mathrm{(even \hspace{.2cm} though \hspace{.2cm} the \hspace{.2cm} harmonic \hspace{.2cm} series \hspace{.2cm} \sum_{k=1}^{\infty} \frac{1}{k} \hspace{.2cm} diverges).}" />
        *387
      </p>


      <h2>Remainder in Alternating Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \sum_{k=1}^{\infty} (-1)^{k+1} a_{k}}" />
        <p>
            be a convergent alternating series with terms that are nonincreasing in magnitude. Let <MathComponent tex="R_{n} = S - S_{n}" /> be the
            remainder in approximating the value of that series by the sum of its first n terms. Then <MathComponent tex="\vert R_{n} \vert \leq a_{n+1}." />
            In other words, the magnitude of the remainder is less than or equal to the magnitude of the first neglected term.
        </p>
        *388
      </p>


      <h2>Absolute and Conditional Convergence</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} \sum \vert a_{k} \vert \hspace{.2cm} converges, \hspace{.2cm} then \sum a_{k} \hspace{.2cm} converges \hspace{.2cm} absolutely.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} \sum \vert a_{k} \vert \hspace{.2cm} diverges \hspace{.2cm} and \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges, then \sum a_{k} \hspace{.2cm} converges \hspace{.2cm} conditionally.}" />
        *389
      </p>


      <h2>Absolute Convergence Implies Convergence</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} \sum \vert a_{k} \vert \hspace{.2cm} converges, \hspace{.2cm} then \hspace{.2cm} \sum a_{k}}" />
        <p>converges (absolute convergence implies convergence).</p>
        <MathComponent tex="\mathrm{Equivalently, \hspace{.2cm} if \hspace{.2cm} \sum a_{k} \hspace{.2cm} diverges, \hspace{.2cm} then \hspace{.2cm} \sum \vert a_{k} \vert \hspace{.2cm} diverges.}" />
        *390
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