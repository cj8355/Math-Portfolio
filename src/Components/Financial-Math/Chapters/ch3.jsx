import { Link } from "react-router-dom";
import "./ch3.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3</h1>
        <div className="sectionText">

      
      <h2>Brownian Motion</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} motion \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} collection \hspace{.2cm} of \hspace{.2cm} random \hspace{.2cm} variables \hspace{.2cm} X(t), \hspace{.2cm} t \geq 0}" />
        <p>that satisfy certain properties that we will momentarily present. We imagine that we are observing some process as it evolves over time.
            The index parameter t represents time, and X(t) is interpreted as the state of the process at time t. Here is a formal definition.
        </p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} collection \hspace{.2cm} of \hspace{.2cm} random \hspace{.2cm} variables \hspace{.2cm} X(t), \hspace{.2cm} t \geq 0 \hspace{.2cm} is \hspace{.2cm} said \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} Brownian \hspace{.2cm} motion \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{with \hspace{.2cm} drift \hspace{.2cm} parameter \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} parameter \hspace{.2cm} \sigma ^{2} \hspace{.2cm} if \hspace{.2cm} the \hspace{.2cm} following \hspace{.2cm} hold:}" />
        <p>(a) X(0) is a given constant</p>
        <p>(b) For all positive y and t, the random variable x(t + y) - x(y) is independent of the process values up to time y and</p>
        <MathComponent tex="\mathrm{has \hspace{.2cm} a \hspace{.2cm} nomral \hspace{.2cm} distribution \hspace{.2cm} with \hspace{.2cm} mean \hspace{.2cm} \mu t \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} t \sigma ^{2}.}" />
        *17
      </p>


      <h2>Brownian Motion as a Limit of Simpler Models</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \triangle \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} small \hspace{.2cm} increment \hspace{.2cm} of \hspace{.2cm} time, \hspace{.2cm} and \hspace{.2cm} consider \hspace{.2cm} a \hspace{.2cm} process \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} every \hspace{.2cm} \triangle \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{time \hspace{.2cm} units \hspace{.2cm} the \hspace{.2cm} value \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} process \hspace{.2cm} either \hspace{.2cm} increases \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} amount \hspace{.2cm} \sigma \sqrt{\triangle} \hspace{.2cm} with \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{probability \hspace{.2cm} p \hspace{.2cm} or \hspace{.2cm} decreases \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} amount \hspace{.2cm} \sigma \sqrt{\triangle} \hspace{.2cm} with \hspace{.2cm} probability \hspace{.2cm} 1 - p, \hspace{.2cm} where}" />
        <MathComponent tex="p = \frac{1}{2} (1 + \frac{\mu}{\sigma} \sqrt{\triangle})" />
        <p>and where the successive changes in value are independent.</p>
        *18
      </p>


      <h2>Theorem 3.2.1</h2>
      <p className="textBorder">
       <p>Given that X(t) = x, the conditional probability law of the collection of prices X(y),</p>
        <MathComponent tex="\mathrm{0 \leq y \leq t, \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} same \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} values \hspace{.2cm} of \hspace{.2cm} \mu .}" />
        *19
      </p>


      <h2>Geometric Brownian Motion</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} X(t), \hspace{.2cm} t \geq 0 \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} brownian \hspace{.2cm} motion \hspace{.2cm} process \hspace{.2cm} with \hspace{.2cm} drift \hspace{.2cm} parameter \hspace{.2cm} \mu \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{and \hspace{.2cm} variance \hspace{.2cm} parameter \hspace{.2cm} \sigma ^{2}, \hspace{.2cm} and \hspace{.2cm} let}" />
        <MathComponent tex="\mathrm{S(t) = e^{X(t)}, \hspace{.2cm} t \geq 0 }" />
        *20
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