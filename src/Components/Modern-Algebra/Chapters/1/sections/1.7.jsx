import { Link } from "react-router-dom";
import "./1.7.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part1_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Part 1 Section 7 Generating Sets and Cayley Diagraphs</h1>
        <div className="sectionText">

      
      <h2>7.4 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \{S_{i} \vert i \in I \} \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} collection \hspace{.2cm} of \hspace{.2cm} sets.}" />
        <p>Here I may be any set of indices.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} intersection \hspace{.2cm} \bigcap_{i \in I} S_{i} \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} sets \hspace{.2cm} S_{i} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} set \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} elements \hspace{.2cm} that \hspace{.2cm} are \hspace{.2cm} in \hspace{.2cm} all \hspace{.2cm} the \hspace{.2cm} sets \hspace{.2cm} S_{i}; \hspace{.2cm} that \hspace{.2cm} is,}" />
        <MathComponent tex="\mathrm{\bigcap_{i \in I} S_{i} = \{x \vert x \in S_{i} \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} i \hspace{.2cm} \in I \}.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} I \hspace{.2cm} is \hspace{.2cm} finite, \hspace{.2cm} I = \{1,2,...,n \}, \hspace{.2cm} we \hspace{.2cm} may \hspace{.2cm} denote \hspace{.2cm} \bigcap_{i \in I} S_{i} \hspace{.2cm} by}" />
        <MathComponent tex="\mathrm{S_{1} \bigcap S_{2} \bigcap ... \bigcap S_{n}.}" />
        *51
      </p>


      <h2>7.5 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{For \hspace{.2cm} any \hspace{.2cm} group \hspace{.2cm}G \hspace{.2cm} and \hspace{.2cm} any \hspace{.2cm} nonempty \hspace{.2cm} collection \hspace{.2cm} of \hspace{.2cm} subgroups \hspace{.2cm} \{H_{i} \leq G \vert i \in I \},}" />
        <MathComponent tex="\mathrm{the \hspace{.2cm} intersection \hspace{.2cm} of \hspace{.2cm} all \hspace{.2cm} the \hspace{.2cm} subgroups \hspace{.2cm} H_{i}, \hspace{.2cm} \bigcap_{i \in I} H_{i}, \hspace{.2cm} is \hspace{.2cm} also \hspace{.2cm} a \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G.}" />
        *52
      </p>


      <h2>7.6 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} G \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} a_{i} \in G \hspace{.2cm} for \hspace{.2cm} i \in I.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} smallest \hspace{.2cm} subgroup \hspace{.2cm} of \hspace{.2cm} G \hspace{.2cm} containing \hspace{.2cm} \{a_{i} \vert i \in I \} \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} subgroup \hspace{.2cm} generated \hspace{.2cm} by \{a_{i} \vert i \in I \}.}" />
        <p>If this subgroup is all of G,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} \{a_{i} \vert i \in I \} \hspace{.2cm} generates \hspace{.2cm} G \hspace{.2cm} and \hspace{.2cm} the \hspace{.2cm} a_{i} \hspace{.2cm} are \hspace{.2cm} generators \hspace{.2cm} of \hspace{.2cm} G.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} there \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} finite \hspace{.2cm} set \hspace{.2cm} \{a_{i} \vert i \in I \} \hspace{.2cm} that \hspace{.2cm} generates \hspace{.2cm} G, \hspace{.2cm} then \hspace{.2cm} G \hspace{.2cm} is \hspace{.2cm} finitely \hspace{.2cm} generated.}" />
        *53
      </p>


      <h2>7.7 Theorem</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} G \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} group \hspace{.2cm} and \hspace{.2cm} a_{i} \in G \hspace{.2cm} for \hspace{.2cm} i \in I \neq \phi, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} subgroup \hspace{.2cm} H \hspace{.2cm} of \hspace{.2cm} G \hspace{.2cm} generated \hspace{.2cm} by \hspace{.2cm} \{a_{i} \vert i \in I \}}" />
        <p>has as elements precisely those elements of G that are finite products of integral powers of the</p>
        <MathComponent tex="\mathrm{a_{i}, \hspace{.2cm} where \hspace{.2cm} powers \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} fixed \hspace{.2cm} a_{i} \hspace{.2cm} may \hspace{.2cm} occur \hspace{.2cm} several \hspace{.2cm} times \hspace{.2cm} in \hspace{.2cm} the \hspace{.2cm} product.}" />
        *54
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