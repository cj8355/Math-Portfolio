import { Link } from "react-router-dom";
import "./2.9.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part2_Sec9() {
    
    
    return (
        <div className='container'> 
        <h1>Part 2 Section 9 Finitely Generated Abelian Groups</h1>
        <div className="sectionText">

      
      <h2>9.1 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} Cartesian \hspace{.2cm} product \hspace{.2cm} of \hspace{.2cm} sets \hspace{.2cm} B_{1}, \hspace{.2cm} B_{2}, ..., \hspace{.2cm} B_{n} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} ordered \hspace{.2cm} n-tuples \hspace{.2cm} (b_{1}, b_{2}, ..., b_{n}), \hspace{.2cm} where \hspace{.2cm} b_{i} \in B_{i} \hspace{.2cm} for \hspace{.2cm} i = 1,2,...,n.}" />
        <p>The Cartesian product is denoted by either</p>
        <MathComponent tex="\mathrm{B_{1} \hspace{.1cm} x \hspace{.1cm} B_{2} \hspace{.1cm} x \hspace{.1cm} ... \hspace{.1cm} x \hspace{.1cm} B_{n}}" />
        <p>or by</p>
        <MathComponent tex="\mathrm{\prod_{i=1}^{n} B_{i}.}" />
        *68
      </p>


      <h2>9.2 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G_{1}, G_{2}, ..., G_{n} \hspace{.2cm} be \hspace{.2cm} groups.}" />
        <MathComponent tex="\mathrm{For \hspace{.2cm} (a_{1}, a_{2}, ..., a_{n}) \hspace{.2cm} and \hspace{.2cm} (b_{1}, b_{2},..., b_{n}) \hspace{.2cm} in \hspace{.2cm} \prod_{i=1}^{n} \hspace{.2cm} G_{i}, \hspace{.2cm} define \hspace{.2cm} (a_{1}, a_{2},...,a_{n})(b_{1}, b_{2},...,b_{n}) \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} the \hspace{.2cm} element \hspace{.2cm} (a_{1}b_{1}, a_{2}b_{2},...,a_{n}b_{n}).}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \prod_{i=1}^{n} \hspace{.2cm} G_{i} \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} group, \hspace{.2cm} the \hspace{.2cm} direct \hspace{.2cm} product \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} groups \hspace{.2cm} G_{i}, \hspace{.2cm} under \hspace{.2cm} this \hspace{.2cm} binary \hspace{.2cm} operation.}" />
        *69
      </p>


      <h2>9.5 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} group \hspace{.2cm} Z_{m} \hspace{.2cm} x \hspace{.2cm} Z_{n} \hspace{.2cm} is \hspace{.2cm} cyclic \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} isomorphic \hspace{.2cm} to \hspace{.2cm} Z_{mn}}" />
        <p>if and only if m and n are relatively prime, that is, the gcd of m and n is 1.</p>
        *70
      </p>


      <h2>9.6 Corollary</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} group \hspace{.2cm} \prod_{i=1}^{n} \hspace{.2cm} Z_{m_{i}} \hspace{.2cm} is \hspace{.2cm} cyclic \hspace{.2cm} and \hspace{.2cm} isomorphic \hspace{.2cm} to \hspace{.2cm} Z_{m_{1}m_{2}...m_{n}} \hspace{.2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{.2cm} the \hspace{.2cm} numbers \hspace{.2cm} m_{i} }" />
        <p>for i = 1, ... , n are such that the gcd of any two of them is 1.</p>
        *71
      </p>


      <h2>9.8 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} r_{1}, r_{2}, ..., r_{n} \hspace{.2cm} be \hspace{.2cm} positive \hspace{.2cm} integers.}" />
        <p>Theire least common multiple (abbreviated lcm) is the positive generator of the cyclic group of all common multiples of the</p>
        <MathComponent tex="\mathrm{r_{i}, \hspace{.2cm} that \hspace{.2cm} is, \hspace{.2cm} the \hspace{.2cm} cyclic \hspace{.2cm} group \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} integers \hspace{.2cm} divisible \hspace{.2cm} by \hspace{.2cm} each \hspace{.2cm} r_{i} \hspace{.2cm} for \hspace{.2cm} i = 1,2,...,n.}" />
        *72
      </p>


      <h2>9.9 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} (a_{1}, a_{2}, ..., a_{n}) \in \prod_{i=1}^{n} \hspace{.2cm} G_{i}. }" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} a_{i} \hspace{.2cm} is \hspace{.2cm} of \hspace{.2cm} finite \hspace{.2cm} order \hspace{.2cm} r_{i} \hspace{.2cm} in \hspace{.2cm} G_{i}, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} order \hspace{.2cm} of \hspace{.2cm} (a_{1}, a_{2}, ..., a_{n}) \hspace{.2cm} in \hspace{.2cm} \prod_{i=1}^{n} \hspace{.2cm} G_{i} \hspace{.2cm} is \hspace{.2cm} equal \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} lcm \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} the \hspace{.2cm} r_{i.}}" />
        *73
      </p>


      <h2>9.12 Theorem</h2>
      <p className="textBorder">
       <p>
        (Primary Factor Version of the Fundamental Theorem of Finitely Generated Abelian Groups) Every finitely generated abelian group
        G is isomorphic to a direct product of cyclic groups in the form
       </p>
        <MathComponent tex="\mathrm{Z_{(p_{1})r_{1}} \hspace{.2cm} x \hspace{.2cm} Z_{(p_[2])r_{2}} \hspace{.2cm} x \hspace{.2cm} ... \hspace{.2cm} x \hspace{.2cm} Z_{(p_{n}) r_{n}} \hspace{.2cm} x \hspace{.2cm} Z \hspace{.2cm} x \hspace{.2cm} Z \hspace{.2cm} x \hspace{.2cm} ... \hspace{.2cm} x \hspace{.2cm} Z, }" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} the \hspace{.2cm} p_{i} \hspace{.2cm} are \hspace{.2cm} primes, \hspace{.2cm} not \hspace{.2cm} necessarily \hspace{.2cm} distinct, \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} r_{i} \hspace{.2cm} are \hspace{.2cm} positive \hspace{.2cm} integers.}" />
        <p>
            The direct product is unique except for possible rearrangement of the factors; that is, the number
            (Betti number of G) of factors Z is unique and the prime powers
        </p>
        <MathComponent tex="\mathrm{(p_{i})^{r_{i}} \hspace{.2cm} are \hspace{.2cm} unique.}" />
        *74
      </p>


      <h2>9.14 Theorem</h2>
      <p className="textBorder">
       <p>
        (Invariant Factor Version of the Fundamental Theorem of Finitely Generated Abelian Groups) Every finitely generated abelian groups is isomorphic to
        a direct product of cyclic groups of the form
       </p>
        <MathComponent tex="\mathrm{Z_{d_{1}} \hspace{.2cm} x \hspace{.2cm} Z_{d_{2}} \hspace{.2cm} x \hspace{.2cm} Z_{d_{3}} \hspace{.2cm} x \hspace{.2cm} ... \hspace{.2cm} x \hspace{.2cm} Z_{d_{k}} \hspace{.2cm} x \hspace{.2cm} Z \hspace{.2cm} x \hspace{.2cm} Z \hspace{.2cm} x \hspace{.2cm} ... \hspace{.2cm} x \hspace{.2cm} Z, }" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} each \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} d_{i} \geq 2 \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer \hspace{.2cm} and \hspace{.2cm} d_{i} \hspace{.2cm} divides \hspace{.2cm} d_{i+1} \hspace{.2cm} for \hspace{.2cm} 1 \leq i \leq k - 1.}" />
        <p>Furthermore, the representation is unique.</p>
        *75
      </p>


      <h2>9.17 Definition</h2>
      <p className="textBorder">
       
        <p>
            A group G is decomposable if it is isomorphic to a direct product of two proper nontrivial subgroups. Otherwise G is indecomposable.
        </p>
        *76
      </p>


      <h2>9.18 Theorem</h2>
      <p className="textBorder">
       
        <p>The finite indecomposable ableian groups are exactly the cyclic groups with order a power of a prime.</p>
        *77
      </p>

      <h2>9.19 Theorem</h2>
      <p className="textBorder">
       
        <p>If m divides the order of a finite abelian group G, then G has a subgroup of order m.</p>
        *78
      </p>


      <h2>9.20 Theorem</h2>
      <p className="textBorder">
       <p>If m is a square-free integer, that is, m is not divisible by the square of any integer</p>
        <MathComponent tex="\mathrm{n \geq 2 \hspace{.2cm} then \hspace{.2cm} every \hspace{.2cm} abelian \hspace{.2cm} group \hspace{.2cm} of \hspace{.2cm} order \hspace{.2cm} m \hspace{.2cm} is \hspace{.2cm} cyclic.}" />.
        *79
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