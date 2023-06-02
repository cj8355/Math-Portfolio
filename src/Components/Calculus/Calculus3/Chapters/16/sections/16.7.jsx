import { Link } from "react-router-dom";
import "./16.7.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 7 Change of Variables in Multiple Integrals</h1>
        <div className="sectionText">

      
      <h2>One-to-One Transformation</h2>
      <p className="textBorder">
       
       <p>
        A transformation T from a region S to a region R is one-to-one on S if T(P) = T(Q) only when P = Q,
        where P and Q are points in S.
       </p>
        
        *643
      </p>


      <h2>Jacobian Determinant of a Transformation of Two Variables</h2>
      <p className="textBorder">
       <p>
        Given a transformation T: x = g(u,y), y = h(u,v), where g and h are differentiable on a region of the uv-plane, the Jacobian
        determinant (or Jacobian) of T is
       </p>
        <MathComponent tex="\mathrm{J(u,v) = \frac{\partial (x,y)}{\partial (u,v)} = \bigg \vert \begin{array} {ll} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \\   \end{array} \bigg \vert = \frac{\partial x}{\partial u} \frac{\partial y}{\partial v} - \frac{\partial x}{\partial v} \frac{\partial y}{\partial u}.}" />
        *644
      </p>


      <h2>Change of Variables for Double Integrals</h2>
      <p className="textBorder">
       <p>
        Let T: x = g(u,v), y = h(u,v) be a transformation that maps a closed bounded region S in the uv-plane to a region R in the xy-plane. Assume
        T is one-to-one on the interior of S and g and h have continuous first partial derivatives there.
        If f is continuous on R, then
       </p>
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{S} \int f(g(u,v), h(u,v)) \vert J(u,v) \vert \hspace{.2cm} dA. " />
        *645
      </p>


      <h2>Jacobian Determinant of a Transformation of Three Variables</h2>
      <p className="textBorder">
       <p>
        Given a transformation T: x = g(u,v,w), y = h(u,v,w), and z = p(u,v,w) be a transformation that maps a closed bounded region S in the uvw-space to a region D = T(S) in the xyz-space. Assume
        T is one-to-one on the interior of S and g, h and p have continuous first partial derivatives there.
        If f is continuous on D, then
       </p>
        <MathComponent tex="J(u,v,w) = \frac{\partial (x,y,z)}{\partial (u,v,w)} = \bigg \vert \begin{array} {ll} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial z} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} \\   \end{array} \bigg \vert " />
        *646
      </p>


      <h2>Change of Variables for Double Integrals</h2>
      <p className="textBorder">
       <p>
        Let T: x = g(u,v,w), y = h(u,v,w), and z = p(u,v,w) be a transformation that maps a closed bounded region S in the uvw-space to a region D = T(S) in the xyz-space. Assume
        T is one-to-one on the interior of S and g, h, and p have continuous first partial derivatives there.
        If f is continuous on D, then
       </p>
        <MathComponent tex="\int \int_{D} \int f(x,y,z) \hspace{.2cm} dV = \int \int_{S} \int f(g(u,v,w), h(u,v,w), p(u,v,w)) \vert J(u,v,w) \vert \hspace{.2cm} dV." />
        *647
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