import { Link } from "react-router-dom";
import "./ch6.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 The Arbitrage Theorem</h1>
        <div className="sectionText">

      
      <h2>Theorem 6.1.1 (The Arbitrage Theorem)</h2>
      <p className="textBorder">
       <p>Exactly one of the following is true: Either</p>
        <MathComponent tex="\mathrm{(a) \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} probability \hspace{.2cm} vector \hspace{.2cm} p = (p_{1}, p_{2},...,p_{m}) \hspace{.2cm} for \hspace{.2cm} which}" />
        <MathComponent tex="\mathrm{\sum_{j=1}^{m} p_{j} r_{i} (j) = 0 \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} i = 1,...,n,}" />
        <p>or else</p>
        <MathComponent tex="\mathrm{(b) \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} betting \hspace{.2cm} strategy \hspace{.2cm} x = (x_{1}, x_{2},...,x_{n}) \hspace{.2cm} for \hspace{.2cm} which}" />
        <MathComponent tex="\mathrm{\sum_{i=1}^{n} x_{i} r_{i} (j) > 0 \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} j = 1,...,m.}" />
        *33
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       
        <p>
            Probabilities on the set of outcomes of the experiment that result in all bets being fair are called risk-neutral probabilities.
        </p>
        *34
      </p>


      <h2>The Multiperiod Binomial Model</h2>
      <p className="textBorder">
       <p>
        Let us now consider a stock option scenario in which there are n periods and where the nominal interest rate is r per period.
        Let S(0) be the initial price of the stock, and for i = 1, ..., n let S(i) be its price at i time periods later. Suppose that S(i) is either uS(i - 1)
        or dS(i - 1), where
       </p>
        <MathComponent tex="\mathrm{d < 1+r < u.}" />
        <p>
            That is, going from one time period to the next, the price either goes up by the factor u or down by the factor d.
            Furthermore, suppose that at time 0 an option may be purchased that enables one to buy the stock after n periods have passed for the amount K.
            In addition, the sotck may be purchased and sold anytime within these n time periods.
        </p>
        <MathComponent tex="\mathrm{Let \hspace{.2cm} X_{i}}" />
        <p>equal 1 if the stock's price goes up by the factor u from period i - 1 to i, and let it equal 0 if that price goes down by the factor d. That is,</p>
        <MathComponent tex="\mathrm{X_{i} = 1 \hspace{.2cm}  if \hspace{.2cm} S(i) = uS(i-1), \hspace{.2cm} or \hspace{.2cm} 0 \hspace{.2cm} if \hspace{.2cm} S(i) = dS(i-1).}" />
        <p>The outcome of the experiment can now be regarded as the value of the vector</p>
        <MathComponent tex="(x_{1}, x_{2},...,x_{n})." />
        <p>
            It follows from the arbitrage theorem that, in order for there not to be an arbitrage opportunity, there must be
            probabilities on these outcomes that make all bets fair. That is, there must be a set of probabilities
        </p>
        <MathComponent tex="\mathrm{P \{X_{1} = x_{1},..., X_{n} = x_{n} \}, \hspace{.2cm} x_{i} = 0, 1, i = 1,...,n,}" />
        <p>that make all bets fair.</p>
        *35
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