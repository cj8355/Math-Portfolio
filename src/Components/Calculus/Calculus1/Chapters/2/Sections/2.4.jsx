import { Link } from "react-router-dom";
import "./2.4.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph3.png";
import graph2 from "./images/graph4.png";
import graph3 from "./images/graph5.png";



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
                        <img src={graph1} alt="Graph of function" ></img>
                        a. <MathComponent tex="\infty" />
                        b. <MathComponent tex="- \infty" />
                        </p>
                    
                        
                    </span> *28
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                    

                    <span>
                        Determining limits analytically
                        Determine the following limits.
                        a. <MathComponent tex="\lim_{x\to 2^{+}} \frac{1}{x - 2}" />
                        b. <MathComponent tex="\lim_{x\to 2^{-}} \frac{1}{x - 2}" />
                        c. <MathComponent tex="\lim_{x\to 2} \frac{1}{x - 2}" />
                        

                        <p>Answer:</p>
                        <p>
                        
                        a. <MathComponent tex="\infty" />
                        b. <MathComponent tex="- \infty" />
                        c. Does not Exist
                        </p>
                        
                        
                    </span> *29
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                    

                    <span>
                        Finding vertical asymptotes
                        Find all vertical asymptotes <MathComponent tex="x = a" /> of the following functions. For each value of a, determine 
                        
                         <MathComponent tex="\lim_{x\to a^{+}} f(x)" />
                         <MathComponent tex="\lim_{x\to a^{-}} f(x)" />
                       <MathComponent tex="\lim_{x\to a} f(x)" />
                       <MathComponent tex="f(x) = \frac{x^{2} - 9x + 14}{x^{2} - 5x + 6}" />

                        <p>Answer:</p>
                        <p>
                        
                        <img src={graph2} alt="Graph of function" ></img>
                        Vertical Asymptote: <MathComponent tex="\x = 3" />
                        <MathComponent tex="\lim_{x\to 3^{+}} f(x) = - \infty" />
                         <MathComponent tex="\lim_{x\to 3^{-}} f(x) = \infty" />
                       <MathComponent tex="\lim_{x\to 3} f(x) = Does Not Exist" />
                        </p>
                        
                        
                    </span> *30
                </div>

                <div className="Example4">
                    <h3>Example 4</h3>
                    

                    <span>
                        Asymptotes
                       Use analytical methods and/or a graphing utility to identify the vertical asymptotes (if any) of the following function 
                       
                       <MathComponent tex="f(x) = \frac{x^{2} - 3x + 2}{x^{10} - x^{9}}" />

                        <p>Answer:</p>
                        <p>
                        
                        <img src={graph3} alt="Graph of function" ></img>
                        Vertical Asymptote: <MathComponent tex="x = 0" />
                       
                        </p>
                        
                        
                    </span> *31
                </div>

                
            </div>
            </div>
           
    );
}