import { Link } from "react-router-dom";
import "./13.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch13_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 5 Lines and Planes in Space</h1>
        <div className="sectionText">

      
      <h2>Equation of a Line</h2>
      <p className="textBorder">
       <p>A <b>vector equation of the line</b> passing through the point</p>
        <MathComponent tex="\mathrm{P_{0} (x_{0},y_{0},z_{0}) \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} direction \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} vector \hspace{.2cm} v = \langle a,b,c \rangle \hspace{.2cm} is \hspace{.2cm} r = r_{0} + rv, \hspace{.2cm} or}" />
        <MathComponent tex="\langle x,y,z \rangle = \langle x_{0},y_{0},z_{0} \rangle + t \langle a,b,c \rangle ,  \hspace{.2cm} for \hspace{.2cm} - \infty < t < \infty ." />
        <p>Equivalently, the corresponding parametric equation of the line are </p>
        <MathComponent tex="\mathrm{x = x_{0} + at, \hspace{.2cm} y = y_{0}+bt, \hspace{.2cm} z = z_{0}+ct, \hspace{.2cm} for \hspace{.2cm} - \infty < t < \infty.}" />
        *481
      </p>


      <h2>Distance Between a Point and a Line</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} distance \hspace{.2cm} d \hspace{.2cm} between \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} Q \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} line \hspace{.2cm} r = r_{0} + tv \hspace{.2cm} is}" />
        <MathComponent tex="d = \frac{\vert v \hspace{.2cm} \mathrm{x} \hspace{.2cm} \overrightarrow{PQ} \vert}{\vert v \vert}" />
        <p>where P is any point on the line and v is a vector parallel to the line.</p>
        *482
      </p>


      <h2><MathComponent tex="\mathrm{Plane \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3}}" /></h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Given \hspace{.2cm} a \hspace{.2cm} fixed \hspace{.2cm} point \hspace{.2cm} P_{0} \hspace{.2cm} and \hspace{.2cm} a \hspace{.2cm} normal \hspace{.2cm} vector \hspace{.2cm} n, \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} of \hspace{.2cm} points \hspace{.2cm} P \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3}}" />
        <MathComponent tex="\mathrm{for \hspace{.2cm} which \hspace{.2cm} \overrightarrow{P_{0}P} \hspace{.2cm} is \hspace{.2cm} orthogonal \hspace{.2cm} to \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} a \hspace{.2cm} plane.}" />
        *483
      </p>


      <h2><MathComponent tex="\mathrm{General \hspace{.2cm} Equation \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} Plane \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3}}" /></h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} plane \hspace{.2cm} passing \hspace{.2cm} through \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} P_{0}(x_{0},y_{0},z_{0}) \hspace{.2cm} with \hspace{.2cm} a \hspace{.2cm} nonzero \hspace{.2cm} normal \hspace{.2cm} vector}" />
        <MathComponent tex="\mathrm{n = \langle a,b,c \rangle \hspace{.2cm} is \hspace{.2cm} described \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} equation}" />
        <MathComponent tex="\mathrm{a(x-x_{0}) + b(y-y_{0}) + c(z-z_{0}) = 0 \hspace{.2cm} or \hspace{.2cm} \hspace{.2cm} ax + by + cz = d,}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} d = ax_{0} + by_{0} + cz_{0}.}" />
        *484
      </p>


      <h2>Parallel and Orthogonal Planes</h2>
      <p className="textBorder">
       
        <p>
            Two distinct planes are parallel if their respective normal vectors are parallel (that is, the normal vectors are scalar multiples of each other).
            Two planes are orthogonal if their respective normal vectors are orthogonal (that is, the dot product of the normal vectors is zero).
        </p>
        *485
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Equations of lines</h4>
                      <p>
                        Find both the parametric and the vector equations of the following lines.
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} line \hspace{.2cm} through \hspace{.2cm} (0,0,1) \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} direction \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} vector \hspace{.2cm} v = \langle 4,7,0 \rangle}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{x = 4t, \hspace{.2cm} y = 7t, \hspace{.2cm} z = 1; \hspace{.2cm} r = \langle 0,0,1 \rangle + t \langle 4,7,0 \rangle}" />    
                         
                    </p>

                    *486
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Equations of lines</h4>
                      <p>
                        Find both the parametric and the vector equations of the following lines.
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} line \hspace{.2cm} through \hspace{.2cm} (0,0,0) \hspace{.2cm} and \hspace{.2cm} (1,2,3)}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{x = t, \hspace{.2cm} y = 2t, \hspace{.2cm} z = 3t; \hspace{.2cm} r = t \langle 1,2,3 \rangle}" />    
                         
                    </p>

                    *487
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Equations of planes</h4>
                      <p>
                        Find an equation of the following planes
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} plane \hspace{.2cm} passing \hspace{.2cm} through \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} P_{0}(0,2,-2) \hspace{.2cm} with \hspace{.2cm} a \hspace{.2cm} normal \hspace{.2cm} vector \hspace{.2cm} n = \langle 1,1,-1 \rangle}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="x+y-z=4" />    
                         
                    </p>

                    *488
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Equations of planes</h4>
                      <p>
                        Find an equation of the following planes
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} plane \hspace{.2cm} passing \hspace{.2cm} through \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} (1,0,3), \hspace{.2cm} (0,4,2), \hspace{.2cm} and \hspace{.2cm} (1,1,1)}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="7x+2y+z=10" />    
                         
                    </p>

                    *489
                    </div>
                </div>


            

            </div>
            </div>
           
    );
}