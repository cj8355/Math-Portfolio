import { Link } from "react-router-dom";
import "./2.4.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch2_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 4 Infinite Limits</h1>
        <div className="sectionText">

        <h2>Infinite Limits</h2>
        <span>
            Suppose f is defined fo all x near a. If f(x) grows arbitrarily large for all x sufficiently close (but not equal) to a, we write
            <MathComponent tex="\lim_{x\to a} f(x) = \infty" />
            and say the limit of f(x) as x approaches a is infinity. If f(x) is negative and grows arbitrarily large in magnitude for all x sufficiently close (but not equal) to a, we write
            <MathComponent tex="\lim_{x\to a} f(x) = - \infty" />
            and say the limit of f(x) as x approaches a is negative infinity. In both cases, the limit does not exist
       
    
        </span> *25


        <h2>One-Sided Infinite Limits</h2>
        <span>
            Suppose f is defined fo all x near a with <MathComponent tex="x > a" />. If f(x) becomes arbitrarily large for all x sufficiently close to a with <MathComponent tex="x > a" />, we write
            <MathComponent tex="\lim_{x\to a^{+}} f(x) = \infty" />
            The one-sided infinite limits <MathComponent tex="\lim_{x\to a^{+}} f(x) = - \infty" />, <MathComponent tex="\lim_{x\to a^{-}} f(x) = \infty" />, and
            <MathComponent tex="\lim_{x\to a^{-}} f(x) = - \infty" />
            are defined analogously.
       
    
        </span> *26


        <h2>Vertical Asymptote</h2>
        <span>
            If <MathComponent tex="\lim_{x\to a} f(x) = \pm \infty" />,  <MathComponent tex="\lim_{x\to a^{+}} f(x) = \pm \infty" />, or <MathComponent tex="\lim_{x\to a^{-}} f(x) = \pm \infty" />,
            the line <MathComponent tex="x = a" /> is called a vertical asymptote of f.
            
    
        </span> *27
          
        
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    

                    <span>
                        Assume
                        <MathComponent tex="\lim_{x\to 1} f(x) = 8" />, <MathComponent tex="\lim_{x\to 1} g(x) = 3" />, and 
                        <MathComponent tex="\lim_{x\to 1} h(x) = 2" />.
                        Compute the following limits and state the limit laws used to justify your computations
                        
                        
                        <MathComponent tex="\lim_{x\to 1} (4f(x))" />
                        <p>Answer:
                        <MathComponent tex="4(8) = 32" />
                        Constant Multiple Law
                        </p>

                        <MathComponent tex="\lim_{x\to 1} (f(x) - g(x))" />
                        <p>Answer:
                        <MathComponent tex="8 - 3 = 5" />
                        Difference Law
                        </p>
                        
                    </span> *
                </div>

          
                
            </div>
            </div>
           
    );
}