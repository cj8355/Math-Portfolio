import { Link } from "react-router-dom";
import "./6.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch6_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 1 Wilson's Theorem and Fermat's Little Theorem </h1>
        <div className="sectionText">

      
      <h2>Theorem 6.1 Wilson's Theorem</h2>
      <p className="textBorder">
       <p>If p is prime, then</p>
        <MathComponent tex="\mathrm{(p-1)! \equiv -1 (mod \hspace{.1cm} p) }" />.
        *101
      </p>


      <h2>Theorem 6.2</h2>
      <p className="textBorder">
       <p>If n is a positive integer with</p>
        <MathComponent tex="n \geq 2 \hspace{.2cm} \mathrm{such \hspace{.2cm} that \hspace{.2cm} (n-1)! \equiv -1 (mod \hspace{.1cm} n), \hspace{.2cm} then \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} prime.}" />.
        *102
      </p>


      <h2>Theorem 6.3 Fermat's Little Theorem</h2>
      <p className="textBorder">
       <p>If p is prime and a is an integer with</p>
        <MathComponent tex="\mathrm{p \not_{|} \hspace{.1cm} a, \hspace{.2cm} then \hspace{.2cm} a^{p-1} \equiv 1 (mod \hspace{.1cm} p)}" />
        *103
      </p>


      <h2>Theorem 6.4</h2>
      <p className="textBorder">
       <p>If p is prime and a is a positive intger, then</p>
        <MathComponent tex="\mathrm{a^{p} \equiv a (mod \hspace{.1cm} p)}" />
        *104
      </p>
      

      <h2>Theorem 6.5</h2>
      <p className="textBorder">
       <p>If p is prime and a is an integer such that</p>
        <MathComponent tex="\mathrm{p \not_{|} \hspace{.1cm} a, \hspace{.2cm} then \hspace{.2cm} a^{p-2}}" />
        <p>is an inverse of a modulo p.</p>
        *105
      </p>
      


      <h2>Corollary 6.5.1</h2>
      <p className="textBorder">
       <p>If a and b are positive integers and p is prime with</p>
        <MathComponent tex="\mathrm{p \not_{|} \hspace{.1cm} a,}" />
        <p>then the solutions of the linear congruence</p>
        <MathComponent tex="\mathrm{ax \equiv b (mod \hspace{.2cm} p)}" />
        <p>are the integers x such that</p> 
        <MathComponent tex="\mathrm{x \equiv a^{p-2} (mod \hspace{.1cm} p)}" />  
        *106
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