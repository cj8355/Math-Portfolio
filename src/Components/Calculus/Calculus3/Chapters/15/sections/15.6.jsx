import { Link } from "react-router-dom";
import "./15.6.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 6 Tangent Planes and Linear Approximation</h1>
        <div className="sectionText">

      
      <h2>Equation of the Tangent Plane for F(x,y,z) = 0</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} F \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} P_{0}(a,b,c) \hspace{.2cm} with \hspace{.2cm} \nabla F(a,b,c) \neq 0.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} plane \hspace{.2cm} tangent \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} surface \hspace{.2cm} F(x,y,z) = 0 \hspace{.2cm} at \hspace{.2cm} P_{0}, \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} tangent \hspace{.2cm} plane,}" />
        <MathComponent tex="\mathrm{is \hspace{.2cm} the \hspace{.2cm} plane \hspace{.2cm} passing \hspace{.2cm} through \hspace{.2cm} P_{0} \hspace{.2cm} orthogonal \hspace{.2cm} to \hspace{.2cm} \nabla F(a,b,c).}" />
        <p>An equation of the tangent plane is</p>
        <MathComponent tex="\mathrm{F_{x}(a,b,c)(x-a) + F_{y}(a,b,c)(y-b) + F_{z}(a,b,c)(z-c) = 0.}" />
        *577
      </p>


      <h2>Tangent Plane for z = f(x,y)</h2>
      <p className="textBorder">
       <p>
        Let f be differentiable at the point (a,b). An equation of the plane tangent to the surface z = f(x,y) at the point (a,b,f(a,b)) is
       </p>
        <MathComponent tex="\mathrm{z = f_{x}(a,b)(x-a) + f_{y}(a,b)(y-b) + f(a,b).}" />
        *578
      </p>


      <h2>Linear Approximation</h2>
      <p className="textBorder">
       <p>
        Let f be differentiable at (a,b). The linear approximation to the surface z = f(x,y) at the point (a,b,f(a,b)) is the tangent plane at that
        point, given by the equation
       </p>
        <MathComponent tex="\mathrm{L(x,y) = f_{x}(a,b)(x-a) + f_{y}(a,b)(y-b) + f(a,b).}" />
        <p>
            For a function of three variables, the linear approximation to w = f(x,y,z) at the point (a,b,c,f(a,b,c)) is given by
        </p>
        <MathComponent tex="\mathrm{L(x,y,z) = f_{x}(a,b,c)(x-a) + f_{y}(a,b,c)(y-b) + f_{z}(a,b,c)(z-c) + f(a,b,c).}" />
        *579
      </p>


      <h2>The differential dz</h2>
      <p className="textBorder">
       <p>
        Let f be differentiable at the point (x,y). The change in z = f(x,y) as the independent variable change from (x,y) to (x + dx, y + dy)
        is denoted
       </p>
        <MathComponent tex="\nabla \mathrm{z \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} approximated \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} differential \hspace{.2cm} dz:}" />
        <MathComponent tex="\mathrm{\triangle z \approx dz = f_{x}(x,y) \hspace{.2cm} dx + f_{y}(x,y) \hspace{.2cm} dy.}" />
        *580
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>




            </div>
            </div>
           
    );
}