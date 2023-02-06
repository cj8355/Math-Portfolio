import { Link } from "react-router-dom";
import "./6.1.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";

export default function Calculus2_Ch6_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 2 Regions Between Curves</h1>
        <div className="sectionText">

      <h2>Area of a Region Between Two Curves</h2>
      <p className="textBorder">
        Suppose f and g are continuous functions with <MathComponent tex="f(x) \geq g(x)" /> on the interval [a,b].
        The area of the region bounded by the graphs of f and g on [a,b] is
        <MathComponent tex="A = \int_{a}^{b} (f(x) - g(x)) dx" />.
        *252
      </p>


      <h2>Area of a Region Between Two Curves with Respect to y</h2>
      <p className="textBorder">
        Suppose f and g are continuous functions with <MathComponent tex="f(y) \geq g(y)" /> on the interval [c,d].
        The area of the region bounded by the graphs x = f(y) and x = g(y) on [c,d] is
        <MathComponent tex="A = \int_{c}^{d} (f(y) - g(y)) dy" />.
        *253
      </p>


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Finding area</h4>
                      <p>
                        Determine the area of the shaded region in the following figure.
                      </p>
                      <img src={graph1} alt="Graph of function" ></img>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{-1}^{2} x - x^{2} + 2 dx = \frac{9}{2}" />    
                         
                    </p>

                    *254
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Finding area</h4>
                      <p>
                        Determine the area of the shaded region in the following figure.
                      </p>
                      <img src={graph2} alt="Graph of function" ></img>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{0}^{2} -2x - x^{2} + 4x dx = \frac{4}{3}" />    
                         
                    </p>

                    *255
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Regions between curves</h4>
                      <p>
                        Find the area of the region describes in the following exercise.
                      </p>
                      <p>The region bounded by y = 4x + 4, y = 6x + 6, and x = 4</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{-1}^{4} 2x + 2 dx = 25" />    
                         
                    </p>

                    *256
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Regions between curves</h4>
                      <p>
                        Find the area of the region describes in the following exercise.
                      </p>
                      <p>The region bounded by <MathComponent tex="y = x^{2} - 2x + 1" /> and <MathComponent tex="y = 5x - 9" /></p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{2}^{5} -x^{2} + 7x -10 dx = \frac{9}{2}" />    
                         
                    </p>

                    *257
                    </div>
                </div>





            </div>
            </div>
           
    );
}