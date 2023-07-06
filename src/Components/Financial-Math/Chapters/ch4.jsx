import { Link } from "react-router-dom";
import "./ch4.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. Interest Rates and Present Value Analysis</h1>
        <div className="sectionText">

      
      <h2>Interest Rates</h2>
      <p className="textBorder">
       <p>
        If you borrow the amount P(called the principal), which must be repaid after a time T along with simple interest at rate r per time T,
        then the amount to be repaid at time T is
       </p>
       <p>P + rP = P(1 + r).</p>
        
        *21
      </p>


      <h2>Effective Interest Rate</h2>
      <p className="textBorder">
       <p>
        If the interest rate r is compunded then the amount of interest actually paid is greater than if we were paying simple interest
        at rate r. The reason, of course, is that in compounding we are being charged interest on the interest that has already been computed
        in previous compoundings. In these cases, we call r the nominal interest rate, and we define the effective interest rate by
       </p>
        <MathComponent tex="\mathrm{r_{eff} = \frac{amount \hspace{.2cm} repaid \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} end \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} year - P}{P}.}" />
        *22
      </p>


      <h2>Continuous Compounding</h2>
      <p className="textBorder">
       <p>If the amount P is borrowed for t years at a nominal interest rate of r per year compunded continuously, then the amount owed at time t is</p>
        <MathComponent tex="\mathrm{Pe^{rt}}" />
        *23
      </p>


      <h2>Present Value Analysis</h2>
      <p className="textBorder">
       <p>Suppose that one can borrow and loan money at a nominal rate r per period that is compounded periodically. Under these conditions, what is the present worth of a payment of v dollars that will be made at the end of period i?</p>
        <MathComponent tex="\mathrm{Since \hspace{.2cm} a \hspace{.2cm} bank \hspace{.2cm} loan \hspace{.2cm} of \hspace{.2cm} v(1+r)^{-i}}" />
        <p>would require a payoff of v at period i, it follows that the present value of a payoff of v to be made at time period i is</p>
        <MathComponent tex="\mathrm{v(1+r)^{-i}}" />
        *24
      </p>


      <h2>Proposition 4.2.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} B_{n} \geq C_{n} \hspace{.2cm} and \hspace{.2cm} if}" />
        <MathComponent tex="\mathrm{\sum_{i=1}^{k} B_{i} \geq \sum_{i=1}^{k} C_{i}}" />
        <p>for each k = 1, ..., n, then</p>
        <MathComponent tex="\mathrm{\sum_{i=1}^{n} b_{i} (1+r)^{-i} \geq \sum_{i=1}^{n} c_{i} (1+r)^{-i}}" />
        <MathComponent tex="\mathrm{for \hspace{.2cm} every \hspace{.2cm} r > 0.}" />

        *25
      </p>


      <h2>Rate of Return</h2>
      <p className="textBorder">
       <p>
        Consider an investment that, for an initial payment of a(a greater than 0), returns the amount b after one period. The rate of return
        on this investment is defined to be the interest rate r that makes the present value of the return equal to the initial payment.
        That is the rate of return is that value r such that
       </p>
        <MathComponent tex="\mathrm{\frac{b}{1+r} = a \hspace{.2cm} or \hspace{.2cm} r = \frac{b}{a} - 1.}" />
        *26
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