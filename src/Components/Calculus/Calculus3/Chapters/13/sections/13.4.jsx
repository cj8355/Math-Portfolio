import { Link } from "react-router-dom";
import "./13.4.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch13_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 4 Cross Products</h1>
        <div className="sectionText">

      
      <h2>Cross Product</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Given \hspace{.2cm} two \hspace{.2cm} nonzero \hspace{.2cm} vectors \hspace{.2cm} u \hspace{.2cm} and \hspace{.2cm} v \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3},}" />
        <p>the cross product u x v is a vector with magnitude</p>
        <MathComponent tex="\vert u \hspace{.2cm} x \hspace{.2cm} v \vert = \vert u \vert \vert v \vert \hspace{.2cm} sin \hspace{.2cm} \theta ," />
        <MathComponent tex="\mathrm{where \hspace{.2cm} 0 \leq \theta \leq \pi \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} angle \hspace{.2cm} between \hspace{.2cm} u \hspace{.2cm} and \hspace{.2cm} v.}" />
        <p>
        The direction of u x v is given by the right-hand rule: When you put the vectors tail to tail and let the fingers of
        your right hand curl from u to v, the direction of u x v is the direction of your thumb, orthogonal to both u and v.
        When u x v = 0, the direction of u x v is undefined.
        </p>
        *472
      </p>


      <h2>Geometry of the Cross Product</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} u \hspace{.2cm} and \hspace{.2cm} v \hspace{.2cm} be \hspace{.2cm} two \hspace{.2cm} nonzero \hspace{.2cm} vectors \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3},}" />
        <p>1. The vectors u and v are parallel </p>
        <MathComponent tex="(\theta = 0 \hspace{.2cm} \mathrm{or} \hspace{.2cm} \theta = \pi)" />
        <p>if and only if u x v = 0.</p>
        <p>2. If u and v are two sides of a parallelogram, then the area of the parallelogram is</p>
        <MathComponent tex="\vert u \hspace{.2cm} x \hspace{.2cm} v \vert = \vert u \vert \vert v \vert \hspace{.2cm} sin \hspace{.2cm} \theta ." />
        *473
      </p>


      <h2>Properties of the Cross Product</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} u, \hspace{.2cm} v, \hspace{.2cm} and \hspace{.2cm} w \hspace{.2cm} be \hspace{.2cm} nonzero \hspace{.2cm} vectors \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{3}, \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} a \hspace{.2cm} and \hspace{.2cm} b \hspace{.2cm} be \hspace{.2cm} scalars.}" />
        <MathComponent tex="1. \hspace{.2cm} u \hspace{.2cm} x \hspace{.2cm} v = -(v \hspace{.2cm} x \hspace{.2cm} u) \hspace{1cm} \mathrm{Anticommutative \hspace{.2cm} property}" />
        <MathComponent tex="2. \hspace{.2cm} (au) \hspace{.2cm} x \hspace{.2cm} (bv) = ab(u \hspace{.2cm} x \hspace{.2cm} v) \hspace{1cm} \mathrm{Associative \hspace{.2cm} property}" />
        <MathComponent tex="3. \hspace{.2cm} u \hspace{.2cm} x \hspace{.2cm} (v \hspace{.2cm} + \hspace{.2cm} w) = (u \hspace{.2cm} x \hspace{.2cm} v) + (u \hspace{.2cm} x \hspace{.2cm} w) \hspace{1cm} \mathrm{Distributive \hspace{.2cm} property}" />
        <MathComponent tex="4. \hspace{.2cm} (u + v) \hspace{.2cm} x \hspace{.2cm} w = (u \hspace{.2cm} x \hspace{.2cm} w) + (v \hspace{.2cm} x \hspace{.2cm} w) \hspace{1cm} \mathrm{Distributive \hspace{.2cm} property}" />
        *474
      </p>



      <h2>Cross Products of Coordinate Unit Vectors</h2>
      <p className="textBorder">
       <div className="splitContainer">
        <div>
        <MathComponent tex="\mathrm{i \hspace{.2cm} x \hspace{.2cm} j = -(j \hspace{.2cm} x \hspace{.2cm} i) = k}" />
        <MathComponent tex="\mathrm{k \hspace{.2cm} x \hspace{.2cm} i = -(i \hspace{.2cm} x \hspace{.2cm} k) = j}" />
        </div>
        <div>
        <MathComponent tex="\mathrm{j \hspace{.2cm} x \hspace{.2cm} k = -(k \hspace{.2cm} x \hspace{.2cm} j) = i}" />
        <MathComponent tex="\mathrm{i \hspace{.2cm} x \hspace{.2cm} i = j \hspace{.2cm} x \hspace{.2cm} j = k \hspace{.2cm} x \hspace{.2cm} k = 0}" />
        </div>
       </div>
        
        *475
      </p>


      <h2>Evaluating the Cross Product</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} u = u_{1}i + u_{2}j + u_{3}k \hspace{.2cm} and \hspace{.2cm} v = v_{1}i + v_{2}j + v_{3}k. \hspace{.2cm} Then}" />
        <MathComponent tex="u \hspace{.2cm} x \hspace{.2cm} v = \bigg \vert \begin{array} {cc} \mathrm{i} & \mathrm{j} & \mathrm{k} \\  u_{1} & u_{2} & u_{3} \\ v_{1} & v_{2} & v_{3} \\   \end{array} \bigg{\vert} = \bigg{\vert} \begin{array} {cc} u_{2} & u_{3} \\  v_{2} & v_{3} \\  \end{array} \bigg{\vert} i - \bigg{\vert} \begin{array} {cc} u_{1} & u_{3} \\ v_{1} & v_{3} \\   \end{array}  \bigg{\vert}j + \bigg{\vert}  \begin{array} {cc} u_{1} & u_{2} \\ v_{1} & v_{2} \\  \end{array} \bigg{\vert} k." />
        *476
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Computing cross products</h4>
                      <p>
                        Find the cross products u x v and v x u for the following vectors u and v.
                      </p>
                      <MathComponent tex="u = \langle 3,5,0 \rangle, \hspace{.2cm} v = \langle 0,3,-6 \rangle" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{u \hspace{.1cm} x \hspace{.1cm} v = (-30,18,9), \hspace{.2cm} v \hspace{.1cm} x \hspace{.1cm} u = (30,-18,-9)}" />    
                         
                    </p>

                    *477
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Computing cross products</h4>
                      <p>
                        Find the cross products u x v and v x u for the following vectors u and v.
                      </p>
                      <MathComponent tex="u = 3i-j-2k, \hspace{.2cm} v = i+3j-2k" /> 
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="u = \langle 3,-1,-2 \rangle, \hspace{.2cm} v = \langle 1,3,-2 \rangle" />
                         <MathComponent tex="\mathrm{u \hspace{.1cm} x \hspace{.1cm} v = (8,4,10), \hspace{.2cm} v \hspace{.1cm} x \hspace{.1cm} u = (-8,-4,-10)}" />    
                         
                    </p>

                    *478
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Area of a parallelogram</h4>
                      <p>
                        Find the area of the parallelogram that has two adjacent sides u and v.
                      </p>
                      <p>u = 3i - j, v = 3j + 2k</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="11" />    
                         
                    </p>

                    *479
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Area of a parallelogram</h4>
                      <p>
                        Find the area of the parallelogram that has two adjacent sides u and v.
                      </p>
                      <p>u = 2i - j -2k, v = 3i + 2j - k</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="3 \sqrt{10}" />    
                         
                    </p>

                    *480
                    </div>
                </div>


               


            </div>
            </div>
           
    );
}