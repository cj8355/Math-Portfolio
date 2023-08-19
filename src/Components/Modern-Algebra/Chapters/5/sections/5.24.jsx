import { Link } from "react-router-dom";
import "./5.24.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part5_Sec24() {
    
    
    return (
        <div className='container'> 
        <h1>Part 5 Section 24 Fermat's and Euler's Theorems</h1>
        <div className="sectionText">

      
      <h2>24.1 Thoerem (Little Theorem of Fermat)</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \in \mathbb{Z} \hspace{.2cm} and \hspace{.2cm} p \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} prime \hspace{.2cm} not \hspace{.2cm} dividing \hspace{.2cm} a, \hspace{.2cm} then \hspace{.2cm} p \hspace{.2cm} divides \hspace{.2cm} a^{p-1} - 1, }" />
        <MathComponent tex="\mathrm{that \hspace{.2cm} is, \hspace{.2cm} a^{p-1} \equiv 1 (mod \hspace{.2cm} p) \hspace{.2cm} for \hspace{.2cm} a \not{\equiv} 0 (mod \hspace{.2cm} p) }" />
        *120
      </p>


      <h2>24.2 Corollary</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} \in \mathbb{Z} , \hspace{.2cm} then \hspace{.2cm} a^{p} \equiv a (mod \hspace{.2cm} p) \hspace{.2cm} for \hspace{.2cm} any \hspace{.2cm} prime \hspace{.2cm} p.}" />
        *121
      </p>


      <h2>24.7 Theorem (Euler's Theorem)</h2>
      <p className="textBorder">
       <p>If a is an integer relatively prime to n,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} a^{\varphi (n)} - 1 \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} n, \hspace{.2cm} that \hspace{.2cm} is, \hspace{.2cm} a^{\varphi (n)} \equiv 1 (mod \hspace{.2cm} n). }" />
        *122
      </p>
      

      <h2>24.9 Theorem</h2>
      <p className="textBorder">
       <p>Let m be a positive integer and let</p>
        <MathComponent tex="\mathrm{a \in \mathbb{Z} _{m} \hspace{.2cm} be \hspace{.2cm} relatively \hspace{.2cm} prime \hspace{.2cm} to \hspace{.2cm} m. }" />
        <MathComponent tex="\mathrm{For \hspace{.2cm} each \hspace{.2cm} b \in \mathbb{Z} _{m} , \hspace{.2cm} the \hspace{.2cm} equation \hspace{.2cm} ax = b \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} unique \hspace{.2cm} solution \hspace{.2cm} in \hspace{.2cm} \mathbb{Z} _{m} .}" />
        *123
      </p>


      <h2>24.10 Corollary</h2>
      <p className="textBorder">
       <p>If a and m are relatively prime integers, then for any integer b,</p>
        <MathComponent tex="\mathrm{the \hspace{.2cm} congruence \hspace{.2cm} ax \equiv b (mod \hspace{.2cm} m)}" />
        <p>has as solutions all integers in precisely one residue class modulo m.</p>
        
        *124
      </p>


      <h2>24.11 Theorem</h2>
      <p className="textBorder">
       <p>Let m be a positive integer and let</p>
        <MathComponent tex="\mathrm{a, b \in \mathbb{Z} _{m}}" />
        <p>Let d be the gcd of a and m.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} equation \hspace{.2cm} ax = b \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} solution \hspace{.2cm} in \hspace{.2cm} \mathbb{Z} _{m} }" />
        <p>if and only if d divides b. When d divides b, the equation has exactly d solutions in</p>
        <MathComponent tex="\mathbb{Z} _{m}" />
        *125
      </p>

      <h2>24.12 Corollary</h2>
      <p className="textBorder">
       <p>Let d be the gcd of positive integers a and m.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} congruence \hspace{.2cm} ax \equiv b (mod \hspace{.2cm} m)}" />
        <p>has a solution if and only if d divides b. When this is the case, the solutions are the integers in exactly d distinct residue classes modulo m.</p>
        *126
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