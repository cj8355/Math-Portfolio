import { Link } from "react-router-dom";
import "./ch2.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Normal Random Variables</h1>
        <div className="sectionText">

      
      <h2>Continuous Random Variables</h2>
      <p className="textBorder">
       <p>
        Whereas the possible values of the random variables considered in the previous chapter constitutes sets of discrete values, there
        exist random variables whose set of possible values is instead a continuous region. These continuous random variables can take
        on any value within some interval. For example, such random variables as the time it takes to complete an assignment, or the weight
        of a randomly chosen individual, are usually considered to be continuous.
       </p>
       <p>
        Every continuous random variable X has a function f associated with it. This function, called the probability density function of X,
        determines the probabilities associated with X in the following manner.
       </p>
        <MathComponent tex="\mathrm{For \hspace{.2cm} any \hspace{.2cm} numbers \hspace{.2cm} a < b,}" />
        <p>the area under f between a and b is equal to the probability that X assumes a value between a and b. That is,</p>
        <MathComponent tex="\mathrm{P \{a \leq X \leq b \} = area \hspace{.2cm} under \hspace{.2cm} f \hspace{.2cm} between \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b.}" />
        *12
      </p>


      <h2>Normal Random Variables</h2>
      <p className="textBorder">
       <p>
        A very important type of continuous random variable is the normal random variable. The probability density function of a random
        variable X is determined by two parameters,
       </p>
        <MathComponent tex="\mathrm{denoted \hspace{.2cm} by \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} \sigma , \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} formula}" />
        <MathComponent tex="\mathrm{f(x) = \frac{1}{\sqrt{2 \pi} \sigma} e^{-(x - \mu)^{2} / 2 \sigma ^{2}}, \hspace{.2cm} - \infty < x < \infty .}" />
        
        <MathComponent tex="\mathrm{It \hspace{.2cm} can \hspace{.2cm} be \hspace{.2cm} shown \hspace{.2cm} that \hspace{.2cm} the \hspace{.2cm} parameters \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} \sigma ^{2}}" />
        <p>are equal to the expected value and to the variance of X, respectively. That is,</p>
        <MathComponent tex="\mathrm{\mu = E[X], \hspace{1cm} \sigma ^{2} = Var(X).}" />
        <p>A normal random variable having mean 0 and variance 1 is called a standard normal random variable. Let Z be a standard normal random variable.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} function \hspace{.2cm} \Phi (x), \hspace{.2cm} defined \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} real \hspace{.2cm} numbers \hspace{.2cm} x \hspace{.2cm} by}" />
        <MathComponent tex="\Phi (x) = P \{Z \leq x \}," />
        <p>is called the standard normal distribution function.</p>
        <MathComponent tex="\mathrm{Thus \hspace{.2cm} \Phi (x),}" />
        <p>the probability that a standard normal random variable is less than or equal to x, is equal to the area under the standard normal density function</p>
        <MathComponent tex="\mathrm{f(x) = \frac{1}{\sqrt{2 \pi} } e^{-x^{2} / 2 }, \hspace{.2cm} - \infty < x < \infty }" />
        *13
      </p>


      <h2>Properties of Normal Random Variables</h2>
      <p className="textBorder">
       <p>
        An important property of normal random variables is that if X is a normal random variable then so is aX + b, when a and b are constants. This property enables us to transform
        any normal random variable X into a standard normal random variable.
       </p>
        <MathComponent tex="\mathrm{For \hspace{.2cm} suppose \hspace{.2cm} X \hspace{.2cm} is \hspace{.2cm} normal \hspace{.2cm} with \hspace{.2cm} mean \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} \sigma ^{2}. }" />
        <p>Then,</p>
        <MathComponent tex="\mathrm{Z = \frac{X - \mu}{\sigma}}" />
        <p>
            has expected value 0 and variance 1, it follows that Z is a standard normal random variable. As a result, we can compute probabilities
            for any normal random variable in terms of the standard normal distribution function
        </p>
        <MathComponent tex="\Phi" />
        *14
      </p>


      <h2>The Central Limit Theorem</h2>
      <p className="textBorder">
       <p>
        The ubiquity of normal random variables is explained by the central limit theorem, probably the most important theoretical result in probability. 
        This theorem states that the sum of a large number of independent random variables, all having the same probability distribution, will itself be approximately
        a normal random variable.
       </p>
       <p>For a more precise statement of the central limit theorem,</p>
        <MathComponent tex="\mathrm{suppose \hspace{.2cm} that \hspace{.2cm} X_{1}, X_{2},... \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} sequence \hspace{.2cm} of \hspace{.2cm} i.i.d \hspace{.2cm} random \hspace{.2cm} variables,}" />
        <MathComponent tex="\mathrm{each \hspace{.2cm} with \hspace{.2cm} expected \hspace{.2cm} value \hspace{.2cm} \mu \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} \sigma ^{2}, \hspace{.2cm} and \hspace{.2cm} let}" />
        <MathComponent tex="\mathrm{S_{n} = \sum_{i=1}^{n} X_{i}.}" />
        *15
      </p>


      <h2>Central Limit Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{For \hspace{.2cm} large \hspace{.2cm} n, \hspace{.2cm} S_{n} \hspace{.2cm} will \hspace{.2cm} approximately \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} normal \hspace{.2cm} random \hspace{.2cm} variable \hspace{.2cm} with \hspace{.2cm} expected }" />
        <MathComponent tex="\mathrm{value \hspace{.2cm} n \mu \hspace{.2cm} and \hspace{.2cm} variance \hspace{.2cm} n \sigma ^{2}.}" />
        <p>As a result, for any x we have</p>
        <MathComponent tex="\mathrm{P \bigg \{ \frac{S_{n} - n \mu}{\sigma \sqrt{n}} \leq x \bigg \} \approx \Phi (x), }" />
        <p>with the approximation becoming exact as n becomes larger and larger.</p>
        <p>
            Suppose that X is a binomial random variable with parameters n and p. Since X represnts the number of successes in n independent trials,
            each of which is a success with probability p. it can be expressed as
        </p>
        <MathComponent tex="X = \sum_{i=1}^{n} X_{i}," />
        <MathComponent tex="\mathrm{where \hspace{.2cm} X_{i} \hspace{.2cm} is \hspace{.2cm} 1 \hspace{.2cm} if \hspace{.2cm} trial \hspace{.2cm} i \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} success \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} 0 \hspace{.2cm} otherwise. \hspace{.2cm} Since}" />
        <MathComponent tex="\mathrm{E[X_{i}] = p \hspace{2cm} and \hspace{2cm} Var(X_{i}) = p(1-p),}" />
        <p>it follows from the central limit theorem that, when n is large, X will approximately have a normal distribution with mean np and variance np(1 - p).</p>
        *16
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