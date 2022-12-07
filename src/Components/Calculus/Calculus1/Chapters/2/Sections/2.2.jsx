import { Link } from "react-router-dom";
import "./2.2.css";
import { MathComponent } from "mathjax-react";


export default function Calculus1_Ch2_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 2 Definitions of Limits</h1>
        <div className="sectionText">

        <h2>Limit of a Function</h2>
        <span>
        Suppose the function f is defined for all x near a except possibly at a. If f(x) is arbitrarily close to L for all x sufficiently close to a we write

        <MathComponent tex="\lim_{x\to a} f(x) = L" />
        and say the limit of f(x) as x approaches a equals L
        </span> * 13

          
            <div>
                <h2>One-Sided Limits </h2>
                
                    <span>
                        1. Right-sided limit
                        Suppose f is defined for all x near a with <MathComponent tex="x > a" />. If <MathComponent tex="f(x)" /> is arbitrarily close to L for all x sufficiently close to a with
                        <MathComponent tex="x > a" />, we write 
                        <MathComponent tex="\lim_{x\to a^{+}} f(x) = L" />
                        and say the limit of f(x) as x approaches a from the right eqauls L
                    
                    </span>

                    <span>
                        1. Left-sided limit
                        Suppose f is defined for all x near a with <MathComponent tex="x < a" />. If <MathComponent tex="f(x)" /> is arbitrarily close to L for all x sufficiently close to a with
                        <MathComponent tex="x < a" />, we write 
                        <MathComponent tex="\lim_{x\to a^{-}} f(x) = L" />
                        and say the limit of <MathComponent tex="f(x)" /> as x approaches a from the left eqauls L
                    
                    </span>
                    
                    
              
                </div>
                
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    

                    <span>
                        Let
                        <MathComponent tex="f(x) = \frac{x^{2} - 4}{x - 2}" /> 
                        <p>a. Calculate f(x) for each value of x in the following table.</p>
                        
                        <p>b. Make a conjecture about the value of </p> 
                        <MathComponent tex="\lim_{x\to 2} \frac{x^{2} - 4}{x - 2}" />

                        <MathComponent tex="\begin{array} {|r|r|}\hline x & 1.9 & 1.99 & 1.999 & 1.9999 \\ \hline f(x) = \frac{x^{2} - 4}{x - 2} &  &  &  &  \\ \hline x & 2.1 & 2.01 & 2.001 & 2.0001 \\ \hline f(x) = \frac{x^{2} - 4}{x - 2} &  &  &  &  \\ \hline  \end{array}" />
                        <MathComponent tex="\begin{array} {|r|r|}\hline x & 1.9 & 1.99 & 1.999 & 1.9999 \\ \hline f(x) = \frac{x^{2} - 4}{x - 2} & 3.9 & 3.99 & 3.999 & 3.9999 \\ \hline x & 2.1 & 2.01 & 2.001 & 2.0001 \\ \hline f(x) = \frac{x^{2} - 4}{x - 2} & 4.1 & 4.01 & 4.001 & 4.0001 \\ \hline  \end{array}" />

                        4
                    </span> *14
                </div>

                 
               

                
            </div>
            </div>
           
    );
}