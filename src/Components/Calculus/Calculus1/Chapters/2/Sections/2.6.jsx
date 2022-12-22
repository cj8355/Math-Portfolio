import { Link } from "react-router-dom";
import "./2.6.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch2_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 6 Continuity</h1>
        <div className="sectionText">

        <h2>Continuity at a Point</h2>
        <span>
            A function f is continuous at a  if  
            <MathComponent tex="\lim_{x\to a} f(x) = f(a)" />

    
        </span> *41


        <h2>Continuity Checklist</h2>
        <span>
           In order for f to be continuous at a, the following three conditions must hold.
           <p>1. <MathComponent tex="f(a)" /> is defined (a is in the domain of f)</p>
           <p>2. <MathComponent tex="\lim_{x\to a} f(x)" /> exists</p>
           <p>3. <MathComponent tex="\lim_{x\to a} f(x) = f(a)" /> (the value of f equals the limit of f at a)</p>
            <MathComponent tex="\lim_{x\to a} f(x) = f(a)" />

    
        </span> *42


        <h2>Continuity Rules</h2>
        <span>
           If f and g are continuous at a, then the following functions are also continuous at a.
           Assume c is a constant and <MathComponent tex="n > 0" /> is an integer.
           <p>a. <MathComponent tex="f + g" /></p>
           <p>b. <MathComponent tex="f - g" /></p>
           <p>c. <MathComponent tex="cf" /></p>
           <p>d. <MathComponent tex="fg" /></p>
           <p>e. <MathComponent tex="f/g" />, provided <MathComponent tex="g(a) \neq 0" /></p>
           <p>f. <MathComponent tex="(f(x))^{n}" /></p>

    
        </span> *43

        <h2>Polynomial and Rational Functions</h2>
        <span>
           <p>a. A polynomial function is continuous for all x.</p>
           <p>b. A rational function (a function of the form <MathComponent tex="\frac{p}{q}" />, where p and q are polynomials)
           is continuous for all x for which <MathComponent tex="q(x) \neq 0" />
           </p>
          

    
        </span> *44


        <h2>Continuity of Composite Functions at a Point</h2>
        <span>
           <p>If g is continuous at a and f is continuous at g(a), then the composite functions
           <MathComponent tex="f \circ g" /> is continuous at a
           </p>
          
    
        </span> *45


        <h2>Limits of Composite Functions</h2>
        <span>
           <p>1. If g is continuous at a and f is continuous at g(a), then
           <MathComponent tex="\lim_{x\to a} f(g(x)) = f(\lim_{x\to a} g(x))" />
           </p>
           <p>2. If <MathComponent tex="\lim_{x\to a} g(x) = L" /> and f is continuous at L, then
           <MathComponent tex="\lim_{x\to a} f(g(x)) = f(\lim_{x\to a} g(x))" />
           </p>
          
    
        </span> *46


        <h2>Continuity at Endpoints</h2>
        <span>
           <p>A function f is continuous from the right (or right-continuous) at a if
           <MathComponent tex="\lim_{x\to a^{+}} f(x) = f(a)" />
           , and f is continuous from the left (or left-continuous) at b if
           <MathComponent tex="\lim_{x\to b^{-}} f(x) = f(b)" />
           </p>
          
    
        </span> *47


        <h2>Continuity on an Interval</h2>
        <span>
           <p>A function f is continuous on an interval I if it is continuous at all points of I. If I contains
            its endpoints, continuity on I means continuous from the right or left at the endpoints
           
           </p>
          
    
        </span> *48


        <h2>Continuity of Functions with Roots</h2>
        <span>
           <p>Assume n is a positive integer. If n is an odd integer, then  <MathComponent tex="(f(x))^{1/n}" />
           is continuous at all points at which f is continuous. If n is even, then <MathComponent tex="(f(x))^{1/n}" />
           is continuous at all points at a which f is continuous and <MathComponent tex="f(a) > 0" />.
           
           </p>
          
    
        </span> *49


            
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    

                    <span>
                        
                    </span> *
                </div>


                

             

                
            </div>
            </div>
           
    );
}