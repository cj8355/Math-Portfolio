import { Link } from "react-router-dom";
import "./7.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch7_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. 1 The Euler Phi-Function</h1>
        <div className="sectionText">

      
      <h2>Definition</h2>
      <p className="textBorder">
       <p>An arithmetic function is a function that is defined for all positive integers.</p>
        
        *111
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       <p>
        An arithmetic function f is called multiplicative if f(mn) = f(m) f(n) whenever m and n are relatively prime positive integers.
        It is called completely multiplicative if f(mn) = f(m) f(n) for all positive integers m and n.
       </p>
       
        *112
      </p>


      <h2>Theorem 7.1</h2>
      <p className="textBorder">
       <p>If f is a multiplicative function and if</p>
        <MathComponent tex="\mathrm{n = p_{1}^{a_{1}} p_{2}^{a_{2}} ... p_{s}^{a_{s}} }" />
        <p>is the prime-power factorization of the positive integer n, then</p>
        <MathComponent tex="\mathrm{ f(n) = f(p_{1}^{a_{1}}) f(p_{2}^{a_{2}}) ... f(p_{s}^{a_{s}}). }" />
        *113
      </p>


      <h2>Theorem 7.2</h2>
      <p className="textBorder">
      
        <MathComponent tex="\mathrm{If \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} prime, \hspace{.2cm} then \hspace{.2cm} \phi (p) = p - 1. }" />
        <MathComponent tex="\mathrm{Conversely, \hspace{.2cm} if \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer \hspace{.2cm} with \hspace{.2cm} \phi (p) = p - 1, \hspace{.2cm} then \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} prime.}" />
        *114
      </p>


      <h2>Theorem 7.3</h2>
      <p className="textBorder">
       <p>Let p be a prime and "a" a positive integer.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \phi (p^{a}) = p^{a} - p^{a - 1}. }" />
        *115
      </p>


      <h2>Theorem 7.4</h2>
      <p className="textBorder">
       <p>Let m and n be relatively prime positive integers. </p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \phi (mn) = \phi (m) \phi (n).}" />
        *116
      </p>


      <h2>Theorem 7.5</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} n = p_{1}^{a_{1}} p_{2}^{a_{2}} ... p_{k}^{a_{k}} }" />
        <p>be the prime-power factoriztion of the positive integer n. Then</p>
        <MathComponent tex="\mathrm{\phi (n) = n (1 - \frac{1}{p_{1}}) (1 - \frac{2}{p_{2}}) ... (1 - \frac{1}{p_{k}}). }" />
        *117
      </p>


      <h2>Theorem 7.6</h2>
      <p className="textBorder">
       <p>Let n be an integer greater than 2.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \phi (n) \hspace{.2cm} is \hspace{.2cm} even.}" />
        *118
      </p>


      <h2>Theorem 7.7</h2>
      <p className="textBorder">
       <p>Let n be a positive integer. Then</p>
        <MathComponent tex="\sum_{d|n} \phi (d) = n. " />
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