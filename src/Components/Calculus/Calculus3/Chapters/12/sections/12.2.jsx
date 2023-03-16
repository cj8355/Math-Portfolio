import { Link } from "react-router-dom";
import "./12.2.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";


export default function Calculus3_Ch12_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 12 Sec. 2 Polar Coordinates</h1>
        <div className="sectionText">

      <h2>Converting Coordinates</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} \hspace{.2cm} point \hspace{.2cm} with \hspace{.2cm}polar \hspace{.2cm} coordinates \hspace{.2cm} (r, \theta) \hspace{.2cm} has \hspace{.2cm} Cartesian \hspace{.2cm} coordiantes \hspace{.2cm} (x,y), \hspace{.2cm} where}" />
        <MathComponent tex="x = \hspace{.2cm} r \hspace{.2cm} cos \hspace{.2cm} \theta \hspace{.9cm} and \hspace{.9cm} y = \hspace{.2cm} r \hspace{.2cm} sin \hspace{.2cm} \theta" />
        <MathComponent tex="\mathrm{A \hspace{.2cm} point \hspace{.2cm} with \hspace{.2cm} Cartesian \hspace{.2cm} coordinates \hspace{.2cm} (x,y) \hspace{.2cm} has \hspace{.2cm} polar \hspace{.2cm} coordiantes \hspace{.2cm} (r, \theta), \hspace{.2cm} where}" />
        <MathComponent tex="r^{2} = x^{2} + y^{2} \hspace{.9cm} and \hspace{.9cm} tan \hspace{.2cm} \theta = \frac{y}{x}." />
        *423
      </p>


      <h2>Circles in Polar Coordinates</h2>
      <p className="textBorder">
       <p>The equation r = a describes a circle of radius |a| centered at (0,0).</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} equation \hspace{.2cm} r = 2a \hspace{.2cm} cos \hspace{.2cm} \theta + 2b \hspace{.2cm} sin \hspace{.2cm} \theta \hspace{.2cm} describes \hspace{.2cm} a \hspace{.2cm} circle \hspace{.2cm} of \hspace{.2cm} radius \hspace{.2cm} \sqrt{a^{2}+b^{2}} \hspace{.2cm} centered \hspace{.2cm} at \hspace{.2cm} (a,b).}" />
        *424
      </p>


      <h2>Cartesian-to-Polar Method for Graphing</h2><MathComponent tex="r = f(\theta)" />
      <p className="textBorder">
      <MathComponent tex="1. \hspace{.2cm} \mathrm{Graph \hspace{.2cm} r = f(\theta) \hspace{.2cm} as \hspace{.2cm} if \hspace{.2cm} r \hspace{.2cm} and \hspace{.2cm} \theta \hspace{.2cm} were \hspace{.2cm} Cartesian \hspace{.2cm} coordinates \hspace{.2cm} with \hspace{.2cm} \theta}" />
       <p>on the horizontal axis and r on the vertical axis. Be sure to choose an interval for</p>
        <MathComponent tex="\mathrm{\theta \hspace{.2cm} on \hspace{.2cm} which \hspace{.2cm} the \hspace{.2cm} entire \hspace{.2cm} polar \hspace{.2cm}curve \hspace{.2cm} is \hspace{.2cm} produced.}" />
        <p>2. Use the Cartesian graph that you created in Step 1 as a guide to sketch the points</p>
        <MathComponent tex="(r,\theta) \hspace{.2cm} \mathrm{on \hspace{.2cm} the \hspace{.2cm} final \hspace{.2cm} polar \hspace{.2cm} curve.}" />  
        *425
      </p>
      

      <h2>Symmetry in Polar Equations</h2>
      <p className="textBorder">
        <p><b>Symmetry about the x-axis </b> occurs if the point</p>
      <MathComponent tex="(r, \theta) \hspace{.2cm} \mathrm{is \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} graph \hspace{.2cm} whenever \hspace{.2cm} (r, -\theta) \hspace{.2cm} is \hspace{.2cm}on \hspace{.2cm} the \hspace{.2cm} graph.}" />
      <p><b>Symmetry about the y-axis </b> occurs if the point</p>
        <MathComponent tex="(r, \theta) \hspace{.2cm} \mathrm{is \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} graph \hspace{.2cm} whenever \hspace{.2cm} (r,\pi -\theta) = (-r, -\theta) \hspace{.2cm} is \hspace{.2cm}on \hspace{.2cm} the \hspace{.2cm} graph.}" />
        <p><b>Symmetry about the origin </b> occurs if the point</p>
        <MathComponent tex="(r, \theta) \hspace{.2cm} \mathrm{is \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} graph \hspace{.2cm} whenever \hspace{.2cm} (-r, \theta) = (r, \theta + \pi) \hspace{.2cm} is \hspace{.2cm}on \hspace{.2cm} the \hspace{.2cm} graph.}" />  
        *426
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Sets in polar coordinates</h4>
                      <p>
                        Sketch the following sets of points.
                      </p>
                      <MathComponent tex="r \geq 2" /> 
                     
                    <p>
                        Answer: <br/>
                        <img src={graph1} alt="Graph of function" ></img>
                         
                    </p>

                    *427
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Converting Coordinates</h4>
                      <p>
                        Express the following polar coordinates in Cartesian coordinates.
                      </p>
                      <MathComponent tex="(3, \frac{\pi}{4})" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="(3 \sqrt{2}/2, 3 \sqrt{2}/2)" />
                         
                    </p>

                    *428
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Converting Coordinates</h4>
                      <p>
                        Express the following polar coordinates in Cartesian coordinates.
                      </p>
                      <MathComponent tex="(-4, \frac{3\pi}{4})" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="(2 \sqrt{2}, -2 \sqrt{2})" />
                         
                    </p>

                    *429
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Converting Coordinates</h4>
                      <p>
                        Express the following Cartesian coordinates in polar coordinates in at least two different ways.
                      </p>
                      <MathComponent tex="(2,2)" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="(2 \sqrt{2}, \pi/4), (-2 \sqrt{2}, 5 \pi/4)" />
                         
                    </p>

                    *430
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                    <h4>Converting Coordinates</h4>
                      <p>
                        Express the following Cartesian coordinates in polar coordinates in at least two different ways.
                      </p>
                      <MathComponent tex="(-4,4 \sqrt{3})" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="(8, 2\pi/3), (-8, - \pi/3)" />
                         
                    </p>

                    *431
                    </div>
                </div>




            </div>
            </div>
           
    );
}