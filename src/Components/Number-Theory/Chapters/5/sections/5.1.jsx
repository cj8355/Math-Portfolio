import { Link } from "react-router-dom";
import "./5.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch5_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 1 Divisibility Tests</h1>
        <div className="sectionText">

      
      <h2>Theorem 5.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} d|b \hspace{.2cm} and \hspace{.2cm} j \hspace{.2cm} and \hspace{.2cm} k \hspace{.2cm} are \hspace{.2cm} positive \hspace{.2cm} integers \hspace{.2cm} with \hspace{.2cm} j < k,  }" />
        <MathComponent tex="\mathrm{then \hspace{.2cm} (a_{k}...a_{1}a_{0})_{b} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d^{j} \hspace{.2cm} IFF \hspace{.2cm} (a_{j-1}...a_{1}a_{0})_{b} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d^{j}.}" />
        *98
      </p>


      <h2>Theorem 5.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} d|(b - 1), \hspace{.2cm} then \hspace{.2cm} n = (a_{k}...a_{1}a_{0})_{b} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d \hspace{.2cm} IFF}" />
        <MathComponent tex="\mathrm{the \hspace{.2cm} sum \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} digits \hspace{.2cm} a_{k} + ... + a_{1} + a_{0} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d.}" />
        *99
      </p>


      <h2>Theorem 5.3</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} d|(b + 1), \hspace{.2cm} then \hspace{.2cm} n = (a_{k}...a_{1}a_{0})_{b} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d \hspace{.2cm} IFF}" />
        <MathComponent tex="\mathrm{the \hspace{.2cm} sum \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} digits \hspace{.2cm} (-1)^{k} a_{k} + ... - a_{1} + a_{0} \hspace{.2cm} is \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} d.}" />
        *100
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