import { Link } from "react-router-dom";
import "./6.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 4 Volume by Shells</h1>
        <div className="sectionText">

      <h2>Volume by the Shell Method</h2>
      <p className="textBorder">
       <p>
        Let f and g be continuous functions with <MathComponent tex="f(x) \geq g(x)" /> on [a,b]. If R is the region
        bounded by the curves y = f(x) and y = g(x) between the lines x = a and x = b, the volume of the solid
        generated when R is revolved about the y-axis is
       </p>
        <MathComponent tex="V = \int_{a}^{b} 2 \pi x(f(x) - g(x)) dx" />.
        *265
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