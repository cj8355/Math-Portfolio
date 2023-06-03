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
                      <h4>Transforming a square</h4>
                      <MathComponent tex="\mathrm{Let \hspace{.2cm} S = \{(u,v): 0 \leq u \leq 1, 0 \leq v \leq 1 \} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} unit \hspace{.2cm} square \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} uv-plane. }" />
                      <p>
                        Find the image of S in the xy-plane under the following transformations
                      </p>
                      <MathComponent tex="\mathrm{T: \hspace{.2cm} x = 2u, \hspace{.2cm} y = v/2}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{The \hspace{.2cm} rectangle \hspace{.2cm} with \hspace{.2cm} vertices \hspace{.2cm} at \hspace{.2cm} (0,0), (2,0), (2, \frac{1}{2}), \hspace{.2cm} and \hspace{.2cm} (0, \frac{1}{2})}" />    
                         
                    </p>

                    *648
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Transforming a square</h4>
                      <MathComponent tex="\mathrm{Let \hspace{.2cm} S = \{(u,v): 0 \leq u \leq 1, 0 \leq v \leq 1 \} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} unit \hspace{.2cm} square \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} uv-plane. }" />
                      <p>
                        Find the image of S in the xy-plane under the following transformations
                      </p>
                      <MathComponent tex="\mathrm{T: \hspace{.2cm} x = u^{2} - v^{2}, \hspace{.2cm} y = 2uv}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{The \hspace{.2cm} region \hspace{.2cm} above \hspace{.2cm} the \hspace{.2cm} x-axis \hspace{.2cm} and \hspace{.2cm} bounded \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} curves \hspace{.2cm} y^{2} = 4 \pm 4x }" />    
                         
                    </p>

                    *649
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Transforming a square</h4>
                      <MathComponent tex="\mathrm{Let \hspace{.2cm} S = \{(u,v): 0 \leq u \leq 1, 0 \leq v \leq 1 \} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} unit \hspace{.2cm} square \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} uv-plane. }" />
                      <p>
                        Find the image of S in the xy-plane under the following transformations
                      </p>
                      <MathComponent tex="\mathrm{T: \hspace{.2cm} x = u \hspace{.2cm} cos \hspace{.2cm} \pi v, \hspace{.2cm} y = u \hspace{.2cm} sin \hspace{.2cm} \pi v}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{The \hspace{.2cm} upper \hspace{.2cm} half \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} unit \hspace{.2cm} circle}" />    
                         
                    </p>

                    *650
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Computing Jacobians</h4>
                      <p>
                        Compute the Jacobian J(u,v) for the following transformations
                      </p>
                      <MathComponent tex="\mathrm{T: \hspace{.2cm} x = 3u, \hspace{.2cm} y = -3v}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="-9" />    
                         
                    </p>

                    *651
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                    <h4>Computing Jacobians</h4>
                      <p>
                        Compute the Jacobian J(u,v) for the following transformations
                      </p>
                      <MathComponent tex="\mathrm{T: \hspace{.2cm} x = 2uv, \hspace{.2cm} y = u^{2} - v^{2}}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="-4(u^{2} + v^{2})" />    
                         
                    </p>

                    *652
                    </div>
                </div>




            </div>
            </div>
           
    );
}