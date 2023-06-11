import { Link } from "react-router-dom";
import "./1.0.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part1_Sec0() {
    
    
    return (
        <div className='container'> 
        <h1>Part 1 Sec. 0 Sets and Relations</h1>
        <div className="sectionText">

      
      <h2>0.1 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} set \hspace{.2cm} B \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subset \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} A, \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} B \subseteq A \hspace{.2cm} or \hspace{.2cm} A \supseteq B, \hspace{.2cm} if \hspace{.2cm} every \hspace{.2cm} element \hspace{.2cm} of \hspace{.2cm} B \hspace{.2cm} is \hspace{.2cm} in \hspace{.2cm} A.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} notations \hspace{.2cm} B \subset A \hspace{.2cm} or \hspace{.2cm} A \supset B \hspace{.2cm} sill \hspace{.2cm} be \hspace{.2cm} used \hspace{.2cm} for \hspace{.2cm} B \subseteq A \hspace{.2cm} but \hspace{.2cm} B \neq A.}" />
        *1
      </p>


      <h2>0.2 Definition</h2>
      <p className="textBorder">
       <p>If A is any set, then A is the improper subset of A. Any other subset of A is a proper subset of A.</p>
        
        *2
      </p>


      <h2>0.4 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} A \hspace{.2cm} and \hspace{.2cm} B \hspace{.2cm} be \hspace{.2cm} sets. \hspace{.2cm} The \hspace{.2cm} set \hspace{.2cm} A \hspace{.2cm} x \hspace{.2cm} B = \{(a,b)| a \in A \hspace{.2cm} and \hspace{.2cm} b \in B \} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} Cartesian \hspace{.2cm} product \hspace{.2cm} of \hspace{.2cm} A \hspace{.2cm} and \hspace{.2cm} B. }" />
        *3
      </p>

      <h2>0.7 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} relation \hspace{.2cm} between \hspace{.2cm} sets \hspace{.2cm} A \hspace{.2cm} and \hspace{.2cm} B \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subset \hspace{.2cm} RRRR \hspace{.2cm} of \hspace{.2cm} A \hspace{.2cm} x \hspace{.2cm} B. \hspace{.2cm} We \hspace{.2cm} read \hspace{.2cm} (a,b) \hspace{.2cm} \in RRRR \hspace{.2cm} as \hspace{.2cm} 'a \hspace{.2cm} is \hspace{.2cm} related \hspace{.2cm} to \hspace{.2cm} b' \hspace{.2cm} and \hspace{.2cm} write \hspace{.2cm} a RRRR b. }" />
        *4
      </p>

      <h2>0.10 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} function \hspace{.2cm} \phi \hspace{.2cm} mapping \hspace{.2cm} X \hspace{.2cm} into \hspace{.2cm} Y \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} relation \hspace{.2cm} between \hspace{.2cm} X \hspace{.2cm} and \hspace{.2cm} Y \hspace{.2cm} with \hspace{.2cm} the \hspace{.2cm} property \hspace{.2cm} that \hspace{.2cm} each \hspace{.2cm} x \in X \hspace{.2cm} appears \hspace{.2cm} as \hspace{.2cm} the \hspace{.2cm} first \hspace{.2cm} member \hspace{.2cm} of \hspace{.2cm} exactly \hspace{.2cm} one \hspace{.2cm} ordered \hspace{.2cm} pair \hspace{.2cm} (x,y) \hspace{.2cm} in \hspace{.2cm} \phi.}" />
        <p>Such a function is also called a map or mapping of X into Y.</p>
        <MathComponent tex="\mathrm{We \hspace{.2cm} write \hspace{.2cm} \phi : X \to Y \hspace{.2cm} and \hspace{.2cm} express \hspace{.2cm} (x,y) \in \phi \hspace{.2cm} by \hspace{.2cm} \phi (x) = y.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} domain \hspace{.2cm} of \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} X \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} Y \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} codomain \hspace{.2cm} of \hspace{.2cm} \phi.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} range \hspace{.2cm} of \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} \phi [x] = \{\phi (x) | x \in X \}.}" />
        *5
      </p>

      <h2>0.12 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} function \hspace{.2cm} \phi : X \to Y \hspace{.2cm} is \hspace{.2cm} one-to-one \hspace{.2cm} or \hspace{.2cm} injective \hspace{.2cm} if \hspace{.2cm} \phi (x_{1}) = \phi (X_{2}) \hspace{.2cm} only \hspace{.2cm} when \hspace{.2cm} x_{1} = x_{2}. }" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} function \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} onto \hspace{.2cm} or \hspace{.2cm} surjective \hspace{.2cm} if \hspace{.2cm} the \hspace{.2cm} range \hspace{.2cm} of \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} Y.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} both \hspace{.2cm} injective \hspace{.2cm} and \hspace{.2cm} surjective, \hspace{.2cm} \phi \hspace{.2cm} is \hspace{.2cm} said \hspace{.2cm} to \hspace{.2cm} be \hspace{.2cm} bijective.}" />
        <p>
          We should mention another terminology, used by the disciples of N. Bourbaki, in case you encounter it elsewhere. In Bourbaki's terminology, a one-to-one map
          is an injection, an onto map is a surjection, and a map that is both one-to-one and onto is a bijection.
        </p>
        *6
      </p>

      <h2>0.13 Definition</h2>
      <p className="textBorder">
       
        <p>
          Two sets X and Y have the same cardinality if there exists a one-to-one function mapping X onto Y, that is, if there exists a one-to-one correspondence
          between X and Y.
        </p>
        *7
      </p>

      <h2>0.16 Definition</h2>
      <p className="textBorder">
       
        <p>
          A partition of a set S is a collection of nonempty subsets of S such that every element of S is in exactly one of the subsets.
          The subsets are the cells of the partition.
        </p>
        *8
      </p>

      <h2>0.18 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{An \hspace{.2cm} equivalence \hspace{.2cm} relation \hspace{.2cm} RRRR \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} S \hspace{.2cm} is \hspace{.2cm} one \hspace{.2cm} that \hspace{.2cm} satisifes \hspace{.2cm} these \hspace{.2cm} three \hspace{.2cm} properties \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} x,y,z \in S.}" />
        <MathComponent tex="\mathrm{\hspace{2cm} 1. \hspace{.2cm} (Reflexive) \hspace{.2cm} x RRRR x.}" />
        <MathComponent tex="\mathrm{\hspace{2cm} 2. \hspace{.2cm} (Symmetric) \hspace{.2cm} If \hspace{.2cm} x RRRR y, \hspace{.2cm} then \hspace{.2cm} y RRRRR x.}" />
        <MathComponent tex="\mathrm{\hspace{2cm} 3. \hspace{.2cm} (Transitive) \hspace{.2cm} If \hspace{.2cm} x RRRR y \hspace{.2cm} and \hspace{.2cm} y RRR z \hspace{.2cm} then \hspace{.2cm} x RRR z.}" />
        *9
      </p>

      <h2>0.22 Theorem</h2>
      <p className="textBorder">
       
       <p>(Equivalence Relations and Partitions) Let S be a nonempty set and let ~ be an equivalence relation on S. Then ~ yields a partition of S, where</p>
        <MathComponent tex="\bar{a} = \{x \in S | x ~ a \}." />
        <p>Also, each partition of S gives rise to an equivalence relation ~ on S where a ~ b if and ony if a and b are in the same cell of the partition.</p>
        *10
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