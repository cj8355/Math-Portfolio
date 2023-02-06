import { Link } from "react-router-dom";
import "./6.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 1 Velocity and Net Change</h1>
        <div className="sectionText">

        <h2 className="oneT">Position, Velocity, Displacement, and Distance</h2>
        <div className="textBorder">
            <ol>
                <li>The <b>position</b> of an object moving along a line at time t, denoted s(t), is the location
                of the object relative to the origin.</li>
                <li>The <b>velocity</b> of an object at time t is v(t) = s'(t).</li>
                <li>The <b>displacement</b> of the object between t = a and <MathComponent tex="t = b > a " math style="font-size:3.5em" />
                is <MathComponent tex="s(b) - s(a) = \int_{a}^{b} v(t) dt" />.</li>
                <li>The <b>distance traveled</b> by the object between t = a and <MathComponent tex="t = b > a" />
                 is <MathComponent tex="\int_{a}^{b} |v(t)| dt" />, where |v(t)| is the <b>speed</b> of the obejct at time t.</li>
            </ol>
        </div> 
      *249


      <h2>Position from Velocity</h2>
      <p className="textBorder">
        Given the velocity v(t) of an obejct moving along a line and its initial position s(0), the position function
        of the object for future times <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="s(t) = s(0) + \int_{0}^{t} v(x) dx" />.
      </p>
      *250


      <h2>Velocity from Acceleration</h2>
      <p className="textBorder">
        Given the acceleration a(t) of an obejct moving along a line and its initial velocity v(0), the velocity
        of the object for future times <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="v(t) = v(0) + \int_{0}^{t} a(x) dx" />.
      </p>
      *251


      <h2>Net Change and Future Value</h2>
      <p className="textBorder">
       Suppose a quantity Q changes over time at a known rate Q'. Then the <b>net change</b>in Q between t = a 
       and <MathComponent tex="t = b > a" /> is <MathComponent tex="Q(b) - Q(a) = \int_{a}^{b} Q'(t) dt" />.
        Given the initial value Q(0), the <b>future value</b> of Q at time <MathComponent tex="t \geq 0" /> is
        <MathComponent tex="Q(t) = Q(0) + \int_{0}^{t} Q'(x) dx" />.
      </p>
      *252



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                    <h4>Displacement from Velocity</h4>
                      <p>
                        Consider an object moving along a line with the given velocity v. Assume time t
                        is measured in seconds and velocities have units of m/s.
                      </p>
                      <div>
                        <p>a. Determine when the motion is in the positive direction and when it is in the negative direction.</p>
                        <p>b. Find the displacement over the given interval.</p>
                        <p>c. Find the distance traveled over the given interval.</p>
                      </div>
                      
                     
                     <MathComponent tex="v(t) = 3t^{2} - 6t" /> <p>on [0,3]</p>
                    <p>
                        Answer: <br/>
                        a. Positive direction for <MathComponent tex="2 < t \leq 3" />;
                        negative direction for <MathComponent tex="0 < t < 2" />
                        b. 0 m
                        c. 8 m
                    </p>

                    *253
                    </div>
                     
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4>Displacement from Velocity</h4>
                      <p>
                        Consider an object moving along a line with the given velocity v. Assume time t
                        is measured in seconds and velocities have units of m/s.
                      </p>
                      <div>
                        <p>a. Determine when the motion is in the positive direction and when it is in the negative direction.</p>
                        <p>b. Find the displacement over the given interval.</p>
                        <p>c. Find the distance traveled over the given interval.</p>
                      </div>
                      
                     
                     <MathComponent tex="v(t) = 3t^{2} - 18t + 24" /> <p>on [0,5]</p>
                    <p>
                        Answer: <br/>
                        a. Positive direction for <MathComponent tex="0 \leq t < 2" /> and <MathComponent tex="4 < t \leq 5" />;
                        negative direction for <MathComponent tex="2 < t < 4" />
                        b. 20 m
                        c. 28 m
                    </p>

                    *254
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Position from Velocity</h4>
                      <p>
                        Consider an object moving along a line with the given velocity v and initial position.
                      </p>
                      <div>
                        <p>a. Determine the position function, for <MathComponent tex="t \geq 0" />, using the antiderivative method </p>
                        <p>b. Determine the position function, for <MathComponent tex="t \geq 0" />, using the Fundamental
                            Theorem of Calculus. Check for agreement with the answer to part (a).
                        </p>
                      </div>
                      
                     
                     <MathComponent tex="v(t) = sin t" /> <p>on <MathComponent tex="[0, 2 \pi]" />; s(0) = 1</p>
                    <p>
                        Answer: <br/>
                        a. <MathComponent tex="s(t) = 2 - cost" />    
                    </p>

                    *255
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Position from Velocity</h4>
                      <p>
                        Consider an object moving along a line with the given velocity v and initial position.
                      </p>
                      <div>
                        <p>a. Determine the position function, for <MathComponent tex="t \geq 0" />, using the antiderivative method </p>
                        <p>b. Determine the position function, for <MathComponent tex="t \geq 0" />, using the Fundamental
                            Theorem of Calculus. Check for agreement with the answer to part (a).
                        </p>
                      </div>
                      
                     
                     <MathComponent tex="v(t) = 9 - t^{2}" /> <p>on [0,4]; s(0) = -2</p>
                    <p>
                        Answer: <br/>
                        a. <MathComponent tex="s(t) = 9t - \frac{t^{3}}{3} - 2" />    
                    </p>

                    *256
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                      <h4>Position and velocity from acceleration</h4>
                      <p>
                        Find the position and velocity of an object moving along a straight line with the given
                        acceleration, initial velocity, and initial position. Use the Fundamental Theorem of Calculus.
                      </p>
                      
                     
                     <p>a(t) = -32; v(0) = 70; s(0) = 10</p>
                    <p>
                        Answer: <br/>
                         <MathComponent tex="v(t) = -32t + 70" />    
                         <MathComponent tex="s(t) = -16t^{2} + 70t + 10" /> 
                    </p>

                    *257
                    </div>
                </div>




            </div>
            </div>
           
    );
}