import { Link } from "react-router-dom";
import "./10.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 2 Sequences</h1>
        <div className="sectionText">

      <h2>Limits of sequences from Limits of Functions</h2>
      <p className="textBorder">
       <p>
        Suppose f is a function such that <MathComponent tex="f(n) = a_{n}," /> for positive integers n. If 
        <MathComponent tex="\lim_{x\to \infty} f(x) = L," /> then the limit of the sequence <MathComponent tex="\{a_{n}\}" />
        is also L, where L, may be <MathComponent tex="\pm \infty." />
       </p>
        <MathComponent tex="" />
        *365
      </p>


      <h2>Limit Laws for Sequences</h2>
      <p className="textBorder">
       <p>
        Assume the sequences <MathComponent tex="\{a_{n}\} \hspace{.2cm} \mathrm{and} \hspace{.2cm} \{b_{n}\}" /> have limits
        A and B, respectively. Then
       </p>
        <div>
            <p className="oneLine"><b>1. </b><MathComponent tex="\lim_{n\to \infty} (a_{n} \pm b_{n}) = A \pm B" /></p>
            <p className="oneLine"><b>2. </b><MathComponent tex="\lim_{n\to \infty} ca_{n} = cA, \hspace{.2cm} \mathrm{where \hspace{.2cm} c \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} real \hspace{.2cm} number}" /></p>
            <p className="oneLine"><b>3. </b><MathComponent tex="\lim_{n\to \infty} a_{n}b_{n} = AB" /></p>
            <p className="oneLine"><b>4. </b><MathComponent tex="\lim_{n\to \infty} \frac{a_{n}}{b_{n}} = \frac{A}{B}, \hspace{.2cm} \mathrm{provided \hspace{.2cm} B \neq 0.}" /></p>
        </div>
        *366
      </p>


      <h2>Terminology for Sequences</h2>
      <p className="textBorder">
       <ul>
        <li><MathComponent tex="\{a_{n}\} \hspace{.2cm} \mathrm{is \hspace{.2cm} increasing \hspace{.2cm} if \hspace{.2cm} a_{n+1} > a_{n}; \hspace{.2cm} for \hspace{.2cm} example, \hspace{.2cm} \{0,1,2,3,...\}.}" /></li>
        <li><MathComponent tex="\{a_{n}\} \hspace{.2cm} \mathrm{is \hspace{.2cm} nondecreasing \hspace{.2cm} if \hspace{.2cm} a_{n+1} \geq a_{n}; \hspace{.2cm} for \hspace{.2cm} example, \hspace{.2cm} \{1,1,2,2,3,3,...\}.}" /></li>
        <li><MathComponent tex="\{a_{n}\} \hspace{.2cm} \mathrm{is \hspace{.2cm} decreasing \hspace{.2cm} if \hspace{.2cm} a_{n+1} < a_{n}; \hspace{.2cm} for \hspace{.2cm} example, \hspace{.2cm} \{2,1,0,-1,...\}.}" /></li>
        <li><MathComponent tex="\{a_{n}\} \hspace{.2cm} \mathrm{is \hspace{.2cm} nonincreasing \hspace{.2cm} if \hspace{.2cm} a_{n+1} \leq a_{n}; \hspace{.2cm} for \hspace{.2cm} example, \hspace{.2cm} \{0,-1,-1,-2,-2,...\}.}" /></li>
        <li className="oneLine"><MathComponent tex="\{a_{n}\}" /> is monotonic if it is either nonincreasing or nondecreasing (it moves in one direction).</li>
        <li className="oneLine"><MathComponent tex="\{a_{n}\}" /> is bounded above if there is a number M such that <MathComponent tex="a_{n} \leq M," /> for all relevant values of n, and <MathComponent tex="\{a_{n}\}" /> is bounded below if there is a number N such that <MathComponent tex="a_{n} \geq N," /> for all relevant values of n.</li>
        <li className="oneLine">If <MathComponent tex="\{a_{n}\}" /> is bounded above and bounded below, then we say that <MathComponent tex="\{a_{n}\}" /> is a bounded sequence.</li>
       </ul>
        
        *367
      </p>
      

      <h2>Geometric Sequences</h2>
      <p className="textBorder">
       <p>
        Let r be a real number. Then
       </p>
        <MathComponent tex="\lim_{n\to \infty} r^{n} = \left\{ \begin{array}{c} 0 & \quad \hspace{.1cm} \mathrm{if} \hspace{.1cm} \vert r \vert < 1 \\ 1 & \quad \hspace{.1cm} \mathrm{if} \hspace{.1cm} r = 1 \\ \mathrm{does \hspace{.2cm} not \hspace{.2cm} exist} & \quad \hspace{.2cm} \mathrm{if} \hspace{.2cm} r \leq -1 \hspace{.2cm} \mathrm{or} \hspace{.2cm} r > 1.\end{array} \right. " />
        <MathComponent tex="\mathrm{If \hspace{.15cm} r > 0, then \hspace{.15cm} \{r^{n}\} \hspace{.15cm} is \hspace{.15cm} a \hspace{.15cm} monotonic \hspace{.15cm} sequence. \hspace{.15cm} If \hspace{.15cm} r < 0, \hspace{.15cm} then \hspace{.15cm} \{r^{n}\} \hspace{.15cm} oscillates.}" />
        *368
      </p>
      

      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="" />
        *
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