import { Link } from "react-router-dom";
import "./1.5.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part1_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Part 1 Section 5 Subgroups</h1>
        <div className="sectionText">

      
      <h2>5.1 Definition</h2>
      <p className="textBorder">
       <p>If a subset H of a group G is closed under the binary operation of G and if H with the induced operation from G is itself a group, then H is a subgroup of G.</p>
        <MathComponent tex="\mathrm{We \hspace{.2cm} shall \hspace{.2cm} let \hspace{.2cm} H \leq G \hspace{.2cm} or \hspace{.2cm} G \geq H \hspace{.2cm} denote \hspace{.2cm} H \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G, \hspace{.2cm} and \hspace{.2cm} H < G \hspace{.2cm} or \hspace{.2cm} G > H \hspace{.2cm} shall \hspace{.2cm} mean \hspace{.2cm} H \leq G \hspace{.2cm} but \hspace{.2cm} H \neq G.}" />
        *34
      </p>


      <h2>5.2 Definition</h2>
      <p className="textBorder">
       <p>
        If G is a group, then the subgroup consisting of G itself is the improper subgroup of G. All other subgroups are proper subgroups.
       </p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} subgroup \hspace{.2cm} \{e \} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} trivial \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G.}" />
        <p>All other subgroups are nontrivial.</p>
        *35
      </p>


      <h2>5.12 Theorem</h2>
      <p className="textBorder">
       <p>A subset H of a group G is a subgroup of G if and only if</p>
       <p>1. H is closed under the binary operation of G,</p>
       <p>2. the identity element e of G is in H, and</p>
        <MathComponent tex="\mathrm{3. \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a \in H, \hspace{.2cm} a^{-1} \in H \hspace{.2cm} also.}" />
        *36
      </p>


      <h2>5.15 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{A \hspace{.2cm} nonempty \hspace{.2cm} subset \hspace{.2cm} H \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} group \hspace{.2cm} G \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G \hspace{.2cm} iff \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a,b \in G, \hspace{.2cm} ab^{-1} \in G.}" />
        *37
      </p>


      <h2>5.16 Theorem</h2>
      <p className="textBorder">
       
        <p>
            Let H be a finite nonempty subset of the group G. THen H is a subgroup of G iff H is closed under the operation of G.
        </p>
        *38
      </p>


      <h2>5.19 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} a \in G. \hspace{.2cm} Then}" />
        <MathComponent tex="\mathrm{H = \{a^{n} | n \in Z \}}" />
        <p>is a subgroup of G and is the smallest subgroup of G that contains "a", that is, every subgroup containing "a" contains H.</p>
        *39
      </p>


      <h2>5.20 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} a \in G.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} the \hspace{.2cm} subgroup \hspace{.2cm} \{a^{n} | n \in Z \} \hspace{.2cm} of \hspace{.2cm} G, \hspace{.2cm} characterized \hspace{.2cm} in \hspace{.2cm} Theorem \hspace{.2cm} 5.19, \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} cyclic \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G \hspace{.2cm} generated \hspace{.2cm} by \hspace{.2cm} a, \hspace{.2cm} and \hspace{.2cm} denoted \hspace{.2cm} by \hspace{.2cm} \langle a \rangle .}" />
        *40
      </p>


      <h2>5.22 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{An \hspace{.2cm} element \hspace{.2cm} a \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} G \hspace{.2cm} generates \hspace{.2cm} G \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} generator \hspace{.2cm} for \hspace{.2cm} G \hspace{.2cm} if \hspace{.2cm} \langle a \rangle = G.}" />
        <p>A group G is cyclic if there is some element a in G that generates G.</p>
        *41
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