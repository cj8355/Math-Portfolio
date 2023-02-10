import { Link } from "react-router-dom";
import "./6.6.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 6 Surface Area</h1>
        <div className="sectionText">

      <h2>Area of a Surface of Revolution</h2>
      <p className="textBorder">
       <p>
        Let f be a nonegative function with a continuous first derivative on the interval [a,b]. The area of the surface
        generated when the graph of f on the interval [a,b] is revolved about the x-axis is
       </p>
        <MathComponent tex="S = \int_{a}^{b} 2 \pi f(x) \sqrt{1 + f'(x)^{2}} dx" />.
        *275
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Computing surface areas</h4>
                      <p>
                        Find the area of the surface generated when the given curve is revolved about the given axis.
                      </p>
                      <p>y = 3x + 4, for about the <MathComponent tex="0 \leq x \leq 6" />;x-axis</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="S = \int_{0}^{6} 2 \pi (3x+4) \sqrt{1 + 9} dx = 156 \sqrt{10} \pi" />    
                         
                    </p>

                    *276
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Computing surface areas</h4>
                      <p>
                        Find the area of the surface generated when the given curve is revolved about the given axis.
                      </p>
                      <p><MathComponent tex="y = 8 \sqrt{x}" />, for about the <MathComponent tex="9 \leq x \leq 20" />;x-axis</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="S = \int_{0}^{\frac{9}{20}} 2 \pi 8 \sqrt{x} \sqrt{1 + \frac{16}{x}} dx = \frac{2912 \pi}{3}" />    
                         
                    </p>

                    *277
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Computing surface areas</h4>
                      <p>
                        Find the area of the surface generated when the given curve is revolved about the given axis.
                      </p>
                      <p><MathComponent tex="x = \sqrt{12y - y^{2}}" />, for about the <MathComponent tex="2 \leq y \leq 10" />;y-axis</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="S = \int_{2}^{10} 2 \pi \sqrt{12y-y^{2}} \sqrt{1 + \frac{(6-y)^{2}}{y(12-y)}} dy = 96 \pi" />    
                         
                    </p>

                    *278
                    </div>
                </div>



            </div>
            </div>
           
    );
}