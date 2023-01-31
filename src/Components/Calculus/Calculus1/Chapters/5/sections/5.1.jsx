import { Link } from "react-router-dom";
import "./5.1.css";
import { MathComponent } from "mathjax-react";


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
                      <h4></h4>
                      
                      
                     <MathComponent tex="" />

                     
                     

                    *
                </div>


        

             
                
            </div>
            </div>
           
    );
}