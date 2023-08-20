import { Link } from "react-router-dom";
import "./ch9.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch9() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 9 Valuing by Expected Utility</h1>
        <div className="sectionText">

      
      <h2>Value at Risk</h2>
      <p className="textBorder">
       <p>The value at risk (VAR) of an investment is the value v such that there is only a 1-percent chance that the loss from the investment will be greater than v.</p>
       <p>At 1% the VAR can be calculated by:</p>
        <MathComponent tex="\mathrm{VAR = - \mu + 2.33 \sigma}" />
        *56
      </p>


      <h2>Conditional Value at Risk</h2>
      <p className="textBorder">
       <p>The conditional expected loss, given that it exceeds the VAR, is called the conditional value at risk or CVAR, and the CVAR criterion is to choose the investment having the smallest CVAR.</p>
        <MathComponent tex="\mathrm{CVAR = 2.64 \sigma - \mu}" />
        *57
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