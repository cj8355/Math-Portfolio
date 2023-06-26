import { Link } from "react-router-dom";
import "./3.5.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 5 The Fundamental Theorem of Arithmetic</h1>
        <div className="sectionText">

      
      <h2>The Fundamental Theorem of Arithmetic</h2>
      <p className="textBorder">
       
       <p>
        Every positive integer greater than 1 can be written uniquely as a product of primes, with the prime
        factors in the product written in nondecreasing order.
       </p>
        *57
      </p>


      <h2>Lemma 3.4</h2>
      <p className="textBorder">
       
        <p>
            If a, b, and c are positive integers such that (a, b) = 1 and a | bc, then a | c.
        </p>
        *58
      </p>


      <h2>Lemma 3.5</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} p \hspace{.2cm} divides \hspace{.2cm} a_{1}a_{2}...a_{n}, \hspace{.2cm} where \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} prime \hspace{.2cm} and \hspace{.2cm} a_{1}, a_{2}, ..., a_{n} \hspace{.2cm} are \hspace{.2cm} positive \hspace{.2cm} integers,}" />
        <MathComponent tex="\mathrm{then \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer \hspace{.2cm} i \hspace{.2cm} with \hspace{.2cm} 1 \leq i \leq n \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} p \hspace{.2cm}divides \hspace{.2cm} a_{i}.}" />
        *59
      </p>


      <h2>Lemma 3.6</h2>
      <p className="textBorder">
       
        <p>If x and y are real numbers, then max(x, y) + min(x, y) = x + y.</p>
        *60
      </p>

      <h2>Theorem 3.16</h2>
      <p className="textBorder">
       
        <p>
            If a and b are positive integers, then [a, b] = ab/(a, b), where [a, b] and (a, b) are the least
            common multiple and greatest common divisor of a and b, respectively.
        </p>
        *61
      </p>

      <h2>Lemma 3.7</h2>
      <p className="textBorder">
       <p>
        Let m and n be relatively prime positive integers. Then, if d is a positive divisor of mn, there is a unique pair of positive divisors
       </p>
        <MathComponent tex="\mathrm{d_{1} \hspace{.2cm} of \hspace{.2cm} m \hspace{.2cm} and \hspace{.2cm} d_{2} \hspace{.2cm} of \hspace{.2cm} n \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} d = d_{1}d_{2}.}" />
        <MathComponent tex="\mathrm{Conversely, \hspace{.2cm} if \hspace{.2cm} d_{1} \hspace{.2cm} and \hspace{.2cm} d_{2} \hspace{.2cm} are \hspace{.2cm} positive \hspace{.2cm} divisors \hspace{.2cm} of \hspace{.2cm} m \hspace{.2cm} and \hspace{.2cm} n, \hspace{.2cm} respectively, \hspace{.2cm} then \hspace{.2cm} d = d_{1}d_{2} \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} divisor \hspace{.2cm} of \hspace{.2cm} mn.}" />
        *62
      </p>


      <h2>Theorem 3.17</h2>
      <p className="textBorder">
       
        <p>There are infinetely many primes of the form 4n + 3, where n is a positive integer.</p>
        *63
      </p>


      <h2>Lemma 3.8</h2>
      <p className="textBorder">
       
        <p>If a and b are integers, both of the form 4n + 1, then the product ab is also of this form.</p>
        *64
      </p>


      <h2>Theorem 3.18</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \alpha}" />
        <p>be a real number that is a root of the polynomial</p>
        <MathComponent tex="\mathrm{x^{n} + c_{n-1}x^{n-1} + ... + c_{1}x + c_{0}, \hspace{.2cm} where \hspace{.2cm} the \hspace{.2cm} coefficients \hspace{.2cm} c_{0}, c_{1},..., c_{n-1} \hspace{.2cm} are \hspace{.2cm} integers.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \alpha \hspace{.2cm} is \hspace{.2cm} either \hspace{.2cm} an \hspace{.2cm} integer \hspace{.2cm} or \hspace{.2cm} an \hspace{.2cm} irrational \hspace{.2cm} number.}" />
        *65
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