import { Link } from "react-router-dom";
import "./6.7.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 7 Physical Applications</h1>
        <div className="sectionText">

      <h2>Mass of a One-Dimensional Object</h2>
      <p className="textBorder">
       <p>
        Suppose a thin bar or wire is represented by the interval <MathComponent tex="a \leq x \leq b" /> with a density
        function <MathComponent tex="\rho" /> (with units of mass per length). The <b>mass</b> of the object is
       </p>
        <MathComponent tex="m = \int_{a}^{b} \rho (x) dx" />.
        *279
      </p>


      <h2>Work</h2>
      <p className="textBorder">
       <p>
        The work done by a variable force F moving an obejct along a line from x = a to x = b in the direction of the force is
       </p>
        <MathComponent tex="W = \int_{a}^{b} F(x) dx" />.
        *280
      </p>


      <h2>Solving Pumping Problems</h2>
      <p className="textBorder">
       <div>
        <ol className="textList">
            <li><b>1.</b> Draw a y-axis in the vertical direction (parallel to gravity) and choose a convenient origin.
            Assume the interval [a,b] corresponds to the vertical extent of the fluid.</li>
            <li><b>2.</b> For <MathComponent tex="a \leq y \leq b" />, find the cross-sectionsl area A(y) of the horizontal slices and
            the distance D(y) the slices must be lifted.</li>
            <li><b>3.</b> The work required to lift the water is  <MathComponent tex="W = \int_{a}^{b} \rho gA(y)D(y) dy." /></li>
        </ol>
       </div>
       
        *281
      </p>


      <h2>Solving Force-on-Dam Problems</h2>
      <p className="textBorder">
      <div>
        <ol className="textList">
            <li><b>1.</b> Draw a y-axis on the face of the dam in the vertical direction and choose a convenient origin
            (often taken to be the base of the dam).</li>
            <li><b>2.</b> Find the width function w(y) for each value of y on the face of the dam.</li>
            <li><b>3.</b> If the base of the dam is at y = 0 and the top of the dam is at y = a,
            then the total force on the dam is <MathComponent tex="F = \int_{0}^{a} \rho g(a - y) w(y) dy." /></li>
        </ol>
       </div>
        *282
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Mass of one-dimensional objects</h4>
                      <p>
                        Find the mass of the following thin bars with the given density function.
                      </p>
                      <MathComponent tex="\rho(x) = 1 + sin x, \hspace{.2cm} for \hspace{.2cm} 0 \leq x \leq \pi" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{0}^{\pi} 1 + sin x dx = \pi + 2" />    
                         
                    </p>

                    *283
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Mass of one-dimensional objects</h4>
                      <p>
                        Find the mass of the following thin bars with the given density function.
                      </p>
                      <MathComponent tex="\rho(x) = 2 - \frac{x}{2}, \hspace{.2cm} for \hspace{.2cm} 0 \leq x \leq 2" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{0}^{2} 2 - \frac{x}{2} dx = 3" />    
                         
                    </p>


                    *284
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Work from Force</h4>
                      <p>
                        How much work is required to move an object from x = 0 to x = 3(measured in meters) in the presence
                        of a force (in N) given by F(x) = 2x acting along the x-axis?
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="W = \int_{0}^{3} 2x dx = 9J" />    
                         
                    </p>

                    *285
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Emptying a swimming pool</h4>
                      <p>
                        A swimming pool has the shape of a box with a base that measures 25m by 15m and a uniform depth of 2.5m.
                        How much work is required to pump the water out of the pool (to the level of the top of the pool) when it is full?
                      </p>
                      <ul className="textList">
                        <li>Density of Water = 1000 kg/m^3</li>
                        <li>Gravity = 9.8 m/s^2</li>
                        <li>A(y) = 25 * 15</li>
                      </ul>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="W = 1000 \cdot 9.8 \int_{0}^{2.5}  (25*15)(2.5 - y) dy = 1.15 x 10^{7} J" />    
                         
                    </p>

                    *286
                    </div>
                </div>


               
            </div>
            </div>
           
    );
}