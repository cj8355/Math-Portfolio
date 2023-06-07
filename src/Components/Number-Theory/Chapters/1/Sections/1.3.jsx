import { Link } from "react-router-dom";
import "./1.3.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch1_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec. 3 Mathematical Induction</h1>
        <div className="sectionText">

      
      <h2>The Principle of Mathematical Induction</h2>
      <p className="textBorder">
       <p>
        A set of positive integers that contains the integer 1, and that has the property that, if it contains the integer k, then
        it also contains k + 1, must be the set of all positive integers
       </p>
        
        *12
      </p>


      <h2>The Second Principle of Mathematical Induction</h2>
      <p className="textBorder">
      <p>
        A set of positive integers that contains the integer 1, and that has the property that, for every positive
        integer n, if it contains all the positive integers 1, 2, ..., n, then it also contains the
        integer n + 1, must be the set of all positive integers.
       </p>
        
        *13
      </p>


      <h2>Recursive Definitions</h2>
      <p className="textBorder">
       <p>
        We say that the function f is defined recursively if the value of f at 1 is specified and if for each positive
        integer n a rule is provided for determining f(n + 1) from f(n).
       </p>
        
        *14
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