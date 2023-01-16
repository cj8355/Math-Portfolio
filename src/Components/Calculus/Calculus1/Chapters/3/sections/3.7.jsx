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
                     
                    

                    *
                </div>



             
                
            </div>
            </div>
           
    );
}