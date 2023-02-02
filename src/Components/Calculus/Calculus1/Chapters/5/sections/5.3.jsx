import { Link } from "react-router-dom";
import "./5.3.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch5_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Sec. 3 Fundamental Theorem of Calculus</h1>
        <div className="sectionText">

        <h2>Area Function</h2>
        <p>
            Let f be a continuous function, for <MathComponent tex="t \geq a" />. The <b>area function for f with left endpoint a is</b>
            <MathComponent tex="A(x) = \int_{a}^{x} f(t) dt" />, where <MathComponent tex="x \geq a" />. The area function gives the net area
            of the region bounded by the graph of f and the t-axis on the interval [a,x].
        </p>
      *227

      <h2>Fundamental Theorem of Calculus Part 1</h2>
        <p>
            If f is continuous on [a,b], then the area function
            <MathComponent tex="A(x) = \int_{a}^{x} f(t) dt" />, for <MathComponent tex="a \leq x \leq b" />,
            is continuous on [a,b] and differentiable on (a,b). The area function A'(x) = f(x). Equivalently,
            <MathComponent tex="A'(x) = \frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)" />,
            which means that the area function of f is an antiderivative of f on [a,b].
        </p>
      *228

      <h2>Fundamental Theorem of Calculus Part 2</h2>
        <p>
            If f is continuous on [a,b] and F is any antiderivative of f on [a,b], then
            <MathComponent tex="\int_{a}^{b} f(x) dx = F(b) - F(a)" />.
        </p>
      *229





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