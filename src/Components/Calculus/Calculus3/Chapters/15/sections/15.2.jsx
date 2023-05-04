import { Link } from "react-router-dom";
import "./15.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch15_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 2 Limits and Continuity</h1>
        <div className="sectionText">

      
      <h2>Limit of a Function of Two Variables</h2>
      <p className="textBorder">
       <p>
        The function f has the limit L as P(x, y) approaches <MathComponent tex="\mathrm{P_{0} (a,b), \hspace{.2cm} written}" />
       </p>
        <MathComponent tex="\lim_{(x,y) \to (a,b)} f(x,y) = \lim_{P \to P_{0}} f(x,y) = L," />
        <MathComponent tex="\mathrm{if, \hspace{.2cm} given \hspace{.2cm} any \hspace{.2cm} \varepsilon > 0, \hspace{.2cm} there \hspace{.2cm} esists \hspace{.2cm} a \hspace{.2cm} \delta > 0 \hspace{.2cm} such \hspace{.2cm} that}" />
        <MathComponent tex="\vert f(x,y) - L \vert < \epsilon" />
        <p>whenever (x,y) is in the domain of f and</p>
        <MathComponent tex="0 < \vert PP_{0} \vert = \sqrt{(x-a)^{2} + (y-b)^{2}} < \delta ." />
        *538
      </p>


      <h2>Limits of Constant and Linear Functions</h2>
      <p className="textBorder">
       <p>Let a, b, c be real numbers.</p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} Constant \hspace{.2cm} function \hspace{.2cm} f(x,y) = c; \hspace{.2cm} \lim_{(x,y) \to (a,b)} \hspace{.2cm} c = c}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} Linear \hspace{.2cm} function \hspace{.2cm} f(x,y) = x; \hspace{.2cm} \lim_{(x,y) \to (a,b)} \hspace{.2cm} x = a}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} Linear \hspace{.2cm} function \hspace{.2cm} f(x,y) = y; \hspace{.2cm} \lim_{(x,y) \to (a,b)} \hspace{.2cm} y = b}" />
        *539
      </p>


      <h2>Limit Laws for Functions of Two Variables</h2>
      <p className="textBorder">
       <p>Let L and M be real numbers and suppose</p>
        <MathComponent tex="\lim_{(x,y) \to (a,b)} f(x,y) = L \mathrm{\hspace{.2cm} and}" />
        <MathComponent tex="\mathrm{\lim_{(x,y) \to (a,b)} g(x,y) = M. \hspace{.2cm} Assume \hspace{.2cm} c \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} constant, \hspace{.2cm} and \hspace{.2cm} n > 0 \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer.}" />
        <MathComponent tex="1. \mathrm{\hspace{.2cm} Sum \hspace{.2cm} \lim_{(x,y) \to (a,b)} (f(x,y) + g(x,y)) = L + M}" />
        <MathComponent tex="2. \mathrm{\hspace{.2cm} Difference \hspace{.2cm} \lim_{(x,y) \to (a,b)} (f(x,y) - g(x,y)) = L - M}" />
        <MathComponent tex="3. \mathrm{\hspace{.2cm} Constant \hspace{.2cm} Multiple \hspace{.2cm} \lim_{(x,y) \to (a,b)} cf(x,y) = cL}" />
        <MathComponent tex="4. \mathrm{\hspace{.2cm} Product \hspace{.2cm} \lim_{(x,y) \to (a,b)} f(x,y) g(x,y) = L M}" />
        <MathComponent tex="5. \mathrm{\hspace{.2cm} Quotient \hspace{.2cm} \lim_{(x,y) \to (a,b)} \frac{f(x,y)}{g(x,y)} = \frac{L}{M}, \hspace{.2cm} provided \hspace{.2cm} M \neq 0}" />
        <MathComponent tex="6. \mathrm{\hspace{.2cm} Power \hspace{.2cm} \lim_{(x,y) \to (a,b)} (f(x,y))^{n} = L^{n}}" />
        <MathComponent tex="7. \mathrm{\hspace{.2cm} Root \hspace{.2cm} \lim_{(x,y) \to (a,b)} (f(x,y))^{1/n} = L^{1/n}, \hspace{.2cm} where \hspace{.2cm} we \hspace{.2cm} assume \hspace{.2cm} L > 0 \hspace{.2cm} if \hspace{.2cm} n \hspace{.2cm} is \hspace{.2cm} even.}" />

        *540
      </p>


      <h2>Interior and Boundary Points</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{Let \hspace{.2cm} R \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} region \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2}.}" />
       <p>
        An interior point P of R lies entirely within R, which means it is possible to find a disk centered at P that
        contains only points of R. A boundary point Q of R lies on the edge of R in the sense that every
        disk centered at Q contains at least one point in R and at least one point not in R.
       </p>
        
        *541
      </p>


      <h2>Open and Closed Sets</h2>
      <p className="textBorder">
       <p>
        A region is open if it consists entirely of interior points. A region is closed if it contains all its boundary points.
       </p>
        
        *542
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