import { Link } from "react-router-dom";
import "./11.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch11_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 11 Sec. 3 Taylor Series</h1>
        <div className="sectionText">

      <h2>Taylor/Maclaurin Series for a Function</h2>
      <p className="textBorder">
       <p>
        Suppose the function f has derivatives of all orders on an interval centered at the point a. The <b>Taylor series for f centered at a </b>is
       </p>
        <MathComponent tex="f(a)+ f'(a) (x-a) + \frac{f''(a)}{2!} (x-a)^{2} + \frac{f^{(3)}(a)}{3!}(x-a)^{3} + ..." />
        <MathComponent tex="= \sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!} (x-a)^{k}." />
        <p>A Taylor series centered at 0 is called a <b>Maclaurin series.</b></p>
        *411
      </p>


      <h2>Binomial Coefficients</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{For \hspace{.2cm} real \hspace{.2cm} numbers \hspace{.2cm} p \hspace{.2cm} and \hspace{.2cm} integers \hspace{.2cm} k \geq 1,}" />
        <MathComponent tex="\bigg( \begin{array}{cc} p \\ k \end{array} \bigg) = \frac{p(p-1)(p-2)...(p-k+1)}{k!}, \hspace{1cm} \bigg( \begin{array}{cc} p \\ 0 \end{array} \bigg) = 1" />
        *412
      </p>


      <h2>Binomial Series</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{For \hspace{.2cm} real \hspace{.2cm} numbers \hspace{.2cm} p \neq 0, \hspace{.2cm} the \hspace{.2cm} Taylor \hspace{.2cm} series \hspace{.2cm} for \hspace{.2cm} f(x)=(1+x)^{p}}" />
      <p>centered at 0 is the <b>binomial series</b></p>
        <MathComponent tex="\sum_{k=0}^{\infty} \bigg( \begin{array}{cc} p \\ k \end{array} \bigg) x^{k} = 1 + \sum_{k=1}^{\infty} \frac{p(p-1)(p-2)...(p-k+1)}{k!}x^{k}" />
        <MathComponent tex="=1+px+ \frac{p(p-1)}{2!}x^{2} + \frac{p(p-1)(p-2)}{3!}x^{3} + ..." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} series \hspace{.2cm} converges \hspace{.2cm} for \hspace{.2cm} \vert x \vert < 1}" />
        <p>
            (and possibly at the endpoints, depending on p). If p is a nonnegative integer, the series terminates and results
            in a polynomial of degree p.
        </p>
        *413
      </p>
      

      <h2>Convergence of Taylor Series</h2>
      <p className="textBorder">
       <p>
        Let f have derivatives of all orders on an open interval I containing a. The Taylor series for f centered at a converges
        to f, for all x in I, if and only if
       </p>
        <MathComponent tex="\lim_{n \to \infty} R_{n}(x) = 0, \hspace{.2cm} \mathrm{for \hspace{.2cm} all \hspace{.2cm} x \hspace{.2cm} in \hspace{.2cm} I, \hspace{.2cm} where}" />
        <MathComponent tex="R_{n}(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}" /> 
        *414
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