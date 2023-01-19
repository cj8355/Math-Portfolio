import { Link } from "react-router-dom";
import "./3.10.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch3_Sec10() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 10 Derivatives of Inverse Trigonometric Functions</h1>
        <div className="sectionText">

        <h2>Derivative of Inverse Sine </h2>
      
        <p>
        <MathComponent tex="\frac{d}{dx} (sin ^{-1} x) = \frac{1}{\sqrt{1 - x^{2}}}" />, 
        for <MathComponent tex="-1 < x < 1" />
        </p> *131


           
        <h2>Derivatives of Inverse Trigonometric Functions </h2>
      
      <div>
      <MathComponent tex="\frac{d}{dx} (sin ^{-1} x) = \frac{1}{\sqrt{1 - x^{2}}}" />
      <MathComponent tex="\frac{d}{dx} (tan ^{-1} x) = \frac{1}{1 + x^{2}}" />
      <MathComponent tex="\frac{d}{dx} (sec ^{-1} x) = \frac{1}{|x| \sqrt{x^{2} - 1}}" />

      </div>
      <div>
      <MathComponent tex="\frac{d}{dx} (cos ^{-1} x) = - \frac{1}{\sqrt{1 - x^{2}}}" />, for <MathComponent tex="-1 < x < 1" />
      <MathComponent tex="\frac{d}{dx} (cot ^{-1} x) = - \frac{1}{1 + x^{2}}" />, for <MathComponent tex="- \infty < x < \infty" />
      <MathComponent tex="\frac{d}{dx} (csc ^{-1} x) = - \frac{1}{|x| \sqrt{x^{2} - 1}}" />, for <MathComponent tex="|x| > 1" />

      </div>
      
       *132


       <h2>Derivative of the Inverse Function </h2>
      
        <p>
            Let f be differentiable and have an inverse on an interval I. If <MathComponent tex="x_{0}" />
            is a point of I at which <MathComponent tex="f'(x_{0}) \neq 0" />, then <MathComponent tex="f^{-1}" />
            is differentiable at <MathComponent tex="y_{0} = f(X_{0})" /> and
        <MathComponent tex="(f^{-1})'(y_{0}) = \frac{1}{f'(x_{0})}" />, 
        where <MathComponent tex="y_{0} = f(x_{0})" />.
        </p> *133


            
          
         
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                    <h4></h4>
                      
                      
                     


                  
                    *
                </div>


             
           
             
                
            </div>
            </div>
           
    );
}