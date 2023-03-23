import { Link } from "react-router-dom";
import "./13.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch13_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 2 Vectors in Three Dimensions</h1>
        <div className="sectionText">

      
      <h2>Distance Formula in xyz-Space</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} distance \hspace{.2cm} betweeen \hspace{.2cm} the \hspace{.2cm} points \hspace{.2cm} P(x_{1}, y_{1}, z_{1}) \hspace{.2cm} and \hspace{.2cm} Q(x_{2}, y_{2}, z_{2}) \hspace{.2cm} is}" />
        <MathComponent tex="\sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2} + (z_{2} - z_{1})^{2}}." />
        *454
      </p>


      <h2>Spheres and Balls</h2>
      <p className="textBorder">
       <p>
        A sphere centered at (a,b,c) with radius r is the set of points satisfying the equation
       </p>
        <MathComponent tex="(x-a)^{2} + (y-b)^{2} + (z-c)^{2} = r^{2}." />
        <p>A ball centered at (a,b,c) with radius r is the set of points satisfying the inequality</p>
        <MathComponent tex="(x-a)^{2} + (y-b)^{2} + (z-c)^{2} \leq r^{2}." />
        *455
      </p>


      <h2><MathComponent tex="\mathrm{Vector \hspace{.2cm} Operations \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2}}" /></h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} c \hspace{.2cm} be \hspace{.2cm} a \hspace{.2cm} scalar, \hspace{.2cm} u = \langle u_{1}, u_{2}, u_{3} \rangle , \hspace{.2cm} and \hspace{.2cm} v = \langle v_{1}, v_{2}, v_{3} \rangle .}" />
        <MathComponent tex="u + v = \langle u_{1} + v_{1}, u_{2} + v_{2}, u_{3} + v_{3} \rangle \hspace{1cm} \mathrm{Vector \hspace{.2cm} addition}" />
        <MathComponent tex="u - v = \langle u_{1} - v_{1}, u_{2} - v_{2}, u_{3} - v_{3} \rangle \hspace{1cm} \mathrm{Vector \hspace{.2cm} subtraction}" />
        <MathComponent tex="cu = \langle cu_{1}, cu_{2}, cu_{3} \rangle \hspace{1cm} \mathrm{Scalar \hspace{.2cm} multiplication}" />
        *456
      </p>


      <h2>Magnitude of a Vector</h2>
      <p className="textBorder">
       <p>The magnitude (or length) of the vector</p>
        <MathComponent tex="\overrightarrow{PQ} = \langle x_{2} - x_{1}, y_{2} - y_{1}, z_{2} - z_{1} \rangle " />
        <MathComponent tex="\mathrm{is \hspace{.2cm} the \hspace{.2cm} distance \hspace{.2cm} from \hspace{.2cm} P(x_{1}, y_{1}, z_{1}) \hspace{.2cm} to \hspace{.2cm} Q(x_{2}, y_{2}, z_{2}):}" />
        <MathComponent tex="\vert \overrightarrow{PQ} \vert = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2} + (z_{2} - z_{1})^{2}}." />
        *457
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Identifying sets</h4>
                      <p>
                        Give a geometric description of the following sets of points.
                      </p>
                      <MathComponent tex="(x-1)^{2} + y^{2} + z^{2} - 9 = 0" />
                     
                    <p>
                        Answer: <br/>
                         <p>A sphere centered at (1,0,0) with radius 3</p>   
                         
                    </p>

                    *458
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Identifying sets</h4>
                      <p>
                        Give a geometric description of the following sets of points.
                      </p>
                      <MathComponent tex="x^{2} + y^{2} - 14y + z^{2} \geq -13" />
                     
                    <p>
                        Answer: <br/>
                         <p>All points on or outside the sphere with center (0,7,0) with radius 6</p>   
                         
                    </p>

                    *459
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Vector operations</h4>
                      <p>
                        For the given vectors u and v, evaluate the following expressions.
                      </p>
                      <p>a. 3u + 2v b. 4u - v c. |u + 3v|</p>
                      <MathComponent tex="u = \langle 4,-3,0 \rangle, \hspace{.2cm} v = \langle 0,1,1 \rangle" /> 
                    <p>
                        Answer: <br/>
                         <MathComponent tex="a. \hspace{.2cm} \langle 12,-7,2 \rangle" /> 
                         <MathComponent tex="b. \hspace{.2cm} \langle 16,-13,-1 \rangle" /> 
                         <MathComponent tex="c. \hspace{.2cm} 5" />    
                         
                    </p>

                    *460
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Vector operations</h4>
                      <p>
                        For the given vectors u and v, evaluate the following expressions.
                      </p>
                      <p>a. 3u + 2v b. 4u - v c. |u + 3v|</p>
                      <MathComponent tex="u = \langle -2,1,-2 \rangle, \hspace{.2cm} v = \langle 1,1,1 \rangle" /> 
                    <p>
                        Answer: <br/>
                         <MathComponent tex="a. \hspace{.2cm} \langle -4,5,-4 \rangle" /> 
                         <MathComponent tex="b. \hspace{.2cm} \langle -9,3,-9 \rangle" /> 
                         <MathComponent tex="c. \hspace{.2cm} 3 \sqrt{2}" />    
                         
                    </p>

                    *461
                    </div>
                </div>


            

            </div>
            </div>
           
    );
}