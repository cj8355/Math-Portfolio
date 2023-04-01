import { Link } from "react-router-dom";
import "./13.6.css";
import { MathComponent } from "mathjax-react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

export default function Calculus3_Ch13_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 6 Cylinders and Quadric Surfaces</h1>
        <div className="sectionText">

      
      <h2>Trace</h2>
      <p className="textBorder">
       <p>
        A trace of a surface is the set of points at which the surface intersects a plane that is parallel to one of the coordinate
        planes. The traces in the coordinate planes are called the xy-trace, the yz-trace, and the xz-trace.
       </p>
       <img src={image1} alt="Graph of function" className="imageWidth"></img><br/>
        *490
      </p>


      <h2>Common Shapes</h2>
      <p className="textBorder">
       
      <img src={image2} alt="Graph of function" className="imageWidth"></img><br/>
        *491
      </p>




            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Identifying quadric surfaces</h4>
                      <p>
                        Identify the following quadric surfaces by name. Find and describe the xy-, xz-, and yz- traces, when they exist.
                      </p>
                      
                      <MathComponent tex="25x^{2} + 25y^{2} + z^{2} = 25" /> 
                    <p>
                        Answer: <br/>
                        <p>Ellipsoid</p>
                         <MathComponent tex="\mathrm{xy-trace: \hspace{.2cm} x^{2}+y^{2} = 1 \hspace{.2cm} (circle)}" /> 
                         <MathComponent tex="\mathrm{xz-trace: \hspace{.2cm} x^{2}+ \frac{z^{2}}{25} = 1 \hspace{.2cm} (ellipse)}" />
                         <MathComponent tex="\mathrm{yz-trace: \hspace{.2cm} y^{2}+ \frac{z^{2}}{25} = 1 \hspace{.2cm} (ellipse)}" />   
                         
                    </p>

                    *492
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Identifying quadric surfaces</h4>
                      <p>
                        Identify the following quadric surfaces by name. Find and describe the xy-, xz-, and yz- traces, when they exist.
                      </p>
                      
                      <MathComponent tex="25x^{2} + 25y^{2} - z = 0" /> 
                    <p>
                        Answer: <br/>
                        <p>Paraboloid</p>
                         <MathComponent tex="\mathrm{xy-trace: \hspace{.2cm} (0,0,0) \hspace{.2cm} (a \hspace{.2cm} single \hspace{.2cm} point)}" /> 
                         <MathComponent tex="\mathrm{xz-trace: \hspace{.2cm} z = 25x^{2} \hspace{.2cm} (parabola)}" />
                         <MathComponent tex="\mathrm{yz-trace: \hspace{.2cm} z = 25y^{2} \hspace{.2cm} (parabola)}" />   
                         
                    </p>

                    *493
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Identifying surfaces</h4>
                      <p>
                        Identify the following surfaces by name.
                      </p>
                      <MathComponent tex="\mathrm{y = 4z^{2} - x^{2}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <p>Hyperbolic paraboloid</p> 

                         
                    </p>

                    *494
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Identifying surfaces</h4>
                      <p>
                        Identify the following surfaces by name.
                      </p>
                      <MathComponent tex="\mathrm{y = \frac{x^{2}}{6} + \frac{z^{2}}{16}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <p>Elliptic paraboloid</p>  

                         
                    </p>

                    *495
                    </div>
                </div>




            </div>
            </div>
           
    );
}