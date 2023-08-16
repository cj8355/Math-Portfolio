import { Link } from "react-router-dom";
import "./6.3.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch6_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 3 Euler's Theorem </h1>
        <div className="sectionText">

      
      <h2>Definition</h2>
      <p className="textBorder">
       <p>Let n be a positive integer.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} Euler \hspace{.2cm} phi-function \hspace{.2cm} \phi (n)}" />
        <p>
            is defined to be the number of positive integers not exceeding n that are realtively prime to n.
        </p>
        *107
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       <p>A reduced residue modulo n is a set of</p>
        <MathComponent tex="\phi (n)" />
        <p>integers such that each element of the set is relatively prime to n, and no two different elements of the set are congruent modulo n.</p>
        *108
      </p>


      <h2>Theorem 6.13</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} r_{1}, r_{2}, ..., r_{\phi (n)}}" />
        <p>is a reduced residue system modulo n, and if a is a positive integer with (a, n) = 1, then the set</p>
        <MathComponent tex="\mathrm{ar_{1}, ar_{2}, ..., ar_{\phi (n)}}" />
        <p>is also a reduced residue system modulo n.</p>
        *109
      </p>


      <h2>Theorem 6.14 Euler's Theorem</h2>
      <p className="textBorder">
       <p>If m is a positive integer and a is an integer with</p>
        <MathComponent tex="\mathrm{(a,m) = 1, \hspace{.2cm} then \hspace{.2cm} a^{\phi (m)} \equiv 1 (mod \hspace{.1cm} m).}" />
        *110
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