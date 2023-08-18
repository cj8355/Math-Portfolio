import { Link } from "react-router-dom";
import "./3.12.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part3_Sec12() {
    
    
    return (
        <div className='container'> 
        <h1>Part 3 Section 12 Factor Groups</h1>
        <div className="sectionText">

      
      <h2>12.3 Definition</h2>
      <p className="textBorder">
       <p>Let H be a subgroup of G. We say that H is a normal subgroup of G if for all </p>
        <MathComponent tex="\mathrm{g \in G, \hspace{.2cm} gH = Hg.}" />
        <p>If H is a normal subgroup of G, we write</p>
        <MathComponent tex="\mathrm{H \underline {\triangleleft} G.}" />
        *90
      </p>


      <h2>12.7 Theorem</h2>
      <p className="textBorder">
       <p>Let H be a subgroup of a group G. Then left coset multiplication is well defined by the equation</p>
        <MathComponent tex="\mathrm{(aH)(bH) = (ab)H}" />
        <p>if and only if H is a normal subgroup of G.</p>
        *91
      </p>


      <h2>12.8 Corollary</h2>
      <p className="textBorder">
       <p>Let H be a normal subgroup of G. Then the cosets of H form a group G/H under the binary operation (aH)(bH) = (ab) H.</p>
        
        *92
      </p>

      <h2>12.9 Definition</h2>
      <p className="textBorder">
       <p>The group G/H in the preceding corollary is the factor group (or quotient group) of G by H.</p>
        
        *93
      </p>


      <h2>12.12 Theorem</h2>
      <p className="textBorder">
       <p>Let H be a normal subgroup of G.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \gamma : G \to G/H \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} \gamma (x) = xH \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} homomorphism \hspace{.2cm} with \hspace{.2cm} kernel \hspace{.2cm} H. }" />
        *94
      </p>


      <h2>12.14 Theorem</h2>
      <p className="textBorder">
       <p>(The Fundamental Homomorphism Theorem)</p>
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \phi : G \to G' \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} homomorphism \hspace{.2cm} with \hspace{.2cm} kernel \hspace{.2cm} H.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} \phi[G] \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} group, \hspace{.2cm} and \hspace{.2cm} \mu : G/H \to \phi [G] \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} \mu (gH) = \phi (g) \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} isomorphism. }" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} \gamma \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} homomorphism \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} \gamma (g) = gH, \hspace{.2cm} then \hspace{.2cm} \phi (g) = \mu \circ \gamma (g) \hspace{.2cm} for \hspace{.2cm} each \hspace{.2cm} g \in G.}" />
        *95
      </p>


      <h2>12.17 Theorem</h2>
      <p className="textBorder">
       <p>The following are four equivalent conditions for a subgroup H of a group G to be a normal subgroup of G.</p>
        <MathComponent tex="\mathrm{1. \hspace{.2cm} ghg^{-1} \in H \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} g \in G \hspace{.2cm} and \hspace{.2cm} h \in H.}" />
        <MathComponent tex="\mathrm{2. \hspace{.2cm} gHg^{-1} = H \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} g \in G.}" />
        <MathComponent tex="\mathrm{3. \hspace{.2cm} There \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} homomorphism \hspace{.2cm} \phi : G \to G' \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} Ker (\phi) = H.}" />
        <MathComponent tex="\mathrm{4. \hspace{.2cm} gH = Hg \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} g \in G.}" />
        <p>Condition (2) of Theorem 12.17 is often taken as the definition of a normal subgroup H of a group G.</p>
        *96
      </p>


      <h2>12.19 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{An \hspace{.2cm} isomorphism \hspace{.2cm} \phi : G \to G \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} G \hspace{.2cm} with \hspace{.2cm} itself \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} automorphism \hspace{.2cm} of \hspace{.2cm} G.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} automorphism \hspace{.2cm} i_{g} : G \to G, \hspace{.2cm} where \hspace{.2cm} i_{g}(x) = gxg^{-1} \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} x \in G, }" />
        <p>is the inner automorphism of G by g.</p>
        <MathComponent tex="\mathrm{Performing \hspace{.2cm} i_{g} \hspace{.2cm} on \hspace{.2cm} x \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} conjugation \hspace{.2cm} of \hspace{.2cm} x \hspace{.2cm} by \hspace{.2cm} g. }" />
        *97
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