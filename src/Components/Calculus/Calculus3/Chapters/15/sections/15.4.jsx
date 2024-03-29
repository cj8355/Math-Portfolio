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
                      <h4>Chain Rule with one independent variable</h4>
                      <p>
                        Use the Chain Rule to find the following derivatives.
                      </p>
                      <MathComponent tex="\mathrm{dz/dt, \hspace{.2cm} where \hspace{.2cm} z = x \hspace{.2cm} sin \hspace{.2cm} y, \hspace{.2cm} x = t^{2}, \hspace{.2cm} and \hspace{.2cm} y = 4t^{3}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{z'(t) = 2t \hspace{.1cm} sin \hspace{.1cm} 4t^{3} + 12t^{4} \hspace{.1cm} cos \hspace{.1cm} 4t^{3}}" />    
                         
                    </p>

                    *562
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Chain Rule with one independent variable</h4>
                      <p>
                        Use the Chain Rule to find the following derivatives.
                      </p>
                      <MathComponent tex="\mathrm{dV/dt, \hspace{.2cm} where \hspace{.2cm} V = xyz \hspace{.2cm}, \hspace{.2cm} x = e^{t}, \hspace{.2cm} y = 2t+3, \hspace{.2cm} and \hspace{.2cm} z = sin \hspace{.1cm} t}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{V'(t) = e^{t}((2t+5) \hspace{.1cm} sin \hspace{.1cm} t + (2t+3) \hspace{.1cm} cos \hspace{.1cm} t)}" />    
                         
                    </p>

                    *563
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Chain Rule with several independent variables</h4>
                      <p>
                        Find the following derivatives.
                      </p>
                      <MathComponent tex="\mathrm{z_{s} \hspace{.2cm} and \hspace{.2cm} z_{t}, \hspace{.2cm} where \hspace{.2cm} z = x^{2} \hspace{.2cm} sin \hspace{.2cm} y, \hspace{.2cm} x = s-t, \hspace{.2cm} y = t^{2}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{z_{s} = 2(s-t) \hspace{.1cm} sin \hspace{.1cm} t^{2}; \hspace{.1cm} z_{t} = 2(s-t)(t(s-t)cos \hspace{.1cm} t^{2} - sin \hspace{.1cm} t^{2}) }" />    
                         
                    </p>

                    *564
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Chain Rule with several independent variables</h4>
                      <p>
                        Find the following derivatives.
                      </p>
                      <MathComponent tex="\mathrm{z_{s} \hspace{.2cm} and \hspace{.2cm} z_{t}, \hspace{.2cm} where \hspace{.2cm} z = xy - x^{2}y, \hspace{.2cm} x = s+t, \hspace{.2cm} y = s-t}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{z_{s} = 2s - 3s^{2} - 2st + t^{2}; \hspace{.1cm} z_{t} = -s^{2} - 2t + 2st + 3t^{2}}" />    
                         
                    </p>

                    *565
                    </div>
                </div>



            </div>
            </div>
           
    );
}