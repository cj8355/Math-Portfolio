import { Link } from "react-router-dom";
import "./4.9.css";
import { MathComponent } from "mathjax-react";


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
                      <h4>Finding Antiderivatives</h4>
                      <p>
                        Find all the antiderivatives of the following function. Check your work by taking derivatives
                      </p>
                      
                     <MathComponent tex="f(x) = 5x^{4}" />

                     <p>
                        Answer:<br/>
                        <MathComponent tex="F(x) = x^{5} + C" />
                        </p> 
                     

                    *207
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Finding Antiderivatives</h4>
                      <p>
                        Find all the antiderivatives of the following function. Check your work by taking derivatives
                      </p>
                      
                     <MathComponent tex="f(x) = e^{x}" />

                     <p>
                        Answer:<br/>
                        <MathComponent tex="F(x) = e^{x} + C" />
                        </p> 
                     

                    *208
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Indefinite integrals</h4>
                      <p>
                        Find all the antiderivatives of the following function. Check your work by differentiation.
                      </p>
                      
                     <MathComponent tex="\int (3x^{5} - 5x^{9}) dx" />

                     <p>
                        Answer:<br/>
                        <MathComponent tex="F(x) = \frac{1}{2}x^{6} - \frac{1}{2}x^{10} + C" />
                        </p> 
                     

                    *209
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Indefinite integrals</h4>
                      <p>
                        Find all the antiderivatives of the following function. Check your work by differentiation.
                      </p>
                      
                     <MathComponent tex="\int \frac{1}{2y} dy" />

                     <p>
                        Answer:<br/>
                        <MathComponent tex="F(x) = \frac{1}{2}ln|y| + C" />
                        </p> 
                     

                    *210
                </div>

             
                
            </div>
            </div>
           
    );
}