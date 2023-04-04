import { Link } from "react-router-dom";
import "./14.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch14_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 14 Sec. 2 Calculus of Vector-Valued Functions</h1>
        <div className="sectionText">

      
      <h2>Derivative and Tangent Vector</h2>
      <p className="textBorder">
       <p>
        Let r(t) = f(t) i + g(t) j + h(t) k, where f, g, and h are differentiable functions on (a,b). Then r has a derivative
        (or is differentiable) on (a,b) and
       </p>
        <MathComponent tex="\mathrm{r'(t) = f'(t) i + g'(t) j + h'(t) k.}" />
        <MathComponent tex="\mathrm{Provided \hspace{.2cm} r'(t) \neq 0,}" />
        <p>r'(t) is a tangent vector at the point corresponding to r'(t).</p>
        *502
      </p>


      <h2>Unit Tangent Vector</h2>
      <p className="textBorder">
       <p>
        Let r(t) = f(t) i + g(t) j + h(t) k be a smooth parameterized curve, for 
       </p>
        <MathComponent tex="a \leq t \leq b." />
        <p>The unit tangent vector for a particular value of t is</p>
        <MathComponent tex="T(t) = \frac{r'(t)}{\vert r'(t) \vert} ." />
        *503
      </p>


      <h2>Derivative Rules</h2>
      <p className="textBorder">
       <p>
        Let u and v be differentiable vector-valued functions, and let f be a differentiable scalar-valued function, all at a point t.
        Let c be a constant vector. The following rules apply.
       </p>
       <div>
       <MathComponent tex="\mathrm{1. \hspace{.2cm} \frac{d}{dt} (c) = 0 \hspace{1cm} Constant \hspace{.2cm} Rule}" />
       <MathComponent tex="\mathrm{2. \hspace{.2cm} \frac{d}{dt} (u(t) + v(t)) = u'(t) + v'(t) \hspace{1cm} Sum \hspace{.2cm} Rule}" />
       <MathComponent tex="\mathrm{3. \hspace{.2cm} \frac{d}{dt} (f(t)u(t)) = f'(t)u(t) + f(t)u'(t) \hspace{1cm} Product \hspace{.2cm} Rule}" />
       <MathComponent tex="\mathrm{4. \hspace{.2cm} \frac{d}{dt} (u(f(t))) = u'(f(t))f'(t) \hspace{1cm} Chain \hspace{.2cm} Rule}" />
       <MathComponent tex="\mathrm{5. \hspace{.2cm} \frac{d}{dt} (u(t) \cdot v(t)) = u'(t) \cdot v(t) + u(t) \cdot v'(t) \hspace{1cm} Dot \hspace{.2cm} Product \hspace{.2cm} Rule}" />
       <MathComponent tex="\mathrm{6. \hspace{.2cm} \frac{d}{dt} (u(t) \hspace{.1cm} x \hspace{.1cm} v(t)) = u'(t) \hspace{.1cm}  x \hspace{.1cm} v(t) + u(t) \hspace{.1cm} x \hspace{.1cm} v'(t) \hspace{1cm} Cross \hspace{.2cm} Product \hspace{.2cm} Rule}" />
       </div>
        
        *504
      </p>


      <h2>Indefinite Integral of a Vector-Valued Function</h2>
      <p className="textBorder">
       <p>
        Let r(t) = f(t) i + g(t) j + h(t) k be a vector function, and let R(t) = F(t) i + G(t) j + H(t) k, where F, G, and H are 
        antiderivatives of f, g, and h, respectively. The indefinite integral of r is
       </p>
        <MathComponent tex="\int r(t) \hspace{.2cm} dt = R(t) + C," />
        <p>where C is an arbitrary constant vector. Alternatively, in component form,</p>
        <MathComponent tex="\int \langle f(t), g(t), h(t) \rangle dt = \langle F(t), G(t), H(t) \rangle + \langle C_{1}, C_{2}, C_{3} \rangle ." />
        *505
      </p>


      <h2>Definite Integral of a Vector-Valued Function</h2>
      <p className="textBorder">
       <p>
        Let r(t) = f(t) i + g(t) j + h(t) k, where f, g, and h are integrable on the interval [a, b]. The definite integral of r on [a, b] is
       </p>
        <MathComponent tex="\int_{a}^{b} r(t) \hspace{.2cm} dt = \bigg ( \int_{a}^{b} f(t) \hspace{.2cm} dt \bigg ) i + \bigg ( \int_{a}^{b} g(t) \hspace{.2cm} dt \bigg ) j + \bigg ( \int_{a}^{b} h(t) \hspace{.2cm} dt \bigg ) k." />
        *506
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Derivatives of vector-valued functions</h4>
                      <p>
                        Differentiate the following function.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = \langle cos \hspace{.2cm} t, \hspace{.2cm} t^{2}, \hspace{.2cm} sin \hspace{.2cm} t \rangle}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{\langle - \hspace{.2cm} sin \hspace{.2cm} t, \hspace{.2cm} 2t, \hspace{.2cm} cos \hspace{.2cm} t \rangle}" />    
                         
                    </p>

                    *507
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Derivatives of vector-valued functions</h4>
                      <p>
                        Differentiate the following function.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = e^{t}i + 2e^{-t}j - 4e^{2t}k}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{ e^{t}i - 2e^{-t}j - 8e^{2t}k}" />    
                         
                    </p>


                    *508
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Tangent Vectors</h4>
                      <p>
                        Find a tangent vector at the given value of t for the following parameterized curve.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = \langle t, 3t^{2}, t^{3} \rangle, \hspace{.2cm} t = 1}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\langle 1,6,3 \rangle" />    
                         
                    </p>

                    *509
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Tangent Vectors</h4>
                      <p>
                        Find a tangent vector at the given value of t for the following parameterized curve.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = 2t^{4}i + 6t^{3/2}j + \frac{10}{t}k, \hspace{.2cm} t=1}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{8i + 9j - 10k}" />    
                         
                    </p>

                    *510
                    </div>
                </div>



            </div>
            </div>
           
    );
}