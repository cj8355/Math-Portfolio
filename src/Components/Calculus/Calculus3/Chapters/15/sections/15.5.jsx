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


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
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