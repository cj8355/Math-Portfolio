import { Link } from "react-router-dom";
import "./4.8.css";
import { MathComponent } from "mathjax-react";
import graph5 from "./images/graph5.png";


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
                      <h4>Finding roots with Newton's method</h4>
                      <p>
                        For the given function f and initial approximation  <MathComponent tex="x_{0}" />, use Newton's method
                        to approximate a root of f. Stop calculating approximations when two successive approximations agree to five 
                        digits to the right of the decimal point after rounding. Show your work by making a table.
                      </p>
                    
                     
                     <MathComponent tex="f(x) = x^{2} - 10" /> 
                     <MathComponent tex="x_{0} = 3" /> 
                   <p>
                    Answer:
                    <MathComponent tex="\begin{array} {|r|r|}\hline n & x_{n} \\ \hline 0 & 3 \\ \hline 1 & 3.1667 \\ \hline 2 & 3.16228 \\ \hline 3 & 3.16228 \\ \hline  \end{array}" />
                   </p>

                    *199
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Finding roots with Newton's method</h4>
                      <p>
                        For the given function f and initial approximation  <MathComponent tex="x_{0}" />, use Newton's method
                        to approximate a root of f. Stop calculating approximations when two successive approximations agree to five 
                        digits to the right of the decimal point after rounding. Show your work by making a table.
                      </p>
                    
                     
                     <MathComponent tex="f(x) = sinx+x-1" /> 
                     <MathComponent tex="x_{0} = 0.5" /> 
                   <p>
                    Answer:
                    <MathComponent tex="\begin{array} {|r|r|}\hline n & x_{n} \\ \hline 0 & 0.5 \\ \hline 1 & 0.51096 \\ \hline 2 & 0.51097 \\ \hline 3 & 0.51097 \\ \hline  \end{array}" />
                   </p>

                    *200
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Finding all roots</h4>
                      <p>
                        Use Newton's method to find all the roots of the following function. Use preliminary analysis
                        and graphing to determine good initial approximations.
                      </p>
                    
                     
                     <MathComponent tex="f(x) = cos 2x - x^{2} + 2x" /> 
                     
                   <p>
                    Answer:<br/>
                    <img src={graph5} alt="Graph of function" ></img>
                    <MathComponent tex="x \approx -0.335408, 1.333057" />
                   </p>

                    *201
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Retirement account</h4>
                      <p>
                        Assume you invest $10,000 at the end of each year for 30 years at an annual interest rate of r.
                        The amount of money in your account after 30 years is
                        <MathComponent tex="A = \frac{10,000((1+r)^{30} - 1)}{r}" />
                        Assume you want $1,000,000 in your account after 30 years. 
                      </p>
                      <div>
                        <p><b>a.</b>Show that the minimum value of r required to meet your investment needs satisfies
                        the equation  <MathComponent tex="1,000,000r - 10,000(1+r)^{30} + 10,000 = 0" /> </p>
                        <p><b>a.</b>Apply Newton's method to solve the equation in part (a) to find the interest rate required
                        to meet your investment goal.</p>
                      </div>
                    
                     
                     
                   <p>
                    Answer:<br/>
                    a. <MathComponent tex="1,000,000(.073) - 10,000(1+.073)^{30} + 10,000 \approx $207.37" />
                    b. <MathComponent tex="r \approx 7.3%" />
                   </p>

                    *202
                </div>
             
                
            </div>
            </div>
           
    );
}