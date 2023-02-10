import { Link } from "react-router-dom";
import "./6.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 5 Length of Curves</h1>
        <div className="sectionText">

      <h2>Arc Length for y = f(x)</h2>
      <p className="textBorder">
       <p>
        Let f have a continuous first derivative on the interval [a,b]. The length of the curve from (a, f(a)) to
        (b, f(b)) is
       </p>
        <MathComponent tex="L = \int_{a}^{b} \sqrt{1+ f'(x)^{2}} dx" />.
        *269
      </p>


      <h2>Arc Length for x = g(y)</h2>
      <p className="textBorder">
       <p>
        Let x = g(y) have a continuous first derivative on the interval [c,d]. The length of the curve from (g(c), c)
        to (g(d), d) is
       </p>
        <MathComponent tex="L = \int_{c}^{d} \sqrt{1 + g'(y)^{2}} dy" />.
        *270
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