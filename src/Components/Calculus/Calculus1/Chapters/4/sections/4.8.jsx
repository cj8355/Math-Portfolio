import { Link } from "react-router-dom";
import "./4.8.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 8 Newton's Method</h1>
        <div className="sectionText">

        <h2>Newton's Method for Approximating Roots of f(x) = 0 </h2>
        <div>
            <span><b>1.</b>Choose an initial approximation <MathComponent tex="x_{0}" /> as close to a root as possible.</span>
            <span><b>2.</b>For n = 0,1,2,...<MathComponent tex="x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})}" />, provided
                <MathComponent tex="f'(x_{n}) \neq 0" />
            </span>
            <span><b>3.</b>End the calculations when a termination condition is met.</span>
        </div>
       
    
      *198




            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4></h4>
                    
                     
                     <MathComponent tex="" /> 
                    
                   

                    *
                </div>



             
                
            </div>
            </div>
           
    );
}