import { Link } from "react-router-dom";
import "./14.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch14_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 14 Sec. 4 Length of Curves</h1>
        <div className="sectionText">

      
      <h2>Arc Length for Vector Functions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Consider \hspace{.2cm} the \hspace{.2cm} parameterized \hspace{.2cm} curve \hspace{.2cm} r(t) = \langle f(t), g(t), h(t) \rangle ,}" />
        <p>where f', g', and h' are continuous, and the curve is traversed once for </p>
        <MathComponent tex="a \leq t \leq b." />
        <p>The arc length of the curve between (f(a), g(a), h(a)) and (f(b), g(b), h(b)) is</p>
        <MathComponent tex="L = \int_{a}^{b} \sqrt{f'(t)^{2} + g'(t)^{2} + h'(t)^{2}} \hspace{.2cm} dt = \int_{a}^{b} \vert r'(t) \vert \hspace{.2cm} dt." />
        *515
      </p>


      <h2></h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} r(t) \hspace{.2cm} describe \hspace{.2cm} a \hspace{.2cm} smooth \hspace{.2cm} curve, \hspace{.2cm} for \hspace{.2cm} t \geq a.}" />
        <p>The arc length is given by</p>
        <MathComponent tex="s(t) = \int_{a}^{t} \vert v(u) \vert \hspace{.2cm} du," />
        <p>where |v| = |r'|. Equivalently,</p>
        <MathComponent tex="\frac{ds}{dt} = \vert v(t) \vert . \hspace{.2cm} If \hspace{.2cm} \vert v(t) \vert = 1, \hspace{.2cm} for \hspace{.2cm} all \hspace{.2cm} t \geq a," />
        <p>then the parameter t corresponds to arc length</p>
        *516
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