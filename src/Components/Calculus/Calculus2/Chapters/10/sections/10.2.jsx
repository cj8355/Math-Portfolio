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
      

      <h2>Squeeze Theorem for Sequences</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \{a_{n}\}, \hspace{.2cm} \{b_{n}\}, \hspace{.2cm} and \hspace{.2cm} \{c_{n}\} \hspace{.2cm} be \hspace{.2cm} sequences \hspace{.2cm} with \hspace{.2cm} a_{n} \leq b_{n} \leq c_{n}, \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} integers \hspace{.2cm} n }" />
        <MathComponent tex="\mathrm{\hspace{.2cm} greater \hspace{.2cm} than \hspace{.2cm} some \hspace{.2cm} index \hspace{.2cm} N. If \hspace{.2cm} \lim_{n\to \infty} a_{n} = \lim_{n\to \infty} c_{n} = L, \hspace{.2cm} then \hspace{.2cm} \lim_{n\to \infty} b_{n} = L.}" /> 
        *369
      </p>
      

      <h2>Bounded Monotonic Sequence</h2>
      <p className="textBorder">
       <p>
        A bounded monotonic sequence converges.
       </p>
       
        *370
      </p>
      

      <h2>Growth Rates of Sequences</h2>
      <p className="textBorder">
       <p>The following sequences are ordered according to increasing growth rates as</p>
        <MathComponent tex="n \to \infty; \mathrm{that \hspace{.2cm} is, \hspace{.2cm} if \hspace{.2cm} \{a_{n}\} \hspace{.2cm} appears \hspace{.2cm} before \hspace{.2cm} \{b_{n}\} \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} list, \hspace{.2cm} then \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{\lim_{n\to \infty} \frac{a_{n}}{b_{n}} = 0 \hspace{.2cm} and \hspace{.2cm} \lim_{n\to \infty} \frac{b_{n}}{a_{n}} = \infty:}" />  
        <MathComponent tex="\{ln^{q} \hspace{.2cm} n \} \ll \{n^{p}\} \ll \{n^{p} ln^{r} n \} \ll \{n^{p+s}\} \ll \{b^{n}\} \ll \{n!\} \ll \{n^{p}\}." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} ordering \hspace{.2cm} applies \hspace{.2cm} for \hspace{.2cm} positive \hspace{.2cm} real \hspace{.2cm} numbers \hspace{.2cm} p,q,r,s, \hspace{.2cm} and \hspace{.2cm} b > 1.}" />
        *371
      </p>
      

      <h2>Limits of a Sequence</h2>
      <p className="textBorder">
       <p>
        The sequence  <MathComponent tex="\{a_{n}\}" /> converges to L provided the terms of <MathComponent tex="a_{n}" /> can be made
        arbitrarily close to L by taking n sufficently large. More precisely, <MathComponent tex="\{a_{n}\}" /> has the unique limit L if,
        given any <MathComponent tex="e > 0," /> it is possible to find a positive integer N (depending only on e) such that
       </p>
        <MathComponent tex="\vert a_{n} - L \vert < e \hspace{1cm} \mathnormal{whenever \hspace{.2cm} n > N.}" />
        <p>If the limit of a sequence is L, we say the sequence converges to L, written</p>
        <MathComponent tex="\lim_{n\to \infty} a_{n} = L." />
        <p>A sequence that does not converge is said to diverge.</p>
        *372
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Limits of sequences</h4>
                      <p>
                        Find the limit of the following sequence or determine that the sequence diverges.
                      </p>
                      <MathComponent tex="\bigg\{\frac{n^{3}}{n^{4} + 1} \bigg\}" /> 
                     
                    <p>
                        Answer: <br/>
                            <p>
                              0. The denominator increases faster than the numerator, the sequence will approach zero.
                            </p>
                       
                    </p>

                    *373
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Limits of sequences</h4>
                      <p>
                        Find the limit of the following sequence or determine that the sequence diverges.
                      </p>
                      <MathComponent tex="\bigg\{\frac{3^{n+1} + 3}{3^{n}} \bigg\}" /> 
                     
                    <p>
                        Answer: <br/>
                            <p>
                              3. The numerator appraoches approximately 3(denominator).
                            </p>
                       
                    </p>

                    *374
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Limits of sequences</h4>
                      <p>
                        Find the limit of the following sequence or determine that the sequence diverges.
                      </p>
                      <MathComponent tex="\bigg\{\bigg(1+ \frac{2}{n}\bigg) ^{n} \bigg\}" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="e^{2}" /> 
                    </p>

                    *375
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Limits of sequences</h4>
                      <p>
                        Find the limit of the following sequence or determine that the sequence diverges.
                      </p>
                      <MathComponent tex="\bigg\{\frac{cos \hspace{.2cm} n}{n} \bigg\}" /> 
                     
                    <p>
                        Answer: <br/>
                        <p>0. </p>
                    </p>

                    *376
                    </div>
                </div>



            </div>
            </div>
           
    );
}