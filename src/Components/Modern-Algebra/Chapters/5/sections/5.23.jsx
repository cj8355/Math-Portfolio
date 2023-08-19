import { Link } from "react-router-dom";
import "./5.23.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part5_Sec23() {
    
    
    return (
        <div className='container'> 
        <h1>Part 5 Section 23 Integral Domains</h1>
        <div className="sectionText">

      
      <h2>23.2 Definition</h2>
      <p className="textBorder">
       <p>If a and b are two nonzero elements of a ring R such that ab = 0, then a and b are divisors of 0 (or 0 divisors).</p>
        
        *112
      </p>


      <h2>23.3 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} m \in \mathbb{Z} _{n}}" />
        <p>Either m = 0, m is relatively prime to n, in which case m is a unit in </p>
        <MathComponent tex="\mathrm{\mathbb{Z} _{n}, }" />
        <p>or m is not relatively prime to n, in which case m is a 0 divisor in </p>
        <MathComponent tex="\mathrm{\mathbb{Z} _{n}. }" />
        *113
      </p>


      <h2>23.5 Corollary</h2>
      <p className="textBorder">
       <p>If p is a prime number, then every nonzero element of</p>
        <MathComponent tex="\mathrm{\mathbb{Z} _{p} \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} unit , \hspace{.2cm} which \hspace{.2cm} means \hspace{.2cm} that \hspace{.2cm} \mathbb{Z} _{p} \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} field \hspace{.2cm} and \hspace{.2cm} it \hspace{.2cm} has \hspace{.2cm} no \hspace{.2cm} divisors \hspace{.2cm} of \hspace{.2cm} 0. }" />
        *114
      </p>
      

      <h2>23.6 Theorem</h2>
      <p className="textBorder">
       <p>The cancellation laws hold in a ring R if and only if R has no divisors of 0.</p>
        
        *115
      </p>
      

      <h2>23.7 Definition</h2>
      <p className="textBorder">
       <p>An integral domain D is a commutative ring with unity</p>
        <MathComponent tex="\mathrm{1 \neq 0 \hspace{.2cm} that \hspace{.2cm} contains \hspace{.2cm} no \hspace{.2cm} divisors \hspace{.2cm} of \hspace{.2cm} 0.}" />
        *116
      </p>
      


      <h2>23.11 Theorem</h2>
      <p className="textBorder">
       <p>Every finite integral domain is a field.</p>
        
        *117
      </p>
      


      <h2>23.12 Definition</h2>
      <p className="textBorder">
       <p>If for a ring R a positive integer n exists such that</p>
        <MathComponent tex="\mathrm{n \cdot a = 0 \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a \in R,}" />
        <p>
            then the least such positive integer is the characteristic of the ring R. If no such positive integer exists, then R is of characteristic 0.
        </p>
        *118
      </p>
      


      <h2>23.14 Theorem</h2>
      <p className="textBorder">
       <p>Let R be a ring with unity.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} n \cdot 1 \neq 0 \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} n \in \mathbb{Z} ^{+} , }" />
        <p>then R has characteristic 0.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} n \cdot 1 = 0 \hspace{.2cm} for \hspace{.2cm} some \hspace{.2cm} n \in \mathbb{Z} ^{+} ,}" />
        <p>then the smallest such integer n is the characteristic of R.</p>
        *119
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