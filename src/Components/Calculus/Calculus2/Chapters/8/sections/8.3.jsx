import { Link } from "react-router-dom";
import "./8.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 3 Trigonometric Integrals</h1>
        <div className="sectionText">

      <h2>Reduction Formulas</h2>
      <p className="textBorder">
       <p>
        Assume n is a positive integer.
       </p>
        <span className="oneLine"><b>1. </b><MathComponent tex="\int \hspace{.15cm} sin^{n} \hspace{.15cm} x \hspace{.15cm} dx = - \frac{sin^{n-1} \hspace{.15cm} x \hspace{.15cm} cos \hspace{.15cm} x}{n} \hspace{.15cm} + \hspace{.15cm} \frac{n - 1}{n} \int sin^{n-2} \hspace{.15cm} x \hspace{.15cm} dx" /></span>
        <span className="oneLine"><b>2. </b><MathComponent tex="\int \hspace{.15cm} cos^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{cos^{n-1} \hspace{.15cm} x \hspace{.15cm} sin \hspace{.15cm} x}{n} \hspace{.15cm} + \hspace{.15cm} \frac{n - 1}{n} \int cos^{n-2} \hspace{.15cm} x \hspace{.15cm} dx" /></span>
        <span className="oneLine"><b>3. </b><MathComponent tex="\int \hspace{.15cm} tan^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{tan^{n-1} \hspace{.15cm} x}{n - 1} \hspace{.15cm} - \hspace{.15cm} \int tan^{n-2} \hspace{.15cm} x \hspace{.15cm} dx, n \neq 1" /></span>
        <span className="oneLine"><b>4. </b><MathComponent tex="\int \hspace{.15cm} sec^{n} \hspace{.15cm} x \hspace{.15cm} dx = \frac{sec^{n-2} \hspace{.15cm} x \hspace{.15cm} tan \hspace{.15cm} x}{n - 1} \hspace{.15cm} + \hspace{.15cm} \frac{n - 2}{n - 1} \int sec^{n-2} \hspace{.15cm} x \hspace{.15cm} dx, n \neq 1" /></span>
        *325
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />.
        *
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