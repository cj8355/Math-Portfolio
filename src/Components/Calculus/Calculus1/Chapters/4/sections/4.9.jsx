import { Link } from "react-router-dom";
import "./4.9.css";
import { MathComponent } from "mathjax-react";
import graph5 from "./images/graph5.png";


export default function Calculus1_Ch4_Sec9() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 9 Antiderivatives</h1>
        <div className="sectionText">

        <h2>Antiderivative</h2>
       <p>
        A function F is an antiderivative of f on an interval I provided F'(x) = f(x), for all x in I.
       </p>
       
    
      *203


      <h2>The Family of Antiderivative</h2>
       <p>
        Let F be any antiderivative of f on an interval I. Then all the antiderivatives of f on I have the
        form F + C, where C is an arbitrary constant.
       </p>
       
    
      *204


      <h2>Power Rule for Indefinite Integrals</h2>
       <p>
       <MathComponent tex="\int x^{p} dx = \frac{x^{p+1}}{p+1} + C" />,
       where <MathComponent tex="p \neq -1" /> is a real number and C is an arbitrary constant.
       </p>
       
    
      *205


      <h2>Constant Multiple and Sum Rules</h2>
       <p>
        <b>Constant Multiple Rule</b>
       <MathComponent tex="\int cf(x) dx = c \int f(x) dx" />, for real numbers c
       </p>
       <p>
        <b>Sum Rule</b>
       <MathComponent tex="\int (f(x) + g(x)) dx = \int f(x)dx + \int g(x) dx" />
       </p>
       
    
      *206




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