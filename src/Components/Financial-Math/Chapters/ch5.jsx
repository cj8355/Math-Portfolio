import { Link } from "react-router-dom";
import "./ch5.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 5 Pricing Contracts via Arbitrage</h1>
        <div className="sectionText">

      
      <h2>Proposition 5.1.1</h2>
      <p className="textBorder">
       <p>
        (The Law of One Price) Consider two investments, the first of which costs the fixed amount
       </p>
        <MathComponent tex="\mathrm{C_{1} \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} second \hspace{.2cm} fixed \hspace{.2cm} amount \hspace{.2cm} C_{2}.}" />
        <p>If the (present value) payoff from the first investment is always identical to that of the second investment,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} either \hspace{.2cm} C_{1} = C_{2} \hspace{.2cm} or \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} arbitrage.}" />
        *27
      </p>


      <h2>Other Examples of Pricing via Arbitrage</h2>
      <p className="textBorder">
       <p>
        The type of option considered above is known as a call option because it gives one the option of calling for the stock at a specified price,
        known as the exercise or strike price. An American style call option allows the buyer to erercise the option at any time up to the expiration time,
        whereas a European style call option can only be exercised at the expiration time. Although it might seem that, because of its additional flexibility,
        the American style option would be worth more, it turns out that it is never optimal to exercise a call option early; thus, the two style option have identical worths
       </p>
       
        *28
      </p>


      <h2>Proposition 5.2.1</h2>
      <p className="textBorder">
       <p>One should never exercise an American style call option before its expiration time t.</p>
       
        *29
      </p>


      <h2>Proposition 5.2.2</h2>
      <p className="textBorder">
       <p>
        Let C be the price of a call option that enables its holder to buy one share of a stock at an exercise price K at time t;
        also, let P be the price of a European put option that enables its holder to sell one share of the stock for the amount K at time t.
        Let S be the price of the stock at time 0. Then, assuming that interest is continuously discounted at a nominal rate r, either
       </p>
        <MathComponent tex="\mathrm{S + P - C = Ke^{-rt}}" />
        <p>or there is an arbitrage opportunity</p>
        *30
      </p>


      <h2>Proposition 5.2.3</h2>
      <p className="textBorder">
       <p>(The Generalized Law of One Price) Consider two investments, the first of which costs the fixed amount</p>
        <MathComponent tex="\mathrm{C_{1} \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} second \hspace{.2cm} the \hspace{.2cm} fixed \hspace{.2cm} amount \hspace{.2cm} C_{2}.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} C_{1} < C_{2}}" />
        <p>
            and the (present value) payoff from the first investment is always at least as large as that from the second investment, then there is an arbitrage.
        </p>
        <p>The arbitrage is clearly obtained by simultaneously buying investment 1 and selling investment 2.</p>
        <p>Before applying the generalized law of one price, we need the following definition.</p>
        <p>Definition: A function f(x) is said to be convex if, for all x and y and</p>
        <MathComponent tex="0 < \lambda < 1," />
        <MathComponent tex="f(\lambda x + (1 - \lambda)y) \leq \lambda f(x) + (1 - \lambda)f(y)." />
        *31
      </p>


      <h2>Proposition 5.2.4</h2>
      <p className="textBorder">
       <p>Let C(K, t) be the cost of a call option on a specified security that has strike price K and expiration time t.</p>
       <p>(a) For fixed expiration time t, C(K, t) is a convex and nonincreasing function of K.</p>
        <MathComponent tex="\mathrm{(b) \hspace{.2cm} s > 0, \hspace{.2cm} C(K,t) - C(K + s,t) \leq se^{-rt}}" />
        *32
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