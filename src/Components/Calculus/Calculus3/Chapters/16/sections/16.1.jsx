import { Link } from "react-router-dom";
import "./16.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 1 Double Integrals over Rectangular Regions</h1>
        <div className="sectionText">

      
      <h2>Derivative Table</h2>
      <p className="textBorder">
       
        <MathComponent tex="\begin{array} {|r|r|}\hline  & Derivatives & Integrals \\ \hline Single variable: f(x) & f'(x) & \int_{a}^{b} f(x) \hspace{.2cm} dx \\ \hline Several variables: f(x,y) and f(x,y,z) & \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} & \int_{R} \int f(x,y) dA, \hspace{.2cm} \int \int_{D} \int f(x,y,z) \hspace{.2cm} dV \\ \hline  \end{array}" />.
        *603
      </p>


      <h2>Double Integrals</h2>
      <p className="textBorder">
       <p>A function f defined on a rectangular region R in the xy-plane is integrable on R if</p>
        <MathComponent tex="\mathrm{\lim_{\triangle \to 0} \sum_{k=1}^{n} f(x_{k}^{*}, y_{k}^{*}) \triangle A_{k}}" />
        <p>exists for all partitions of R and for all choices of</p>
        <MathComponent tex="(x_{k}^{*}, y_{k}^{*})" />
        <p>within those partitions. The limit is the double integral of f over R, which we write</p>
        <MathComponent tex="\int_{R} \int f(x,y) \hspace{.2cm} dA = \lim_{\triangle \to 0} \sum_{k=1}^{n} f(x_{k}^{*}, y_{k}^{*}) \triangle A_{k}." />
        *604
      </p>


      <h2>(Fubini) Double Integrals over Rectangular Regions</h2>
      <p className="textBorder">
       <p>Let f be continuous on the rectangular region</p>
        <MathComponent tex="\mathrm{R = \{(x,y): a \leq x \leq b, \hspace{.2cm} c \leq y \leq d \}.}" />
        <p>The double integral of f over R may be evaluated by either of two iterated integrals:</p>
        <MathComponent tex="\mathrm{\int_{R} \int f(x,y) \hspace{.2cm} dA = \int_{c}^{d} \int_{a}^{b} f(x,y) \hspace{.2cm} dx \hspace{.2cm} dy = \int_{a}^{b} \int_{c}^{d} f(x,y) \hspace{.2cm} dy \hspace{.2cm} dx.}" />
        *605
      </p>


      <h2>Average Value of a Function over a Plane Region</h2>
      <p className="textBorder">
       <p>The average value of an integrable function f over a region R is</p>
        <MathComponent tex="\mathrm{\bar{f} = \frac{1}{area \hspace{.2cm} of \hspace{.2cm} R} \int_{R} \int f(x,y) \hspace{.2cm} dA.}" />
        *606
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Iterated integrals</h4>
                      <p>
                        Evaluate the following iterated integrals.
                      </p>
                      <MathComponent tex="\mathrm{\int_{0}^{2} \int_{0}^{1} 4xy \hspace{.2cm} dx \hspace{.2cm} dy}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{\int_{0}^{2}  2x^{2}y \vert_{0}^{1} \hspace{.2cm} dy = \int_{0}^{2} 2y \hspace{.2cm} dy = 4}" />    
                         
                    </p>

                    *607
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Iterated integrals</h4>
                      <p>
                        Evaluate the following iterated integrals.
                      </p>
                      <MathComponent tex="\mathrm{\int_{0}^{1} \int_{0}^{1} t^{2} e^{st} \hspace{.2cm} ds \hspace{.2cm} dt}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{= \frac{1}{2}}" />    
                         
                    </p>

                    *608
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Iterated integrals</h4>
                      <p>
                        Evaluate the following iterated integrals.
                      </p>
                      <MathComponent tex="\mathrm{\int_{1}^{2} \int_{1}^{2} \frac{x}{x+y} \hspace{.2cm} dy \hspace{.2cm} dx}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{= \frac{1}{2}}" />    
                         
                    </p>

                    *609
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Double Integrals</h4>
                      <p>
                        Evaluate each double integrand over the region R by converting it to an iterated integral
                      </p>
                      <MathComponent tex="\mathrm{\int_{R} \int (x+2y) \hspace{.2cm} dA; \hspace{.2cm} R = \{(x,y): 0 \leq x \leq 3, 1 \leq y \leq 4 \}}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\int_{1}^{4} \int_{0}^{3} (x+2y) \hspace{.2cm} dx \hspace{.2cm} dy = \frac{117}{2}" />    
                         
                    </p>

                    *610
                    </div>
                </div>



            </div>
            </div>
           
    );
}