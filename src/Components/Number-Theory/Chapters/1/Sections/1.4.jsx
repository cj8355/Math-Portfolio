import { Link } from "react-router-dom";
import "./1.4.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch1_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec. 4 The Fibonacci Numbers</h1>
        <div className="sectionText">

      
      <h2>The Fibonacci Sequence</h2>
      <p className="textBorder">
       <p>The Fibonacci sequence is defined recursively by</p>
        <MathComponent tex="\mathrm{f_{1} = 1, \hspace{.2cm} f_{2} = 1, \hspace{.2cm} and \hspace{.2cm} f_{n} = f_{n-1} + f_{n-2} \hspace{.2cm} for \hspace{.2cm} n \geq 3.}" />
        <p>The terms of this sequence are called the Fibonacci numbers.</p>
        *15
      </p>


      <h2>Nth Fibonacci Number</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} n \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} \alpha = \frac{1+ \sqrt{5}}{2} \hspace{.2cm} and \hspace{.2cm} \beta = \frac{1- \sqrt{5}}{2}.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} the \hspace{.2cm} nth \hspace{.2cm} Fibonacci \hspace{.2cm} number \hspace{.2cm} f_{n} \hspace{.2cm} is \hspace{.2cm} given \hspace{.2cm} by}" />
        <MathComponent tex="\mathrm{f_{n} = \frac{1}{\sqrt{5}} (\alpha ^{n} - \beta ^{n}).}" />
        *16
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