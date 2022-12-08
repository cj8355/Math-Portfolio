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