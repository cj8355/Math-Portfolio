import { Link } from "react-router-dom";
import "./14.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch14_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Sec 14.1 Vector-Valued Functions</h1>
        <div className="sectionText">

      
      <h2>Vector-Valued Functions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} function \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} form \hspace{.2cm} r(t) = \langle x(t), y(t), z(t) \rangle \hspace{.2cm} may \hspace{.2cm} be \hspace{.2cm} viewed \hspace{.2cm} in \hspace{.2cm} two \hspace{.2cm} ways.}" />
        <ul>
            <li>It is a set of three parametric equations that describe a curve in space.</li>
            <li>It is also a vector-valued function, which means that the three dependent variables (x, y, and z) are
                the components of r, and each component varies with respect to a single independent variable t (that often represents time).
            </li>
        </ul>
        *496
      </p>


      <h2>Limit of a Vector-Valued Function</h2>
      <p className="textBorder">
       <p>A vector-valued function r approaches the limit L as t approaches a, written</p>
        <MathComponent tex="\lim_{t \to a} r(t) = L, \hspace{.2cm} \mathrm{provided} \hspace{.2cm} \lim_{t \to a} \vert r(t) - L \vert = 0." />
        *497
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