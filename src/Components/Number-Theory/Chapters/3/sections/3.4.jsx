import { Link } from "react-router-dom";
import "./3.4.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 4 The Euclidean Algorithm</h1>
        <div className="sectionText">

      
      <h2>Theorem 3.11 The Euclidean Algorithm</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} r_{0} = a \hspace{.2cm} and \hspace{.2cm} r_{1} = b \hspace{.2cm} be \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} a \geq b > 0.}" />
        <p>If the division algorithm is successively applied to obtain</p>
        <MathComponent tex="\mathrm{r_{j} = r_{j+1}q_{j+1}+r_{j+2}, \hspace{.2cm} with \hspace{.2cm} 0 < r_{j+2} < r_{j+1} \hspace{.2cm} for \hspace{.2cm} j = 0,1,2,...,n-2 \hspace{.2cm} and \hspace{.2cm} r_{n+1} = 0, \hspace{.2cm} then \hspace{.2cm} (a,b) = r_{n},}" />
        <p>the last nonzero remainder</p>
        *51
      </p>


      <h2>Lemma 3.3</h2>
      <p className="textBorder">
       
        <p>
            If e and d are integers and e = dq + r, where q and r are integers, then (e, d) = (d, r).
        </p>
        *52
      </p>


      <h2>Theorem 3.12</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f_{n+1} \hspace{.2cm} and \hspace{.2cm} f_{n+2} \hspace{.2cm} be \hspace{.2cm} successive \hspace{.2cm} terms \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} Fibonacci \hspace{.2cm} sequence, \hspace{.2cm} with \hspace{.2cm} n > 1.}" />
        <p>Then the Euclidean algorithm takes exactly n divisions to show that</p>
        <MathComponent tex="\mathrm{(f_{n+1}, f_{n+2}) = 1. }" />
        *53
      </p>

      <h2>Theorem 3.13 Lame's Theorem</h2>
      <p className="textBorder">
       
        <p>
            The number of divisions needed to find the greatest common divisor of two positive integers using the Euclidean algorithm does not exceed five times the number
            of decimal digits in the smaller of the two integers.
        </p>
        *54
      </p>


      <h2>Corollary 3.13.1</h2>
      <p className="textBorder">
       <p>The greatest common divisor of two positive integers a and b with</p>
        <MathComponent tex="\mathrm{a > b \hspace{.2cm} can \hspace{.2cm} be \hspace{.2cm} found \hspace{.2cm} using \hspace{.2cm} O((log_{2}a)^{3}) \hspace{.2cm} bit \hspace{.2cm} operations.}" />
        *55
      </p>


      <h2>Theorem 3.14</h2>
      <p className="textBorder">
       <p>Let a and b be positive integers. Then</p>
        <MathComponent tex="\mathrm{(a,b) = s_{n}a + t_{n}b,}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} s_{n} \hspace{.2cm} and \hspace{.2cm} t_{n} \hspace{.2cm} are \hspace{.2cm} the \hspace{.2cm} nth \hspace{.2cm} terms \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} sequences \hspace{.2cm} defined \hspace{.2cm} recursively \hspace{.2cm} by}" />
        <MathComponent tex="s_{0} = 1, \hspace{2cm} t_{0} = 0," />
        <MathComponent tex="s_{1} = 0, \hspace{2cm} t_{1} = 1," />
        <p>and</p>
        <MathComponent tex="\mathrm{s_{j} = s_{j-2}-q_{j-1}s_{j-1}, \hspace{2cm} t_{j} = t_{j-2} - q_{j-1}t_{j-1}}" />
        <MathComponent tex="\mathrm{for \hspace{.2cm} j = 2,3,...,n, \hspace{.2cm} where \hspace{.2cm} the \hspace{.2cm} q_{j}}" />
        <p>are the quotients in the divisions of the Euclidean algorithm when it is used to find (a, b).</p>
        *56
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