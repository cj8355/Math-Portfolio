import { Link } from "react-router-dom";
import "./3.9.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch3_Sec9() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 9 Derivatives of Logarithmic and Exponential Functions</h1>
        <div className="sectionText">

        <h2>Inverse Properties for <MathComponent tex="e^{x}" /> and <MathComponent tex="ln^{x}" /></h2>
      <p>
        <p>1. <MathComponent tex="e^{ln x} = x" /> for <MathComponent tex="x > 0" />, and <MathComponent tex="ln(e^{x}) = x" />, for all x</p>
           <p>2. <MathComponent tex="y = ln x" />if and only if <MathComponent tex="x = e^{x}" /></p>
           <p>3. For real numbers x and b <MathComponent tex="> 0" />, <MathComponent tex="b^{x} = e^{ln b^{x}} = e^{x ln^{b}}" /></p>
           
            </p> *122


            <h2>Derivative of ln x</h2>
            <p>
            <MathComponent tex="\frac{d}{dx} (ln x) = \frac{1}{x}" />, for <MathComponent tex="x > 0" />
            <MathComponent tex="\frac{d}{dx} (ln|x|) = \frac{1}{x}" />, for <MathComponent tex="x \neq 0" />
            If a is differentiable at x and <MathComponent tex="u(X) \neq 0" />, then
            <MathComponent tex="\frac{d}{dx} (ln|u(x)|) = \frac{u'(x)}{u(x)}" />
            </p> *123


            <h2>Derivative of <MathComponent tex="b^{x}" /></h2>
            <p>
                If <MathComponent tex="b > 0" /> and <MathComponent tex="b \neq 1" />, then for all x,
                <MathComponent tex="\frac{d}{dx} (b^{x}) = b^{x} ln b" />
            </p> *124


            <h2>General Power Rule</h2>
            <p>
                For real numbers p and for  <MathComponent tex="x > 0" />,
                <MathComponent tex="\frac{d}{dx} (x^{p}) = px^{p - 1}" />.
                Furthermore, if u is a positive differentiable function on its domain, then
                <MathComponent tex="\frac{d}{dx} (u(x)^{p}) = p(u(x))^{p - 1} \cdot u'(x)" />
            </p> *125


            <h2>Derivative of <MathComponent tex="log_{b}x" /></h2>
            <p>
                If  <MathComponent tex="b > 0" /> and <MathComponent tex="b \neq 1" />, then
                <MathComponent tex="\frac{d}{dx} (log_{b}x) = \frac{1}{x ln b}" />, for
                <MathComponent tex="x > 0" /> and 
                <MathComponent tex="\frac{d}{dx} (log_{b}|x|) = \frac{1}{x ln b}" />, for <MathComponent tex="x \neq 0" />
            </p> *126

          
         
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
         
           
             
                
            </div>
            </div>
           
    );
}