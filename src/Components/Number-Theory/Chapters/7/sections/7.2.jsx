import { Link } from "react-router-dom";
import "./7.2.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch7_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. 2 The Sum and Number of Divisors</h1>
        <div className="sectionText">

      
      <h2>Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} sum \hspace{.2cm} of \hspace{.2cm} divisors \hspace{.2cm} function, \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} \sigma , }" />
        <MathComponent tex="\mathrm{is \hspace{.2cm} defined \hspace{.2cm} by \hspace{.2cm} setting \hspace{.2cm} \sigma (n) \hspace{.2cm} equal \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} sum \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} the \hspace{.2cm} positive \hspace{.2cm} divisors \hspace{.2cm} of \hspace{.2cm} n.}" />
        *120
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       
      <MathComponent tex="\mathrm{The \hspace{.2cm} number \hspace{.2cm} of \hspace{.2cm} divisors \hspace{.2cm} function, \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} \tau , }" />
        <MathComponent tex="\mathrm{is \hspace{.2cm} defined \hspace{.2cm} by \hspace{.2cm} setting \hspace{.2cm} \tau (n) \hspace{.2cm} equal \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} number \hspace{.2cm} of \hspace{.2cm} positive \hspace{.2cm} divisors \hspace{.2cm} of \hspace{.2cm} n.}" />
        
        *121
      </p>


      <h2>Theorem 7.8</h2>
      <p className="textBorder">
       <p>If f is a multiplicative function, then the summatory function of f, namely,</p>
        <MathComponent tex="F(n) = \sum_{d | n} f(d)," />
        <p>is also multiplicative.</p>
        *122
      </p>


      <h2>Corollary 7.8.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} sum \hspace{.2cm} of \hspace{.2cm} divisors \hspace{.2cm} function \hspace{.2cm} \sigma \hspace{.2cm} and \hspace{.2cm} the}" />
        <MathComponent tex="\mathrm{number \hspace{.2cm} of \hspace{.2cm} divisors \hspace{.2cm} function \hspace{.2cm} \tau \hspace{.2cm} are \hspace{.2cm} multiplicative \hspace{.2cm} functions.}" />
        *123
      </p>


      <h2>Lemma 7.1</h2>
      <p className="textBorder">
       <p>Let p be prime and "a" a positive integer. Then</p>
        <MathComponent tex="\mathrm{\sigma (p^{a}) = 1 + p + p^{2} + ... + p^{a} = \frac{p^{a + 1} - 1}{p - 1} }" />
        *124
      </p>


      <h2>Theorem 7.9</h2>
      <p className="textBorder">
       <p>Let the positive integer n have prime factorization</p>
        <MathComponent tex="\mathrm{n = p_{1}^{a_{1}} p_{2}^{a_{2}} ... p_{s}^{a_{s}}. \hspace{.2cm} Then }" />
        <MathComponent tex="\mathrm{\sigma (n) = \frac{p_{1}^{a_{1} + 1} - 1 }{p_{1} - 1} \cdot \frac{p_{2}^{a_{2} + 1} - 1 }{p_{2} - 1} \cdot ... \cdot \frac{p_{s}^{a_{s} + 1} - 1 }{p_{s} - 1} = \prod_{j=1}^{s} \frac{p_{j}^{a_{j}} + 1 }{p_{j} - 1} }" /> 
        <p>and</p>
        <MathComponent tex="\mathrm{\tau (n) = (a_{1} + 1) (a_{2} + 1) ... (a_{s} + 1) = \prod_{j=1}^{s} (a_{j} + 1). }" /> 
        *125
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