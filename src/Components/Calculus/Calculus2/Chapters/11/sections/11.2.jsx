import { Link } from "react-router-dom";
import "./11.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch11_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 11 Sec. 2 Properties of Power Series</h1>
        <div className="sectionText">

      <h2>Power Series</h2>
      <p className="textBorder">
       <p>A <b>power series</b> has the general form</p>
        <MathComponent tex="\sum_{k=0}^{\infty} c_{k} (x-a)^{k}," />
        <MathComponent tex="\mathrm{where \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} c_{k} \hspace{.2cm} are \hspace{.2cm} real \hspace{.2cm} numbers, \hspace{.2cm} and \hspace{.2cm} x \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} variable.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} c_{k}'s}" />
        <p>
            are the coefficients of the power series, and a is the center of the power series. The set of values of x for which
            the series converges is its interval of convergence. The radius of convergence of the power series, denoted R, is the
            distance from the center of the series to the boundary of the interval of convergence.
        </p>
        *407
      </p>


      <h2>Convergence of Power Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} power \hspace{.2cm} series \hspace{.2cm} \sum_{k=0}^{\infty} c_{k} (x-a)^{k} \hspace{.2cm} centered \hspace{.2cm} \hspace{.2cm} at \hspace{.2cm} a \hspace{.2cm} converges \hspace{.2cm} in \hspace{.2cm} one \hspace{.2cm} of \hspace{.2cm} three \hspace{.2cm} ways:}" />
        <p>1. The series converges absolutely for all x. It follows that the series converges for all x, in which case the interval of convergence is</p>
        <MathComponent tex="(- \infty, \infty) \hspace{.2cm} \mathrm{and \hspace{.2cm} the \hspace{.2cm} radius \hspace{.2cm} of \hspace{.2cm} convergence \hspace{.2cm} is \hspace{.2cm} R = \infty}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} There \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} real \hspace{.2cm} number \hspace{.2cm} R > 0}" />
        <p>such that the series converges absolutely (and therefore converges) for</p>
        <MathComponent tex="\vert x - a \vert < R \hspace{.2cm} \mathrm{and \hspace{.2cm}diverges \hspace{.2cm} for \hspace{.2cm} \vert x-a \vert > R,}" />
        <p>in which case the radius of convergence is R.</p>
        <p>3. The series converges only at a, in which case the radius of convergence is R = 0.</p>
        *408
      </p>


      <h2>Combining Power Series</h2>
      <p className="textBorder">
       <p className="">Suppose the power series <MathComponent tex="\sum c_{k} x^{k} \hspace{.2cm} \mathrm{and} \hspace{.2cm} \sum d_{k} x^{k}" /> converges to f(x) and g(x), respectively, on an interval I.</p>
        <MathComponent tex="1. \hspace{.2cm} \mathrm{Sum \hspace{.2cm} and \hspace{.2cm} difference: \hspace{.2cm} The \hspace{.2cm} power \hspace{.2cm} series \hspace{.2cm} \sum (c_{k} \pm d_{k})x^{k} \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} f(x) \pm g(x) \hspace{.2cm} on \hspace{.2cm} I.}" />
        <p>2. Multiplication by a power: Suppose m is an integer such that</p>
        <MathComponent tex="k + m \geq 0, \mathrm{for \hspace{.2cm} all \hspace{.2cm} terms \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} power \hspace{.2cm} series \hspace{.2cm} x^{m} \sum c_{k} x^{k} = \sum c_{k} x^{k+m}}" />
        <MathComponent tex="\mathrm{This \hspace{.2cm} series \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} x^{m} f(x), \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} x \neq 0 \hspace{.2cm} in \hspace{.2cm} I.}" />
        <MathComponent tex="\mathrm{When \hspace{.2cm} x=0, \hspace{.2cm} the \hspace{.2cm} series \hspace{.2cm} converges \hspace{.2cm} to \hspace{.2cm} \lim_{x \to 0} x^{m} f(x).}" />
        <MathComponent tex="3. \hspace{.2cm} \mathrm{Composition: \hspace{.2cm} If \hspace{.2cm} h(x) = b x^{m},}" />
        <p>where m is a positive integer and b is a nonzero real number, the power series</p>
        <MathComponent tex="\sum c_{k} (h(x))^{k}" />
        <p>converges to the composite function f(h(x)), for all x such that h(x) is in I.</p>
        *409
      </p>
      

      <h2>Differentiating and Integrating Power Series</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Suppose \hspace{.2cm} the \hspace{.2cm} power \hspace{.2cm} series \hspace{.2cm} \sum c_{k}(x-a)^{k} \hspace{.2cm} converges \hspace{.2cm} for \hspace{.2cm} \vert x-a \vert < R }" />
        <p>and defines a function on that interval.</p>
        <p>
            1. Then f is differentiable (which implies continuous) for <MathComponent tex="\vert x - a \vert < R," /> and f'
            is found by differentiating the power series for f term by term; that is,
        </p>
        <MathComponent tex="f'(x) = \sum k c_{k} (x-a)^{k-1}," />
        <MathComponent tex="\mathrm{for} \hspace{.2cm} \vert x-a \vert < R." />
        <p>
            2. The indefinite integral of f is found by integrating the power series for f term by term; that is,
        </p>
        <MathComponent tex="\int f(x) \hspace{.2cm} dx = \sum c_{k} \frac{(x-a)^{k+1}}{k+1} + C," />
        <MathComponent tex="\mathrm{for \hspace{.2cm} \vert x -a \vert < R, \hspace{.2cm} where \hspace{.2cm} C \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} arbitrary \hspace{.2cm} constant.}" /> 
        *410
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