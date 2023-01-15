import { Link } from "react-router-dom";
import "./3.6.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";



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
                      <h4>Position, velocity, and acceleration</h4>
                      <p>
                        Suppose the position of an object moving horizontally along a line after t seconds is given by the following
                        function s = f(t), where s is measured in feet, with <MathComponent tex="s > 0" /> corresponding to positions right of the origin 
                      </p>
                      <div>
                        <p>
                            a. Grpah the position function.
                            b. Find and graph the velocity function. When is the object stationary, moving to the right, and moving to the left?
                            c. Determine the velocity and acceleration of the object at t = 1.
                            d. Determine the acceleration of the object when its velocity is zero
                            e. On what intervals is the speed increasing?

                        </p>
                      </div>
                      <MathComponent tex="f(t) = t^{2} - 4t" />
                      <MathComponent tex="0 \leq t \leq 5" />

                      <p>
                        Answer:
                        a. <img src={graph1} alt="Graph of function" ></img>
                        b. <MathComponent tex="v(t) = 2t - 4" />
                        Stationary at t = 2, to the right on <MathComponent tex="(2, 5]" />,
                        to the left <MathComponent tex="[0, 2)" />
                        <img src={graph2} alt="Graph of function" ></img>
                        c.  <MathComponent tex="v(t) = -2 ft/s" />
                        <MathComponent tex="a(t) = 2ft/s^{2}" />
                        d.  <MathComponent tex="a(2) = 2 ft/s^{2}" />
                        e.  <MathComponent tex="(2, 5]" />
                      </p>
                    
                    

                    *104
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>A dropped stone on Earth</h4>
                      <p>
                        The height (in feet) of a stone dropped from a bridge 64 feet above a river at t = 0 seconds is given by 
                        <MathComponent tex="s(t) = -16t^{2} + 64" />
                        Find the velocity of the stone and its speed when it hits the water
                      </p>
                      

                      <p>
                        Answer:
                        -64 ft/s;
                        64 ft/s
                        
                      </p>
                    
                    

                    *105
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Average and marginal cost</h4>
                      <p>
                        Consider the following cost function.
                        a. Find the average cost and marginal cost functions.
                        b. Determine the average cost and the marginal cost when x = a
                        c. Interpret the values obtained in part(b)
                      </p>
                      <MathComponent tex="C(x) = 1000 + 0.1x" />
                      <MathComponent tex="0 \leq x \leq 5000" />
                      a = 2000

                      <p>
                        Answer:
                        a.
                        <div>
                        <MathComponent tex="\bar C(x) = \frac{1000}{x} + 0.1" />
                         <MathComponent tex="C'(x) = 0.1" />
                            </div> 
                        b. 
                        <div>
                        <MathComponent tex="\bar C (2000) = $0.60/item" />
                         <MathComponent tex="C'(2000) = $0.10/item" />
                            </div> 
                            c.
                            <p>
                                The average cost per item when 2000 items are produced is $0.60\item. The cost of producing
                                2001st item is $0.10.
                            </p>
                        
                      </p>
                    
                    

                    *106
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Average and marginal profit</h4>
                      <p>
                        Let C(x) represent the cost of producing x items and p(x) be the sale price per item if 
                        x items are sold. The profit P(x) of selling x items is P(x) = xp(x) - C(x) (revenue minus costs).
                        The average profit per item when x items are sold is P(x)/x and the marginal profit is dP/dx. The 
                        marginal profit approximates the profit obtained by selling one more item, given that x items have
                        already been sold. Consider the following cost functions and price functions P.
                      </p>
                      <p>
                        
                        a. Find the profit function P.
                        b. Find the average profit function and the marginal profit function.
                        c. Find the average profit and the marginal profit if x = a units are sold.
                        d. Interpret the meaning of the values obtained in part (c).
                      </p>
                      <MathComponent tex="C(x) = -0.02x^{2} + 50x + 100" />
                      <MathComponent tex="p(x) = 100" />
                      a = 500

                      <p>
                        Answer:
                        a.
                        <div>
                        <MathComponent tex="P(x) = 0.02x^{2} + 50x - 100" />
                         
                            </div> 
                        b. 
                        <div>
                        <MathComponent tex="\frac{P(x)}{x} = 0.02x + 50 - \frac{100}{x}" />
                         <MathComponent tex="\frac{dP}{dx} = 0.04x + 50" />
                            </div> 
                            c.
                            <div>
                        <MathComponent tex="\frac{P(500)}{500} = 59.8" />
                         <MathComponent tex="\frac{dp}{dx} (500) = 70" />
                            </div> 
                            d. 
                            <p>
                                The profit, on average, for each of the first 500 items produced is 59.8
                                The profit for the 501st item produced is 70
                            </p>
                        
                      </p>
                    
                    

                    *107
                </div>

             
                
            </div>
            </div>
           
    );
}