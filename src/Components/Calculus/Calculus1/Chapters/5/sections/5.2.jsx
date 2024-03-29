import { Link } from "react-router-dom";
import "./5.2.css";
import { MathComponent } from "mathjax-react";
import graph6 from "./images/graph6.png";
import graph7 from "./images/graph7.png";
import graph8 from "./images/graph8.png";
import graph9 from "./images/graph9.png";


export default function Calculus1_Ch5_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 2 Definite Integrals</h1>
        <div className="sectionText">

        <h2>Net Area</h2>
        <p>
            Consider the region R bounded by the graph of a continuous function f and the x-axis between x = a and x = b.
            The <b>net area</b> of R is the sum of the areas of the parts of R that lie above the x-axis minus the sum of
            the areas of the parts of R that lie below the x-axis on [a,b].
        </p>
      *218


      <h2>General Riemann Sum</h2>
        <p>
            Suppose <MathComponent tex="[x_{0},x_{1}],[x_{1},x_{2}],...,[x_{n-1},x_{n}]" /> are subintervals of [a,b]
            with  <MathComponent tex="a=x_{0}<x_{1}<x_{2}<...<x_{n-1}<x_{n}=b" />.
            Let  <MathComponent tex="\Delta x_{k}" /> be the length of the subinterval  <MathComponent tex="[x_{k-1},x_{k}]" />
            and let  <MathComponent tex="x_{k}^{*}" /> be any point in  <MathComponent tex="[x_{k-1},x_{k}]" />, for k = 1,2,...,n.
            If f is defined on [a,b], the sum
            <MathComponent tex="\sum_{k=1}^{n} f(x_{k}^{*}) \Delta x_{k} = f(x_{1}^{*}) \Delta x_{1} + f(x_{2}^{*}) \Delta x_{2} + ... + f(x_{n}^{*}) \Delta x_{n}" />
            is called a <b>general Riemann sum for f on [a,b]</b>
        </p>
      *219


      <h2>Definite Integral</h2>
        <p>
            A function f defined on [a,b] is integrable on [a,b] if <MathComponent tex="\lim_{\Delta\to 0} \sum_{k=1}^{n} f(x_{k}^{*}) \Delta x_{k}" />
            exists and is unique over all partitions of [a,b] and all choices of <MathComponent tex="x_{k}^{*}" />
            on a partition. This limit is the <b>definite integral of f from a to b,</b> which we write
             <MathComponent tex="\int_{a}^{b} f(x)dx = \lim_{\Delta\to 0} \sum_{k=1}^{n} f(x_{k}^{*}) \Delta x_{k}" />.
           
        </p>
      *220


      <h2>Integrable Functions</h2>
        <p>
            If f is continuous on [a,b] or bounded on [a,b] with a finite number of discontinuities, then f is integrable on [a,b].
        </p>
      *221


      <h2>Reversing Limits and Identical Limits of Integration</h2>
        <p>
            Suppose f is integrable on [a,b].
        </p>
        <div>
            <p><b>1.</b><MathComponent tex="\int_{b}^{a} f(x)dx =  - \int_{a}^{b} f(x)dx" /></p>
            <p><b>2.</b><MathComponent tex="\int_{a}^{a} f(x)dx = 0" /></p>
        </div>
      *222






            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Approximating net area</h4>
                      <p>The following functions are negative on the given interval.</p>
                      <div>
                        <p>a. Sketch the function on the interval.</p>
                        <p>b. Approximate the net area bounded by the graph of f and the x-axis on the given interval using
                            a left, right and midpoint Riemann sum with n = 4.
                        </p>
                      </div>
                      
                      
                     <MathComponent tex="f(x) = -2x - 1" /> <p>on [0,4]</p>

                     <p>
                        Answer: <br/>
                        a.<img src={graph6} alt="Graph of function" ></img>
                        <p>b. -16,-24,-20</p>
                     </p>

                    *223
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Approximating net area</h4>
                      <p>The following functions are negative on the given interval.</p>
                      <div>
                        <p>a. Sketch the function on the interval.</p>
                        <p>b. Approximate the net area bounded by the graph of f and the x-axis on the given interval using
                            a left, right and midpoint Riemann sum with n = 4.
                        </p>
                      </div>
                      
                      
                     <MathComponent tex="f(x) = sin2x" /> <p>on <MathComponent tex="[\frac{\pi}{2},\pi]" /></p>

                     <p>
                        Answer: <br/>
                        a.<img src={graph7} alt="Graph of function" ></img>
                        <p>b. -0.948,-0.948,-1.026</p>
                     </p>

                    *224
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Approximating definite integrals</h4>
                      <p>Complete the following steps for the given integral and the given value of n.</p>
                      <div>
                        <p>a. Sketch the graph of the integrand on the interval of integration.</p>
                        <p>b. Calculate <MathComponent tex="\Delta x" /> and the grid points <MathComponent tex="x_{0},x_{1},...,x_{n}" />, assuming a regular partition.</p>
                        <p>c. Calculate the left and right Riemann sums for the given value of n.</p>
                        <p>d. Determine which Riemann sum (left or right) underestimates the value of the definite integral and which overestimates the value of the definite integral.</p>
                      </div>
                      
                      
                     <MathComponent tex="\int_{3}^{6} (1-2x) dx" /> <p>n = 6</p>

                     <p>
                        Answer: <br/>
                        <div>
                            <p>a.<img src={graph8} alt="Graph of function" ></img></p>
                            <p>b.  <MathComponent tex="\Delta x = \frac{1}{2}; 3,3.5,4,4.5,5,5.5,6" /></p>
                            <p>c. -22.5, -25.5</p>
                            <p>d. The left Riemann sum overestimates the integral; the right Riemann sum underestimates the integral.</p>
                        </div>
                        
                     </p>

                    *225
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Approximating definite integrals</h4>
                      <p>Complete the following steps for the given integral and the given value of n.</p>
                      <div>
                        <p>a. Sketch the graph of the integrand on the interval of integration.</p>
                        <p>b. Calculate <MathComponent tex="\Delta x" /> and the grid points <MathComponent tex="x_{0},x_{1},...,x_{n}" />, assuming a regular partition.</p>
                        <p>c. Calculate the left and right Riemann sums for the given value of n.</p>
                        <p>d. Determine which Riemann sum (left or right) underestimates the value of the definite integral and which overestimates the value of the definite integral.</p>
                      </div>
                      
                      
                     <MathComponent tex="\int_{1}^{7} \frac{1}{x} dx" /> <p>n = 6</p>

                     <p>
                        Answer: <br/>
                        <div>
                            <p>a.<img src={graph9} alt="Graph of function" ></img></p>
                            <p>b.  <MathComponent tex="\Delta x = 1; 1,2,3,4,5,6,7" /></p>
                            <p>c. <MathComponent tex="\frac{49}{20}; \frac{223}{140}" /></p>
                            <p>d. The left Riemann sum overestimates the integral; the right Riemann sum underestimates the integral.</p>
                        </div>
                        
                     </p>

                    *226
                </div>


        

             
                
            </div>
            </div>
           
    );
}