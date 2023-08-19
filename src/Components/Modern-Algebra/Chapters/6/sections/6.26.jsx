import { Link } from "react-router-dom";
import "./6.26.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part6_Sec26() {
    
    
    return (
        <div className='container'> 
        <h1>Part 6 Sction 26 The Field of Quotients of an Integral Domain </h1>
        <div className="sectionText">

      
      <h2>26.2 Definition</h2>
      <p className="textBorder">
       <p>Two elements (a, b) and (c, d) in S are equivalent,</p>
        <MathComponent tex="\mathrm{denoted \hspace{.2cm} by \hspace{.2cm} (a,b) \sim (c,d), \hspace{.2cm}  if \hspace{.2cm}  and \hspace{.2cm}  only \hspace{.2cm} if \hspace{.2cm} ad = bc. }" />
        *127
      </p>


      <h2>26.3 Lemma</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm}  relation \hspace{.2cm} \sim}" />
        <p>between elements of the set S as just described is an equivalence relation.</p>
        *128
      </p>


      <h2>26.4 Lemma</h2>
      <p className="textBorder">
       <p>For [(a, b)] and [(c, d)] in F, the equations</p>
       <p>[(a, b)] + [(c, d)] = [(ad + bc, bd)] </p>
       <p>and</p>
       <p>[(a, b)][(c, d)] = [(ac, bd)] </p>
       <p>give well-defined operations of addition and multiplication on F.</p>
        
        *129
      </p>

      <h2>26.5 Lemma</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} map \hspace{.2cm} i : D \to F \hspace{.2cm}  given \hspace{.2cm} by \hspace{.2cm} i(a) = [(a,1)] }" />
        <p>is an isomorphism of D with a subring D' of F.</p>
        *130
      </p>


      <h2>26.6 Theorem</h2>
      <p className="textBorder">
       <p>
        Any integral domain D can be enlarged to (or embedded in) a field F such that every element of F can be expressed
        as a quotient of two elements of D. (Such a field F is a field of quotients of D.)
       </p>
        
        *131
      </p>


      <h2>26.7 Theorem</h2>
      <p className="textBorder">
       <p>Let F be a field of quotients of D and let L be any field containing D.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} there \hspace{.2cm} exists \hspace{.2cm}  a \hspace{.2cm} map \hspace{.2cm} \psi : F \to L}" />
        <p>that gives an isomorphism of F with a subfield of L such that</p>
        <MathComponent tex="\mathrm{\psi (a) = a \hspace{.2cm} for \hspace{.2cm} a \in D .}" />
        *132
      </p>


      <h2>26.9 Corollary</h2>
      <p className="textBorder">
       <p>Every field L containing an integral domain D contains a field of quotients of D.</p>
        
        *133
      </p>


      <h2>26.10 Corollary</h2>
      <p className="textBorder">
       <p>Any two fields of quotients of an integral domain D are isomorphic.</p>
        
        *134
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