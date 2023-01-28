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
                      
                      
                   

                    *
                </div>


             
                
            </div>
            </div>
           
    );
}