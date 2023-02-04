import { Link } from "react-router-dom";
import "./5.4.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch5_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 4 Working with Integrals</h1>
        <div className="sectionText">

        <h2>Integrals of Even and Odd Functions</h2>
        <p>
            Let a be a positive real number and let f be an integrable function on the interval [-a,a]. 
            
        </p>
        <div>
            <ul>
                <li>If f is even, <MathComponent tex="\int_{-a}^{a} f(x) dx = 2 \int_{0}^{a} f(x) dx" />.</li>
                <li>If f is odd, <MathComponent tex="\int_{-a}^{a} f(x) dx = 0" />.</li>
            </ul>
        </div>
      *234


      <h2>Average Value of a Function</h2>
        <p>
           The average value of an integrable function f on the interval [a,b] 
           <MathComponent tex="\bar{f} = \frac{1}{b-a} \int_{a}^{b} f(x) dx" />.
        </p>
        *235


        <h2>Mean Value Theorem for Integrals</h2>
        <p>
           Let f be continuous on the interval [a,b]. There exists a point c in (a,b) such that 
           <MathComponent tex="f(c) = \bar{f} = \frac{1}{b-a} \int_{a}^{b} f(t) dt" />.
        </p>
        *236



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