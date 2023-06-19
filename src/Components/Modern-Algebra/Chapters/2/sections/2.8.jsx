import { Link } from "react-router-dom";
import "./2.8.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part2_Sec8() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. Integration Strategies</h1>
        <div className="sectionText">

      
      <h2>8.1 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G \hspace{.2cm} and \hspace{.2cm} G' \hspace{.2cm} be \hspace{.2cm} groups \hspace{.2cm} with \hspace{.2cm} \phi : G \to G'.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} map \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} homomorphism \hspace{.2cm} if \hspace{.2cm} the \hspace{.2cm} homomorphism \hspace{.2cm} property}" />
        <MathComponent tex="\phi (ab) = \phi (a) \phi (b)" />
        <MathComponent tex="\mathrm{holds \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a, b \in G.}" />
        *55
      </p>


      <h2>8.4 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \phi : X \to Y \hspace{.2cm} and \hspace{.2cm} suppose \hspace{.2cm} that \hspace{.2cm} A \subseteq X \hspace{.2cm} and \hspace{.2cm} B \subseteq Y.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} set \hspace{.2cm} \phi \lbrack A \rbrack = \{\phi (a) \vert a \in A \} \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} image \hspace{.2cm} of \hspace{.2cm} A \hspace{.2cm} in \hspace{.2cm} Y \hspace{.2cm} under \hspace{.2cm} the \hspace{.2cm} mapping \hspace{.2cm} \phi.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} set \hspace{.2cm} \phi ^{-1} \lbrack B \rbrack = \{a \in A \vert \phi (a) \in B \} \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} inverse \hspace{.2cm} image \hspace{.2cm} of \hspace{.2cm} B \hspace{.2cm} under \hspace{.2cm} the \hspace{.2cm} mapping \hspace{.2cm} \phi .}" />
        *56
      </p>


      <h2>8.5 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \phi \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} homomorphism \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} G \hspace{.2cm} into \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} G'.}" />
        <MathComponent tex="\mathrm{\hspace{1cm} 1. \hspace{.2cm} If \hspace{.2cm} e \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} identity \hspace{.2cm} element \hspace{.2cm} in \hspace{.2cm} G, \hspace{.2cm} then \hspace{.2cm} \phi (e) \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} identity \hspace{.2cm} element \hspace{.2cm} e' \hspace{.2cm} in \hspace{.2cm} G'.}" />
        <MathComponent tex="\mathrm{\hspace{1cm} 2. \hspace{.2cm} If a \in G, \hspace{.2cm} then \hspace{.2cm} \phi (a^{-1}) = \phi (a)^{-1}.}" />
        <MathComponent tex="\mathrm{\hspace{1cm} 3. \hspace{.2cm} If \hspace{.2cm} H \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G, \hspace{.2cm} then \hspace{.2cm} \phi \lbrack H \rbrack \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G'.}" />
        <MathComponent tex="\mathrm{\hspace{1cm} 4. \hspace{.2cm} If \hspace{.2cm} K' \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G', \hspace{.2cm} then \hspace{.2cm} \phi ^{-1} \lbrack K' \rbrack \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G.}" />
        <MathComponent tex="\mathrm{Loosely \hspace{.2cm} speaking, \hspace{.2cm} \phi \hspace{.2cm} preserves \hspace{.2cm} the \hspace{.2cm} identity \hspace{.2cm} element, \hspace{.2cm} inverses, \hspace{.2cm} and \hspace{.2cm} subgroups.}" />
        *57
      </p>


      <h2>8.6 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \phi : G \to G' \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} homomorphism \hspace{.2cm} of \hspace{.2cm} groups.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} subgroup \hspace{.2cm} \phi ^{-1} \lbrack \{e' \} \rbrack = \{x \in G \vert \phi (x) = e' \} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} kernel \hspace{.2cm} of \hspace{.2cm} \phi, \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} Ker (\phi).}" />
        *58
      </p>


      <h2>8.10 Definition</h2>
      <p className="textBorder">
       <p>Let G be a group.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} function \hspace{.2cm} \phi : G \to S_{G} \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} \phi (x) = \lambda _{x} \hspace{.2cm} where \hspace{.2cm} \lambda _{x} (g) = xg \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} g \in G \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} left \hspace{.2cm} regular \hspace{.2cm} representation \hspace{.2cm} of \hspace{.2cm} G.}" />
        *59
      </p>


      <h2>8.11 Theorem</h2>
      <p className="textBorder">
       
        <p>(Cayley's Theorem) Every group is isomorphic to a group of permutations.</p>
        *60
      </p>


      <h2>8.13 Definition</h2>
      <p className="textBorder">
       <p>Let G be a group.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} map \hspace{.2cm} \tau : G \to S_{G} \hspace{.2cm} given \hspace{.2cm} by \hspace{.2cm} \tau (x) = \sigma _{x^{-1}} \hspace{.2cm} where \hspace{.2cm} \sigma _{x} (g) = gx \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} right \hspace{.2cm} regular \hspace{.2cm} representation \hspace{.2cm} of \hspace{.2cm} G. }" />
        *61
      </p>


      <h2>8.14 Definition</h2>
      <p className="textBorder">
       
        <p>A cycle of length 2 is a transposition</p>
        *62
      </p>


      <h2>8.15 Theorem</h2>
      <p className="textBorder">
       
        <p>Any permutation of a finitie set containing at least two elements is a product of transpositions.</p>
        *63
      </p>


      <h2>8.19 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{No \hspace{.2cm} permutation \hspace{.2cm} in \hspace{.2cm} S_{n}}" />
        <p>can be expressed both as a product of an even number of transpositions and as a product of an odd number of transpositions.</p>
        *64
      </p>


      <h2>8.22 Definition</h2>
      <p className="textBorder">
       
       <p>
        A permutation of a finite set is even or odd according to whether it can be expressed as a product of an even number of transpositions or the
        product of an odd number of transpositions, respectively.
       </p>
        *65
      </p>



      <h2>8.24 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} n \geq 2, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} collection \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} even \hspace{.2cm} permutations \hspace{.2cm} of \hspace{.2cm} \{1,2,3,...,n \} \hspace{.2cm} forms \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} order \hspace{.2cm} n!/2 \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} symmetric \hspace{.2cm} group \hspace{.2cm} S_{n}.}" />
        *66
      </p>


      <h2>8.25 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} S_{n} \hspace{.2cm} consisting \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} even \hspace{.2cm} permutations \hspace{.2cm} of \hspace{.2cm} n \hspace{.2cm} letters \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} alternating \hspace{.2cm} group \hspace{.2cm} A_{n} \hspace{.2cm} on \hspace{.2cm} n \hspace{.2cm} letters.}" />
        *67
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