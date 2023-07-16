import { Link } from "react-router-dom";
import "./4.3.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch4_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 3 The Chinese Remainder Theorem</h1>
        <div className="sectionText">

      
      <h2>Theorem 4.13 The Chinese Remainder Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} m_{1}, m_{2},..., m_{r}}" />
        <p>be pairwise relatively prime positive integers. Then the system of congruences</p>
        <MathComponent tex="\mathrm{x \equiv a_{1} (mod \hspace{.2cm} m_{1})}" />
        <MathComponent tex="\mathrm{x \equiv a_{2} (mod \hspace{.2cm} m_{2})}" />
        <MathComponent tex="\vdots" />
        <MathComponent tex="\mathrm{x \equiv a_{r} (mod \hspace{.2cm} m_{r})}" />
        <MathComponent tex="\mathrm{has \hspace{.2cm} a \hspace{.2cm} unique \hspace{.2cm} solution \hspace{.2cm} modulo \hspace{.2cm} M = m_{1} m_{2} ... m_{r}.}" />
        *94
      </p>


      <h2>Lemma 4.2</h2>
      <p className="textBorder">
       <p>If a and b are positive integers, then the least positive residue of</p>
        <MathComponent tex="\mathrm{2^{a} - 1 \hspace{.2cm} modulo \hspace{.2cm} 2^{b} - 1 \hspace{.2cm} is \hspace{.2cm} 2^{r} - 1,}" />
        <p>where r is the least positive residue of a modulo b.</p>
        *95
      </p>


      <h2>Lemma 4.3</h2>
      <p className="textBorder">
       <p>If a and b are positive intgers, then the greatest common divisor of</p>
        <MathComponent tex="\mathrm{2^{a} - 1 \hspace{.2cm} and \hspace{.2cm} 2^{b} - 1 \hspace{.2cm} is \hspace{.2cm} 2^{(a,b)} - 1.}" />
        *96
      </p>

      <h2>Theorem 4.14</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} positive \hspace{.2cm} integers \hspace{.2cm} 2^{a} - 1 \hspace{.2cm} and \hspace{.2cm} 2^{b} - 1}" />
        <p>are relatively prime if and only if a and b are relatively prime.</p>
        *97
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