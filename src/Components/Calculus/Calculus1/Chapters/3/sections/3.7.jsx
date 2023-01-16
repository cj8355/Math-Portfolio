import { Link } from "react-router-dom";
import "./3.7.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch3_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 7 The Chain Rule</h1>
        <div className="sectionText">

        <h2>The Chain Rule</h2>
      <p>
        Suppose y = f(u) is differentiable at u = g(x) and u = g(x) is differentiable at x.
        The composite function y = f(g(x)) is differentiable at x, and its derivative can be expressed
        in two equivalent ways 
            <MathComponent tex="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" />
           
            <MathComponent tex="\frac{d}{dx} (f(g(x))) = f'(g(x)) \cdot g'(x)" />
            
            </p> *108

            <h2>Using the Chain Rule</h2>
      <p>
        Assume the differentiable function y = f(g(x)) is given.
        1. Identify an outer function f and an inner function g, and let u = g(x).
        2. Replace g(x) with u to express y in terms of u:
            <MathComponent tex="y = f(g(x)) \Rightarrow y = f(u)" />
        3. Calculate the product
            <MathComponent tex="\frac{dy}{du} \cdot \frac{du}{dx}" />
        4. Replace u with g(x) in 
        <MathComponent tex="\frac{dy}{du}" />
        to obtain
        <MathComponent tex="\frac{dy}{dx}" />
            
            </p> *109


            <h2>Chain Rule for Powers</h2>
      <p>
        If g is differentiable for all x in its domain and p is a real number, then
        
        <MathComponent tex="\frac{d}{dx} ((g(x))^{p}) = p(g(x))^{p - 1} g'(x)" />
       
            </p> *110
         


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4></h4>
                      <p>
                        For each of the following composite functions, find an inner function u = g(x)
                        and an outer function y = f(u) such that y = f(g(x)), Then calculate dy/dx.
                      </p>
                     
                      <MathComponent tex="y = (3x + 7)^{10}" />

                      <p>
                        Answer:

                        <MathComponent tex="u = 3x + 7" />
                        <MathComponent tex="f(u) = u^{10}" />
                        <MathComponent tex="30(3x + 7)^{9}" />
                      </p>

                    *111
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4></h4>
                      <p>
                        Calculate the derivative of the following function.
                      </p>
                     
                      <MathComponent tex="y = (3x^{2} + 7x)^{10}" />

                      <p>
                        Answer:

                        <MathComponent tex="10(6x + 7)(3x^{2} + 7x)^{9}" />
                        
                      </p>

                    *112
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4></h4>
                      <p>
                        Calculate the derivative of the following function.
                      </p>
                     
                      <MathComponent tex="y = tan e^{x}" />

                      <p>
                        Answer:

                        <MathComponent tex="e^{x} sec^{2} e^{x}" />
                        
                      </p>

                    *113
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4></h4>
                      <p>
                        Calculate the derivative of the following function.
                      </p>
                     
                      <MathComponent tex="y = (p + 3)^{2} sin p^{2}" />

                      <p>
                        Answer:

                        <MathComponent tex="2(p + 3)(sinp^{2} + p(p + 3) cos p^{2})" />
                        
                      </p>

                    *114
                </div>

             
                
            </div>
            </div>
           
    );
}