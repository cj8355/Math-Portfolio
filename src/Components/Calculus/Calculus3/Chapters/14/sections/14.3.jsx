import { Link } from "react-router-dom";
import "./14.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch14_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 14 Sec. 3 Motion in Space</h1>
        <div className="sectionText">

      
      <h2>Position, Velocity, Speed, Acceleration</h2>
      <p className="textBorder">
       <p>Let the position of an object moving in three-dimensinal space be given by</p>
        <MathComponent tex="\mathrm{r(t) = \langle x(t), y(t), z(t) \rangle , \hspace{.2cm} for \hspace{.2cm} t \geq 0. \hspace{.2cm} The \hspace{.2cm} velocity \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} object \hspace{.2cm} is}" />
        <MathComponent tex="\mathrm{v(t) = r'(t) = \langle x'(t), y'(t), z'(t) \rangle .}" />
        <p>The speed of the object is the scalar function</p>
        <MathComponent tex="\vert v(t) \vert = \sqrt{x'(t)^{2} + y'(t) + z'(t)^{2}} ." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} acceleration \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} object \hspace{.2cm} is \hspace{.2cm} a(t) = v'(t) = r''(t).}" />
        *511
      </p>


      <h2><MathComponent tex="\mathrm{Motion \hspace{.2cm} with \hspace{.2cm} Constant \hspace{.2cm} \vert r \vert}" /></h2>
      <p className="textBorder">
       <p>
        Let r describe a path on which |r| is constant (motion on a circle or sphere centered at the origin). Then r * v = 0, which
        means the position vector and the velocity vector are orthogonal at all times for which the functions are defined.
       </p>
        *512
      </p>


      <h2>Two-Dimensional Motion in a Gravitational Field</h2>
      <p className="textBorder">
       <p>
        Consider an object moving in a plane with a horizontal x-axis and a vertical y-axis, subject only to the force of gravity.
        Given the initial velocity
       </p>
        <MathComponent tex="\mathrm{v(0) = \langle u_{0}, v_{0} \rangle \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm}intiial \hspace{.2cm} position \hspace{.2cm} r(0) = \langle x_{0}, y_{0} \rangle, \hspace{.2cm} the \hspace{.2cm} velocity \hspace{.2cm} of \hspace{.2cm}the \hspace{.2cm} object, \hspace{.2cm} for \hspace{.2cm} t \geq 0, \hspace{.2cm}is}" />
        <MathComponent tex="v(t) = \langle x'(t), y'(t) \rangle = \langle u_{0}, -gt + v_{0} \rangle" />
        <p>and the position is</p>
        <MathComponent tex="r(t) = \langle x(t), y(t) \rangle = \bigg \langle u_{0} t + x_{0}, - \frac{1}{2} gt^{2} + v_{0} t + y_{0} \bigg \rangle ." />
        *513
      </p>


      <h2>Two-Dimensional Motion</h2>
      <p className="textBorder">
       <p>Assume an object traveling over horizontal ground, acted on only by the gravitational force, has an initial position</p>
        <MathComponent tex="\mathrm{\langle x_{0}, y_{0} \rangle = \langle 0, 0 \rangle \hspace{.2cm} and \hspace{.2cm} initial \hspace{.2cm} velocity \hspace{.2cm} \langle u_{0}, v_{0} \rangle = \langle \vert v_{0} \vert \hspace{.2cm} cos \hspace{.2cm} a, \hspace{.2cm} \vert v_{0} \vert \hspace{.2cm} sin \hspace{.2cm} a \rangle .}" />
        <p>The trajectory, which is a segment of a parabola has the following properties.</p>
        <MathComponent tex="\mathrm{time \hspace{.2cm} of \hspace{.2cm} flight = T = \frac{2 \vert v_{0} \vert \hspace{.2cm} sin \hspace{.2cm} a}{g}}" /> 
        <MathComponent tex="\mathrm{range = \frac{\vert v_{0} \vert ^{2} \hspace{.2cm} sin \hspace{.2cm} 2a}{g}}" /> 
        <MathComponent tex="\mathrm{maximum \hspace{.2cm} height = y \bigg ( \frac{T}{2} \bigg ) = \frac{( \vert v_{0} \vert \hspace{.2cm} sin \hspace{.2cm} a)^{2}}{2g}}" /> 
        *514
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Velocity and acceleration from position</h4>
                      <p>
                        Consider the following position function.
                      </p>
                      <p>a. Find the velocity and speed of the object.</p>
                      <p>b. Find the acceleration of the object</p>
                      <MathComponent tex="\mathrm{r(t) = \langle 3t^{2} + 1, 4t^{2} + 3 \rangle , \hspace{.2cm} for \hspace{.2cm} t \geq 0}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{a. \langle 6t, 8t \rangle, \hspace{.2cm} 10t}" /> 
                         <MathComponent tex="\mathrm{b. \langle 6, 8 \rangle}" />   
                         
                    </p>

                    *515
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Velocity and acceleration from position</h4>
                      <p>
                        Consider the following position function.
                      </p>
                      <p>a. Find the velocity and speed of the object.</p>
                      <p>b. Find the acceleration of the object</p>
                      <MathComponent tex="\mathrm{r(t) = \langle 8 sin t, 8 cos t \rangle , \hspace{.2cm} for \hspace{.2cm} 0 \leq t \leq 2 \pi}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{a. v(t) = \langle 8 cos t, -8 sin t \rangle, \hspace{.2cm} \vert v(t) \vert = 8}" /> 
                         <MathComponent tex="\mathrm{b. a(t) =  \langle -8 sin t, -8 cos t \rangle}" />   
                         
                    </p>

                    *516
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Velocity and acceleration from position</h4>
                      <p>
                        Consider the following position function.
                      </p>
                      <p>a. Find the velocity and speed of the object.</p>
                      <p>b. Find the acceleration of the object</p>
                      <MathComponent tex="\mathrm{r(t) = \langle 1, t^{2}, e^{-t} \rangle , \hspace{.2cm} for \hspace{.2cm} t \geq 0}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{a. v(t) = \langle 0, 2t, -e^{-t} \rangle, \hspace{.2cm} \vert v(t) \vert = \sqrt{4t^{2} + e^{-2t}}}" /> 
                         <MathComponent tex="\mathrm{b. a(t) =  \langle 0, 2, e^{-t} \rangle}" />   
                         
                    </p>

                    *517
                    </div>
                </div>



            </div>
            </div>
           
    );
}