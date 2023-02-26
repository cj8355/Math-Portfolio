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
      

      <h2>Simpson's Rule</h2>
      <p className="textBorder">
       <p>
        Suppose f is defined and integrable on [a,b] and <MathComponent tex="n \geq 2" /> is an even integer. The
        <b>Simpson's Rule approximation</b> to <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx" /> using n equally
        spaced subintervals on [a,b] is 
        <MathComponent tex="S(n) = (f(x_{0}) + 4f(x_{1}) + 2f(x_{2}) + 4f(x_{3}) + ... + 4f(x_{n-1}) + f(x_{n})) \frac{\Delta x}{3}," />
        where n is an even integer, <MathComponent tex="\Delta x = (b - a)/n, \hspace{.2cm} \mathrm{and} \hspace{.2cm} x_{k} = a + k \Delta x, \hspace{.2cm} \mathrm{for} \hspace{.2cm} k = 0,1,...,n." />
       </p>
       
        *346
      </p>


      <h2>Errors in Numerical Integration</h2>
      <p className="textBorder">
       <p>
        Assume f'' is continuous on the interval [a,b] and k is a real number such that <MathComponent tex="\vert f''(x) \vert \leq k," />
        for all x in [a,b]. The absolute errors in approximating the integral <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx" />
        by the Midpoint Rule and Trapezoid Rule with n subintervals satisfy the inequalities
        <MathComponent tex="E_{M} \leq \frac{k(b-a)}{24} (\Delta x)^{2} \hspace{.2cm} \mathrm{and} \hspace{.2cm} E_{T} \leq \frac{k(b-a)}{12} (\Delta x)^{2}," />
        respectively, where <MathComponent tex="\Delta x = (b-a)/n." />
       </p>
       <p>
        Assume  <MathComponent tex="f^{4}" /> is continuous on the interval [a,b] and K is a real number such that
        <MathComponent tex="\vert f^{(4)} (x) \vert \leq K \mathrm{on \hspace{.2cm} [a,b].}" /> The absolute error in approximating the
        integral  <MathComponent tex="\int_{a}^{b} f(x) \hspace{.2cm} dx" /> by Simpson's Rule with n subintervals satisfies the inequality
        <MathComponent tex="E_{S} \leq \frac{K(b-a)}{180} (\Delta x)^{4}." />
       </p>
        
        *347
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Midpoint Rule approximation</h4>
                      <p>
                        Find the indicated Midpoint Rule approximation to the following integral.
                      </p>
                      <MathComponent tex="\int_{2}^{10} 2x^{2} \hspace{.2cm} dx \hspace{.1cm} \mathrm{using \hspace{.2cm} n=1,2, \hspace{.2cm} and \hspace{.2cm} 4 \hspace{.2cm} subintervals}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="576; 640; 656" />    
                         
                    </p>

                    *348
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Trapezoid Rule approximation</h4>
                      <p>
                        Find the indicated Trapezoid Rule approximation to the following integral.
                      </p>
                      <MathComponent tex="\int_{2}^{10} 2x^{2} \hspace{.2cm} dx \hspace{.1cm} \mathrm{using \hspace{.2cm} n=2,4, \hspace{.2cm} and \hspace{.2cm} 8 \hspace{.2cm} subintervals}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="704; 672; 664" />    
                         
                    </p>

                    *349
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Simpson Rule approximation</h4>
                      <p>
                        Find the indicated Simpson Rule approximation to the following integral.
                      </p>
                      <MathComponent tex="\int_{0}^{\pi} \sqrt{sin \hspace{.2cm} x} \hspace{.2cm} dx \hspace{.1cm} \mathrm{using \hspace{.2cm} n=4 \hspace{.2cm} and \hspace{.2cm} n=6 \hspace{.2cm} subintervals}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="2.28476811; 2.33512377" />    
                         
                    </p>

                    *350
                    </div>
                </div>




            </div>
            </div>
           
    );
}