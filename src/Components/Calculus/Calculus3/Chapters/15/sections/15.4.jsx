import { Link } from "react-router-dom";
import "./15.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 4 The Chain Rule</h1>
        <div className="sectionText">

      
      <h2>Chain Rule (One Independent Variable)</h2>
      <p className="textBorder">
       <p>
        Let z be a differentiable function of x and y on its domain, where x and y are differentiable functions of t on an interval I. Then
       </p>
        <MathComponent tex="\mathrm{\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}}" />
        *559
      </p>


      <h2>Chain Rule (Two Independent Variable)</h2>
      <p className="textBorder">
      <p>
        Let z be a differentiable function, where x and y are differentiable functions of x and t. Then
       </p>
        <MathComponent tex="\mathrm{\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} \hspace{.2cm} and \hspace{.2cm} \frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}}" />
        *560
      </p>


      <h2>Implicit Differentation</h2>
      <p className="textBorder">
       <p>
        Let F be differentiable on its domain and suppose F(x,y) = 0 defines y as a differentiable function of x.
       </p>
        <MathComponent tex="\mathrm{Provided \hspace{.2cm} F_{y} \neq 0,}" />
        <MathComponent tex="\frac{dy}{dx} = - \frac{F_{x}}{F_{y}}." />
        *561
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