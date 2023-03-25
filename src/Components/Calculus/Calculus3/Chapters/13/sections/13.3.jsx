import { Link } from "react-router-dom";
import "./13.3.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch13_Sec3() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 3 Dot Products</h1>
        <div className="sectionText">

      
      <h2>Dot Products</h2>
      <p className="textBorder">
       <p>Given two nonzero vectors u and v in two or three dimensions, their dot product is</p>
        <MathComponent tex="u \cdot v = \vert u \vert \vert v \vert \hspace{.2cm} cos \hspace{.2cm} \theta ," />
        <MathComponent tex="\mathrm{where \hspace{.2cm} \theta \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} angle \hspace{.2cm} between \hspace{.2cm} u \hspace{.2cm} and \hspace{.2cm} v \hspace{.2cm} with \hspace{.2cm} 0 \leq \theta \leq \pi .}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} u = 0 \hspace{.2cm} or \hspace{.2cm} v=0, \hspace{.2cm} then \hspace{.2cm} u \cdot v = 0, \hspace{.2cm} and \hspace{.2cm} \theta \hspace{.2cm} is \hspace{.2cm} undefined.}" />
        *462
      </p>


      <h2>Orthogonal Vectors</h2>
      <p className="textBorder">
       <p>
        Two vectors u and v are orthogonal if and only if 
       </p>
        <MathComponent tex="u \cdot v = 0." />
        <p>
            The zero vector is ortogonal to all vectors. In two or three dimensions, two nonzero orthogonal vectors are perpendicular to each other.
        </p>
        *463
      </p>


      <h2>Dot Product</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Given \hspace{.2cm} two \hspace{.2cm} vectors \hspace{.2cm} u = \langle u_{1}, u_{2}, u_{3} \rangle \hspace{.2cm} and \hspace{.2cm} v = \langle v_{1}, v_{2}, v_{3} \rangle ,}" />
        <MathComponent tex="u \cdot v = u_{1} v_{1} + u_{2} v_{2} + u_{3} v_{3} ." />
        *464
      </p>


      <h2>Properties of the Dot Product</h2>
      <p className="textBorder">
       <p>Suppose u, v, and w are vectors and let c be a scalar.</p>
        <MathComponent tex="1. \hspace{.2cm} u \cdot v = v \cdot u \hspace{1cm} \mathrm{Commutative \hspace{.2cm} property}" />
        <MathComponent tex="2. \hspace{.2cm} c(u \cdot v) = (cu) \cdot v =  u \cdot (cv) \hspace{1cm} \mathrm{Associative \hspace{.2cm} property}" />
        <MathComponent tex="3. \hspace{.2cm} u \cdot (v + w) = u \cdot v + u \cdot w \hspace{1cm} \mathrm{Distributive \hspace{.2cm} property}" />
        *465
      </p>


      <h2>(Orthogonal) Projection of u onto v</h2>
      <p className="textBorder">
       <p>The orthogonal projection of u onto v, denoted</p>
        <MathComponent tex="\mathrm{proj}_{v}\mathrm{u}, \hspace{.2cm} \mathrm{where \hspace{.2cm} v \neq 0, \hspace{.2cm} is}" />
        <MathComponent tex="\mathrm{proj_{v}u = \vert u \vert \hspace{.2cm} cos \hspace{.2cm} \theta \hspace{.2cm} \bigg( \frac{v}{\vert v \vert} \bigg) .} " />
        <p>The orthogonal projection may also be computed with the formulas</p>
        <MathComponent tex="\mathrm{proj_{v}u = scal_{v}u \bigg( \frac{v}{\vert v \vert} \bigg) = \bigg( \frac{u \cdot v}{v \cdot v} \bigg) v,}" />
        <p>where the scalar component of u in the direction of v is </p>
        <MathComponent tex="\mathrm{scal_{v}u = \vert u \vert \hspace{.2cm} cos \hspace{.2cm} \theta = \frac{u \cdot v}{\vert v \vert}}." />
        *466
      </p>


      <h2>Work</h2>
      <p className="textBorder">
       <p>
        Let a constant force F be applied to an object, producing a displacement d. If the angle between F and d is theta, then the work done by the force is
       </p>
        <MathComponent tex="W = \vert F \vert \vert d \vert \hspace{.2cm} cos \hspace{.2cm} \theta = F \cdot d." />
        *467
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