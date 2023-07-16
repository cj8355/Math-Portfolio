import { Link } from "react-router-dom";
import "./4.2.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch4_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 2 Linear Congruences</h1>
        <div className="sectionText">

      
      <h2>Linear Congruences</h2>
      <p className="textBorder">
       <p>A congruence of the form</p>
        <MathComponent tex="\mathrm{ax \equiv b (mod \hspace{.2cm} m),}" />
        <p>where x is an unknown integer, is called a linear congruence in one variable.</p>
        *89
      </p>


      <h2>Theorem 4.11</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} a, \hspace{.2cm} b, \hspace{.2cm} and \hspace{.2cm} m \hspace{.2cm} be \hspace{.2cm} integers \hspace{.2cm} such \hspace{.2cm} that \hspace{.2cm} m > 0 \hspace{.2cm} and \hspace{.2cm} (a,m) = d.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} d \not{|} b, \hspace{.2cm} then \hspace{.2cm} ax \equiv b (mod \hspace{.2cm} m) \hspace{.2cm} has \hspace{.2cm} no \hspace{.2cm} solutions.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} d|b, \hspace{.2cm} then \hspace{.2cm} ax \equiv b (mod \hspace{.2cm} m) \hspace{.2cm} has \hspace{.2cm} exactly \hspace{.2cm} d \hspace{.2cm} incongruent \hspace{.2cm} solutions \hspace{.2cm} modulo \hspace{.2cm} m.}" />
        *90
      </p>


      <h2>Corollary 4.11.1</h2>
      <p className="textBorder">
       <p>If a and m are relatively prime integers with</p>
        <MathComponent tex="\mathrm{m > 0 \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} integer, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} linear \hspace{.2cm} congruence}" />
        <MathComponent tex="\mathrm{ax \equiv b (mod \hspace{.2cm} m) \hspace{.2cm} has \hspace{.2cm} a \hspace{.2cm} unique \hspace{.2cm} solution \hspace{.2cm} modulo \hspace{.2cm} m.}" />
        *91
      </p>


      <h2>Definition of Modular Inverses</h2>
      <p className="textBorder">
       <p>Given an integer a with (a,m) = 1, an integer solution x of</p>
        <MathComponent tex="\mathrm{ax \equiv 1 (mod \hspace{.2cm} m) \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} an \hspace{.2cm} inverse \hspace{.2cm} of \hspace{.2cm} a \hspace{.2cm} modulo \hspace{.2cm} m.}" />
        *92
      </p>


      <h2>Theorem 4.12</h2>
      <p className="textBorder">
        <p>Let p be prime. The positive integer a is its own inverse modulo p if and only if</p>
        <MathComponent tex="\mathrm{a \equiv 1 (mod \hspace{.2cm} p) \hspace{.2cm} or \hspace{.2cm} a \equiv -1 (mod \hspace{.2cm} p).}" />
        *93
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