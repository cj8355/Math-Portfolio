import { Link } from "react-router-dom";
import "./11.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch11_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 11 Sec. 1 Approximating Functions with Polynomials</h1>
        <div className="sectionText">

      <h2>What is a Power Series?</h2>
      <p className="textBorder">
       <p>A power series is an infinite series of the form</p>
        <MathComponent tex="\sum_{k=0}^{\infty} c_{k} x^{k} = c_{0} + c_{1}x + c_{2} x^{2} + ... + c_{n} x^{n} + c_{n+1} x^{n+1} + ..." />
        *402
      </p>


      <h2>Taylor Polynomials</h2>
      <p className="textBorder">
       <p className="oneLine">Let f be a function with f', f'', ..., and <MathComponent tex="f^{(n)}" /> defined at a.</p>
       <p className="">The nth-order Taylor polynomial for f with its center at a, denoted <MathComponent tex="p_{n}" />, has the property that it matches f in value
       , slope, and all derivatives up to the nth derivative at a; that is,</p>
        <MathComponent tex="p_{n} (a) = f(a), p_{n}' (a) = f'(a), ..., \hspace{.2cm} \mathrm{and} \hspace{.2cm} p_{n}^{(n)} (a) = f^{(n)} (a)." />
        <p>The nth-order Taylor polynomial centered at a is</p>
        <MathComponent tex="p_{n}(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^{2} + ... + \frac{f^{(n)}(a)}{n!}(x-a)^{n}" />
        <p className="oneLine">More compactly, <MathComponent tex="p_{n} (x) = \sum_{k=0}^{n} c_{k} (x-a)^{k}," /> where the coefficients are</p>
        <MathComponent tex="c_{k} = \frac{f^{(k)}(a)}{k!}, \hspace{1cm} \mathrm{for \hspace{.2cm} k = 0,1,2,...,n.}" />
        *403
      </p>


      <h2>Remainder in a Taylor Polynomial</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} p_{n} \hspace{.2cm} be \hspace{.2cm} the \hspace{.2cm} Taylor \hspace{.2cm} Polynomial \hspace{.2cm} of \hspace{.2cm} order \hspace{.2cm} n \hspace{.2cm} for \hspace{.2cm} f.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} remainder \hspace{.2cm} in \hspace{.2cm} using \hspace{.2cm} p_{n} \hspace{.2cm} to \hspace{.2cm} approximate \hspace{.2cm} f \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} x \hspace{.2cm} is}" />
        <MathComponent tex="R_{n} (x) = f(x) - p_{n} (x)." />
        *404
      </p>


      <h2>Taylor's Theorem (Remainder Theorem)</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} have \hspace{.2cm} continuous \hspace{.2cm} derivatives \hspace{.2cm} up \hspace{.2cm} to \hspace{.2cm} f^{(n+1)} \hspace{.2cm} on \hspace{.2cm} an \hspace{.2cm} open \hspace{.2cm} interval \hspace{.2cm} I \hspace{.2cm} containing \hspace{.2cm} a.}" />
      <p>For all x in I,</p>
        <MathComponent tex="f(x) = p_{n} (x) + R_{n}(x)." />
        <MathComponent tex="\mathrm{where \hspace{.2cm} p_{n}\hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} nth-order \hspace{.2cm} Taylor \hspace{.2cm} polynomial \hspace{.2cm} for \hspace{.2cm} f \hspace{.2cm} centered \hspace{.2cm} at \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} remainder \hspace{.2cm} is}" />
        <MathComponent tex="R_{n}(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}," />
        <p>for some point c between x and a.</p>
        *405
      </p>


      <h2>Estimate of the Remainder</h2>
      <p className="textBorder">
       <p className="">
        Let n be a fixed positive integer. Suppose there exists a number M such that <MathComponent tex="\vert f^{(n+1)}(c) \vert \leq M," />
        for all c between a and x inclusive. The remainder in the nth-order Taylor polynomial for f centered at a satisifes
       </p>
        <MathComponent tex="\vert R_{n} (x) \vert = \vert f(x) - p_{n}(x) \vert \leq M \frac{\vert x - a \vert ^{n+1}}{(n+1)!}." />
        *406
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