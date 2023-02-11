import { Link } from "react-router-dom";
import "./6.7.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch6_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 6 Sec. 7 Physical Applications</h1>
        <div className="sectionText">

      <h2>Mass of a One-Dimensional Object</h2>
      <p className="textBorder">
       <p>
        Suppose a thin bar or wire is represented by the interval <MathComponent tex="a \leq x \leq b" /> with a density
        function <MathComponent tex="\rho" /> (with units of mass per length). The <b>mass</b> of the object is
       </p>
        <MathComponent tex="m = \int_{a}^{b} \rho (x) dx" />.
        *279
      </p>


      <h2>Work</h2>
      <p className="textBorder">
       <p>
        The work done by a variable force F moving an obejct along a line from x = a to x = b in the direction of the force is
       </p>
        <MathComponent tex="W = \int_{a}^{b} F(x) dx" />.
        *280
      </p>


      <h2>Solving Pumping Problems</h2>
      <p className="textBorder">
       <div>
        <ol className="textList">
            <li><b>1.</b> Draw a y-axis in the vertical direction (parallel to gravity) and choose a convenient origin.
            Assume the interval [a,b] corresponds to the vertical extent of the fluid.</li>
            <li><b>2.</b> For <MathComponent tex="a \leq y \leq b" />, find the cross-sectionsl area A(y) of the horizontal slices and
            the distance D(y) the slices must be lifted.</li>
            <li><b>3.</b> The work required to lift the water is  <MathComponent tex="W = \int_{a}^{b} \rho gA(y)D(y) dy." /></li>
        </ol>
       </div>
       
        *281
      </p>


      <h2>Solving Force-on-Dam Problems</h2>
      <p className="textBorder">
      <div>
        <ol className="textList">
            <li><b>1.</b> Draw a y-axis on the face of the dam in the vertical direction and choose a convenient origin
            (often taken to be the base of the dam).</li>
            <li><b>2.</b> Find the width function w(y) for each value of y on the face of the dam.</li>
            <li><b>3.</b> If the base of the dam is at y = 0 and the top of the dam is at y = a,
            then the total force on the dam is <MathComponent tex="F = \int_{0}^{a} \rho g(a - y) w(y) dy." /></li>
        </ol>
       </div>
        *282
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