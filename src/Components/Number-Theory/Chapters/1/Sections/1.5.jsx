import { Link } from "react-router-dom";
import "./1.5.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch1_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec. 5 Divisibility</h1>
        <div className="sectionText">

      
      <h2>Divisibility</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} with \hspace{.2cm} a \neq 0,}" />
        <p>
            we say that a divides b if there is an integer c such that b = ac. If a divides b, we also say that a is a divisor or factor
            of b and that b is a multiple of a.
        </p>
        *17
      </p>


      <h2>Divisibility THeorem 1</h2>
      <p className="textBorder">
       <p>If a, b, and c are integers with a | b and b | c, then a | c.</p>
        
        *18
      </p>


      <h2>Divisibility THeorem 2</h2>
      <p className="textBorder">
      <p>If a, b, m, and n are integers and if c | a and c | b, then c | (ma + ab).</p>
        
        *19
      </p>


      <h2>The Division Algorithm</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} s.t. \hspace{.2cm} b > 0, \hspace{.2cm} then \hspace{.2cm} there \hspace{.2cm} are \hspace{.2cm} unique \hspace{.2cm} integers \hspace{.2cm} q \hspace{.2cm} and \hspace{.2cm} r \hspace{.2cm} s.t.}" />
        <MathComponent tex="\mathrm{a = bq + r \hspace{.2cm} with \hspace{.2cm} 0 \leq r < b.}" />
        *20
      </p>


      <h2>Odd and Even Numbers</h2>
      <p className="textBorder">
       <p>
        If the remainder when n is divided by 2 is 0, then n = 2k for some integer k, and we say that n is even, whereas if the raminder
        when n is divided by 2 is 1, then n = 2k + 1 for some integer k, and we say that n is odd.
       </p>
        
        *21
      </p>


      <h2>Greatest Common Divisors</h2>
      <p className="textBorder">
       <p>
        The grestest common divisor of two integers a and b, which are not both 0, is the largest integer that divides both a and b.
       </p>
       
        *22
      </p>

      <h2>Relatively Prime</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} integers \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b, \hspace{.2cm} with \hspace{.2cm} a \neq 0 \hspace{.2cm} and \hspace{.2cm} b \neq 0,}" />
        <p>are relatively prime if a and b have greatest common divisor (a,b) = 1.</p>
        *23
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