import { Link } from "react-router-dom";
import "./3.3.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 3 </h1>
        <div className="sectionText">

      
      <h2>Theorem 3.6</h2>
      <p className="textBorder">
       
        <p>
            If a and b be integers with (a, b) = d, then (a/d, b/d) = 1. (In other words, a/d and b/d are relatively prime.)
        </p>
        *41
      </p>


      <h2>Corollary 3.6.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} \neq \hspace{.2cm} 0 \hspace{.2cm} are \hspace{.2cm} integers,}" />
        <p>then a/b = p/q for some integers</p>
        <MathComponent tex="\mathrm{p \hspace{.2cm} and \hspace{.2cm} q \neq 0 \hspace{.2cm} where \hspace{.2cm} (p,q) = 1}" />
        *42
      </p>


      <h2>Theorem 3.7</h2>
      <p className="textBorder">
       
        <p>Let a, b, and c be integers. Then (a + cb, b) = (a, b).</p>
        *43
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       
        <p>If a and b are integers, then a linear combination of a and b is a sum of the form ma + nb, where both m and n are integers.</p>
        *44
      </p>


      <h2>Theorem 3.8</h2>
      <p className="textBorder">
       
        <p>
            The greatest common divisor of the integers a and b, not both 0, is the least positive
            integer that is a linear combination of a and b.
        </p>
        *45
      </p>


      <h2>Corollary 3.8.1 Bezout's Theorem</h2>
      <p className="textBorder">
       
        <p>
            If a and b are intgers, then there are integers m and n such that ma + nb = (a, b).
        </p>
        *46
      </p>


      <h2>Corollary 3.8.2</h2>
      <p className="textBorder">
       
        <p>
            The integers a and b are relatively prime integers if and only if there are integers m and n such that
            ma + nb = 1.
        </p>
        *47
      </p>


      <h2>Theorem 3.9</h2>
      <p className="textBorder">
       
        <p>
            If a and b are positive integers, then the set of linear combination of a and b is the set of integer multiples of (a, b).
        </p>
        *48
      </p>


      <h2>Theorem 3.10</h2>
      <p className="textBorder">
       
       <p>
        If a and b are integers, not both 0, then a positive integer d is the greatest common divisor of a and b if and only if
       </p>
       <p>(i) d | a and d | b, and</p>
       <p>(ii) if c is an integer with c | a and c | b, then c | d.</p>
        *49
      </p>


      <h2>Lemma 3.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a_{1}, a_{2},..., a_{n} \hspace{.2cm} are \hspace{.2cm} integers, \hspace{.2cm} not \hspace{.2cm} all \hspace{.2cm} 0, \hspace{.2cm} then \hspace{.2cm} (a_{1}, a_{2},...,a_{n-1},a_{n}) = (a_{1},a_{2},...,a_{n-2},(a_{n-1},a_{n})).}" />
        *50
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