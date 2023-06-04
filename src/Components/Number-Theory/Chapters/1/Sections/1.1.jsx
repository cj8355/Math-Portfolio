import { Link } from "react-router-dom";
import "./1.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch1_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec. 1 Numbers and Sequences</h1>
        <div className="sectionText">

      
      <h2>The Well-Ordering Property</h2>
      <p className="textBorder">
       
        <p>Every nonempty set of positive integers has a least element</p>
        *1
      </p>


      <h2>Rational and Irrational Numbers</h2>
      <p className="textBorder">
       <p>The real number r is rational if there are integers p and q, with</p>
        <MathComponent tex="\mathrm{q \neq 0, \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} r = p/q.}" />
        <p>If r is not rational, it is said to be irrational.</p>
        *2
      </p>


      <h2>The Greatest Integer Function</h2>
      <p className="textBorder">
       <p>
        The greatest integer in a real number x, denoted by [x], is the largest integer less than or equal
        to x. That is, [x] is the integer satisfying
       </p>
        <MathComponent tex="[x] \leq x < [x]+1" />
        *3
      </p>


      <h2>The Pigeonhole Principle</h2>
      <p className="textBorder">
       <p>
        If k + 1 or more objects are placed into k boxes, then at least one box contains
        two or more of the objects.
       </p>
        
        *4
      </p>


      <h2>Dirichlet's Approximation Theorem</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{If \hspace{.2cm} \alpha}" />
       <p>
        is a real number and n is a positive integer, then there exist integers a and b with
       </p>
        <MathComponent tex="\mathrm{1 \leq a \leq n \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} \vert a \alpha - b \vert < 1/n.}" />
        *5
      </p>


      <h2>Geometric Sequences</h2>
      <p className="textBorder">
       <p>
        A geometric progression is a sequence of the form
       </p>
        <MathComponent tex="\mathrm{a, \hspace{.2cm} ar, \hspace{.2cm} ar^{2}, \hspace{.2cm} ar^{3}, ..., \hspace{.2cm} ar^{k}, ...,}" />
        <p>where a, the initial term, and r, the common ratio, are real numbers.</p>
        *6
      </p>


      <h2>Countable and Uncountable Sets</h2>
      <p className="textBorder">
       <p>
        A set is countable if it is finite or it is infinite and there exists a one-to-one correspondence
        between the set of positive integers and the set. A set that is not countable is called uncountable.
       </p>
        
        *7
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