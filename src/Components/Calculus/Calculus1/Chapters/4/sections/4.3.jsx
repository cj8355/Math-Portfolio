import { Link } from "react-router-dom";
import "./4.3.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 3 What Derivatives Tell Us</h1>
        <div className="sectionText">

        <h2>Increasing and Decreasing Functions</h2>
      <p>
         Suppose a function f is defined on an interval I. We say that f is increasing on f if 
         <MathComponent tex="f(x_{2}) > f(x_{1})" /> whenever <MathComponent tex="x_{1}" />
         and <MathComponent tex="x_{2}" /> are in I and <MathComponent tex="x_{2} > x_{1}" />.
         We say that f is decreasing on I if  <MathComponent tex="f(x_{2}) < f(x_{1})" />
         whenever <MathComponent tex="x_{1}" />and <MathComponent tex="x_{2}" /> are in I and
         <MathComponent tex="x_{2} > x_{1}" />
           
           
            </p> *161

       


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Rolle's Theorem</h4>
                      
                     
                      <MathComponent tex="" />



                    *
                </div>



               
              
             
                
            </div>
            </div>
           
    );
}