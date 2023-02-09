import { Link } from "react-router-dom";
import "./6.4.css";
import { MathComponent } from "mathjax-react";
import graph6 from "./images/graph6.png";

export default function Calculus2_Ch6_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 4 Volume by Shells</h1>
        <div className="sectionText">

      <h2>Volume by the Shell Method</h2>
      <p className="textBorder">
       <p>
        Let f and g be continuous functions with <MathComponent tex="f(x) \geq g(x)" /> on [a,b]. If R is the region
        bounded by the curves y = f(x) and y = g(x) between the lines x = a and x = b, the volume of the solid
        generated when R is revolved about the y-axis is
       </p>
        <MathComponent tex="V = \int_{a}^{b} 2 \pi x(f(x) - g(x)) dx" />.
        *265
      </p>


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Shell Method</h4>
                      <p>
                        Let R be the region bounded by the following curves. Use the shell method to find
                        the volume of the solid generated when R is revolved about indicated axis.
                      </p>
                      <p>
                        y = 3x, y = 3, and x = 0; about the y-axis (Use integration and check your answer using the
                        colume formula for a cone.)
                      </p>
                      <img src={graph6} alt="Graph of function" ></img>
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\pi \int_{0}^{3} (\frac{y}{3})^{2} dy = \pi" />    
                         
                    </p>

                    *266
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Shell Method</h4>
                      <p>
                        Let R be the region bounded by the following curves. Use the shell method to find
                        the volume of the solid generated when R is revolved about indicated axis.
                      </p>
                      <p>
                      <MathComponent tex="x = y^{2}" /> , x = 0, and y = 3; about the x-axis
                      </p>
                      
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\pi \int_{0}^{9} 9 - x dx = \frac{81 \pi}{2}" />    
                         
                    </p>

                    *267
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Shell Method</h4>
                      <p>
                        Let R be the region bounded by the following curves. Use the shell method to find
                        the volume of the solid generated when R is revolved about indicated axis.
                      </p>
                      <p>
                      <MathComponent tex="y = x^{3} - x^{8} + 1" /> , y = 1; about the y-axis
                      </p>
                      
                    <p>
                        Answer: <br/>
                         <MathComponent tex=" = \frac{\pi}{5}" />    
                         
                    </p>

                    *268
                    </div>
                </div>




            </div>
            </div>
           
    );
}