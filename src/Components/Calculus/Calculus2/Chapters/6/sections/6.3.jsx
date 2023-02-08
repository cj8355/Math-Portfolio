import { Link } from "react-router-dom";
import "./6.3.css";
import { MathComponent } from "mathjax-react";
import graph3 from "./images/graph3.png";
import graph4 from "./images/graph4.png";
import graph5 from "./images/graph5.png";


export default function Calculus2_Ch6_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 3 Volume by Slicing</h1>
        <div className="sectionText">

      <h2>General Slicing Method</h2>
      <p className="textBorder">
       <p>
        Suppose a solid object extends from x = a to x = b, and the cross sections of the solid perpendicular to the
        x-axis has an area given by a function A that is integrable on [a,b]. The volume of the solid is
       </p>
        <MathComponent tex="V = \int_{a}^{b} A(x) dx" />.
        *258
      </p>


      <h2>Disk Method about the x-Axis</h2>
      <p className="textBorder">
        <p>
            Let f be continuous with <MathComponent tex="f(x) \geq 0" /> on the interval [a,b]. If the region R bounded
            by the graph of f, the x-axis, and the lines x = a and x = b is revolved about the x-axis, the volume
            of the resulting solid of revolution is
        </p>
       
        <MathComponent tex="V = \int_{a}^{b} \pi f(x)^{2} dx" />.
        *259
      </p>


      <h2>Washer Method about the x-Axis</h2>
      <p className="textBorder">
       <p>
        Let f and g be continuous functions with <MathComponent tex="f(x) \geq g(x) \geq 0" /> on [a,b]. Let R be the
        region bounded by y = f(x), y = g(x), and the lines x = a and x = b. When R is revolved about the x-axis, the
        volume of the resulting solid of revolution is
       </p>
        <MathComponent tex="V = \int_{a}^{b} \pi (f(x)^{2} - g(x)^{2}) dx" />.
        *260
      </p>
      

      <h2>Disk and Washer Methods about the y-Axis</h2>
      <p className="textBorder">
       <p>
        Let p and q be continuous functions with <MathComponent tex="p(y) \geq q(y) \geq 0" /> on [c,d]. Let R be the
        region bounded by x = p(y), x = q(y), and the lines y = c and y = d. When R is revolved about the y-axis, the
        volume of the resulting solid of revolution is given by
       </p>
        <MathComponent tex="V = \int_{c}^{d} \pi (p(y)^{2} - q(y)^{2}) dy" />.
        <p>
            If q(y) = 0, the disk method results:
            <MathComponent tex="V = \int_{c}^{d} \pi p(y)^{2} dy" />
        </p>
        *261
      </p>

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Solids of revolution</h4>
                      <p>
                        Let R be the region bounded by the following curves. Find the volume of the solid
                        generated when R is revolved about the given axis.
                      </p>
                      <p>
                        y = 2x, y = 0, and x = 3; about the x-axis (verify that your answer agrees with the
                        volume formula for a cone.)
                      </p>
                      <img src={graph3} alt="Graph of function" ></img>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="V = \int_{0}^{3} \pi (2x)^{2} dx = 36 \pi" />    
                         
                    </p>

                    *262
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Solids of revolution</h4>
                      <p>
                        Let R be the region bounded by the following curves. Find the volume of the solid
                        generated when R is revolved about the given axis.
                      </p>
                      <p>
                        y = x and  <MathComponent tex="y = 2 \sqrt{x}" />  ; about the x-axis
                      </p>
                      <img src={graph4} alt="Graph of function" ></img>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="V = \int_{0}^{4} \pi (4x - x^{2}) dx = \frac{32}{3} \pi" />    
                         
                    </p>

                    *263
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Solids of revolution</h4>
                      <p>
                        Let R be the region bounded by the following curves. Find the volume of the solid
                        generated when R is revolved about the given axis.
                      </p>
                      <p>
                    <MathComponent tex="y = x^{3}" />, y = 0, and x = 1; about the y-axis
                      </p>
                      <img src={graph5} alt="Graph of function" ></img>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="V = \int_{0}^{1} \pi (1 - y^{\frac{2}{3}}) dy = \frac{2 \pi}{5}" />    
                         
                    </p>

                    *264
                    </div>
                </div>


            



            </div>
            </div>
           
    );
}