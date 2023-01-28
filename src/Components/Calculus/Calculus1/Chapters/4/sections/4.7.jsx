import { Link } from "react-router-dom";
import "./4.7.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 7 L'Hopital's Rule</h1>
        <div className="sectionText">

        <h2><MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule" /> </h2>
       
        <p>
          Suppose f and g are differentiable on an open interval <i>I</i> containing a with <MathComponent tex="g'(x) \neq 0" />
          on <i>I</i> when <MathComponent tex="x \neq a" />. If <MathComponent tex="\lim_{x\to a} f(x) = \lim_{x\to a} g(x) = 0" />,
          then <MathComponent tex="\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}" />,
          proved the limit on the right exists (or is  <MathComponent tex="\pm \infty" /> ). The rule also applies if
          <MathComponent tex="x \rightarrow a" /> is replaced with  <MathComponent tex="x \rightarrow \pm \infty" />,  <MathComponent tex="x \rightarrow a^{+}" />, 
          or <MathComponent tex="x \rightarrow a^{-}" />
          </p>

      *189


      <h2><MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule(\infty/\infty)" /> </h2>
       
        <p>
          Suppose f and g are differentiable on an open interval <i>I</i> containing a with <MathComponent tex="g'(x) \neq 0" />
          on <i>I</i> when <MathComponent tex="x \neq a" />. If <MathComponent tex="\lim_{x\to a} f(x) = \pm \infty" />
          and <MathComponent tex="\lim_{x\to a} g(x) = \pm \infty" />, then
           <MathComponent tex="\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}" />,
          proved the limit on the right exists (or is  <MathComponent tex="\pm \infty" /> ). The rule also applies for
         <MathComponent tex="x \rightarrow \pm \infty" />,  <MathComponent tex="x \rightarrow a^{+}" />, 
          or <MathComponent tex="x \rightarrow a^{-}" />
          </p>

      *190


      <h2>Indeterminate forms<MathComponent tex="1^{\infty}, 0^{0}, and \infty^{0}" /> </h2>
       
        <p>
          Assume <MathComponent tex="\lim_{x\to a} f(x)^{g(x)}" /> has the indeterminate form 
          <MathComponent tex="1^{\infty}, 0^{0}, and \infty^{0}" />.
          <div>
            <p>1. Analyze <MathComponent tex="L = \lim_{x\to a} g(x)lnf(x)" />. This limit can be put in the form 0/0 or
            <MathComponent tex="\infty/\infty" />, both of which are handled by <MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule" /> 
            </p>
            <p>
                2. When L is finite, <MathComponent tex="\lim_{x\to a} f(x)^{g(x)} = e^{L}" />. If <MathComponent tex="L = \infty \hspace{.04in} or \hspace{.04in} - \infty" />,
                then <MathComponent tex="\lim_{x\to a} f(x)^{g(x)} = \infty \hspace{.04in} or \hspace{.04in} \lim_{x\to a} f(x)^{g(x)} = 0" />,
                respectively.
            </p>
          </div>
       
          </p>

      *191


      <h2>Growth Rates of Functions (as <MathComponent tex="x \rightarrow \infty" />) </h2>
       
        <p>
          Suppose f and g are functions with <MathComponent tex="\lim_{x\to \infty} f(x) = \lim_{x\to \infty} g(x) = \infty" />. Then f grows
          faster than g as <MathComponent tex="x \rightarrow \infty" /> if
          <MathComponent tex="\lim_{x\to \infty} \frac{g(x)}{f(x)} = 0" /> or, equivalently, if 
          <MathComponent tex="\lim_{x\to \infty} \frac{f(x)}{g(x)} = \infty" />.
          The functions f and g have comparable growth rates if <MathComponent tex="\lim_{x\to \infty} \frac{f(x)}{g(x)} = M" />
          where <MathComponent tex="0 < M < \infty" />(M is positive and finite).


       
          </p>

      *192


      <h2>Ranking Growth Rates as <MathComponent tex="x \rightarrow \infty" /> </h2>
       
        <p>
            Let <MathComponent tex="f << g" /> mean that g grows faster than f as <MathComponent tex="x \rightarrow \infty" />.
            With positive real numbers p,q,r, and s and with <MathComponent tex="b > 1" />,
            <MathComponent tex="ln^{q}x << x^{p} << x^{p}ln^{r}x << x^{p + s} << b^{x} << x^{x}" />.
          
          </p>

      *193





            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Limits</h4>
                     <p>Evaluate the following limits. Use <MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule" /> when it 
                        is convenient and applicable.
                     </p>
                      
                     
                     <MathComponent tex="\lim_{x\to 2} \frac{x^{2} - 2x}{x^{2} - 6x + 8}" /> 
                    
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\lim_{x\to 2} \frac{f'(x)}{g'(x)} = \lim_{x\to 2} \frac{2x - 2}{2x - 6} = \frac{2}{-2} = -1" /> 
                    </p>
                      
                   

                    *194
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Limits</h4>
                     <p>Evaluate the following limits. Use <MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule" /> when it 
                        is convenient and applicable.
                     </p>
                      
                     
                     <MathComponent tex="\lim_{x\to 0} \frac{3sin4x}{5x}" /> 
                    
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\lim_{x\to 0} \frac{f'(x)}{g'(x)} = \lim_{x\to 0} \frac{12cos4x}{5} = \frac{12}{5}" /> 
                    </p>
                      
                   

                    *195
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Limits</h4>
                     <p>Evaluate the following limits. Use <MathComponent tex="L'H \hat{o}pital's \hspace{.05in} Rule" /> when it 
                        is convenient and applicable.
                     </p>
                      
                     
                     <MathComponent tex="\lim_{x\to 0^{+}} x^{2x}" /> 
                    
                    <p>
                        Answer: <br/>
                        1 
                    </p>
                      
                   

                    *196
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>More Limits</h4>
                     <p>Evaluate the following limits.
                     </p>
                      
                     
                     <MathComponent tex="\lim_{x\to 1} \frac{xlnx - x + 1}{xln^{2}x}" /> 
                    
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\lim_{x\to 1} \frac{f''(x)}{g''(x)} = \frac{\frac{1}{x}}{\frac{2ln(x)}{x}+\frac{2}{x}} = \frac{1}{2}" /> 
                    </p>
                      
                   

                    *197
                </div>


             
                
            </div>
            </div>
           
    );
}