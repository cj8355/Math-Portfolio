import { Link } from "react-router-dom";
import "./2.3.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch2_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 3 Techniques for Computing Limits</h1>
        <div className="sectionText">

        <h2>Limits of Linear Functions</h2>
        <span>
        Let a, b, and m be  <MathComponent tex="\mathbb{R}" />. For linear functions  <MathComponent tex="f(x) = mx + b" />
        <MathComponent tex="\lim_{x\to a} f(x) = f(a) = ma + b" />
    
        </span> * 17


        <h2>Limits Laws</h2>
        <span>
           <p> Assume <MathComponent tex="\lim_{x\to a} f(x)" /> and <MathComponent tex="\lim_{x\to a} g(x)" /> exist. The following properties hold, where c is
            a <MathComponent tex="\mathbb{R}" />, and <MathComponent tex="n > 0" /> is an integer.
            </p>
            <p><bold>1. Sum</bold><MathComponent tex="\lim_{x\to a} (f(x) + g(x)) = \lim_{x\to a} f(x) + \lim_{x\to a} g(x)" /> </p>
            <p><bold>2. Difference</bold><MathComponent tex="\lim_{x\to a} (f(x) - g(x)) = \lim_{x\to a} f(x) - \lim_{x\to a} g(x)" /> </p>
            <p><bold>3. Constant Multiple</bold><MathComponent tex="\lim_{x\to a} (cf(x)) = c \lim_{x\to a} f(x)" /> </p>
            <p><bold>4. Product</bold><MathComponent tex="\lim_{x\to a} (f(x)g(x)) = ( \lim_{x\to a} f(x))( \lim_{x\to a} g(x))" /> </p>
            <p><bold>5. Quotient</bold><MathComponent tex="\lim_{x\to a} ( \frac {f(x)}{g(x)}) = \frac {\lim_{x\to a} f(x)} {\lim_{x\to a} g(x)}" />, provided  <MathComponent tex="\lim_{x\to a} g(x) \neq 0" /></p>
            <p><bold>6. Power</bold><MathComponent tex="\lim_{x\to a} (f(x))^{n} = ( \lim_{x\to a} f(x))^{n}" /> </p>
            <p><bold>7. Root</bold><MathComponent tex="\lim_{x\to a} (f(x))^{\frac {1}{n}} = ( \lim_{x\to a} f(x))^{\frac{1}{n}}" />, provided <MathComponent tex="f(x) > 0" /> for some z near a, if n is even </p>

       
    
        </span> * 18

        <h2>Limits of Polynomial and Rational Functions</h2>
        <span>
           <p>Assume p and q are polynomials and a is a constant</p>
            <p><bold>a. Polynomial functions: </bold><MathComponent tex="\lim_{x\to a} p(x) = p(a)" /> </p>
            <p><bold>b. Rational Functions</bold><MathComponent tex="\lim_{x\to a} ( \frac {p(x)}{q(x)}) = \frac {p(a)}{q(a)}" />, provided <MathComponent tex="q(a) \neq 0" />  </p>
            
    
        </span> * 18


        <h2>Limit Laws for One-Sided Limits</h2>
        <span>
           <p> Laws 1 - 6 hold with  <MathComponent tex="\lim_{x\to a}" /> replaced with <MathComponent tex="\lim_{x\to a^{+}}" /> or <MathComponent tex="\lim_{x\to a^{-}}" />
            Law 7 is modified as follows. Assume <MathComponent tex="n > 0" /> is an integer.
            </p>
            <p><bold>7. Root</bold>
            <span>
            a. <MathComponent tex="\lim_{x\to a^{+}} (f(x))^{\frac {1}{n}} = ( \lim_{x\to a^{+}} f(x))^{\frac{1}{n}}" />, provided <MathComponent tex="f(x) \geq 0" /> for some x near a with  <MathComponent tex="x > a" />, if n is even
            </span>
            <span>
            b. <MathComponent tex="\lim_{x\to a^{-}} (f(x))^{\frac {1}{n}} = ( \lim_{x\to a^{-}} f(x))^{\frac{1}{n}}" />, provided <MathComponent tex="f(x) \geq 0" /> for some x near a with  <MathComponent tex="x < a" />, if n is even
            </span>
            </p>

       
    
        </span> * 19

          
        <h2>The Squeeze Theorem</h2>
        <span>
           <p>Assume the functions f, g, and h satisfy  <MathComponent tex="f(x) \leq g(x) \leq h(x)" /> for all values of x near a,
           except possibly at a. If  <MathComponent tex="\lim_{x\to a} f(x) = \lim_{x\to a} h(x) = L" /> then
            <MathComponent tex="\lim_{x\to a} g(x) = L" />
           
            </p>

       
    
        </span> * 20
                
            
            
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
                        
                    </span> *21
                </div>

                <div className="Example1">
                    <h3>Example 2</h3>
                    

                    <span>
                        <bold>Evaluating Limits</bold>
                        Find the following limits or state that they do not exist. Assume a, b, c, and k are fixed real numbers.
                        <MathComponent tex="\lim_{x\to 4} (3x - 7)" />
                        <p>Answer:
                        <MathComponent tex="3(4) - 7 = 5" />
                        
                        </p>
                        <MathComponent tex="\lim_{x\to 1} \frac{5x^{2} + 6x + 1}{8x - 4}" />
                        
                        <p>Answer:
                        <MathComponent tex="\frac{5(1)^{2} + 6(1) + 1}{8(1) - 4} = \frac{12}{4} = 3" />
                        
                        </p>

                          
                        
                    </span> *22
                </div>

                
            </div>
            </div>
           
    );
}