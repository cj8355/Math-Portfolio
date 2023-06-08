import { Link } from "react-router-dom";
import "./2.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch2_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 1 Representations of Integers</h1>
        <div className="sectionText">

      
      <h2>Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} b \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm}integer \hspace{.2cm} with \hspace{.2cm} b > 1.}" />
        <p>Then every positive integer n can be written uniquely in the form</p>
        <MathComponent tex="n = a_{k}b^{k} + a_{k-1}b^{k-1} + ... , a_{1}b + a_{0}, " />
        <p>where k is a nonnegative integer,</p>
        <MathComponent tex="\mathrm{a_{j} \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer\hspace{.2cm} with \hspace{.2cm} 0 \leq a_{j} \leq b - 1 \hspace{.2cm} for \hspace{.2cm} j = 0, 1, ..., k, \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} initial \hspace{.2cm} coefficient \hspace{.2cm} a_{k} \neq 0.}" />
        *24
      </p>


      <h2>Corollary</h2>
      <p className="textBorder">
       
        <p>Every positive integer may be represented as the sum of distinct powers of 2.</p>
        *25
      </p>


      <h2>Hex - Binary</h2>
      <p className="textBorder">
       
        <MathComponent tex="\begin{array} {|r|r|}\hline \mathrm{Hex \hspace{.1cm} Digits} & \mathrm{Binary \hspace{.1cm} Digits} & \mathrm{Hex \hspace{.1cm} Digits} & \mathrm{Binary \hspace{.1cm} Digits} \\ \hline 0 & 0000 & 8 & 1000 \\ \hline 1 & 0001 & 9 & 1001 \\ \hline 2 & 0010 & A & 1010 \\ \hline 3 & 0011 & B & 1011 \\ \hline 4 & 0100 & C & 1100 \\ \hline 5 & 0101 & D & 1101 \\ \hline 6 & 0110 & E & 1110 \\ \hline 7 & 0111 & F & 1111 \\ \hline  \end{array}" />.
        *26
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