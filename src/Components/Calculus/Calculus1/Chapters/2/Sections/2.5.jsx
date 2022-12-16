import { Link } from "react-router-dom";
import "./2.5.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch2_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 5 Limits at Infinity</h1>
        <div className="sectionText">

        <h2>Limits at Infinity and Horizontal Asymptotes</h2>
        <span>
            If f(x) becomes arbitrarily close to a finite number L for all sufficiently large and positive x, then we write
            <MathComponent tex="\lim_{x\to \infty} f(x) = L" />

            We say the limit of f(x) as x approaches infinity is L. In this case, the line y = L is a horizontal asymptote of f. The 
            Limit at negative infinity, 
            <MathComponent tex="\lim_{x\to - \infty} f(x) = M" />
            is defined analogously. When this limit exists, y = M is a horizontal asymptote

           
    
        </span> *32


        <h2>Infinite Limits at Infinity</h2>
        <span>
            If f(x) becomes arbitrarily large as x becomes arbitrarily large, then we write
            <MathComponent tex="\lim_{x\to \infty} f(x) = \infty" />
            The limits <MathComponent tex="\lim_{x\to \infty} f(x) = - \infty" />, <MathComponent tex="\lim_{x\to - \infty} f(x) = \infty" /> and
            <MathComponent tex="\lim_{x\to - \infty} f(x) = - \infty" /> are defined similarly
     
       
    
        </span> *33


        
          
        
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    

                    <span>
                        Graph the function <MathComponent tex="f(x) = \frac{1}{x^{2} - x}" />
                        using a graphing utility with the window
                        <MathComponent tex="[-1,2] x [-10,10]" />
                        Use your graph to determine the following limits
                        <p>
                            a. <MathComponent tex="\lim_{x\to 0^{-}} f(x)" />
                        </p>
                        <p>
                            b. <MathComponent tex="\lim_{x\to 0^{+}} f(x)" />
                        </p>

                        <p>Answer:</p>
                        <p>
                        
                        a. <MathComponent tex="\infty" />
                        b. <MathComponent tex="- \infty" />
                        </p>
                    
                        
                    </span> *
                </div>


               

                
            </div>
            </div>
           
    );
}