import { Link } from "react-router-dom";
import "./ch10.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch10() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Stochastic Order Relations</h1>
        <div className="sectionText">

      
      <h2>First-Order Stochastic Dominance</h2>
      <p className="textBorder">
       <p>Of random variables X and Y, we say that X stochastically dominates Y, (or equivalently, that X is stochastically larger than Y), written as</p>
        <MathComponent tex="\mathrm{X \geq _{st} Y, \hspace{.2cm} if \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} t }" />
        <MathComponent tex="\mathrm{P(X > t) \geq P(Y > t) }" />
        <MathComponent tex="\mathrm{That \hspace{.2cm} is, \hspace{.2cm} X \geq _{st} Y }" />
        <p>if for evey constant t, it is at least as likely that X will exceed t as it is that Y will.</p>
        *58
      </p>


      <h2>Proposition 10.1.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{X \geq _{st} Y \hspace{.2cm} IFF \hspace{.2cm} E[h(X)] \geq E[h(Y)] \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} increasing \hspace{.2cm} functions \hspace{.2cm} h. }" />
        *59
      </p>


      <h2>Lemma 10.1.1</h2>
      <p className="textBorder">
       <p>If X is a nonnegative random variable, then</p>
        <MathComponent tex="\mathrm{E [X] = \int_{0}^{\infty} P(X > t) dt }" />
        *60
      </p>

      <h2>Lemma 10.1.2</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} X \geq _{st} Y ; \hspace{.2cm} then \hspace{.2cm} E[X] \geq E[Y]. }" />
        *61
      </p>


      <h2>Lemma 10.2.1</h2>
      <p className="textBorder">
       <p>If F is a continuous distribution function and U a uniform (0, 1) random variable, then the random variable 
         </p>
        <MathComponent tex="F^{-1}(U)" />
        <p>has distribution function F, where</p>
        <MathComponent tex="\mathrm{F^{-1} (U) \hspace{.2cm} is \hspace{.2cm}defined \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} that \hspace{.2cm} value \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} F(F^{-1}(u)) = u. }" />
        *62
      </p>


      <h2>Proposition 10.2.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} X \geq _{st} Y,}" />
        <p>then there are random variables X' having the same distribution as X, and Y' having the same distribution as Y,</p>
        <MathComponent tex="\mathrm{such \hspace{.2cm} that \hspace{.2cm} X' \geq Y' .}" />
        *63
      </p>


      <h2>Theorem 10.2.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} X_{1}, ..., X_{n} \hspace{.2cm} and \hspace{.2cm} Y_{1}, ..., Y_{n} \hspace{.2cm} be \hspace{.2cm} vectors \hspace{.2cm} of \hspace{.2cm} independent \hspace{.2cm} random \hspace{.2cm} variables,}" />
        <MathComponent tex="\mathrm{and \hspace{.2cm} suppose \hspace{.2cm} that \hspace{.2cm} X_{i} \geq _{st} Y_{i} \hspace{.2cm} for \hspace{.2cm} each \hspace{.2cm} i = 1, ... , n.}" />
        <MathComponent tex="\mathrm{Show \hspace{.2cm} that \hspace{.2cm} g(X_{1}, ..., X_{n}) \geq _{st} g(Y_{1}, ..., Y_{n}) \hspace{.2cm} whenever \hspace{.2cm} g(X_{1},..., X_{n}) \hspace{.2cm} is \hspace{.2cm} increasing \hspace{.2cm} in \hspace{.2cm} each \hspace{.2cm} component. }" />
        
        *64
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