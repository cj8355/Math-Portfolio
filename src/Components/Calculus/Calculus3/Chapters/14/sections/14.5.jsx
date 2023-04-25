import { Link } from "react-router-dom";
import "./14.5.css";
import { MathComponent } from "mathjax-react";

export default function Calculus3_Ch14_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 14 Sec. 5 Curvature and Normal Vectors</h1>
        <div className="sectionText">

      
      <h2>Curvature</h2>
      <p className="textBorder">
       <p>Let r describe a smooth parameterized curve. If s denotes are length and</p>
        <MathComponent tex="\mathrm{T = r' / \vert r' \vert \hspace{.2cm} is \hspace{.2cm} the \hspace{.2cm} unit \hspace{.2cm} tangent \hspace{.2cm} vector, \hspace{.2cm} the \hspace{.2cm} curvature \hspace{.2cm} is \hspace{.2cm} k(s) = \bigg \vert \frac{dT}{ds} \bigg \vert .}" />
        *520
      </p>


      <h2>Curvature Formula</h2>
      <p className="textBorder">
       <p>Let r(t) describe a smooth parameterized curve, where t is any parameter. If v = r' is the velocity and T is the unit tangent vector,
        then the curvature is
       </p>
        <MathComponent tex="k(t) = \frac{1}{\vert v \vert} \bigg \vert \frac{dT}{dt} \bigg \vert = \frac{\vert T'(t) \vert}{\vert r'(t) \vert}." />
        *521
      </p>


      <h2>Alternative Curvature Formula</h2>
      <p className="textBorder">
       <p>
        Let r be the position of an object moving on a smooth curve. The curvature at a point on the curve is
       </p>
        <MathComponent tex="k = \frac{\vert v \hspace{.1cm} \mathrm{x} \hspace{.1cm}a \vert}{\vert v \vert ^{3}}," />
        <p>where v = r' is the velocity and a = v' is the acceleration.</p>
        *522
      </p>
      

      <h2>Principal Unit Normal Vector</h2>
      <p className="textBorder">
       <p>
       Let r describe a smooth curve parameterized by arc length. The principal unit normal vector at a point P on the curve at which
       </p>
        <MathComponent tex="k \neq 0 \hspace{.2cm} \mathrm{is}" />
        <MathComponent tex="\mathrm{N(s) = \frac{dT/ds}{\vert dT/ds \vert} = \frac{1}{k} \frac{dT}{ds}}." />
        <p>For other parameters, we use the equivalent formula</p>
        <MathComponent tex="\mathrm{N(t) = \frac{dT/dt}{\vert dT/dt \vert}}," />
        <p>evaluated at the value of t corresponding to P.</p>
        *523
      </p>


      <h2>Properties of the Principal Unit Normal Vector</h2>
      <p className="textBorder">
       <p>
       Let r describe a smooth parameterized curve with unit tangent vector T and principal unit normal vector N.
       </p>
        <p>
            1. T and N are orthogonal at all points of the curve; that is, T x N = 0 at all points where N is defined.
        </p>
        <p>
            2. The principal unit normal vector points to the inside of the curve-in the direction that the curve is turning.
        </p>
        
        *524
      </p>


      <h2></h2>
      <p className="textBorder">
       <p>
       
       </p>
        <MathComponent tex="" />
        
        *
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