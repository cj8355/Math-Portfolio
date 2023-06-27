import { Link } from "react-router-dom";
import "./3.6.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 6 Factorization Methods and the Fermat Numbers</h1>
        <div className="sectionText">

      
      <h2>Lemma 3.9</h2>
      <p className="textBorder">
       
        <p>
            If n is an odd positive integer, then there is a one-to-one correspondence between factorization of n into
            two positive integers and differences of two squares that equal n.
        </p>
        *66
      </p>


      <h2>The Fermat Numbers</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} integers \hspace{.2cm} F_{n} = 2^{2^{n}} + 1 \hspace{.2cm} are \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} Fermat \hspace{.2cm} numbers. }" />.
        *67
      </p>


      <h2>Theorem 3.20</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Every \hspace{.2cm} prime \hspace{.2cm} divisor \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} Fermat \hspace{.2cm} number \hspace{.2cm} F_{n} = 2^{2^{n}} + 1 \hspace{.2cm} is \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} form \hspace{.2cm} 2^{n+2}k+1. }" />
        *68
      </p>

      <h2>Lemma 3.10</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} F_{k} = 2^{2^{k}} + 1}" />
        <p>
            denote the kth Fermat number, where k is a nonegative integer. Then for all positive integers n, we have
        </p>
        <MathComponent tex="\mathrm{F_{0}F_{1}F_{2}...F_{n-1} = F_{n} - 2.}" />
        *69
      </p>

      <h2>Theorem 3.21</h2>
      <p className="textBorder">
       <p>Let m and n be distinct nonnegative integers.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} the \hspace{.2cm} Fermat \hspace{.2cm} numbers \hspace{.2cm} F_{m} \hspace{.2cm} and \hspace{.2cm} F_{n} \hspace{.2cm} are \hspace{.2cm} relatively \hspace{.2cm} prime.}" />
        *70
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