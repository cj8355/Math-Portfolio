import { Link } from "react-router-dom";
import "./16.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 5 Triple Integrals in Cylindrical and Spherical Coordinates</h1>
        <div className="sectionText">

      
      <h2>Transformation Between Cylindrical and Rectangular Coordinates</h2>
      <p className="textBorder">
       <div className="splitContainer">
        <div>
        <MathComponent tex="\mathrm{Rectangular \hspace{.2cm} \to \hspace{.2cm} Cylindrical}" />
        <MathComponent tex="\mathrm{r^{2} = x^{2} + y^{2}}" />
        <MathComponent tex="\mathrm{tan \hspace{.2cm} \theta = y/x}" />
        <MathComponent tex="\mathrm{z=z}" />
        </div>
        <div>
        <MathComponent tex="\mathrm{Cylindrical \hspace{.2cm} \to \hspace{.2cm} Rectangular}" />
        <MathComponent tex="\mathrm{x = r \hspace{.2cm} cos \hspace{.2cm} \theta}" />
        <MathComponent tex="\mathrm{y = r \hspace{.2cm} sin \hspace{.2cm} \theta}" />
        <MathComponent tex="\mathrm{z=z}" />
        </div>
       </div>
        
        *629
      </p>


      <h2>Change of Variables for Triple Integrals in Cylindrical Coordinates</h2>
      <p className="textBorder">
       <p>Let f be continuous over the region D, expressed in cylindrical coordinates as</p>
        <MathComponent tex="\mathrm{D = \{(r,\theta,z): \hspace{.2cm} 0 \leq r \leq g(\theta) \leq r \leq h(\theta), \hspace{.2cm} \alpha \leq \theta \leq \beta, \hspace{.2cm} G(x,y) \leq z \leq H(x,y) \}.}" />
        <p>Then f is integrable over D, and the triple integral of f over D is</p>
        <MathComponent tex="\mathrm{\int \int_{D} \int f(x,y,z) \hspace{.2cm} dV = \int_{\alpha}^{\beta} \int_{g(\theta)}^{h(\theta)} \int_{G(r \hspace{.1cm} cos \hspace{.1cm} \theta , \hspace{.1cm} r \hspace{.1cm} sin \hspace{.1cm} \theta)}^{H(r \hspace{.1cm} cos \hspace{.1cm} \theta , \hspace{.1cm} r \hspace{.1cm} sin \hspace{.1cm} \theta)} f(r \hspace{.1cm} cos \hspace{.1cm} \theta , \hspace{.1cm} r \hspace{.1cm} sin \hspace{.1cm} \theta , z) \hspace{.1cm} dz \hspace{.1cm} r \hspace{.1cm} dr \hspace{.1cm} d \theta . }" />
        *630
      </p>


      <h2>Transformation Between Spherical and Rectangular Coordinates</h2>
      <p className="textBorder">
      <div className="splitContainer">
        <div>
        <MathComponent tex="\mathrm{Rectangular \hspace{.2cm} \to \hspace{.2cm} Spherical}" />
        <MathComponent tex="\mathrm{\rho^{2} = x^{2} + y^{2} + z^{2}}" />
        <MathComponent tex="\mathrm{Use \hspace{.2cm} trigonometry \hspace{.2cm} to \hspace{.2cm} find}" />
        <MathComponent tex="\mathrm{\varphi \hspace{.2cm} and \hspace{.2cm} \theta .}" />
        </div>
        <div>
        <MathComponent tex="\mathrm{Spherical \hspace{.2cm} \to \hspace{.2cm} Rectangular}" />
        <MathComponent tex="\mathrm{x = \rho \hspace{.2cm} sin \hspace{.2cm} \varphi \hspace{.2cm} cos \hspace{.2cm} \theta}" />
        <MathComponent tex="\mathrm{y = \rho \hspace{.2cm} sin \hspace{.2cm} \varphi \hspace{.2cm} sin \hspace{.2cm} \theta}" />
        <MathComponent tex="\mathrm{z = \rho \hspace{.2cm} cos \hspace{.2cm} \varphi}" />
        </div>
       </div>
        *631
      </p>


      <h2>Change of Variables for Triple Integrals in Spherical Coordinates</h2>
      <p className="textBorder">
       
      <p>Let f be continuous over the region D, expressed in spherical coordinates as</p>
        <MathComponent tex="\mathrm{D = \{( \rho, \varphi , \theta): \hspace{.2cm} 0 \leq g(\varphi , \theta) \leq \rho \leq h(\varphi , \theta), \hspace{.2cm} a \leq \varphi \leq b, \hspace{.2cm} \alpha \leq \theta \leq \beta \}.}" />
        <p>Then f is integrable over D, and the triple integral of f over D is</p>
        <MathComponent tex="\mathrm{\int \int_{D} \int f(x,y,z) \hspace{.2cm} dV = \int_{\alpha}^{\beta} \int_{a}^{b} \int_{g( \varphi , \theta)}^{h(\varphi , \theta)} f(\rho \hspace{.1cm} sin \hspace{.1cm} \varphi \hspace{.1cm} cos \hspace{.1cm} \theta , \hspace{.1cm} \rho \hspace{.1cm} sin \hspace{.1cm} \varphi \hspace{.1cm} sin \hspace{.1cm} \theta , \rho \hspace{.1cm} cos \hspace{.1cm} \varphi) \hspace{.1cm} \rho^{2} \hspace{.1cm} sin \hspace{.1cm} \varphi \hspace{.1cm} d \rho \hspace{.1cm} d \varphi \hspace{.1cm} d \theta . }" />
        *632
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Integrals in cylindrical coordinates</h4>
                      <p>
                        Evaluate the following integrals in cylindrical coordinates.
                      </p>
                      <MathComponent tex="\mathrm{\int_{0}^{4} \int_{0}^{\sqrt{2}/2} \int_{x}^{\sqrt{1-x^{2}}} e^{-x^{2} - y^{2}} \hspace{.2cm} dy \hspace{.2cm} dx \hspace{.2cm} dz}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\pi (1-e^{-1})/2" />    
                         
                    </p>

                    *633
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Integrals in cylindrical coordinates</h4>
                      <p>
                        Evaluate the following integrals in cylindrical coordinates.
                      </p>
                      <MathComponent tex="\mathrm{\int_{0}^{3} \int_{0}^{\sqrt{9-x^{2}}} \int_{0}^{\sqrt{x^{2}+y^{2}}} (x^{2}+y^{2})^{-1/2} \hspace{.2cm} dz \hspace{.2cm} dy \hspace{.2cm} dx}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="9 \pi / 4" />    
                         
                    </p>

                    *634
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Mass from density</h4>
                      <p>
                        Find the mass of the following objects with the given density functions.
                      </p>
                      <MathComponent tex="\mathrm{Assume \hspace{.2cm} (r, \theta , z) \hspace{.2cm} are \hspace{.2cm} cylindrical \hspace{.2cm} coordinates.}" />
                      <MathComponent tex="\mathrm{The \hspace{.2cm} solid \hspace{.2cm} cylinder \hspace{.2cm} D = \{(r, \theta , z): 0 \leq r \leq 4, 0 \leq z \leq 10 \} \hspace{.2cm} with \hspace{.2cm} density \hspace{.2cm} \rho (r, \theta , z) = 1 + z/2}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="560 \pi" />    
                         
                    </p>

                    *635
                    </div>
                </div>




            </div>
            </div>
           
    );
}