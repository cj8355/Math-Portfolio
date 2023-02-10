import { Link } from "react-router-dom";
import "./6.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 5 Length of Curves</h1>
        <div className="sectionText">

      <h2>Arc Length for y = f(x)</h2>
      <p className="textBorder">
       <p>
        Let f have a continuous first derivative on the interval [a,b]. The length of the curve from (a, f(a)) to
        (b, f(b)) is
       </p>
        <MathComponent tex="L = \int_{a}^{b} \sqrt{1+ f'(x)^{2}} dx" />.
        *269
      </p>


      <h2>Arc Length for x = g(y)</h2>
      <p className="textBorder">
       <p>
        Let x = g(y) have a continuous first derivative on the interval [c,d]. The length of the curve from (g(c), c)
        to (g(d), d) is
       </p>
        <MathComponent tex="L = \int_{c}^{d} \sqrt{1 + g'(y)^{2}} dy" />.
        *270
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Arc length calculations</h4>
                      <p>
                        Find the arc length of the following curves on the given interval.
                      </p>
                      <p>y = -8x - 3 on [-2,6]</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="L = \int_{-2}^{6} \sqrt{1 + (-8)^{2}} dx = 8 \sqrt{65}" />    
                         
                    </p>

                    *271
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Arc length calculations</h4>
                      <p>
                        Find the arc length of the following curves on the given interval.
                      </p>
                      <p>x = 2y - 4, for  <MathComponent tex="-3 \leq y \leq 4" /></p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="L = \int_{-3}^{4} \sqrt{1 + (2)^{2}} dy = 7 \sqrt{5}" />    
                         
                    </p>

                    *272
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Arc length by calculator</h4>
                      <div>
                        <p>a. Write and simplify the integral that gives the arc length of the following curve on the given interval.</p>
                        <p>b. If neccessary, use technology to evaluate or approximate the interval.</p>
                      </div>
                      <p> <MathComponent tex="y = x^{2}" /> , for  <MathComponent tex="-1 \leq x \leq 1" /></p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="L = \int_{-1}^{1} \sqrt{1 + (2x)^{2}} dx \approx 2.96" />    
                         
                    </p>

                    *273
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Arc length by calculator</h4>
                      <div>
                        <p>a. Write and simplify the integral that gives the arc length of the following curve on the given interval.</p>
                        <p>b. If neccessary, use technology to evaluate or approximate the interval.</p>
                      </div>
                      <p> <MathComponent tex="x = \sqrt{y - 2}" /> , for  <MathComponent tex="3 \leq y \leq 4" /></p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="L = \int_{3}^{4} \sqrt{\frac{4y - 7}{4y - 8}} dy \approx 1.08" />    
                         
                    </p>

                    *274
                    </div>
                </div>


                



            </div>
            </div>
           
    );
}