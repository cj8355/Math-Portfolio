import { Link } from "react-router-dom";
import "./13.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch13_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 1 Vectors in the Plane</h1>
        <div className="sectionText">

        <h2>Vectors, Equal Vectors, Scalars, Zero Vector</h2>
      <p className="textBorder">
       
        <p>
          Vectors are quantities that have both length (or magnitude) and direction. Two vectors are equal
          if they have the same magnitude and direction. Quantities having magnitude but no direction are called
          scalars. One exception is the zero vector, denoted 0: It has length 0 and no direction.
        </p>
        *445
      </p>


      <h2>Scalar Multiples and Parallel Vectors</h2>
      <p className="textBorder">
       <p>Given a scalar c and a vector v, the scalar multiple cv is a vector whose length is |c| multiplied by the length of v.</p>
        <MathComponent tex="\mathrm{If \hspace{.2cm} c > 0, \hspace{.2cm} then \hspace{.2cm} cv \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} same \hspace{.2cm} direction \hspace{.2cm} as \hspace{.2cm}.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} c < 0, \hspace{.2cm} then \hspace{.2cm} cv \hspace{.2cm} and \hspace{.2cm} v \hspace{.2cm} point \hspace{.2cm}in \hspace{.2cm}opposite \hspace{.2cm} directions.}" />
        <p>Two vectors are parallel if they are scalar multiples of each other.</p>
        *446
      </p>


      <h2>Position Vectors and Vector Components</h2>
      <p className="textBorder">
       <p>A vector v with its tail at the origin and head at the point</p>
        <MathComponent tex="(v_{1},v_{2})" />
        <p>is called a position vector (or is said to be in standard position) and is written </p>
        <MathComponent tex="\langle v_{1},v_{2}\rangle." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} real \hspace{.2cm} numbers \hspace{.2cm} v_{1} \hspace{.2cm} and \hspace{.2cm} v_{2} \hspace{.2cm} are \hspace{.2cm} the \hspace{.2cm} x- \hspace{.2cm} and \hspace{.2cm} y-components \hspace{.2cm} of \hspace{.2cm} v, \hspace{.2cm} respectively.}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} position \hspace{.2cm} vectors \hspace{.2cm} u = \langle u_{1}, u_{2} \rangle \hspace{.2cm} and \hspace{.2cm} v = \langle v_{1}, v_{2} \rangle \hspace{.2cm} are \hspace{.2cm} equal \hspace{.2cm} if \hspace{.2cm} and \hspace{.2cm} only \hspace{.2cm} if \hspace{.2cm} u_{1} = v_{1} \hspace{.2cm} and \hspace{.2cm} u_{2} = v_{2}.}" />
        *447
      </p>


      <h2>Magnitude of a Vector</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Given \hspace{.2cm} the \hspace{.2cm} points \hspace{.2cm} P(x_{1}, y_{1}) \hspace{.2cm} and \hspace{.2cm} Q(x_{2},y_{2}), \hspace{.2cm} the \hspace{.2cm} magnitude, \hspace{.2cm} or \hspace{.2cm} length, \hspace{.2cm} of \hspace{.2cm} }" />
        <MathComponent tex="\mathrm{\overrightarrow{PQ} = \langle x_{2} - x_{1}, y_{2} - y_{1} \rangle, \hspace{.2cm} denoted \hspace{.2cm} \vert \overrightarrow{PQ} \vert,}" /> 
        <p>is the distance between P and Q:</p>
        <MathComponent tex="\vert \overrightarrow{PQ} \vert = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} magnitude \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} position \hspace{.2cm} vector \hspace{.2cm} v = \langle v_{1}, v_{2} \rangle \hspace{.2cm} is \hspace{.2cm} \vert v \vert = \sqrt{v_{1}^{2} + v_{2}^{2}}.}" />
        *448
      </p>


      <h2><MathComponent tex="\mathrm{Vector \hspace{.2cm} Operations \hspace{.2cm} in \hspace{.2cm}}\mathbb{R}^{2" /> </h2>
      <p className="textBorder">
      <MathComponent tex="\mathrm{Suppose \hspace{.2cm} c \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} scalar, \hspace{.2cm} u = \langle u_{1}, u_{2}, \hspace{.2cm} and \hspace{.2cm} v = \langle v_{!}, v_{2} \rangle .}" />
      <MathComponent tex="u + v = \langle u_{1} + v_{1}, u_{2} + v_{2} \rangle \hspace{1cm} \mathrm{Vector \hspace{.2cm} addition}" />
      <MathComponent tex="u - v = \langle u_{1} - v_{1}, u_{2} - v_{2} \rangle \hspace{1cm} \mathrm{Vector \hspace{.2cm} subtraction}" />
      <MathComponent tex="cu = \langle cu_{1}, cu_{2} \rangle \hspace{1cm} \mathrm{Scalar \hspace{.2cm} multiplication}" />
        *449
      </p>


      <h2>Properties of Vector Operations</h2>
      <p className="textBorder">
       <p>
        Suppose u, v, and w are vectors and a and c are scalars. Then the following poperties hold (for vectors in any number of dimensions). 
       </p>
        <MathComponent tex="1. \hspace{.2cm} u + v = v + u \hspace{1cm} \mathrm{Commutative \hspace{.2cm} property \hspace{.2cm} of \hspace{.2cm} addition}" />
        <MathComponent tex="2. \hspace{.2cm} (u + v) + w = u + (v + w) \hspace{1cm} \mathrm{Associative \hspace{.2cm} property \hspace{.2cm} of \hspace{.2cm} addition}" />
        <MathComponent tex="3. \hspace{.2cm} v + 0 = v \hspace{1cm} \mathrm{Additive \hspace{.2cm} identity}" />
        <MathComponent tex="4. \hspace{.2cm} v + (-v) = 0 \hspace{1cm} \mathrm{Additive \hspace{.2cm} inverse}" />
        <MathComponent tex="5. \hspace{.2cm} c(u + v) = cu + cv \hspace{1cm} \mathrm{Distributive \hspace{.2cm} property \hspace{.2cm} 1}" />
        <MathComponent tex="6. \hspace{.2cm} (a+c)v = av + cv \hspace{1cm} \mathrm{Distributive \hspace{.2cm} property \hspace{.2cm} 2}" />
        <MathComponent tex="7. \hspace{.2cm} 0v = 0 \hspace{1cm} \mathrm{Multiplication \hspace{.2cm} by \hspace{.2cm} zero \hspace{.2cm} scalar}" />
        <MathComponent tex="8. \hspace{.2cm} c0 = 0 \hspace{1cm} \mathrm{Multiplication \hspace{.2cm} by \hspace{.2cm} zero \hspace{.2cm} vector}" />
        <MathComponent tex="9. \hspace{.2cm} 1v = v \hspace{1cm} \mathrm{Multiplicative \hspace{.2cm} identity}" />
        <MathComponent tex="10. \hspace{.2cm} a(cv) = (ac)v \hspace{1cm} \mathrm{Associative \hspace{.2cm} property \hspace{.2cm} of \hspace{.2cm} scalar \hspace{.2cm} multiplication}" />
        *450
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Vector Operations</h4>
                      <p>
                        Let u = (4, -2), v = (-4, 6), and w = (0,8). Express the following vector in the form (a,b).
                      </p>
                      <p>w - u</p>
                     
                    <p>
                        Answer: <br/>
                            (-4,10)
                         
                    </p>

                    *451
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Vector Operations</h4>
                      <p>
                        Let u = (3, -4), v = (1, 1), and w = (-1,0).
                      </p>
                      <p>Find |-2v|</p>
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="2 \sqrt{2}" />
                         
                    </p>

                    *452
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Vector Operations</h4>
                      <p>
                        Let u = (3, -4), v = (1, 1), and w = (-1,0).
                      </p>
                      <p>Which has the greater magnitude, u - v or w - u?</p>
                     
                    <p>
                        Answer: <br/>
                        <p>w - u</p>
                         
                    </p>

                    *453
                    </div>
                </div>




            </div>
            </div>
           
    );
}