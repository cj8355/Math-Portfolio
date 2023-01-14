import { Link } from "react-router-dom";
import "./3.6.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 6 Derivatives as Rates of Changes</h1>
        <div className="sectionText">

        <h2>Average and Instantaneous Velocity</h2>
      <p>
        Let 
            <MathComponent tex="s = f(t)" />
            be the position function of an object moving along a line. The average velocity of the object over the time interval 
            <MathComponent tex="[a, a + \Delta t]" />
            is the slope of the secant line between (a, f(a)) and
            <MathComponent tex="(a + \Delta t, f(a + \Delta t))" />:
            <MathComponent tex="v_{av} = \frac{f(a + \Delta t) - f(a)}{\Delta t}" />
            The instantaneous velocity at a is the slope of the line tangent to the position curve, which is the derivative of the position function:
            <MathComponent tex="v(a) = \lim_{\Delta t\to 0}  \frac{f(a + \Delta t) - f(a)}{\Delta t} = f'(a)" />
            </p> *100

          
            <h2>Velocity, Speed, and Acceleration</h2>
      <p>
        Suppose an object moves along a line with position  
            <MathComponent tex="s = f(t)" />
            Then the velocity at time t is
            <MathComponent tex="v = \frac{ds}{dt} = f'(t)" />,
            the speed at time t is
            <MathComponent tex="|v| = |f'(t)|" />, and
            the acceleration at time t is
            <MathComponent tex="a = \frac{dv}{dt} = \frac{d^{2} s}{dt^{2}} = f''(t)"/>
            </p> *101


            <h2>Average and Marginal Cost</h2>
      <p>
        The cost function C(x) gives the cost to produce the first x items in a manufacturing process. The average cost to
        produce x items is 
        <MathComponent tex="\bar C(x) = C(x) / x" />
        The marginal cost C'(x) is the approximate cost to produce one additional item after producing x items
           
            </p> *102


            <h2>Elasticity</h2>
      <p>
        If the demand for a product varies with the price according to the function
        <MathComponent tex="D = f(p)" />,
        then the price elasticity of the demand is  <MathComponent tex="E(p) = \frac{dD}{dp} \frac{p}{D}" />
           
            </p> *103


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4></h4>
                    
                    <MathComponent tex="" />

                    *
                </div>


             
                
            </div>
            </div>
           
    );
}