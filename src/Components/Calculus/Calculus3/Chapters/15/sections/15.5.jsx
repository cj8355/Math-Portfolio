import { Link } from "react-router-dom";
import "./15.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 5 Directional Derivatives and the Gradient</h1>
        <div className="sectionText">

      
      <h2>Directional Derivative</h2>
      <p className="textBorder">
       <p>Let f be differentiable at (a,b) and let </p>
        <MathComponent tex="\mathrm{u = \langle u_{1}, u_{2} \rangle}" />
        <p>
            Be a unit vector in the xy-plane. The directional derivative of f at (a,b) in the direction of u is
        </p>
        <MathComponent tex="\mathrm{D_{u} f(a,b) = \lim_{h \to 0} \frac{f(a+hu_{1}, b+hu_{2}) - f(a,b)}{h}}," />
        <p>provided the limit exists.</p>
        *566
      </p>


      <h2>Directional Derivative</h2>
      <p className="textBorder">
      <p>Let f be differentiable at (a,b) and let </p>
        <MathComponent tex="\mathrm{u = \langle u_{1}, u_{2} \rangle}" />
        <p>
            Be a unit vector in the xy-plane. The directional derivative of f at (a,b) in the direction of u is
        </p>
        <MathComponent tex="\mathrm{D_{u} f(a,b) = \langle f_{x} (a,b), f_{y}(a,b) \rangle \cdot \langle u_{1}, u_{2} \rangle}." />
        *567
      </p>


      <h2>Gradient (Two Dimensions)</h2>
      <p className="textBorder">
       <p>
        Let f be differentiable at the point (x,y). The gradient of f at (x,y) is the vector-valued function
       </p>
        <MathComponent tex="\mathrm{\nabla f(x,y) = \langle f_{x}(x,y), f_{y}(x,y) \rangle = f_{x}(x,y)i + f_{y}(x,y)j.}" />
        *568
      </p>


      <h2>Directions of Change</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} at \hspace{.2cm} (a,b) \hspace{.2cm} with \hspace{.2cm} \nabla f(a,b) \neq 0.}" />
        <p>1. f has its maximum rate of increase at (a,b) in the direction of the gradient</p>
        <MathComponent tex="\mathrm{\nabla f(a,b). \hspace{.2cm} The \hspace{.2cm} rate \hspace{.2cm} of \hspace{.2cm} change \hspace{.2cm} in \hspace{.2cm} this \hspace{.2cm} direction \hspace{.2cm} is \hspace{.2cm} \vert \nabla f(a,b) \vert .}" />
        <p>2. f has its maximum rate of decrease at (a,b) in the direction of</p>
        <MathComponent tex="\mathrm{- \nabla f(a,b). \hspace{.2cm} The \hspace{.2cm} rate \hspace{.2cm} of \hspace{.2cm} change \hspace{.2cm} in \hspace{.2cm} this \hspace{.2cm} direction \hspace{.2cm} is \hspace{.2cm} - \vert \nabla f(a,b) \vert .}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} The \hspace{.2cm} directional \hspace{.2cm} derivative \hspace{.2cm} is \hspace{.2cm} zero \hspace{.2cm} in \hspace{.2cm} any \hspace{.2cm} direction \hspace{.2cm} orthogonal \hspace{.2cm} to \hspace{.2cm} \nabla f(a,b).}" />
        *569
      </p>


      <h2>The Gradient and Level Curves</h2>
      <p className="textBorder">
       <p>
        Given a function f differentiable at (a,b), the line tangent to the level curve of f at (a,b) is orthogonal to the gradient
       </p>
        <MathComponent tex="\nabla \mathrm{f(a,b), \hspace{.2cm} provided \hspace{.2cm} \nabla f(a,b) \neq 0.}" />.
        *570
      </p>


      <h2>Directional Derivative and Gradient in Three Dimensions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} at \hspace{.2cm} (a,b,c) \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} u = \langle u_{1}, u_{2}, u_{3} \rangle \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} unit \hspace{.2cm} vector.}" />
        <p>The directional derivative of f at (a,b,b) in the direction of u is</p>
        <MathComponent tex="\mathrm{D_{u} f(a,b,c) = \lim_{h \to 0} \frac{f(a + hu_{1}, b + hu_{2}, c + hu_{3}) - f(a,b,c)}{h}}," />
        <p>provided this limit exists.</p>
        <p>The gradient of f at the point (x,y,z) is the vector-valued function</p>
        <MathComponent tex="\nabla \mathrm{f(x,y,z) = \langle f_{x}(x,y,z), f_{y}(x,y,z), f_{z}(x,y,z) \rangle}" />
        <MathComponent tex="\mathrm{= f_{x}(x,y,z)i + f_{y}(x,y,z)j + f_{z}(x,y,z)k .}" />
        *571
      </p>


      <h2>Directional Derivative and Interpreting the Gradient</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{Let \hspace{.2cm} f \hspace{.2cm} be \hspace{.2cm} differentiable \hspace{.2cm} at \hspace{.2cm} (a,b,c) \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} u = \langle u_{1}, u_{2}, u_{3} \rangle \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} unit \hspace{.2cm} vector.}" />
        <p>The directional derivative of f at (a,b,b) in the direction of u is</p>
        <MathComponent tex="\mathrm{D_{u}f(a,b,c) = \nabla f(a,b,c) \cdot u}" />
        <MathComponent tex="\mathrm{= \langle f_{x}(a,b,c), f_{y}(a,b,c), f_{z}(a,b,c) \rangle \cdot \rangle u_{1}, u_{2}, u_{3} \rangle .}" />
        <MathComponent tex="\mathrm{Assuming \hspace{.2cm} \nabla f(a,b,c) \neq 0, \hspace{.2cm} the \hspace{.2cm} gradient \hspace{.2cm} in \hspace{.2cm} three \hspace{.2cm} dimensions \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} following \hspace{.2cm} properties.}" /> 
        <p>1. f has its maximum rate of increase at (a,b,c) in the direction of the gradient</p>
        <MathComponent tex="\nabla \mathrm{f(a,b,c), \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} rate \hspace{.2cm} of \hspace{.2cm} change \hspace{.2cm} in \hspace{.2cm} this \hspace{.2cm} direction \hspace{.2cm} is \hspace{.2cm} \vert \nabla f(a,b,c) \vert .}" />
        <p>2. f has its maximum rate of decrease at (a,b,c) in the direction of</p>
        <MathComponent tex="- \nabla \mathrm{f(a,b,c), \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} rate \hspace{.2cm} of \hspace{.2cm} change \hspace{.2cm} in \hspace{.2cm} this \hspace{.2cm} direction \hspace{.2cm} is \hspace{.2cm} - \vert \nabla f(a,b,c) \vert .}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} The \hspace{.2cm} directional \hspace{.2cm} derivative \hspace{.2cm} is \hspace{.2cm} zero \hspace{.2cm} in \hspace{.2cm} any \hspace{.2cm} direction \hspace{.2cm} orthogonal \hspace{.2cm} to \hspace{.2cm} \nabla f(a,b,c).}" />
        *572
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Computing gradients</h4>
                      <p>
                        Compute the gradient of the following functions and evaluate it at the given point P.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = 2 + 3x^{2} - 5y^{2}; \hspace{.2cm} P(2,-1)}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\nabla f(x,y) = \langle 6x, -10y \rangle , \hspace{.2cm} \nabla f(2,-1) = \langle 12, 10 \rangle" />    
                         
                    </p>

                    *573
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Computing gradients</h4>
                      <p>
                        Compute the gradient of the following functions and evaluate it at the given point P.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = xe^{2xy}; \hspace{.2cm} P(1,0)}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\nabla f(x,y) = e^{2xy} \langle 1 + 2xy, 2x^{2} \rangle , \hspace{.2cm} \nabla f(1,0) = \langle 1, 2 \rangle" />    
                         
                    </p>

                    *574
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Computing directional derivatives with the gradient</h4>
                      <p>
                        Compute the directional derivative of the following functions at the given point P in the direction
                        of the given vector. Be sure to use a unit vector for the direction vector.
                      </p>
                      <MathComponent tex="f(x,y) = x^{2} - y^{2}; \hspace{.2cm} P(-1,-3); \hspace{.2cm} \langle \frac{3}{5}, - \frac{4}{5} \rangle" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="-6" />    
                         
                    </p>

                    *575
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Computing directional derivatives with the gradient</h4>
                      <p>
                        Compute the directional derivative of the following functions at the given point P in the direction
                        of the given vector. Be sure to use a unit vector for the direction vector.
                      </p>
                      <MathComponent tex="f(x,y) = x^{2} - y^{2}; \hspace{.2cm} P(1,2); \hspace{.2cm} \langle -3, 4 \rangle" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="-2" />    
                         
                    </p>

                    *576
                    </div>
                </div>



            </div>
            </div>
           
    );
}