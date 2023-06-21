import { Link } from "react-router-dom";
import "./2.10.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part2_Sec10() {
    
    
    return (
        <div className='container'> 
        <h1>Part 2 Section 10 Cosets and the Theorem of Lagrange</h1>
        <div className="sectionText">

      
      <h2>10.1 Theorem</h2>
      <p className="textBorder">
       <p>Let H be a subgroup of G.</p>
        <MathComponent tex="\mathrm{Let \hspace{.2cm} the \hspace{.2cm} relation \hspace{.2cm} \sim_{L} \hspace{.2cm} be \hspace{.2cm} defined \hspace{.2cm} on \hspace{.2cm} G \hspace{.2cm} by}" />
        <MathComponent tex="\mathrm{a \sim_{L} b \hspace{2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{2cm} a^{-1}b \in H.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \sim_{L} \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} equivalence \hspace{.2cm} relation \hspace{.2cm} on \hspace{.2cm} G.}" />
        *80
      </p>


      <h2>10.2 Definition</h2>
      <p className="textBorder">
       <p>Let H be a subgroup of a group G.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} subset \hspace{.2cm} of \hspace{.2cm} aH = \{ah | h \in H \} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} left \hspace{.2cm} coset \hspace{.2cm} of \hspace{.2cm} H \hspace{.2cm} containing \hspace{.2cm} a.}" />
        *81
      </p>


      <h2>10.6 Theorem</h2>
      <p className="textBorder">
      <p>Let H be a subgroup of a group G.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} for \hspace{.2cm} any \hspace{.2cm} a \in G, \hspace{.2cm} the \hspace{.2cm} coset \hspace{.2cm} aH \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} same \hspace{.2cm} cardinality \hspace{.2cm} as \hspace{.2cm} H.}" />
        *82
      </p>


      <h2>10.7 Theorem</h2>
      <p className="textBorder">
       
        <p>(Theorem of Lagrange) Let H be a subgroup of a finite group G. Then the order of H is a divisor of the order of G.</p>
        *83
      </p>


      <h2>10.8 Corollary</h2>
      <p className="textBorder">
       
        <p>Every group of prime order is cyclic.</p>
        *84
      </p>


      <h2>10.9 Theorem</h2>
      <p className="textBorder">
       
        <p>The order of an element of a finite group divides the order of the group.</p>
        *85
      </p>


      <h2>10.10 Definition</h2>
      <p className="textBorder">
      <p>Let H be a subgroup of a group G.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} number \hspace{.2cm} of \hspace{.2cm} left \hspace{.2cm} cosets \hspace{.2cm} of \hspace{.2cm} H \hspace{.2cm} in \hspace{.2cm} G \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} index \hspace{.2cm} (G:H) \hspace{.2cm} of \hspace{.2cm} H \hspace{.2cm} in \hspace{.2cm} G.}" />
        *86
      </p>


      <h2>10.11 Theorem</h2>
      <p className="textBorder">
       <p>Suppose H and K are subgroups of a group G such that</p>
        <MathComponent tex="\mathrm{K \leq H \leq G, \hspace{.2cm} and \hspace{.2cm} suppose \hspace{.2cm} (H:K) \hspace{.2cm} and \hspace{.2cm} (G:H) \hspace{.2cm} are \hspace{.2cm} both \hspace{.2cm} finite.}" />
        <p>Then (G : K) is finite, and (G : K) = (G : H)(H : K)</p>
        *87
      </p>


      <h2>10.17 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \phi : G \to G^{'} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} homomorphism.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} the \hspace{.2cm} left \hspace{.2cm} and \hspace{.2cm} right \hspace{.2cm} cosets \hspace{.2cm} of \hspace{.2cm} Ker(\phi) \hspace{.2cm} are \hspace{.2cm} identical.}" />
        <MathComponent tex="\mathrm{Furthermore, \hspace{.2cm} a,b \in G \hspace{.2cm} are \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} same \hspace{.2cm} coset \hspace{.2cm} of \hspace{.2cm} Ker(\phi) \hspace{.2cm} iff \hspace{.2cm} \phi (a) = \phi (b).}" />
        *88
      </p>


      <h2>10.19 Corollary</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} homomorphism \hspace{.2cm} \phi : G \to G^{'} \hspace{.2cm} is \hspace{.2cm} one-to-one \hspace{.2cm} iff \hspace{.2cm} Ker (\phi) \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} trivial \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G.}" />
        *89
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