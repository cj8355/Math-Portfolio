import { Link } from "react-router-dom";
import "./4.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch4_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 1 Intorduction to Congruences</h1>
        <div className="sectionText">

      
      <h2>Definition</h2>
      <p className="textBorder">
       <p>
        Let m be a positive integer. If a and b are integers, we say that a is congruent to b modulo m if m | (a - b).
       </p>
        
        *74
      </p>


      <h2>Theorem 4.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} integers, \hspace{.2cm} then \hspace{.2cm} a \equiv b \hspace{.2cm} (mod \hspace{.2cm} m)}" />
        <p>if and only if there is an integer k such that a = b + km.</p>
        *75
      </p>


      <h2>Theorem 4.2</h2>
      <p className="textBorder">
       <p>Let m be a positive integer. Congruences modulo m satisy the following properties:</p>
       <p>(i) Reflexive property</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer, \hspace{.2cm} then \hspace{.2cm} a \equiv a (mod \hspace{.2cm} m).}" />
        <p>(ii) Symmetric property</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m), \hspace{.2cm} then \hspace{.2cm} b \equiv a (mod \hspace{.2cm} m).}" />
        <p>(iii) Transitive property</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} a, \hspace{.2cm} b, \hspace{.2cm} and \hspace{.2cm} c \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} with \hspace{.2cm} a \equiv b(mod \hspace{.2cm} m) \hspace{.2cm} and \hspace{.2cm} b \equiv c(mod \hspace{.2cm} m) \hspace{.2cm} and \hspace{.2cm} b \equiv c (mod \hspace{.2cm} m), \hspace{.2cm}then \hspace{.2cm} a \equiv c (mod \hspace{.2cm} m).}" />
        *76
      </p>


      <h2>Theorem 4.3</h2>
      <p className="textBorder">
       <p>If a and b are intgers and m is a positive integer,</p>
        <MathComponent tex="\mathrm{then \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m) \hspace{.2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{.2cm} a \hspace{.2cm} mod \hspace{.2cm} m = b \hspace{.2cm} mod \hspace{.2cm} m.}" />
        *77
      </p>

      <h2>Definition</h2>
      <p className="textBorder">
       <p>
        A complete system of residues modulo m is a set of integers such that every integer is congruent modulo m to exactly one integer of the set.
       </p>
        
        *78
      </p>


      <h2>Theorem 4.4</h2>
      <p className="textBorder">
       <p>If a, b, c, and m are integers,</p>
        <MathComponent tex="\mathrm{with \hspace{.2cm} m > 0, \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m), \hspace{.2cm} then}" />
        <MathComponent tex="\mathrm{(i) \hspace{1cm} a + c \equiv b + c (mod \hspace{.2cm} m),}" />
        <MathComponent tex="\mathrm{(ii) \hspace{1cm} a - c \equiv b - c (mod \hspace{.2cm} m),}" />
        <MathComponent tex="\mathrm{(iii) \hspace{1cm} ac \equiv bc (mod \hspace{.2cm} m).}" />
        *79
      </p>


      <h2>Theorem 4.5</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a, \hspace{.2cm} b, \hspace{.2cm} c, \hspace{.2cm} and \hspace{.2cm} m \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} m > 0,}" />
        <MathComponent tex="\mathrm{d = (c,m), \hspace{.2cm} and \hspace{.2cm} ac \equiv bc (mod \hspace{.2cm} m), \hspace{.2cm} then \hspace{.2cm} a \equiv b(mod \hspace{.2cm} m/d).}" />
        *80
      </p>

      <h2>Corollary 4.5.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a, \hspace{.2cm} b, \hspace{.2cm} c, \hspace{.2cm} and \hspace{.2cm} m \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} m > 0,}" />
        <MathComponent tex="\mathrm{(c,m) = 1, \hspace{.2cm} and \hspace{.2cm} ac \equiv bc (mod \hspace{.2cm} m), \hspace{.2cm} then \hspace{.2cm} a \equiv b(mod \hspace{.2cm} m).}" />
        *81
      </p>

      <h2>Theorem 4.6</h2>
      <p className="textBorder">
        <MathComponent tex="\mathrm{If \hspace{.2cm} a, \hspace{.2cm} b, \hspace{.2cm} c, \hspace{.2cm} d, \hspace{.2cm} and \hspace{.2cm} m \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} m > 0,}" />
        <MathComponent tex="\mathrm{a \equiv b (mod \hspace{.2cm} m), \hspace{.2cm} and \hspace{.2cm} c \equiv d (mod \hspace{.2cm} m), \hspace{.2cm} then}" />
        <MathComponent tex="\mathrm{(i) \hspace{1cm} a + c \equiv b + d (mod \hspace{.2cm} m),}" />
        <MathComponent tex="\mathrm{(ii) \hspace{1cm} a - c \equiv b - d (mod \hspace{.2cm} m),}" />
        <MathComponent tex="\mathrm{(iii) \hspace{1cm} ac \equiv bd (mod \hspace{.2cm} m).}" />
        *82
      </p>

      <h2>Lemma 4.1</h2>
      <p className="textBorder">
       <p>
        A set of m incongruent integers modulo m forms a complete set of residues modulo m.
       </p>
        
        *83
      </p>

      <h2>Theorem 4.7</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} r_{1}, r_{2},..., r_{m} \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} complete \hspace{.2cm} system \hspace{.2cm} of \hspace{.2cm} residues \hspace{.2cm} modulo \hspace{.2cm} m,}" />
        <p>and if a is a positive integer with (a,m) = 1, then</p>
        <MathComponent tex="\mathrm{ar_{1} + b, ar_{2} + b,...,ar_{m} + b}" />
        <p>is a complete system of resideues modulo m for any integer b.</p>
        *84
      </p>

      <h2>Theorem 4.8</h2>
      <p className="textBorder">
       <p>If a, b, k, and m are integers such that</p>
        <MathComponent tex="\mathrm{k > 0, m > 0, \hspace{.2cm} and \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m), \hspace{.2cm} then \hspace{.2cm} a^{k} \equiv b^{k} (mod \hspace{.2cm} m).}" />
        *85
      </p>

      <h2>Theorem 4.9</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{1}), \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{2}),..., \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{k}),}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} a, b, m_{1}, m_{2},..., m_{k} \hspace{.2cm} are \hspace{.2cm} integers \hspace{.2cm} with \hspace{.2cm} m_{1}, m_{2},..., m_{k} \hspace{.2cm} positive, \hspace{.2cm} then}" />
        <MathComponent tex="\mathrm{a \equiv b (mod \hspace{.2cm} [m_{1}, m_{2},..., m_{k}]),}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} [m_{1}, m_{2},...,m_{k}] \hspace{.2cm} denotes \hspace{.2cm} the \hspace{.2cm} least \hspace{.2cm} common \hspace{.2cm} multiple \hspace{.2cm} of \hspace{.2cm} m_{1}, m_{2},..., m_{k}.}" />
        *86
      </p>

      <h2>Corollary 4.9.1</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{If \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{1}), \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{2}),..., \hspace{.2cm} a \equiv b (mod \hspace{.2cm} m_{k}),}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} are \hspace{.2cm} intgers \hspace{.2cm} and \hspace{.2cm} m_{1}, m_{2},..., m_{k}}" />
        <p>are pairwise relatively prime positive integers, then</p>
        <MathComponent tex="\mathrm{a \equiv b (mod \hspace{.2cm} m_{1}m_{2}... m_{k}).}" />
        *87
      </p>

      <h2>Theorem 4.10</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} b, \hspace{.2cm} m, \hspace{.2cm} and \hspace{.2cm} N \hspace{.2cm} be \hspace{.2cm} positive \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} b < m.}" />
        <MathComponent tex="\mathrm{Then \hspace{.2cm} the \hspace{.2cm} least \hspace{.2cm} positive \hspace{.2cm} residue \hspace{.2cm} of \hspace{.2cm} b^{N} \hspace{.2cm} modulo \hspace{.2cm} m \hspace{.2cm} can \hspace{.2cm} be }" />
        <MathComponent tex="\mathrm{computed \hspace{.2cm} using \hspace{.2cm} O((log_{2}m)^{2}log_{2} N) \hspace{.2cm} bit \hspace{.2cm} operations.}" />
        *88
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