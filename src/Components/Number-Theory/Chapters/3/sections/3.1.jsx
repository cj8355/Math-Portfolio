import { Link } from "react-router-dom";
import "./3.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 1 Prime Numbers</h1>
        <div className="sectionText">

      
      <h2>Prime Numbers</h2>
      <p className="textBorder">
       <p>A prime is an integer greater than 1 that is divisible by no positive integers other than 1 and itself.</p>
        
        *27
      </p>


      <h2>Composite Numbers</h2>
      <p className="textBorder">
       <p>An integer greater than 1 that is not prime is called composite.</p>
        
        *28
      </p>


      <h2>Theorem 3.1</h2>
      <p className="textBorder">
       <p>There are infinetly many primes.</p>
        
        *29
      </p>


      <h2>Theorem 3.2</h2>
      <p className="textBorder">
      
        <MathComponent tex="\mathrm{If \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} composite \hspace{.2cm} integer, \hspace{.2cm} then \hspace{.2cm} n \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} prime \hspace{.2cm} factor \hspace{.2cm} not \hspace{.2cm} exceeding \hspace{.2cm} \sqrt{n}}" />
        *30
      </p>


      <h2>Number of Primes</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} function \hspace{.2cm} \pi (x), \hspace{.2cm} where \hspace{.2cm} x \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} real \hspace{.2cm} number, \hspace{.2cm} denotes \hspace{.2cm} the \hspace{.2cm} number \hspace{.2cm} of \hspace{.2cm} primes \hspace{.2cm} not \hspace{.2cm} exceeding \hspace{.2cm} x.}" />.
        *31
      </p>


      <h2>Dirichlet's Theorem on Primes in Arithmetic Progressions</h2>
      <p className="textBorder">
       <p>
        Suppose that a and b are relatively prime positive integers. Then the arithmetic progression an + b, n = 1, 2, 3, ..., contains infitely many primes.
       </p>
        
        *32
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