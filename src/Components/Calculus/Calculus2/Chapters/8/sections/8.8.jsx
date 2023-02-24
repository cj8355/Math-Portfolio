import { Link } from "react-router-dom";
import "./8.8.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 8 Numerical Integration</h1>
        <div className="sectionText">

      <h2>Absolute and Relative Error</h2>
      

      <p className="textBorder">
      <p>
        Suppose c is a computed numerical solution to a problem having an exact solution x. There are two common measures of the 
        error in c as an approximation to x:
        <MathComponent tex="\mathrm{absolute \hspace{.1cm} error} = \vert c - x \vert" />
        and
        <MathComponent tex="\mathrm{relative \hspace{.1cm} error} = \frac{\vert c - x \vert}{\vert x \vert} \hspace{1cm} (\mathrm{if} \hspace{.1cm} x \neq 0)" />
      </p>
        
        *343
      </p>


      <h2>Midpoint Rule</h2>
      <p className="textBorder">
       <p>
        Suppose f is defined and integrable on [a,b]. The <b>Midpoint Rule approximation</b> to <MathComponent tex="\int_{a}^{b} f(x) \hspace{.1cm} dx" />
        using n equally spaced subintervals on [a,b] is <MathComponent tex="M(n) = f(m_{1}) \Delta x + f(m_{2}) \Delta x + ... + f(m_{n}) \Delta x" />
        <MathComponent tex="= \sum_{k=1}^{n} f \bigg( \frac{x_{k-1}+x_{k}}{2} \bigg) \Delta x," /> where 
        <MathComponent tex="\Delta x = (b-a)/n,x_{0} = a, x_{k} = a + k \Delta x, \hspace{.1cm} \mathrm{and} \hspace{.1cm} m_{k} = (x_{k-1} + x_{k})/2" />
        is the midpoint of <MathComponent tex="[x_{k-1}, x_{k}], \hspace{.1cm} \mathrm{for} \hspace{.1cm} k = 1,...,n." />
       </p>
       
        *344
      </p>


      <h2>Trapezoid Rule</h2>
      <p className="textBorder">
       <p>
        Suppose f is defined and integrable on [a,b]. The <b>Trapezoid Rule approximation</b> to <MathComponent tex="\int_{a}^{b} f(x) \hspace{.1cm} dx" />
        using n equally spaced subintervals on [a,b] is <MathComponent tex="T(n) = \bigg( \frac{1}{2} f(x_{0}) + \sum_{k=1}^{n-1} f(x_{k}) + \frac{1}{2}f(x_{n}) \bigg) \Delta x," />
        where  <MathComponent tex="\Delta x = (b-a)/n \hspace{.1cm} \mathrm{and} \hspace{.1cm} x_{k} = a + k \Delta x, \hspace{.1cm} \mathrm{for} \hspace{.1cm} k = 0,1,...,n." />
       </p>
        
        *345
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