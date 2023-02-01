import { Link } from "react-router-dom";
import "./5.1.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";
import graph3 from "./images/graph3.png";
import graph4 from "./images/graph4.png";
import graph5 from "./images/graph5.png";


export default function Calculus1_Ch5_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 1 Approximating Areas under Curves</h1>
        <div className="sectionText">

        <h2>Regular Partition</h2>
       <p>
        Suppose [a, b] is a closed interval containing n subintervals
        <MathComponent tex="[x_{0},x_{1}],[x_{1},x_{2}],...,[x_{n-1},x_{n}]" />
        of equal length <MathComponent tex="\Delta x = \frac{b - a}{n}" />, with
        <MathComponent tex="a = x_{0} \hspace{.04in} and \hspace{.04in} b=x_{n}" />.
        The endpoints <MathComponent tex="x_{0},x_{1},x_{2},...,x_{n-1},x_{n}" /> of the subintervals
        are called grid points, and they create a regular partition of the interval [a,b]. In general, the kth grid point is
        <MathComponent tex="x_{k} = a + k \Delta x" />, for k = 0,1,2,...,n.
       </p>
       
    
      *211


      <h2>Riemann Sum</h2>
       <p>
        Suppose f is defined on a closed interval [a, b], which is divided into n subintervals of equal length
        <MathComponent tex="\Delta x" />. If <MathComponent tex="x_{k}^{*}" /> is any point in the kth subinterval
        <MathComponent tex="[x_{k-1}, x_{k}]" />, for k = 1,2,...,n, then 
        <MathComponent tex="f(x_{1}^{*}) \Delta x + f(x_{2}^{*}) \Delta x + ... + f(x_{n}^{*}) \Delta x" />
        is called a Riemann sum for f on [a,b]. This sum is called
        <ul>
            <li>a <b>left Riemann sum</b>if <MathComponent tex="x_{k}^{*}" /> is the left endpoint of <MathComponent tex="[x_{k-1}, x_{k}]" />;</li>
            <li>a <b>right Riemann sum</b>if <MathComponent tex="x_{k}^{*}" /> is the right endpoint of <MathComponent tex="[x_{k-1}, x_{k}]" />;and</li>
            <li>a <b>midpoint Riemann sum</b>if <MathComponent tex="x_{k}^{*}" /> is the midpoint of <MathComponent tex="[x_{k-1}, x_{k}]" />for k = 1,2,...,n.</li>
        </ul>
       </p>
       
    
      *212


      <h2>Sums of Powers of Integers</h2>
       <p>
        Let n be a positive integer and c a real number
       </p>

       <div>
        <div>
        <MathComponent tex="\sum_{k=1}^{n} c = cn" />
        <MathComponent tex="\sum_{k=1}^{n} k^{2} = \frac{n(n+1)(2n+1)}{6}" />
        </div>
        <div>
        <MathComponent tex="\sum_{k=1}^{n} k = \frac{n(n+1)}{2}" />
        <MathComponent tex="\sum_{k=1}^{n} k^{3} = \frac{n^{2}(n+1)^{2}}{4}" />
        </div>
       </div>
       
    
      *213


      <h2>Left, Right, and Midpoint Riemann Sums in Sigma Notation</h2>
       <p>
        Suppose f is defined on a closed interval [a, b], which is divided into n subintervals of equal length
        <MathComponent tex="\Delta x" />. If <MathComponent tex="x_{k}^{*}" /> is any point in the kth subinterval
        <MathComponent tex="[x_{k-1}, x_{k}]" />, for k = 1,2,...,n, then the Riemann sum for f on [a,b] is
        <MathComponent tex="\sum_{k=1}^{n} f(x_{k}^{*}) \Delta x" />. Three cases arise in practice.
        
        <ul>
            <li><MathComponent tex="\sum_{k=1}^{n} f(x_{k}^{*}) \Delta x" /> is a <b>left Riemann sum</b>if <MathComponent tex="x_{k}^{*} = a + (k-1) \Delta x" />.</li>
            <li><MathComponent tex="\sum_{k=1}^{n} f(x_{k}^{*}) \Delta x" /> is a <b>right Riemann sum</b>if <MathComponent tex="x_{k}^{*} = a + k \Delta x" />.</li>
            <li><MathComponent tex="\sum_{k=1}^{n} f(x_{k}^{*}) \Delta x" /> is a <b>midpoint Riemann sum</b>if <MathComponent tex="x_{k}^{*} = a + (k- \frac{1}{2}) \Delta x" />.</li>
        </ul>
       </p>
       
    
      *214




            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Left and right Riemann sums</h4>
                      <p>Complete the following steps for the given function, interval, and value of n.</p>
                      <div>
                        <p><b>a.</b>Sketch the graph of the following function on the given interval.</p>
                        <p><b>b.</b>Calculate <MathComponent tex="\Delta x" />and the grid points <MathComponent tex="x_{0},x_{1},...,x_{n}" /></p>
                        <p><b>c.</b>Illustrate the left and right Riemann sums. Then determine which Riemann sum underestimates and which
                        sum overestimates the area under the curve.</p>
                        <p><b>d.</b>Calculate the left and right Riemann sums.</p>
                      </div>
                      
                      
                     <MathComponent tex="f(x) = x + 1" /> on [0,4]; n = 4

                     <p>
                        Answer:<br/>
                        a/c.
                        <img src={graph1} alt="Graph of function" ></img>
                        <p>Left Riemann sum underestimates area</p>
                        <img src={graph2} alt="Graph of function" ></img>
                        <p>Right Riemann sum overestimates area</p>
                        b. <MathComponent tex="\Delta x = 1;x_{0}=0,x_{1}=1,x_{2}=2,x_{3}=3,x_{4}=4" />
                        d. 10, 14
                     </p>

                     
                    *215
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Left and right Riemann sums</h4>
                      <p>Complete the following steps for the given function, interval, and value of n.</p>
                      <div>
                        <p><b>a.</b>Sketch the graph of the following function on the given interval.</p>
                        <p><b>b.</b>Calculate <MathComponent tex="\Delta x" />and the grid points <MathComponent tex="x_{0},x_{1},...,x_{n}" /></p>
                        <p><b>c.</b>Illustrate the left and right Riemann sums. Then determine which Riemann sum underestimates and which
                        sum overestimates the area under the curve.</p>
                        <p><b>d.</b>Calculate the left and right Riemann sums.</p>
                      </div>
                      
                      
                     <MathComponent tex="f(x) = x^{2} - 1" /> on [2,4]; n = 4

                     <p>
                        Answer:<br/>
                        a/c.
                        <img src={graph3} alt="Graph of function" ></img>
                        <p>Left Riemann sum underestimates area</p>
                        <img src={graph4} alt="Graph of function" ></img>
                        <p>Right Riemann sum overestimates area</p>
                        b. <MathComponent tex="\Delta x = 0.5;2,2.5,3,3.5,4" />
                        d. 13.75, 19.75
                     </p>

                     
                    *216
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Midpoint Riemann sums</h4>
                      <p>Complete the following steps for the given function, interval, and value of n.</p>
                      <div>
                        <p><b>a.</b>Sketch the graph of the following function on the given interval.</p>
                        <p><b>b.</b>Calculate <MathComponent tex="\Delta x" />and the grid points <MathComponent tex="x_{0},x_{1},...,x_{n}" /></p>
                        <p><b>c.</b>Illustrate the midpoint Riemann sum by sketching the appropriate rectangles</p>
                        <p><b>d.</b>Calculate the midpoint Riemann sums.</p>
                      </div>
                      
                      
                     <MathComponent tex="f(x) = x^{2} - 1" /> on [2,4]; n = 4

                     <p>
                        Answer:<br/>
                        a/c.
                        <img src={graph5} alt="Graph of function" ></img>
                        <p>Left Riemann sum underestimates area</p>
                        b. <MathComponent tex="\Delta x = 1;0,1,2,3,4" />
                        d. 20
                     </p>

                     
                    *217
                </div>


        

             
                
            </div>
            </div>
           
    );
}