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