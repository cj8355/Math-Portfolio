import { Link } from "react-router-dom";
import "./3.7.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch3_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 7 Linear Diophantine Equations</h1>
        <div className="sectionText">

        <h2>Linear Diophantine Equations</h2>
      <p className="textBorder">
       <p>The equation ax + by = c, where a, b, and c are integers, is called a linear diophantine equation in two variables.</p>
        
        *71
      </p>


      <h2>Theorem 3.23</h2>
      <p className="textBorder">
       <p>Let a and b be integers with d = (a, b).</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} equation \hspace{.2cm} ax + by = c \hspace{.2cm} has \hspace{.2cm} no \hspace{.2cm} integral \hspace{.2cm} solutions \hspace{.2cm} if \hspace{.2cm} d \not_{|} \hspace{.1cm}c. }" />
        <p>If d | c, then there are infintely many integral solutions.</p>
        *72
      </p>


      <h2>Theorem 3.24</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a_{1}, a_{2}, ..., a_{n} \hspace{.2cm} are \hspace{.2cm} nonzero \hspace{.2cm} integers, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} equation \hspace{.2cm} a_{1}x_{1} + a_{2}x_{2} + ... + a_{n}x_{n} = c}" />
        <MathComponent tex="\mathrm{has \hspace{.2cm} an \hspace{.2cm} integral \hspace{.2cm} solution \hspace{.2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{.2cm} d = (a_{1}, a_{2}, ..., a_{n}) \hspace{.2cm} divides \hspace{.2cm} c.}" />
        <p>Furthermore, when there is a solution, there are infinitely many solutions.</p>
        *73
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