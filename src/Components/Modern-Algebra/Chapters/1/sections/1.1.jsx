import { Link } from "react-router-dom";
import "./1.1.css";
import { MathComponent } from "mathjax-react";

export default function ModernAlgebra_Part1_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Part 1 Sec. 1 Binary Operations</h1>
        <div className="sectionText">

      
      <h2>1.1 Definition</h2>
      <p className="textBorder">
       <p>A binary operation * on a set S is a function mapping S x S into S.</p>
        <MathComponent tex="\mathrm{For \hspace{.2cm} each \hspace{.2cm} (a,b) \in S x S, \hspace{.2cm} we \hspace{.2cm} will \hspace{.2cm} denote \hspace{.2cm}  the \hspace{.2cm} element \hspace{.2cm} *((a,b)) \hspace{.2cm} of \hspace{.2cm} S \hspace{.2cm} by \hspace{.2cm} a * b.}" />
        *11
      </p>


      <h2>1.4 Definition</h2>
      <p className="textBorder">
       <p>Let * be an operation on S and let H be a subset of S.</p>
        <MathComponent tex="\mathrm{The \hspace{.2cm} subset \hspace{.2cm} H \hspace{.2cm} is \hspace{.2cm} closed \hspace{.2cm} under \hspace{.2cm} * \hspace{.2cm} if \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a,b \in H \hspace{.2cm} we \hspace{.2cm} also \hspace{.2cm} have \hspace{.2cm} a * b \in H.}" />
        <p>In this case, the operation on H given by restricting * to H is the induced operation of * on H.</p>
        *12
      </p>


      <h2>1.11 Definition</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{An \hspace{.2cm} operation \hspace{.2cm} * \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} S \hspace{.2cm} is \hspace{.2cm} commutative \hspace{.2cm} if \hspace{.2cm} (and \hspace{.2cm} only \hspace{.2cm} if) \hspace{.2cm} a * b = b * a \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a,b \in S.}" />
        *13
      </p>


      <h2>1.12</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{An \hspace{.2cm} operation \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} S \hspace{.2cm} is \hspace{.2cm} associative \hspace{.2cm} if \hspace{.2cm} (a*b)*c = a*(b*c) \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a,b,c \in S.}" />
        *14
      </p>



      <h2>1.13 Theorem</h2>
      <p className="textBorder">
       <p>(Associativity of Composition) LEt S be a set and let f, g, and h be functions mapping S into S.</p>
        <MathComponent tex="\mathrm{Then \hspace{.2cm} f \circ (g \circ h)= (f \circ g) \circ h.}" />.
        *15
      </p>


      <h2>1.14 Definition</h2>
      <p className="textBorder">
       <p>Let S be a set with binary operation *.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} e \in S \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} property \hspace{.2cm} that \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} a \in S, \hspace{.2cm} a * e = e * a = a, \hspace{.2cm} then \hspace{.2cm} e \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} an \hspace{.2cm} identity \hspace{.2cm} element \hspace{.2cm} for \hspace{.2cm} *.}" />
        *16
      </p>



      <h2>1.15 Theorem</h2>
      <p className="textBorder">
       <p>(Uniqueness of Identity) A set with binary operation * has at most one identity element.</p>
        
        *17
      </p>


      <h2>1.17 Definition</h2>
      <p className="textBorder">
       <p>If * is an operation on the set S and S has an identity e,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} for \hspace{.2cm} any \hspace{.2cm} x \in S, \hspace{.2cm} the \hspace{.2cm} inverse \hspace{.2cm} of \hspace{.2cm} x \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} element \hspace{.2cm} x' \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} x * x' = x' * x = e. }" />
        *18
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