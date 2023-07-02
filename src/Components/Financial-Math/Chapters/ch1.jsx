import { Link } from "react-router-dom";
import "./ch1.css";
import { MathComponent } from "mathjax-react";

export default function FinancialMath_Ch1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Prob</h1>
        <div className="sectionText">

      
      <h2>Probabilities and Events</h2>
      <p className="textBorder">
       <p>
        Consider an experiment and let S, called the sample space, be the set of all possible outcomes of the experiment. If there
        are m possible outcomes of the experiment then we will genarally number them 1 through m, and so 
       </p>
        <MathComponent tex="S = \{1, 2, ..., m \}." />
        <p>However, when dealing with specific examples, we will usually give more descriptive names to the outcomes.</p>
        *1
      </p>


      <h2>Proposition 1.1.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{P(A \cup B) = P(A) + P(B) - P(AB).}" />
        <p>
            Thus, the probability that the outcome of the experiment is either in A or in B equals the probability that it is in A,
            plus the probability that it is in B, minus the probability that it is in both A and B.
        </p>
        *2
      </p>


      <h2>Conditional probability</h2>
      <p className="textBorder">
       <p>
       Conditional probability is defined as the likelihood of an event or outcome occurring, 
       based on the occurrence of a previous event or outcome
       </p>
        <MathComponent tex="\mathrm{P(A|B)}" />
        <MathComponent tex="\mathrm{P(A|B) = \frac{P(AB)}{P(B)}}" />
        <p>Also, it follows that</p>
        <MathComponent tex="\mathrm{P(AB) = P(B)P(A|B)}" />
        <p>
            That is, the probability that both A and B occur is the probability that B occurs multiplied by the conditional probability that A
            occurs given that B occured; this result is often called the multiplication theorem of probability.
        </p>
        *3
      </p>


      <h2>Random Variables and Expected Values</h2>
      <p className="textBorder">
       <p>
        Numerical quantities whose values are determined by the outcome of the experiment are known as random variables. For instance, the sum obtained
        when rolling dice, or the number of heads that result in a series of coin flips, are random variables. Since the value
        of a random variable is determined by the outcome of the experiment, we can assign probabilities to each of its possible values.
       </p>
       <p>Definition</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} X \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} random \hspace{.2cm} variable \hspace{.2cm} whose \hspace{.2cm} possible \hspace{.2cm} values \hspace{.2cm} are \hspace{.2cm} x_{1},x_{2},...,x_{n}, \hspace{.2cm}  then \hspace{.2cm} the \hspace{.2cm} expected \hspace{.2cm} value \hspace{.2cm} of \hspace{.2cm} X, \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} E[X], \hspace{.2cm} is \hspace{.2cm} defined \hspace{.2cm} by \}}" />
        <MathComponent tex="\mathrm{E[X] = \sum_{j=1}^{n} x_{j} P\{X = x_{j} \}.}" />
        <p>Alternative names for E[X] are the expectation or the mean of X.</p>
        <p>
            In words, E[X] is a weighted average of the possible values of X, where the weight given to a value is equal to the probability that X assumes that value.
        </p>
        <p>Proposition 1.3.1</p>
        <MathComponent tex="\mathrm{For \hspace{.2cm} random \hspace{.2cm} variables \hspace{.2cm} X_{1}, ..., X_{k},}" />
        <MathComponent tex="\mathrm{E \bigg [ \sum_{j=1}^{k} X_{j} \bigg ] = \sum_{j=1}^{k} E[X_{j}].}" />
        *4
      </p>


      <h2>Proposition 1.3.2</h2>
      <p className="textBorder">
       <p>
        Consider n independent trials, each of which is a success with probability p. Then, given that there is a total of i successes in the n trials,
       </p>
        <MathComponent tex="\mathrm{each \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} (\frac{n}{i}) \hspace{.2cm} subsets \hspace{.2cm} of \hspace{.2cm} i \hspace{.2cm} trials \hspace{.2cm} is \hspace{.2cm} equally \hspace{.2cm} likely \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} of \hspace{.2cm} trials \hspace{.2cm} that \hspace{.2cm} resulted \hspace{.2cm} in \hspace{.2cm} successes.}" />
        *5
      </p>


      <h2>Definition</h2>
      <p className="textBorder">
       <p>The variance of X, denoted by Var(X), is defined by</p>
        <MathComponent tex="\mathrm{Var(X) = E[(X-E[x])^{2}].}" />
        <p>In other words, the variance measures the average square of the difference between X and its expected value.</p>
        *6
      </p>


      <h2>Proposition 1.3.3</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} X_{1}, ..., X_{k} \hspace{.2cm} are \hspace{.2cm} independent \hspace{.2cm} random \hspace{.2cm} variables, \hspace{.2cm} then}" />
        <MathComponent tex="\mathrm{Var \bigg ( \sum_{j=1}^{k} X_{j} \bigg ) = \sum_{j=1}^{k} Var (X_{j}).}" />
        *7
      </p>


      <h2>Covariance and Correlation</h2>
      <p className="textBorder">
       <p>The covariance of any two random variables X and Y, denoted by Cov(X, Y), is defined by</p>
       <p>Cov(X, Y) = E[(X - E[X])(Y - E[Y])].</p>
       <p>Upon multiplying the terms within the expectation, and then taking expectation term by term, it can be shown that</p>
       <p>Cov(X, Y) = E[XY] - E[X]E[Y].</p>
       <p>
        A positive value of the covariance indicates that X and Y both tend to be large at the same time, whereas a negative values indicates that when
        one is large the other tends to be small. (Independent random variables have covariance equal to o.)
       </p>
      
        *8
      </p>

      <h2>Properties of covariance</h2>
      <p className="textBorder">
       <p>The following properties of covariance are easily established. For random variables X and Y, and constant c:</p>
        <p>Cov(X, Y) = Cox(Y, X),</p>
        <p>Cov(X, X) = Var(X),</p>
        <p>Cov(cX, Y) = cCov(X, Y),</p>
        <p>Cov(c, Y) = 0.</p>
        *9
      </p>


      <h2>Conditional Expectation</h2>
      <p className="textBorder">
       <p>For random variables X and Y, we define the conditional expectation of X given that Y = y by</p>
        <MathComponent tex="\mathrm{E [X|Y = y] = \sum_{x}x P(X = x|Y = y)}" />
        <p>
            That is, the conditional expectation of X given that Y = y is, like the ordinary expectation of X, a weighted average of the possible
            values of X; but now the value x is weighted not by the unconditional probability that X = x, but by its conditional probability given
            the information that Y = y.
        </p>
        *10
      </p>


      <h2>Proposition 1.5.1</h2>
      <p className="textBorder">
       <p>
        An important property of conditional expectation is that the expected value of X is a weighted average of the conditional expectation of X given
        that Y = y. That is, we have the following:
       </p>
        <MathComponent tex="\mathrm{E[X] = \sum_{y} E[X|Y = y]P(Y=y)}" />
        *11
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