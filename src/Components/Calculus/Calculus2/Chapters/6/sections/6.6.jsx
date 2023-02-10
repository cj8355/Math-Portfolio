import { Link } from "react-router-dom";
import "./6.6.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 6 Surface Area</h1>
        <div className="sectionText">

      <h2>Area of a Surface of Revolution</h2>
      <p className="textBorder">
       <p>
        Let f be a nonegative function with a continuous first derivative on the interval [a,b]. The area of the surface
        generated when the graph of f on the interval [a,b] is revolved about the x-axis is
       </p>
        <MathComponent tex="S = \int_{a}^{b} 2 \pi f(x) \sqrt{1 + f'(x)^{2}} dx" />.
        *275
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    
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