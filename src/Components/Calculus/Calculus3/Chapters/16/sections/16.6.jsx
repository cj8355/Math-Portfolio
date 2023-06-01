import { Link } from "react-router-dom";
import "./16.6.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch16_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 16 Sec. 6 Integrals for Mass Calculations</h1>
        <div className="sectionText">

      
      <h2>Center of Mass in One Dimension</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \rho \hspace{.2cm} be \hspace{.2cm} an \hspace{.2cm} interegrable \hspace{.2cm} density \hspace{.2cm} function \hspace{.2cm} on \hspace{.2cm} the \hspace{.2cm} interval \hspace{.2cm} [a,b] \hspace{.2cm} (which \hspace{.2cm} represents \hspace{.2cm} a \hspace{.2cm} thin \hspace{.2cm} rod \hspace{.2cm} or \hspace{.2cm} wire).}" />
        <MathComponent tex="\mathrm{The \hspace{.2cm} center \hspace{.2cm} of \hspace{.2cm} mass \hspace{.2cm} is \hspace{.2cm} located \hspace{.2cm} at \hspace{.2cm} the \hspace{.2cm} point \hspace{.2cm} \bar{x} = \frac{M}{m}, \hspace{.2cm} where \hspace{.2cm} the \hspace{.2cm} total \hspace{.2cm} moment \hspace{.2cm} M \hspace{.2cm} and \hspace{.2cm} mass \hspace{.2cm} m \hspace{.2cm} are}" />
        <MathComponent tex="\mathrm{M = \int_{a}^{b} x \rho (x) \hspace{.2cm} dx \hspace{1cm} and \hspace{1cm} m = \int_{a}^{b} \rho (x) \hspace{.2cm} dx}" />
        *636
      </p>


      <h2>Center of Mass in Two Dimensions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \rho \hspace{.2cm} be \hspace{.2cm} an \hspace{.2cm} integrable \hspace{.2cm} area \hspace{.2cm} density \hspace{.2cm} function \hspace{.2cm} defined \hspace{.2cm} over \hspace{.2cm} a \hspace{.2cm} closed \hspace{.2cm} bounded \hspace{.2cm} region \hspace{.2cm} R \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2}}." />
        <p>The coordinates of the center of mass of the object represented by R are</p>
        <MathComponent tex="\bar{x} = \frac{M_{y}}{m} = \frac{1}{m} \int_{R} \int x \rho (x,y) \hspace{.2cm} dA \hspace{.2cm} and \hspace{.2cm} \bar{y} = \frac{M_{x}}{m} = \frac{1}{m} \int_{R} \int y \rho (x,y) \hspace{.2cm} dA. " />
        <MathComponent tex="\mathrm{where \hspace{.2cm} m = \int \int_{R} \rho (x,y) \hspace{.2cm} dA \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} mass, \hspace{.2cm} and \hspace{.2cm} M_{y} \hspace{.2cm} and \hspace{.2cm} M_{x} \hspace{.2cm} are \hspace{.2cm} the \hspace{.2cm} moments \hspace{.2cm} with \hspace{.2cm} respect \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} y-axis \hspace{.2cm} and \hspace{.2cm} x-axis, \hspace{.2cm} respectively.}" />
        <MathComponent tex="\mathrm{If \hspace{.2cm} \rho \hspace{.2cm} is \hspace{.2cm} constant, \hspace{.2cm} the \hspace{.2cm} center \hspace{.2cm} of \hspace{.2cm} mass \hspace{.2cm} is \hspace{.2cm} called \hspace{.2cm} the \hspace{.2cm} centroid \hspace{.2cm} and \hspace{.2cm} is \hspace{.2cm} independent \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} density.}" />
        *637
      </p>


      <h2>Center of Mass in Three Dimensions</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \rho \hspace{.2cm} be \hspace{.2cm} an \hspace{.2cm} integrable \hspace{.2cm} density \hspace{.2cm} function \hspace{.2cm} on \hspace{.2cm} a \hspace{.2cm} closed \hspace{.2cm} bounded \hspace{.2cm} region \hspace{.2cm} D \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{2} }" />
        <p>The coordinates of the center of mass of the region are</p>
        <MathComponent tex="\mathrm{\bar{x} = \frac{M_{yz}}{m} = \frac{1}{m} \int \int_{D} \int x \rho (x,y,z) \hspace{.2cm} dV, \hspace{.2cm} \bar{y} = \frac{M_{xz}}{m} = \frac{1}{m} \int \int_{D} \int y \rho (x,y,z) \hspace{.2cm} dV, \hspace{.2cm} and}" />
        <MathComponent tex="\mathrm{\bar{z} = \frac{M_{xy}}{m} = \frac{1}{m} \int \int_{D} \int z \rho (x,y,z) \hspace{.2cm} dV,}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} m = \int \int \int_{D} \rho (x,y,z) \hspace{.2cm} dV \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} mass, \hspace{.2cm} and \hspace{.2cm} M_{yz}, \hspace{.2cm} M_{xz}, \hspace{.2cm} and \hspace{.2cm} M_{xy} \hspace{.2cm} are \hspace{.2cm} the \hspace{.2cm} moments \hspace{.2cm} with \hspace{.2cm} respect \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} coordinate \hspace{.2cm} planes. }" />
        *638
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>One-dimensional objects</h4>
                      <p>
                        Find the mass and center of mass of the thin rods with the following density functions.
                      </p>
                      <MathComponent tex="\rho (x) = 1 + sin \hspace{.2cm} x, \hspace{.2cm} for \hspace{.2cm} 0 \leq x \leq \pi " />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{mass \hspace{.2cm} is \hspace{.2cm} 2 + \pi; \hspace{.2cm} \bar{x} = \frac{\pi}{2}}" />    
                         
                    </p>

                    *639
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>One-dimensional objects</h4>
                      <p>
                        Find the mass and center of mass of the thin rods with the following density functions.
                      </p>
                      <MathComponent tex="\rho (x) = 2 - \frac{x^{2}}{16}, \hspace{.2cm} for \hspace{.2cm} 0 \leq x \leq 4 " />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{mass \hspace{.2cm} is \hspace{.2cm} \frac{20}{3}; \hspace{.2cm} \bar{x} = \frac{9}{5}}" />    
                         
                    </p>

                    *640
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Variable-density plates</h4>
                      <p>
                        Find the center of mass of the following plane regions with variable density. Describe the distribution of mass in the region.
                      </p>
                      <MathComponent tex="\mathrm{R = \{(x,y): 0 \leq x \leq 4, \hspace{.2cm} 0 \leq y \leq 2 \}: \hspace{.2cm} \rho (x,y) = 1 + x/2}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{( \frac{7}{3},1); \hspace{.2cm} density \hspace{.2cm} increases \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} right.}" />    
                         
                    </p>

                    *641
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Variable-density plates</h4>
                      <p>
                        Find the center of mass of the following plane regions with variable density. Describe the distribution of mass in the region.
                      </p>
                      <MathComponent tex="\mathrm{The \hspace{.2cm} upper \hspace{.2cm} half \hspace{.2cm} (y \geq 0) \hspace{.2cm} of \hspace{.2cm} the \hspace{.2cm} plate \hspace{.2cm} bounded \hspace{.2cm} by \hspace{.2cm} the \hspace{.2cm} ellipse \hspace{.2cm} x^{2} + 9y^{2} = 9 \hspace{.2cm} with \hspace{.2cm} \rho (x,y) = 1 + y}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{(0, \frac{16 + 3 \pi}{16 + 12 \pi}) \approx (0,0.4735); \hspace{.2cm} density \hspace{.2cm} increases \hspace{.2cm} away \hspace{.2cm} from \hspace{.2cm} the \hspace{.2cm} x-axis.}" />    
                         
                    </p>

                    *642
                    </div>
                </div>




            </div>
            </div>
           
    );
}