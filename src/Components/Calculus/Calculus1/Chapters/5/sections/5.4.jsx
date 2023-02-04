import { Link } from "react-router-dom";
import "./5.4.css";
import { MathComponent } from "mathjax-react";
import graph10 from "./images/graph10.png";
import graph11 from "./images/graph11.png";

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
                      <h4>Symmetry in integrals</h4>
                      <p>
                        Use symmetry to evaluate the following integrals.
                      </p>
                      
                     
                     <MathComponent tex="\int_{-2}^{2} x^{9} dx" />
                    <p>
                        Answer:<br/>
                        0
                    </p>


                    *237
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Symmetry in integrals</h4>
                      <p>
                        Use symmetry to evaluate the following integrals.
                      </p>
                      
                     
                     <MathComponent tex="\int_{-2}^{2} (x^{2} + x^{3}) dx" />
                    <p>
                        Answer:<br/>
                        <MathComponent tex=" (\frac{1}{3} x^{3} + \frac{1}{4} x^{4})  |_{-2}^{2} dx = \frac{16}{3}" />
                    </p>


                    *238
                </div>



                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Average values</h4>
                      <p>
                        Find the average value of the following functions on the given interval. Draw a graph of the function
                        abd indicate the average value.
                      </p>
                      
                     
                     <MathComponent tex="f(x) = x^{3}" /> <p>on [-1,1]</p>
                    <p>
                        Answer:<br/>
                        0
                        <img src={graph10} alt="Graph of function" ></img>
                    </p>


                    *239
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Mean Value Theorem for Integrals</h4>
                      <p>
                        Find or approximate all points at which the given function equals its average value on the given interval.
                      </p>
                      
                     
                     <MathComponent tex="f(x) = 8 - 2x" /> <p>on [0,4]</p>
                    <p>
                        Answer:<br/>
                        <MathComponent tex="\bar{f} = \frac{1}{4-0} \int_{0}^{4} 8 - 2x dx = 4" />
                        <img src={graph11} alt="Graph of function" ></img>
                    </p>


                    *240
                </div>



        

             
                
            </div>
            </div>
           
    );
}