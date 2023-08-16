import { Link } from "react-router-dom";
import "./7.3.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch7_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. 3 Perfect Numbers and Mersenne Primes</h1>
        <div className="sectionText">

      
      <h2>Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer \hspace{.2cm} and \hspace{.2cm} \sigma (n) = 2n,}" />
        <p>then n is called a perfect number.</p>
        *126
      </p>


      <h2>Theorem 7.10</h2>
      <p className="textBorder">
       <p>The positive integer n is an even perfect number if and only if</p>
        <MathComponent tex="\mathrm{n = 2^{m-1} (2^{m} - 1). }" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} m \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} m \geq 2 \hspace{.2cm} and \hspace{.2cm} 2^{m} - 1 \hspace{.2cm} is \hspace{.2cm} prime. }" />
        *127
      </p>


      <h2>Theorem 7.11</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} m \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive integer \hspace{.2cm} and \hspace{.2cm} 2^{m} - 1 \hspace{.2cm} is \hspace{.2cm} prime, \hspace{.2cm} then \hspace{.2cm} m \hspace{.2cm} must \hspace{.2cm} be \hspace{.2cm} prime.}" />
        *128
      </p>

      <h2>Definition</h2>
      <p className="textBorder">
       <p>If m is a positive integer,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} M_{m} = 2^{m} - 1 \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} mth \hspace{.2cm} Mersenne \hspace{.2cm} number;}" />
        <MathComponent tex="\mathrm{if \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} prime \hspace{.2cm} and \hspace{.2cm} M_{p} = 2^{p} - 1 \hspace{.2cm} is \hspace{.2cm} also \hspace{.2cm} prime,}" />
        <MathComponent tex="\mathrm{then \hspace{.2cm} M_{p} \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} a \hspace{.2cm} Mersenne \hspace{.2cm} prime.}" />
        *129
      </p>

      <h2>Theorem 7.12</h2>
      <p className="textBorder">
       <p>If p is an odd prime, then any divisor of the Mersenne number</p>
        <MathComponent tex="\mathrm{M_{p} = 2^{p} - 1 \hspace{.2cm} is \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} form \hspace{.2cm} 2kp + 1, \hspace{.2cm} where \hspace{.2cm} k \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer.}" />
        *130
      </p>

      <h2>Theorem 7.13 The Lucas-Lehmer Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} p \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} prime \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} M_{p} = 2^{p} - 1}" />
        <p>denote the pth Mersenne number. Define a sequence of integers recursively by setting </p>
        <MathComponent tex="\mathrm{r_{1} = 4 \hspace{.2cm} and, \hspace{.2cm} for \hspace{.2cm} k \geq 2,}" />
        <MathComponent tex="\mathrm{r_{k} \equiv r_{k-1}^{2} - 2 (mod \hspace{.2cm} M_{p}), \hspace{.2cm} 0 \leq r_{k} < M_{p}. }" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} M_{p} \hspace{.2cm} is \hspace{.2cm} prime \hspace{.2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{.2cm} r_{p-1} \equiv 0 (mod \hspace{.2cm} M_{p}). }" />
        *131
      </p>

      <h2>Corollary 7.13.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} p \hspace{.2cm} be \hspace{.2cm} prime \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} M_{p} = 2^{p} - 1 \hspace{.2cm} denote \hspace{.2cm} the \hspace{.2cm} p^{th} \hspace{.2cm} Mersenne \hspace{.2cm} number. }" />
        <MathComponent tex="\mathrm{It \hspace{.2cm} is \hspace{.2cm} possible \hspace{.2cm} to \hspace{.2cm} determine \hspace{.2cm} whether \hspace{.2cm} M_{p} \hspace{.2cm} is \hspace{.2cm} prime \hspace{.2cm} using \hspace{.2cm} O(p^{3}) \hspace{.2cm} bit \hspace{.2cm} operations.}" />
        *132
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