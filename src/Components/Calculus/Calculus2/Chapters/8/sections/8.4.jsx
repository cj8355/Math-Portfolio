import { Link } from "react-router-dom";
import "./8.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 4 Trigonometric Substitutions</h1>
        <div className="sectionText">

      <h2>Trigonometric Substitutions Table</h2>
      <p className="textBorder">
       
        <MathComponent tex="\begin{array} {|r|r|}\hline \mathbf{The \hspace{.1cm} Integral \hspace{.1cm} Contains...} & \mathbf{Corresponding \hspace{.1cm} Substitution} & \mathbf{Useful \hspace{.1cm} Identity} \\ \hline a^{2} \hspace{.1cm} - \hspace{.1cm} x^{2} & x = \hspace{.1cm} a \hspace{.1cm} sin \hspace{.1cm} \theta, \hspace{.1cm} - \frac{\pi}{2} \leq \hspace{.1cm} \theta \hspace{.1cm} \leq \hspace{.1cm} \frac{\pi}{2}, \hspace{.1cm} for \hspace{.1cm} \vert x \vert \leq a & a^{2} - a^{2} \hspace{.1cm} sin^{2} \hspace{.1cm} \theta = a^{2} \hspace{.1cm} cos^{2} \hspace{.1cm} \theta \\ \hline a^{2} \hspace{.1cm} + \hspace{.1cm} x^{2} & x = \hspace{.1cm} a \hspace{.1cm} tan \hspace{.1cm} \theta, - \frac{\pi}{2} < \hspace{.1cm} \theta \hspace{.1cm} < \hspace{.1cm} \frac{\pi}{2} & a^{2} + a^{2} \hspace{.1cm} tan^{2} \hspace{.1cm} \theta = a^{2} \hspace{.1cm} sec^{2} \hspace{.1cm} \theta \\ \hline x^{2} \hspace{.1cm} - \hspace{.1cm} a^{2} & x = a \hspace{.1cm} sec \hspace{.1cm} \theta, \left\{ \begin{array}{c} 0 \leq \theta < \frac{\pi}{2}, \hspace{.1cm} for \hspace{.1cm} x \geq a \\ \frac{\pi}{2} < \theta \leq \pi, \hspace{.1cm} for \hspace{.1cm} x \leq -a \end{array} \right. & a^{2} \hspace{.1cm} sec^{2} \hspace{.1cm} \theta \hspace{.1cm} - \hspace{.1cm} a^{2} = a^{2} \hspace{.1cm} tan^{2} \hspace{.1cm} \theta \\ \hline  \end{array}" />
        *330
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Trigonometric substitutions</h4>
                      <p>
                        Evaluate the following integrals using trigonometric substitution.
                      </p>
                      
                      <MathComponent tex="\int_{5}^{5 \sqrt{3}} \sqrt{100 - x^{2}} dx" /> 
                    <p>
                        Answer: <br/>
                         <MathComponent tex="x = 10 \hspace{.1cm} sin(t), \hspace{.1cm} where \hspace{.1cm} - \frac{\pi}{2} \leq t \leq \frac{\pi}{2}, \hspace{.1cm} dx = 10 \hspace{.1cm} cos(t) \hspace{.1cm} dt" />    
                         <MathComponent tex="= \int_{\frac{\pi}{6}}^{\frac{\pi}{3}} \sqrt{100 - (10sin(t))^{2}} \hspace{.1cm} (10 cos(t)) \hspace{.1cm} dt" />
                         <MathComponent tex="= \int_{\frac{\pi}{6}}^{\frac{\pi}{3}} 100 cos^{2}(t) \hspace{.1cm} dt" />
                         <MathComponent tex="= \frac{25 \pi}{3}" />
                         
                    </p>

                    *331
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Trigonometric substitutions</h4>
                      <p>
                        Evaluate the following integrals using trigonometric substitution.
                      </p>
                      
                      <MathComponent tex="\int_{0}^{2} \frac{x^{2}}{x^{2} + 4} dx" /> 
                    <p>
                        Answer: <br/>
                         <MathComponent tex="= \int_{0}^{2} 1 - \hspace{.1cm} \frac{4}{x^{2} + 4} \hspace{.1cm} dx" />
                         <MathComponent tex="= \int_{0}^{2} dx \hspace{.1cm}  + \hspace{.1cm} \int_{0}^{2} - \hspace{.1cm} \frac{4}{x^{2} + 4} \hspace{.1cm} dx" />
                         <MathComponent tex="= 2 - \frac{\pi}{2}" />
                         
                    </p>

                    *332
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Trigonometric substitutions</h4>
                      <p>
                        Evaluate the following integrals using trigonometric substitution.
                      </p>
                      
                      <MathComponent tex="\int \sqrt{64 - x^{2}} \hspace{.1cm} dx" /> 
                    <p>
                        Answer: <br/>
                        <MathComponent tex="x = 8 \hspace{.1cm} sin(t), \hspace{.1cm} where \hspace{.1cm} - \frac{\pi}{2} \leq t \leq \frac{\pi}{2}, \hspace{.1cm} dx = 8 \hspace{.1cm} cos(t) \hspace{.1cm} dt" />
                         <MathComponent tex="= \int \sqrt{64 - (8sin(t))^{2}} \hspace{.1cm} (8cos(t)) \hspace{.1cm} dt" />
                         <MathComponent tex="= 64 \int cos^{2} (t) \hspace{.1cm} dt" />
                         <MathComponent tex="= \frac{x}{2} \sqrt{64 - x^{2}} + 32 sin^{-1} \frac{x}{8} + C" />
                         
                    </p>

                    *333
                    </div>
                </div>


            
            </div>
            </div>
           
    );
}