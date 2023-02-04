import { Link } from "react-router-dom";
import "./5.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus1_Ch5_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 5 Substitution Rule</h1>
        <div className="sectionText">

        <h2>Substitution Rule for Indefinite Integrals</h2>
        <p>
            Let u = g(x), where g is differentiable on an interval, and let f be continuous on
            the corresponding range of g. On that interval.
        </p>
        <MathComponent tex="\int f(g(x))g'(x) dx = \int f(u) du" />.
        
      *241


      <h2>Substitution Rule (Change of Variables)</h2>
       <div>
        <ol>
            <li>Given an indefinite integral involving a composite function f(g(x)), identify
             an inner function u = g(x) such that a constant multiple of g'(x) appears in the integrand.</li>
            <li>Substitute u = g(x) and du = g'(x) dx in the integral.</li>
            <li>Evaluate the new indefinite integral with respect to u.</li>
            <li>Write the result in terms of x using u = g(x).</li>
        </ol>
        <p>*Not all integrals yield to the Substitution Rule.</p>
       </div>
        
      *242


      <h2>General Integration Formulas</h2>
        <div>
            <b>1. </b><MathComponent tex="\int cos \hspace{.04in} ax \hspace{.04in} dx = \frac{1}{a} sin \hspace{.04in} ax  + C" />
            <b>3. </b><MathComponent tex="\int sec^{2} \hspace{.04in} ax \hspace{.04in} dx = \frac{1}{a} tan \hspace{.04in} ax  + C" />
            <b>5. </b><MathComponent tex="\int sec \hspace{.04in} ax \hspace{.04in} tan \hspace{.04in} ax \hspace{.04in} dx = \frac{1}{a} sec \hspace{.04in} ax  + C" />
            <b>7. </b><MathComponent tex="\int e^{ax} dx = \frac{1}{a} e^{ax} + C" />
            <b>9. </b><MathComponent tex="\int \frac{dx}{a^{2} + x^{2}} = \frac{1}{a} tan^{-1} \frac{x}{a}  + C" />
            <b>11. </b><MathComponent tex="\int \frac{dx}{x \sqrt{x^{2} - a^{2}}} = \frac{1}{a} sec^{-1} |\frac{x}{a}|  + C, \hspace{.04in} a > 0" />
        </div>
        <div>
            <b>2.</b> <MathComponent tex="\int sin \hspace{.04in} ax \hspace{.04in} dx = - \frac{1}{a} cos \hspace{.04in} ax  + C" />
            <b>4.</b> <MathComponent tex="\int csc^{2} \hspace{.04in} ax \hspace{.04in} dx = - \frac{1}{a} cot \hspace{.04in} ax  + C" />
            <b>6.</b> <MathComponent tex="\int csc \hspace{.04in} ax \hspace{.04in} cot \hspace{.04in} ax = - \frac{1}{a} csc \hspace{.04in} ax  + C" />
            <b>8.</b> <MathComponent tex="\int b^{x} dx = \frac{1}{ln \hspace{.04in} b} b^{x} + C, b > 0,b \neq 1" />
            <b>10.</b> <MathComponent tex="\int \frac{dx}{\sqrt{a^{2} - x^{2}}} = sin^{-1} \frac{x}{a} + C, \hspace{.04in} a > 0" />
        </div>
        
        
      *243


      <h2>Substitution Rule for Definite Integrals</h2>
        <p>
            Let u = g(x), where g' is continuous on [a,b], and let f be continuous on
            the range of g. Then
        </p>
        <MathComponent tex="\int_{a}^{b} f(g(x))g'(x) dx = \int_{g(a)}^{g(b)} f(u) du" />.
        
      *244


     

            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Indefinite integrals</h4>
                      <p>
                        Use a change of variables or the General Integration Formulas table to evaluate the following
                        indefinite integrals. Check your work by differentitating.
                      </p>
                      
                     
                     <MathComponent tex="\int 2x (x^{2} - 1)^{99} dx" />
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\frac{(x^{2} - 1)^{100}}{100} + C" />
                    </p>

                    *245
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Indefinite integrals</h4>
                      <p>
                        Use a change of variables or the General Integration Formulas table to evaluate the following
                        indefinite integrals. Check your work by differentitating.
                      </p>
                      
                     
                     <MathComponent tex="\int 10^{4t+1} dt" />
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\frac{10^{4t+1}}{4 ln 10} + C" />
                    </p>

                    *246
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Definite integrals</h4>
                      <p>
                        Use a change of variables or the General Integration Formulas table to evaluate the following
                        definite integrals.
                      </p>
                      
                     
                     <MathComponent tex="\int_{1}^{3} \frac{2^{x}}{2^{x} + 4} dx" />
                    <p>
                        Answer: <br/>
                        <MathComponent tex="u = 2^{x} + 4" />
                        <MathComponent tex="du = 2^{x} ln 2" />
                        <MathComponent tex="\frac{1}{ln(2)}du = 2^{x} dx" />
                        <MathComponent tex="\int_{6}^{12} \frac{1}{u} \cdot \frac{1}{ln(2)} du = 1" />
                    </p>

                    *247
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Definite integrals</h4>
                      <p>
                        Use a change of variables or the General Integration Formulas table to evaluate the following
                        definite integrals.
                      </p>
                      
                     
                     <MathComponent tex="\int_{1}^{2} \frac{4}{9x^{2} + 6x + 1} dx" />
                    <p>
                        Answer: <br/>
                        <MathComponent tex="u = 3x + 1" />
                        <MathComponent tex="du = 3dx" />
                        <MathComponent tex="\frac{1}{3}du = dx" />
                        <MathComponent tex="4 \int_{4}^{7} \frac{1}{u^{2}} \cdot \frac{1}{3} du = \frac{1}{7}" />
                    </p>

                    *248
                </div>



             
                
            </div>
            </div>
           
    );
}