import { Link } from "react-router-dom";
import "./6.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 1 Velocity and Net Change</h1>
        <div className="sectionText">

        <h2>Position, Velocity, Displacement, and Distance</h2>
        <div>
            <ol>
                <li>The <b>position</b> of an object moving along a line at time t, denoted s(t), is the location
                of the object relative to the origin.</li>
                <li>The <b>velocity</b> of an object at time t is v(t) = s'(t).</li>
                <li>The <b>displacement</b> of the object between t = a and <MathComponent tex="t = b > a" />
                is <MathComponent tex="s(b) - s(a) = \int_{a}^{b} v(t) dt" />.</li>
                <li>The <b>distance traveled</b> by the object between t = a and <MathComponent tex="t = b > a" />
                 is <MathComponent tex="\int_{a}^{b} |v(t)| dt" />, where |v(t)| is the <b>speed</b> of the obejct at time t.</li>
            </ol>
        </div> 
      *249


      <h2>Position from Velocity</h2>
      <p>
        Given the velocity v(t) of an obejct moving along a line and its initial position s(0), the position function
        of the object for future times <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="s(t) = s(0) + \int_{0}^{t} v(x) dx" />.
      </p>
      *250


      <h2>Velocity from Acceleration</h2>
      <p>
        Given the acceleration a(t) of an obejct moving along a line and its initial velocity v(0), the velocity
        of the object for future times <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="v(t) = v(0) + \int_{0}^{t} a(x) dx" />.
      </p>
      *251


      <h2>Net Change and Future Value</h2>
      <p>
       Suppose a quantity Q changes over time at a known rate Q'. Then the <b>net change</b>in Q between t = a 
       and <MathComponent tex="t = b > a" /> is <MathComponent tex="Q(b) - Q(a) = \int_{a}^{b} Q'(t) dt" />.
        Given the initial value Q(0), the <b>future value</b> of Q at time <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="Q(t) = Q(0) + \int_{0}^{t} Q'(x) dx" />.
      </p>
      *252



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                     <MathComponent tex="" />
                    <p>
                        Answer: <br/>
                        <MathComponent tex="" />
                    </p>

                    *
                </div>




            </div>
            </div>
           
    );
}