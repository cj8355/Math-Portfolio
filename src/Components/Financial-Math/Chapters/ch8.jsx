import { Link } from "react-router-dom";
import "./ch8.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Additional Results on Options</h1>
        <div className="sectionText">

      
      <h2>Estimating the Volatiiity Parameter</h2>
      <p className="textBorder">
       <p>Whereas four of the five parameters needed to evaluate the Black-Scholes formula - namely, s, t, K, and r - are known quantities,</p>
        <MathComponent tex="\mathrm{the \hspace{.2cm} value \hspace{.2cm} of \hspace{.2cm} \sigma \hspace{.2cm} has \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} estimated.}" />
        <p>
            One approach is to use historical data. 8.5.1 gives the standard approach for estimating a population variance; 8.5.2 applies the
            standard approach to obtain an estimator of sigma based on closing prices of the security over succesive days; 8.5.3 gives
            an improved estimator based on both daily closing and opening prices; 8.5.4 gives a more sophisticated estimator that uses daily
            high and low prices as well as daily opening and closing prices.
        </p>
        *51
      </p>


      <h2>8.5.1 Estimating a Population Mean and Variance</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Suppose \hspace{.2cm} that \hspace{.2cm} X_{1}, ..., X_{n} \hspace{.2cm} are \hspace{.2cm} independent \hspace{.2cm} random \hspace{.2cm} variables \hspace{.2cm} having \hspace{.2cm} a \hspace{.2cm} common \hspace{.2cm} probabiliity \hspace{.2cm} distribution}" />
        <MathComponent tex="\mathrm{with \hspace{.2cm} mean \hspace{.2cm} \mu _{0} \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} \sigma _{0}^{2}. \hspace{.2cm} The \hspace{.2cm} average \hspace{.2cm} of \hspace{.2cm} these \hspace{.2cm} data \hspace{.2cm} values,}" />
        <MathComponent tex="\mathrm{\bar{X} = \frac{\sum_{i=1}^{n}X_{i}}{n},}" />
        <p>is the usual estimator of the mean. Because</p>
        <MathComponent tex="\mathrm{\sigma _{0}^{2} = Var(X_{i}) = E[(X_{i} - \mu _{0})^{2}],}" />

        *52
      </p>


      <h2>8.5.2 The Standard Estimator of Volatility</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Suppose \hspace{.2cm} we \hspace{.2cm} want \hspace{.2cm} to \hspace{.2cm} estimate \hspace{.2cm} \sigma \hspace{.2cm} using \hspace{.2cm} t \hspace{.2cm} time \hspace{.2cm} units \hspace{.2cm} of \hspace{.2cm} historical \hspace{.2cm} data,}" />
        <p>which we wil suppose run from time 0 to time t. That is suppose that the present time is t and that we have the histroical price data S(y),</p>
        <MathComponent tex="\mathrm{0 \leq y \leq t. \hspace{.2cm} Fix \hspace{.2cm} a \hspace{.2cm} positive \hspace{.2cm} integer \hspace{.2cm} n, \hspace{.2cm} let \hspace{.2cm} L = t/n, }" />
        <p>and define the random variables</p>
        <MathComponent tex="X_{1} = log \bigg ( \frac{S(L)}{S(0)} \bigg )," />
        <MathComponent tex="\vdots" />
        <MathComponent tex="X_{n} = log \bigg ( \frac{S(nL)}{S((n-1)L)} \bigg )." />
        <p>Under the assumption that the price evolution follows a geometric Brownian motion with parameters</p>
        <MathComponent tex="\mathrm{\mu \hspace{.2cm} and \hspace{.2cm} \sigma , \hspace{.2cm} it \hspace{.2cm} follows \hspace{.2cm} that \hspace{.2cm} X_{1}, ..., X_{n} \hspace{.2cm} are \hspace{.2cm} independent \hspace{.2cm} normal \hspace{.2cm} random \hspace{.2cm} variables \hspace{.2cm} with \hspace{.2cm} mean \hspace{.2cm} L \mu \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} L \sigma ^{2}.}" />
        <p>From 8.5.1, it follows that we can use,</p>
        <MathComponent tex="\mathrm{\sum_{i=1}^{n} (X_{i} - \bar{x})^{2} / (n-1) \hspace{.2cm} to \hspace{.2cm} estimate \hspace{.2cm} L \sigma ^{2}.}" />
        <MathComponent tex="\mathrm{Therefore, \hspace{.2cm} we \hspace{.2cm} can \hspace{.2cm} estimate \hspace{.2cm} \sigma ^{2} \hspace{.2cm} by}" />
        <MathComponent tex="\widehat{\sigma ^{2}} = \frac{1}{L} \frac{\sum_{i=1}^{n} (X_{i} - \bar{X})^{2}}{n-1}. " />
        <p>Therefore, it follows from 8.8 that</p>
        <MathComponent tex="Var(\widehat{\sigma ^{2}}) = \frac{2 \sigma ^{4}}{n-1}." />
        <MathComponent tex="" />
        *53
      </p>
      
      <h2>8.5.3 Using Opening and Closing Data</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} C_{i} \hspace{.2cm} denote \hspace{.2cm} the \hspace{.2cm} (closing) \hspace{.2cm} price \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} security \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} end \hspace{.2cm} of \hspace{.2cm} trading \hspace{.2cm} day \hspace{.2cm} i. }" />
        <p>Under the assumption that the security's price follows a geometric Brownain motion,</p>
        <MathComponent tex="\mathrm{log(C_{i}/C_{i-1}) \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} normal \hspace{.2cm} random \hspace{.2cm} variable \hspace{.2cm} whose \hspace{.2cm} mean \hspace{.2cm} is \hspace{.2cm} apporximately \hspace{.2cm} \sigma \hspace{.2cm} and \hspace{.2cm} whose \hspace{.2cm} variance \hspace{.2cm} is \hspace{.2cm} \sigma ^{2} / 252.}" />
        <MathComponent tex="\mathrm{Letting \hspace{.2cm} O_{i} \hspace{.2cm} be \hspace{.2cm} the \hspace{.2cm} opening \hspace{.2cm} price \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} security \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} begninning \hspace{.2cm} of \hspace{.2cm} trading \hspace{.2cm} day \hspace{.2cm} i, \hspace{.2cm} we \hspace{.2cm} can \hspace{.2cm} write}" />
        <MathComponent tex="log \bigg (\frac{C_{i}}{C_{i-1}} \bigg ) = log \bigg (\frac{C_{i}}{O_i} \frac{O_i}{C_i-1} \bigg )" />
        <MathComponent tex="= log \bigg ( \frac{C_{i}}{O_{i}} \bigg ) + log \bigg (\frac{O_i}{C_{i-1}} \bigg )." />
        *54
      </p>


      <h2>8.5.4 Using Opening, Closing, and High-Low Data</h2>
      <p className="textBorder">
       <p>Following the notation introduced in 8.5.3, let X * = log(X) for any value X.</p>
       <p>Let H(t) be the highest price and L(t) the lowest price of a security over an interval of length t. That is,</p>
        <MathComponent tex="H(t) = max_{0 \leq y \leq t} S(y)," />
        <MathComponent tex="L(t) = min_{0 \leq y \leq t} S(y)." />
        <p>Assuming that the security's price follows geometric Brownain motion with drift</p>
        <MathComponent tex="\mathrm{o \hspace{.2cm} and \hspace{.2cm} volatility \hspace{.2cm} \sigma , \hspace{.2cm} it \hspace{.2cm} can \hspace{.2cm} be \hspace{.2cm} shown \hspace{.2cm} that}" />
        <MathComponent tex="\mathrm{E[(H*(t) - L*(t))^{2}] = 2.773 Var \bigg (log \bigg (\frac{S(t)}{S(0)} \bigg) \bigg ).}" />
        *55
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