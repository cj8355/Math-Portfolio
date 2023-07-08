import { Link } from "react-router-dom";
import "./ch7.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 The Black-Scholes Formula</h1>
        <div className="sectionText">

      
      <h2>Black-Scholes Formula</h2>
      <p className="textBorder">
       <p>
        In this chapter we derive the celebrated Black-Scholes formula, which gives - under the assumption that the price of a security
        evolves according to a geometric Brownian motion - the unique no-arbitrage cost of a call option on this security.
       </p>
        
        *36
      </p>


      <h2>The Black-Scholes Formula</h2>
      <p className="textBorder">
       <p>
        Consider a call option having strike price K and expiration time t. That is, the option allows one to purchase a single unit of an underlying security
        at time t for the price K. Suppose further that the nominal interest rate is r, compounded continuously, and also that the price of the security follows a geometric Brownian motion
        with 
       </p>
        <MathComponent tex="\mathrm{drift \hspace{.2cm} parameter \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} volatility \hspace{.2cm} parameter \hspace{.2cm} \sigma .}" />
        <p>Under these assumptions, we will find the unique cost of the option that does not give rise to an arbitrage.</p>
        <p>To begin, let S(y) denote the price of the security at time y.</p>
        <MathComponent tex="\mathrm{Because \hspace{.2cm} \{S(y), \hspace{.2cm} 0 < y \leq t \} \hspace{.2cm} follows \hspace{.2cm} a \hspace{.2cm} geometric \hspace{.2cm} brownian \hspace{.2cm} motion \hspace{.2cm} with \hspace{.2cm} volatility \hspace{.2cm} parameter \hspace{.2cm} \sigma \hspace{.2cm} and \hspace{.2cm} drift \hspace{.2cm} parameter \hspace{.2cm} \mu ,}" />
        <p>the n-stage approximation of this model supposes that, every t/n time units, the price changes; its new value is equal to its old value multiplied either by the factor</p>
        <MathComponent tex="\mathrm{u = e^{\sigma \sqrt{t/n}} \hspace{.2cm} with \hspace{.2cm} probability \hspace{.2cm} \frac{1}{2} \bigg (1 + \frac{\mu}{\sigma} \sqrt{t/n} \bigg )}" />
        <p>or by the factor</p>
        <MathComponent tex="\mathrm{d = e^{- \sigma \sqrt{t/n}} \hspace{.2cm} with \hspace{.2cm} probability \hspace{.2cm} \frac{1}{2} \bigg (1 - \frac{\mu}{\sigma} \sqrt{t/n} \bigg)}" />
        <p>
            Thus, the n-stage approximation model is an n-stage binomial model in which the price at each time interval t/n either goes up by a multiplicative
            factor u or down by a multiplicative factor d. Therefore, if we let
        </p>
        <MathComponent tex="\mathrm{X_{i} = 1 \hspace{.2cm} if \hspace{.2cm} S(it/n) = uS((i-1)t/n), \hspace{.2cm} or \hspace{.2cm} 0 \hspace{.2cm} if \hspace{.2cm} S(it/n) = dS((i-1)t/n),}" />
        <MathComponent tex="\mathrm{then \hspace{.2cm} it \hspace{.2cm} follows \hspace{.2cm} from \hspace{.2cm} the \hspace{.2cm} results \hspace{.2cm} of \hspace{.2cm} Ch. 6\hspace{.2cm} that \hspace{.2cm} the \hspace{.2cm} only \hspace{.2cm} probability \hspace{.2cm} law \hspace{.2cm} on \hspace{.2cm} X_{1},...,X_{n} \hspace{.2cm} that \hspace{.2cm} makes}" />
        <MathComponent tex="\mathrm{all \hspace{.2cm} security \hspace{.2cm} buying \hspace{.2cm} bets \hspace{.2cm} fair \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} n-stage \hspace{.2cm} approximation \hspace{.2cm} model \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} one \hspace{.2cm} that \hspace{.2cm} taked \hspace{.2cm} the \hspace{.2cm} X_{i} \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} independent \hspace{.2cm} with}" />
        <MathComponent tex="\mathrm{P = \frac{1 - e^{- \sigma \sqrt{t/n}} + rt/n}{e^{\sigma \sqrt{t/n}} - e^{- \sigma \sqrt{t/n}} } }" />
        <p>Which leads to</p>
        <MathComponent tex="\mathrm{= \frac{1}{2} \bigg (1 + \frac{r - \sigma ^{2}/2}{\sigma} \sqrt{t/n} \bigg ).}" />
        *37
      </p>


      <h2>The Black-Scholes Formula pt2</h2>
      <p className="textBorder">
       <p>The below formula is known as the Black-Scholes option pricing formula</p>
        <MathComponent tex="\mathrm{C = S(0) \Phi (\omega) - Ke^{-rt} \Phi (\omega - \sigma \sqrt{t}),}" />
        <p>where</p>
        <MathComponent tex="\mathrm{\omega = \frac{rt + \sigma ^{2} t/2 - log(K/S(0))}{\sigma \sqrt {t}}}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} \Phi (x) \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} standard \hspace{.2cm} normal \hspace{.2cm} distribution \hspace{.2cm} function.}" />
        *38
      </p>


      <h2>Lemma 7.5.1</h2>
      <p className="textBorder">
       <p>Let I be the indicator random variable for the event that the option finishes in the money. That is,</p>
        <MathComponent tex="\mathrm{I = 1 \hspace{.2cm} if \hspace{.2cm} S(t) > K, \hspace{.2cm} or \hspace{.2cm} 0 \hspace{.2cm} if \hspace{.2cm} S(t) \leq K.}" />
        <MathComponent tex="\mathrm{I = 1 \hspace{.2cm} if \hspace{.2cm} Z > \sigma \sqrt{t} - \omega, \hspace{.2cm} or \hspace{.2cm} 0 \hspace{.2cm} otherwise,}" />
        <p>where</p>
        <MathComponent tex="\mathrm{\omega  = \frac{rt + \sigma ^{2} t/2 - log (K/s)}{\sigma \sqrt{t}}.}" />
        *39
      </p>


      <h2>Lemma 7.5.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{E[I] = P \{S(t) > K \} = \Phi (\omega - \sigma \sqrt{t}),}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} \Phi \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} standard \hspace{.2cm} normal \hspace{.2cm} distribution \hspace{.2cm} function.}" />
        *40
      </p>


      <h2>Lemma 7.5.3</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{e^{-rt}E[IS(t)] = s \Phi (\omega)}" />
        *41
      </p>


      <h2>Theorem 7.5.1 (The Black-Scholes Pricing Formula)</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{C(s,t,K, \sigma, r) = s \Phi (\omega) - Ke^{-rt} \Phi (\omega - \sigma \sqrt{t}).}" />
        *42
      </p>


      <h2>Proposition 7.5.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\frac{\partial C}{\partial K} = -e^{-rt} \Phi (\omega - \sigma \sqrt{t}).}" />
        *43
      </p>

      <h2>Proposition 7.5.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\frac{\partial C}{\partial s} = \Phi (\omega)}" />
        *44
      </p>


      <h2>Proposition 7.5.3</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\frac{\partial C}{\partial r} = Kte^{-rt} \Phi (\omega - \sigma \sqrt{t}).}" />
        *45
      </p>


      <h2>Lemma 7.5.4</h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{S(t) = s \hspace{.2cm} exp \{(r- \sigma ^{2} / 2)t + \sigma \sqrt{t} Z \}}" />
        <MathComponent tex="\mathrm{e^{-rt} E [IS(t)Z] = s(\Phi '(\omega) + \sigma \sqrt{t} \Phi (\omega))}" />
        *46
      </p>


      <h2>Proposition 7.5.4</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\frac{\partial C}{\partial \sigma} = s \sqrt{t} \Phi ' (\omega)}" />
        *47
      </p>

      <h2>Proposition 7.5.5</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\frac{\partial C}{\partial t} = \frac{\sigma}{2 \sqrt{t}} s \Phi ' (\omega) + Kre^{-rt} \Phi (\omega - \sigma \sqrt{t}) }" />
        *48
      </p>


      <h2>Corollary 7.5.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{C(c,t,K, \sigma , r) \hspace{.2cm} is}" />
        <p>(a) decreasing and convex in K;</p>
        <p>(b) increasing and convex in s;</p>
        <MathComponent tex="\mathrm{(c) \hspace{.2cm} increasing, \hspace{.2cm} but \hspace{.2cm} neither \hspace{.2cm} convex \hspace{.2cm} nor \hspace{.2cm} concave, \hspace{.2cm} in \hspace{.2cm} r, \hspace{.2cm} \sigma, \hspace{.2cm} and \hspace{.2cm} t.}" />
        *49
      </p>


      <h2>European Put Options</h2>
      <p className="textBorder">
       <p>
        The put call option parity formula, in conjunction with the Black-Scholes equation, yields the unique no arbitrage cost of a European (K, t) put option:
       </p>
        <MathComponent tex="\mathrm{P(s,t,K,r, \sigma) = C(s,t,K,r, \sigma) + Ke^{-rt} - s}" />
        *50
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