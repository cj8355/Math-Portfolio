import { Link } from "react-router-dom";
import "./8.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 2 Integration by Parts</h1>
        <div className="sectionText">

      <h2>Integration by Parts</h2>
      <p className="textBorder">
       <p>
        Suppose u and v are differentiable functions. Then
       </p>
        <MathComponent tex="\int \hspace{.1cm} u \hspace{.1cm} dv = uv \hspace{.1cm} - \hspace{.1cm} \int \hspace{.1cm} v \hspace{.1cm} du." />
        *318
      </p>


      <h2></h2>
      <p className="textBorder">
      <p>
        Let u and v be differentiable. Then
       </p>
        <MathComponent tex="\int_{a}^{b} u(x)v'(x) \hspace{.1cm} dx = u(x)v(x) \bigg\vert_{a}^{b} \hspace{.1cm} - \hspace{.1cm} \int_{a}^{b} v(x)u'(x) \hspace{.1cm} dx."  />
        *319
      </p>


      <h2>Integral of ln x</h2>
      <p className="textBorder">
       
        <MathComponent tex="\int ln \hspace{.1cm} x \hspace{.1cm} dx = x \hspace{.1cm} ln \hspace{.1cm} x - \hspace{.1cm} x \hspace{.1cm} + \hspace{.1cm} C" />
        *320
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