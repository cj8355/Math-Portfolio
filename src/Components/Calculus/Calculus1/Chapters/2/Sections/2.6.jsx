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