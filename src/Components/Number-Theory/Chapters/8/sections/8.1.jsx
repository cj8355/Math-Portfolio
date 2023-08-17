import { Link } from "react-router-dom";
import "./8.1.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch8_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 1 Character Ciphers </h1>
        <div className="sectionText">

      
      <h2>The Numerical Equivalent of Letters</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\begin{array} {|r|r|}\hline Letter & A & B & C & D & E & F & G & H & I & J & K & L & M \\ \hline Numerical \hspace{.1cm} Equivalent & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\ \hline  \end{array}}" />
        <MathComponent tex="\mathrm{\begin{array} {|r|r|}\hline Letter & N & O & P & Q & R & S & T & U & V & W & X & Y & Z \\ \hline Numerical \hspace{.1cm} Equivalent & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 & 25 \\ \hline  \end{array}}" />
        *133
      </p>


      <h2>Affline Transformation</h2>
      <p className="textBorder">
       <p>The Caesar cipher is one of a family of similar ciphers describes by a shift transformation,</p>
        <MathComponent tex="\mathrm{C \equiv P + k (mod \hspace{.1cm} 26), \hspace{1cm} 0 \leq C \leq 25,}" />
        <p>
            where k is the key representing the size of the shift of letters in the alphabet. There are 26 different transformations of this type,
            including the case of 
        </p>
        <MathComponent tex="\mathrm{k \equiv 0 (mod \hspace{.1cm} 26)}" />
        <p>where letters are not altered, because in this case</p>
        <MathComponent tex="\mathrm{C \equiv P (mod \hspace{.1cm} 26)}" />
        *134
      </p>


      <h2>The Frequencies of Occurrence of the Letters of the Alphabet</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{\begin{array} {|r|r|}\hline Letter & A & B & C & D & E & F & G & H & I & J & K & L & M \\ \hline Frequency (in \%) & 7 & 1 & 3 & 4 & 13 & 3 & 2 & 3 & 8 & < 1 & < 1 & 4 & 3 \\ \hline  \end{array}}" />
        <MathComponent tex="\mathrm{\begin{array} {|r|r|}\hline Letter & N & O & P & Q & R & S & T & U & V & W & X & Y & Z \\ \hline Frequency (in \%) & 8 & 7 & 3 & < 1 & 8 & 6 & 9 & 3 & 1 & 1 & < 1 & 2 & < 1 \\ \hline  \end{array}}" />
        *135
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