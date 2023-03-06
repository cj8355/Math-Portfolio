import { Link } from "react-router-dom";
import "./10.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 3 Infinite Series</h1>
        <div className="sectionText">

      <h2>Geometric Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathnormal{Let \hspace{.2cm} a \neq 0 \hspace{.2cm} and \hspace{.2cm} r \hspace{.2cm} be \hspace{.2cm} real \hspace{.2cm} numbers.}" />
        <MathComponent tex="\mathnormal{If \hspace{.2cm} \vert r \vert < 1, \hspace{.2cm} then \hspace{.2cm} \sum_{k=0}^{\infty} ar^{k} = \frac{a}{1-r}.}" />
        <MathComponent tex="\mathnormal{If \hspace{.2cm} \vert r \vert \geq 1, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} series \hspace{.2cm} diverges.}" />
        *373
      </p>


      <h2>Properties of Convergent Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathnormal{1. \hspace{.4cm} Suppose \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} A \hspace{.2cm} and \hspace{.2cm} c \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} real \hspace{.2cm} number. \hspace{.2cm} The \hspace{.2cm} series \hspace{.2cm} \sum ca_{k} \hspace{.2cm} converges, \hspace{.2cm} and \hspace{.2cm} \sum ca_{k} = c \sum a_{k} = cA.}" />
        <MathComponent tex="\mathnormal{2. \hspace{.4cm} Suppose \hspace{.2cm} \sum a_{k} \hspace{.2cm} diverges. \hspace{.2cm} Then \hspace{.2cm} \sum ca_{k} \hspace{.2cm} also \hspace{.2cm} diverges, \hspace{.2cm} for \hspace{.2cm} any \hspace{.2cm} real \hspace{.2cm} number \hspace{.2cm} c \neq 0.}" />
        <MathComponent tex="\mathnormal{3. \hspace{.4cm} Suppose \hspace{.2cm} \sum a_{k} \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} A \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} B.}" />
        <MathComponent tex="\mathnormal{The \hspace{.2cm} series \hspace{.2cm} \sum(a_{k} \pm b_{k}) \hspace{.2cm} converges, \hspace{.2cm} and \hspace{.2cm} \sum(a_{k} \pm b_{k}) = \sum a_{k} \pm \sum b_{k} = A \pm B.}" /> 
        <MathComponent tex="\mathnormal{4. \hspace{.4cm} Suppose \hspace{.2cm} \sum a_{k} \hspace{.2cm} diverges \hspace{.2cm} and \hspace{.2cm} \sum b_{k} \hspace{.2cm} converges. \hspace{.2cm} Then \sum (a_{k} \pm b_{k}) \hspace{.2cm} diverges.}" />
        <MathComponent tex="\mathnormal{5. \hspace{.4cm} If \hspace{.2cm} M \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer, \hspace{.2cm} then \hspace{.2cm} \sum_{k=1}^{\infty} a_{k} \hspace{.2cm} and \hspace{.2cm} \sum_{k=M}^{\infty} a_{k}}" />
        <p>
            either both converge or both diverge. In general, whether a series converges does not depend on a finite number of terms added to
            or removed from the series. However, the value of a convergent series does change if nonzero terms are added or removed.
        </p>
        *374
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