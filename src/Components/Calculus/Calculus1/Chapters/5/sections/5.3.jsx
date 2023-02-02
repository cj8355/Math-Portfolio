import { Link } from "react-router-dom";
import "./5.3.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch5_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 3 Fundamental Theorem of Calculus</h1>
        <div className="sectionText">

        <h2>Area Function</h2>
        <p>
            Let f be a continuous function, for <MathComponent tex="t \geq a" />. The <b>area function for f with left endpoint a is</b>
            <MathComponent tex="A(x) = \int_{a}^{x} f(t) dt" />, where <MathComponent tex="x \geq a" />. The area function gives the net area
            of the region bounded by the graph of f and the t-axis on the interval [a,x].
        </p>
      *227

      <h2>Fundamental Theorem of Calculus Part 1</h2>
        <p>
            If f is continuous on [a,b], then the area function
            <MathComponent tex="A(x) = \int_{a}^{x} f(t) dt" />, for <MathComponent tex="a \leq x \leq b" />,
            is continuous on [a,b] and differentiable on (a,b). The area function A'(x) = f(x). Equivalently,
            <MathComponent tex="A'(x) = \frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)" />,
            which means that the area function of f is an antiderivative of f on [a,b].
        </p>
      *228

      <h2>Fundamental Theorem of Calculus Part 2</h2>
        <p>
            If f is continuous on [a,b] and F is any antiderivative of f on [a,b], then
            <MathComponent tex="\int_{a}^{b} f(x) dx = F(b) - F(a)" />.
        </p>
      *229





            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Definite Integrals</h4>
                      <p>Evaluate the following integrals using the Fundamental Theorem of Calculus.</p>
                     
                     <MathComponent tex="\int_{0}^{2} 4x^{3} dx" />
                     <p>
                        Answer:<br/>
                        Antiderivative
                        <MathComponent tex="x^{4}" />
                        <MathComponent tex="2^{4} - 0^{4} = 16" />
                     </p>


                    *230
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Definite Integrals</h4>
                      <p>Evaluate the following integrals using the Fundamental Theorem of Calculus.</p>
                     
                     <MathComponent tex="\int_{-2}^{2} (x^{2} - 4) dx" />
                     <p>
                        Answer:<br/>
                        Antiderivative
                        <MathComponent tex="\frac{1}{3}x^{3} - 4x" />
                        <MathComponent tex=" (\frac{1}{3}(2^{3} - 4(2)) - (\frac{1}{3}(-2^{3}) - 4(-2))) = (-\frac{16}{3} - \frac{16}{3}) = -\frac{32}{3}" />
                     </p>


                    *231
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Definite Integrals</h4>
                      <p>Evaluate the following integrals using the Fundamental Theorem of Calculus.</p>
                     
                     <MathComponent tex="\int_{1}^{4} (1 - x)(x - 4) dx" />
                     <p>
                        Answer:<br/>
                        <MathComponent tex="(1 - x)(x - 4) = (-x^{2} + 5x - 4)" />
                        Antiderivative
                        <MathComponent tex="- \frac{1}{3}x^{3} + \frac{5}{2}x^{2} - 4x" />
                        <MathComponent tex="(- \frac{1}{3}(4)^{3} + \frac{5}{2}(4)^{2} - 4(4))-(- \frac{1}{3}(1)^{3} + \frac{5}{2}(1)^{2} - 4(1)) = (-\frac{64}{3} + 40 - 16) - (- \frac{1}{3} + \frac{5}{2} - 4) = \frac{16}{6} + \frac{11}{6} = \frac{9}{2}" />
                     </p>


                    *232
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Areas of regions</h4>
                      <p>Find the area of the region bounded by the graph of f and the x-axis on the given interval.</p>
                     
                     <MathComponent tex="f(x) = x^{2} - 25" /> <p>on [2,4]</p>
                     <p>
                        Answer:<br/>
                        <MathComponent tex="\int_{2}^{4} x^{2} - 25 dx" />
                        Antiderivative
                        <MathComponent tex="\frac{1}{3}x^{3} -25x" />
                        <MathComponent tex="( \frac{1}{3}(4)^{3} - 25(4))-(- \frac{1}{3}(2)^{3} - 25(2)) = (\frac{64}{3} - 100) - (\frac{8}{3} - 50) = -\frac{236}{3} + \frac{142}{3} = - \frac{94}{3}" />
                        Take the absolute value of <MathComponent tex="-\frac{94}{3} = \frac{94}{3}" /> since area can't be negative.
                     </p>


                    *233
                </div>



        

             
                
            </div>
            </div>
           
    );
}