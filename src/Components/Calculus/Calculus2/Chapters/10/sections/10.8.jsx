import { Link } from "react-router-dom";
import "./10.8.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 8 Choosing a Convergence Test</h1>
        <div className="sectionText">

      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="\begin{array} {|r|r|}\hline \mathrm{Series \hspace{.2cm} or \hspace{.2cm} Test} & \mathrm{Form \hspace{.2cm} of \hspace{.2cm} Series} & \mathrm{Condition \hspace{.2cm} for \hspace{.2cm} Convergence} & \mathrm{Condition \hspace{.2cm} for \hspace{.2cm} Divergence} & \mathrm{Comments} \\ \hline \mathrm{Geometric \hspace{.2cm} series} & \sum_{k=0}^{\infty} ar^{k}, \hspace{.2cm} a \neq 0 & \vert r \vert < 1 & \vert r \vert \geq 1 & \mathrm{If \hspace{.2cm} \vert r \vert \hspace{.2cm} < \hspace{.2cm} 1, \hspace{.2cm} then \hspace{.2cm} \sum_{k=0}^{\infty} ar^{k} = \frac{a}{1-r}} \\ \hline \mathrm{Divergence \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k} & Does not apply & \lim_{k \to \infty} a_{k} \neq 0 & Cannot be used to prove convergence \\ \hline \mathrm{Integral \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k}, \mathrm{\hspace{.2cm} where \hspace{.2cm} a_{k} = f(k) \hspace{.2cm} and \hspace{.2cm} f \hspace{.2cm} is \hspace{.2cm} continuous, \hspace{.2cm} positive, \hspace{.2cm}and \hspace{.2cm} decreasing} & \int_{1}^{\infty} f(x) \hspace{.2cm} dx \hspace{.2cm} \mathrm{converges} & \int_{1}^{\infty} f(x) \hspace{.2cm} dx \hspace{.2cm} \mathrm{diverges.} & The value of the integral is not the value of the series. \\ \hline \mathrm{p-series} & \sum_{k=1}^{\infty} \frac{1}{k^{p}} & p > 1 & p \leq 1 & Useful for comparison tests \\ \hline \mathrm{Ratio \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k} & \lim_{k \to \infty} \bigg\vert \frac{a_{k+1}}{a_{k}} \bigg\vert < 1 & \lim_{k \to \infty} \bigg\vert \frac{a_{k+1}}{a_{k}} \bigg\vert > 1 & \mathrm{Inconclusive \hspace{.2cm} if \hspace{.2cm} \lim{k \to \infty} \bigg\vert \frac{a_{k+1}}{a_{k}} \bigg\vert = 1} \\ \hline \mathrm{Root \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k} & \lim_{k \to \infty} \sqrt[k]{\vert a_{k} \vert} < 1 & \lim_{k \to \infty} \sqrt[k]{\vert a_{k} \vert} > 1 & \mathrm{Inconclusive \hspace{.2cm} if \hspace{.2cm} \lim{k \to \infty} \sqrt[k]{\vert a_{k} \vert} = 1} \\ \hline \mathrm{Comparison \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k}, \mathrm{\hspace{.2cm} where \hspace{.2cm} a_{k} > 0} & a_{k} \leq b_{k} \mathrm{\hspace{.2cm} and \hspace{.2cm} \sum_{k=1}^{\infty} \hspace{.2cm} b_{k} \hspace{.2cm} converges.} & b_{k} \leq a_{k} \mathrm{\hspace{.2cm} and \hspace{.2cm} \sum_{k=1}^{\infty} \hspace{.2cm} b_{k} \hspace{.2cm} diverges.} & \sum_{k=1}^{\infty} a_{k} \mathrm{\hspace{.2cm} is \hspace{.2cm} given; \hspace{.2cm} you \hspace{.2cm} supply \hspace{.2cm} \sum_{k=1}^{\infty} b_{k}.} \\ \hline \mathrm{Limit \hspace{.2cm} Comparison \hspace{.2cm} Test} & \sum_{k=1}^{\infty} a_{k}, \mathrm{\hspace{.2cm} where \hspace{.2cm} a_{k} > 0, \hspace{.2cm} b_{k} > 0} & 0 \leq \lim_{k \to \infty} \frac{a_{k}}{b_{k}}\hspace{.2cm} < \hspace{.2cm} \infty \hspace{.2cm} \mathrm{and} \hspace{.2cm} \sum_{k=1}^{\infty} b_{k} \hspace{.2cm} \mathrm{converges.} & \lim_{k \to \infty} \frac{a_{k}}{b_{k}}\hspace{.2cm} > \hspace{.2cm} 0 \hspace{.2cm} \mathrm{and} \hspace{.2cm} \sum_{k=1}^{\infty} b_{k} \hspace{.2cm} \mathrm{diverges.} & \sum_{k=1}^{\infty} a_{k} \mathrm{\hspace{.2cm} is \hspace{.2cm} given; \hspace{.2cm} you \hspace{.2cm} supply \hspace{.2cm} \sum_{k=1}^{\infty} b_{k}.} \\ \hline \mathrm{Alternating \hspace{.2cm} Series \hspace{.2cm} Test} & \sum_{k=1}^{\infty} (-1)^{k} a_{k}, \mathrm{\hspace{.2cm} where \hspace{.2cm} a_{k} > 0} & \lim_{k \to \infty} a_{k} = 0 \hspace{.2cm} \mathrm{and} \hspace{.2cm} 0 < a_{k+1} \leq a_{k} & \lim_{k \to \infty} a_{k} \neq 0 & \mathrm{Remainder \hspace{.2cm} R_{n} \hspace{.2cm} satisfies \hspace{.2cm} \vert R_{n} \vert \hspace{.2cm} \leq a_{n+1}} \\ \hline \mathrm{Absolute \hspace{.2cm} Convergence} & \sum_{k=1}^{\infty} a_{k}, \hspace{.2cm} a_{k} \hspace{.2cm} \mathrm{arbitrary} & \sum_{k=1}^{\infty} \vert a_{k} \vert \hspace{.2cm} \mathrm{converges.} &  & Applies to arbitrary series \\ \hline  \end{array}" />
        *397
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