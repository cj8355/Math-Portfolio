import { Link } from "react-router-dom";
import "./8.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 3 Trigonometric Integrals</h1>
        <div className="sectionText">

      <h2>Reduction Formulas</h2>
      <p className="textBorder">
       <p>
        Assume n is a positive integer.
       </p>
        <span className="oneLine"><b>1. </b><MathComponent tex="\int \hspace{.15cm} sin^{n} \hspace{.15cm} x \hspace{.15cm} dx = - \frac{sin^{n-1} \hspace{.15cm} x \hspace{.15cm} cos \hspace{.15cm} x}{n} \hspace{.15cm} + \hspace{.15cm} \frac{n - 1}{n} \int sin^{n-2} \hspace{.15cm} x \hspace{.15cm} dx" /></span>
        <span className="oneLine"><b>2. </b><MathComponent tex="\int \hspace{.15cm} cos^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{cos^{n-1} \hspace{.15cm} x \hspace{.15cm} sin \hspace{.15cm} x}{n} \hspace{.15cm} + \hspace{.15cm} \frac{n - 1}{n} \int cos^{n-2} \hspace{.15cm} x \hspace{.15cm} dx" /></span>
        <span className="oneLine"><b>3. </b><MathComponent tex="\int \hspace{.15cm} tan^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{tan^{n-1} \hspace{.15cm} x}{n - 1} \hspace{.15cm} - \hspace{.15cm} \int tan^{n-2} \hspace{.15cm} x \hspace{.15cm} dx, n \neq 1" /></span>
        <span className="oneLine"><b>4. </b><MathComponent tex="\int \hspace{.15cm} sec^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{sec^{n-2} \hspace{.15cm} x \hspace{.15cm} tan \hspace{.15cm} x}{n - 1} \hspace{.15cm} + \hspace{.15cm} \frac{n - 2}{n - 1} \int sec^{n-2} \hspace{.15cm} x \hspace{.15cm} dx, n \neq 1" /></span>
        *325
      </p>


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Trigonometric integrals</h4>
                      <p>
                        Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int cos^{3} \hspace{.15cm} x \hspace{.15cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="= sin \hspace{.15cm} x - \frac{1}{3} sin^{3} \hspace{.15cm} x  + C" />    
                         
                    </p>

                    *326
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Trigonometric integrals</h4>
                      <p>
                        Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int sin^{5} \hspace{.15cm} x \hspace{.15cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="= -cos \hspace{.15cm} x + \frac{2}{3} cos^{3} \hspace{.15cm} x - \frac{1}{5}cos^{5} \hspace{.15cm} x + C" />    
                         
                    </p>

                    *327
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Trigonometric integrals</h4>
                      <p>
                        Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int tan^{2} \hspace{.15cm} x \hspace{.15cm} dx" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="= tan \hspace{.15cm} x - \hspace{.15cm} x + C" />    
                         
                    </p>

                    *328
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Trigonometric integrals</h4>
                      <p>
                        Evaluate the following integral.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi/4} sec^{4} \hspace{.15cm} \theta \hspace{.15cm} d\theta" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{0}^{\pi/4} sec^{2} \hspace{.15cm} (\theta) \hspace{.15cm} sec^{2} \hspace{.15cm} (\theta) \hspace{.15cm} d\theta" /> 
                         <MathComponent tex="\int_{0}^{\pi/4} (1 + tan^{2} \hspace{.15cm} (\theta)) \hspace{.15cm} sec^{2} \hspace{.15cm} (\theta) \hspace{.15cm} d\theta" /> 
                         <MathComponent tex="u = tan(\theta), \hspace{.15cm} du = sec^{2} (\theta) \hspace{.15cm} d \theta, \hspace{.15cm} d \theta = \frac{1}{sec^{2} (\theta)} \hspace{.15cm} du" /> 
                         <MathComponent tex="\int_{0}^{1} 1 + u^{2} \hspace{.15cm} du" /> 
                         <MathComponent tex="\int_{0}^{1} \hspace{.15cm} du + \int_{0}^{1} u^{2} \hspace{.15cm} du" /> 
                         <MathComponent tex="= \frac{4}{3}" /> 
                         
                    </p>

                    *329
                    </div>
                </div>



            </div>
            </div>
           
    );
}