import { Link } from "react-router-dom";
import "./2.2.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";


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

                 
                <div className="Example2">
                    <h3>Example 2</h3>
                    

                    <span>
                        <p>Evaluating limits graphically</p>
                        <p>Sketch a graph of f and use it to make a conjecture about the values of f(a),
                        <MathComponent tex="\lim_{x\to a^{-}} f(x)" />,
                        <MathComponent tex="\lim_{x\to a^{+}} f(x)" />,
                        <MathComponent tex="\lim_{x\to a} f(x)" />
                        or state that they do not exist.
                             </p>
                      
                        
                        <p>
                        <MathComponent tex="f(x) = x^2 + 1" /> if <MathComponent tex="x \leq -1" />
                        <MathComponent tex="f(x) = 3" /> if <MathComponent tex="x > -1" />
                        <MathComponent tex="a = -1" />
                        </p> 
                        <p>Answer:<br/>
                            <img src={graph1} alt="Grpah of Function" width="350px" height="350px" />
                            <p>
                            <MathComponent tex="f(a) = 2" />  
                            <MathComponent tex="\lim_{x\to a^{-}} f(x) = 2" /> 
                            <MathComponent tex="\lim_{x\to a^{+}} f(x) = 3" /> 
                            <MathComponent tex="\lim_{x\to a} f(x) = DNE(Does Not Exist)" /> 
                            </p>
                        </p>
                       
                        
                    </span> *15
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                    

                    <span>
                        <p>Estimating limits graphically and numerically</p>
                        <p>Use a graph of f to estimate <MathComponent tex="\lim_{x\to a} f(x)" />
                        or to show that the limit does not exist. Evaluate f(x) near x = a to support your conjecture.
                        <MathComponent tex="f(x) = \frac{sin(x + 1)}{|x + 1|}" />
                        a = -1
                        
                             </p>
                      
                        <p>Answer:<br/>
                            <img src={graph2} alt="Grpah of Function" width="400px" height="250px" />
                            <p>
                            <MathComponent tex="\begin{array} {|r|r|}\hline x & -1.1 & -1.01 & -1.001 \\ \hline g(x) & -0.9983342 & -0.9999833 & -0.9999998 \\ \hline x & -0.999 & -0.99 & -0.9 \\ \hline g(x) & 0.9999998 & 0.9999833 & 0.9983342 \\ \hline  \end{array}" />  
                            
                            </p>
                            Based off the graph and table, the limit DNE
                        </p>
                       
                        
                    </span> *16
                </div>

                
            </div>
            </div>
           
    );
}