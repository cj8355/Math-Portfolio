import { Link } from "react-router-dom";
import "./3.2.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 2 The Distribution of Primes</h1>
        <div className="sectionText">

      
      <h2>The Prime Number Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} ratio \hspace{.2cm} of \hspace{.2cm} \pi (x) \hspace{.2cm} to \hspace{.2cm} x/log \hspace{.2cm} x \hspace{.2cm} approaches \hspace{.2cm} 1 \hspace{.2cm} as \hspace{.2cm} x \hspace{.2cm} grows \hspace{.2cm} without \hspace{.2cm} bound.}" />
        <p>(Here, log x denotes the natural logarithm of x, and in the language of limits, we have)</p>
        <MathComponent tex="\lim_{x \to \infty} \pi (x) / (x/log \hspace{.2cm} x) = 1." />
        *33
      </p>


      <h2>Corollary 3.4.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} p_{n} \hspace{.2cm} be \hspace{.2cm} the \hspace{.2cm} nth \hspace{.2cm} prime, \hspace{.2cm} where \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} p_{n} \sim n \hspace{.2cm} log \hspace{.2cm} n.}" />
        <MathComponent tex="\mathrm{That \hspace{.2cm} is, \hspace{.2cm} the \hspace{.2cm} nth \hspace{.2cm} prime \hspace{.2cm} is \hspace{.2cm} asymptotic \hspace{.2cm} to \hspace{.2cm} log \hspace{.2cm} n.}" />
        *34
      </p>


      <h2>Theorem 3.5</h2>
      <p className="textBorder">
       
        <p>For any positive integer n, there are at least n consecutive composite positive integers.</p>
        *35
      </p>


      <h2>Twin Prime Conjecture</h2>
      <p className="textBorder">
       <p>There are infinitely many pairs of primes p and p + 2.</p>
       
        *36
      </p>


      <h2>The Erdos Conjecture on Arithmetic Progressions of Primes</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{For \hspace{.2cm} every \hspace{.2cm} positive \hspace{.2cm} integer \hspace{.2cm} n \geq 3, \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} arithmetic \hspace{.2cm} progression \hspace{.2cm} of \hspace{.2cm} primes \hspace{.2cm} of \hspace{.2cm} length \hspace{.2cm} n.}" />
        *37
      </p>


      <h2>Goldbach's Conjecture</h2>
      <p className="textBorder">
       <p>Every even positive integer greater than 2 can be written as the sum of two primes.</p>
        
        *38
      </p>


      <h2><MathComponent tex="\mathrm{The \hspace{.2cm} n^{2} + 1 \hspace{.2cm} Conjecture}" /></h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{There \hspace{.2cm} are \hspace{.2cm} infinitely \hspace{.2cm} many \hspace{.2cm} primes \hspace{.2cm}of \hspace{.2cm} the \hspace{.2cm} form \hspace{.2cm} n^{2} + 1, \hspace{.2cm} where \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer.}" />
        *39
      </p>


      <h2>The Legendre Conjecture</h2>
      <p className="textBorder">
       <p>There is a prime between every two pairs of consecutive squares of integers.</p>
        
        *40
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