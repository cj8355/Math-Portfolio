import { Link } from "react-router-dom";
import "./1.2.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part1_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Part 1 Sec. 2 Groups</h1>
        <div className="sectionText">

      
      <h2>2.1 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} group \hspace{.2cm} \langle G, * \rangle \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} G,}" />
        <p>closed under a binary operation *, such that the following axioms are satisfied.</p>
        <MathComponent tex="\mathrm{RRRRRR: \hspace{.2cm} For \hspace{.2cm} all \hspace{.2cm} a,b,c \in G, \hspace{.2cm} we \hspace{.2cm} have}" />
        <MathComponent tex="\mathrm{(a*b)*c = a*(b*c). \hspace{2cm} associativity \hspace{.2cm} of \hspace{.2cm} *}" />
        <MathComponent tex="\mathrm{There \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} element \hspace{.2cm} e \hspace{.2cm} in \hspace{.2cm} G \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} x \in G,}" />
        <MathComponent tex="\mathrm{e*x = x*e = x \hspace{2cm} identity \hspace{.2cm} element \hspace{.2cm} e \hspace{.2cm} for \hspace{.2cm} *}" />
        <MathComponent tex="\mathrm{Corresponding \hspace{.2cm} to \hspace{.2cm} each \hspace{.2cm} a \in G, \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} element \hspace{.2cm} a' \hspace{.2cm} in \hspace{.2cm} G \hspace{.2cm} such \hspace{.2cm} that}" />
        <MathComponent tex="\mathrm{a*a' = a' * a = e. \hspace{2cm} inverse \hspace{.2cm} a' \hspace{.2cm} of \hspace{.2cm} a}" />
        *19
      </p>


      <h2>2.3 Definition</h2>
      <p className="textBorder">
       
        <p>A group G is abelian if its binary operation is commutative.</p>
        *20
      </p>


      <h2>2.16 Theorem</h2>
      <p className="textBorder">
       
        <p>If G is a group with binary operation *, then the left and right cancellation laws hold in G, that is,
            a * b = a * c implies b = c, and b * a = c * a implies b = c for all
        </p>
        <MathComponent tex="\mathrm{a,b,c \in G.}" />
        *21
      </p>


      <h2>2.17 Theorem</h2>
      <p className="textBorder">
       
        <p>If G is a group with binary operation *, and if a and b are any elements of G, then the linear equations a * x = b
            and y * a = b have unique solutions x and y in G.
        </p>
        *22
      </p>


      <h2>2.18 Theorem</h2>
      <p className="textBorder">
       <p>In a group G with binary operation *, there is only one element e in G such that</p>
       <p>e * x = x * e = x</p>
        <MathComponent tex="\mathrm{for \hspace{.2cm} all \hspace{.2cm} x \in G. \hspace{.2cm} Likewise \hspace{.2cm} for \hspace{.2cm} each \hspace{.2cm} a \in G, \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} only \hspace{.2cm} one \hspace{.2cm} element \hspace{.2cm} a' \hspace{.2cm} in \hspace{.2cm} G \hspace{.2cm} such \hspace{.2cm} that}" />
        <p>a' * a = a * a' = e</p>
        <p>In summary, the identity element and inverse of each element are unique in a group.</p>
        *23
      </p>


      <h2>2.19 Corollary</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group. \hspace{.2cm} For \hspace{.2cm} all \hspace{.2cm} a, b \in G, \hspace{.2cm} we \hspace{.2cm} have \hspace{.2cm} (a*b)' = b' * a'.}" />
        *24
      </p>


      <h2>2.22 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \langle G_{1}, *_{1} \rangle \hspace{.2cm} and \hspace{.2cm} \langle G_{2}, *_{2} \rangle \hspace{.2cm} be \hspace{.2cm} groups \hspace{.2cm} and \hspace{.2cm} f: G_{1} \to G_{2}.}" />
        <p>We say that f is a group isomorphism if the following two conditions are satisfied.</p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} The \hspace{.2cm} function \hspace{.2cm} f \hspace{.2cm} is \hspace{.2cm} one-to-one \hspace{.2cm} and \hspace{.2cm} maps \hspace{.2cm} onto \hspace{.2cm} G_{2}.}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} For \hspace{.2cm} all \hspace{.2cm} a,b \in G_{1}, \hspace{.2cm} f(a *_{1} b) = f(a) *_{2} f(b).}" />
        *25
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