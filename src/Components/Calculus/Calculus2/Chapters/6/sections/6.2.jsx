import { Link } from "react-router-dom";
import "./6.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 2 Regions Between Curves</h1>
        <div className="sectionText">

      <h2>Area of a Region Between Two Curves</h2>
      <p className="textBorder">
        Suppose f and g are continuous functions with <MathComponent tex="f(x) \geq g(x)" /> on the interval [a,b].
        The area of the region bounded by the graphs of f and g on [a,b] is
        <MathComponent tex="A = \int_{a}^{b} (f(x) - g(x)) dx" />.
        *252
      </p>


      <h2>Area of a Region Between Two Curves with Respect to y</h2>
      <p className="textBorder">
        Suppose f and g are continuous functions with <MathComponent tex="f(y) \geq g(y)" /> on the interval [c,d].
        The area of the region bounded by the graphs x = f(y) and x = g(y) on [c,d] is
        <MathComponent tex="A = \int_{c}^{d} (f(y) - g(y)) dy" />.
        *253
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