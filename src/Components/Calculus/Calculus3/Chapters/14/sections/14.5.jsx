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


      <h2>Tangential and Normal Components of the Acceleration</h2>
      <p className="textBorder">
       <p>
       The acceleration vector of an object moving in space along a smooth curve has the following representation in terms
       of its tangential component
       </p>
        <MathComponent tex="\mathrm{a_{T} \hspace{.2cm} (in \hspace{.2cm} the \hspace{.2cm} direction \hspace{.2cm} of \hspace{.2cm} T) \hspace{.2cm} and \hspace{.2cm} its \hspace{.2cm} normal \hspace{.2cm} component \hspace{.2cm} a_{N} \hspace{.2cm} (in \hspace{.2cm} the \hspace{.2cm} direction \hspace{.2cm} of \hspace{.2cm} N):}" />
        <MathComponent tex="\mathrm{a = a_{N}N + a_{T} T.}" />
        <MathComponent tex="\mathrm{where \hspace{.2cm} a_{N} = k \vert v \vert ^{2} = \frac{\vert v \hspace{.1cm} x \hspace{.1cm} a \vert}{\vert v \vert} \hspace{.2cm} and \hspace{.2cm} a_{T} = \frac{d^{2}s}{dt^{2}}.}" />
        *525
      </p>


      <h2>Unit Binormal Vector and Torsion</h2>
      <p className="textBorder">
       <p>
       Let C be a smooth parameterized curve with unit tangent and principal unit normal vectors T and N, respectively. Then
       at each point of the curve at which the curvature is nonzero, the unit binormal vector is
       </p>
        <MathComponent tex="\mathrm{B = T \hspace{.1cm} x \hspace{.1cm} N}," />
        <p>and the torsion is</p>
        <MathComponent tex="\mathrm{ \tau = - \frac{dB}{ds} \cdot N}." />
        *526
      </p>


      <h2>Formulas for Curves in Space</h2>
      <p className="textBorder">
       <div>
       <MathComponent tex="\mathrm{Position \hspace{.2cm} function: \hspace{.2cm} r(t) = \langle x(t), y(t), z(t) \rangle}" />
       <MathComponent tex="\mathrm{Velocity: \hspace{.2cm} v = r'}" />
       <MathComponent tex="\mathrm{Acceleration: \hspace{.2cm} a = v'}" />
       <MathComponent tex="\mathrm{Unit \hspace{.2cm} tangent \hspace{.2cm} vector: \hspace{.2cm} T = \frac{v}{\vert v \vert}}" />
       <MathComponent tex="\mathrm{Principal \hspace{.2cm} unit \hspace{.2cm} normal \hspace{.2cm} vector: \hspace{.2cm} N = \frac{dT/dt}{\vert dT/dt \vert} \hspace{.2cm} (provided \hspace{.2cm} dT/dt \neq 0)}" />
       <MathComponent tex="\mathrm{Curvature: \kappa = \bigg \vert \frac{dT}{ds} \bigg \vert = \frac{1}{\vert v \vert} \bigg \vert \frac{dT}{dt} \bigg \vert = \frac{\vert v \hspace{.2cm} x \hspace{.2cm} a \vert}{\vert v \vert ^{3}}}" />
       <MathComponent tex="\mathrm{Components \hspace{.2cm} of \hspace{.2cm} acceleration: \hspace{.2cm} a = a_{N}N + a_{T}T, \hspace{.2cm} where \hspace{.2cm} a_{N} = \kappa \vert v \vert ^{2} = \frac{\vert v x a \vert}{\vert v \vert}}" />
       <MathComponent tex="\mathrm{and \hspace{.2cm} a_{T} = \frac{d^{2}s}{dt^{2}} = \frac{v \cdot a}{\vert v \vert}}" />
       <MathComponent tex="\mathrm{Unit \hspace{.2cm} binormal \hspace{.2cm} vector: \hspace{.2cm} B = T \hspace{.1cm} x \hspace{.1cm} N = \frac{v \hspace{.1cm} x \hspace{.1cm} a}{\vert v \hspace{.1cm} x \hspace{.1cm} a \vert}}" />
       <MathComponent tex="\mathrm{Torsion: \hspace{.2cm} \tau = - \frac{dB}{ds} \cdot N = \frac{(v \hspace{.1cm} x \hspace{.1cm} a) \cdot a'}{\vert v \hspace{.1cm} x \hspace{.1cm} a \vert ^{2}} = \frac{(r' \hspace{.1cm} x \hspace{.1cm} r'') \cdot r'''}{\vert r' \hspace{.1cm} x \hspace{.1cm} r'' \vert ^{2}}}" />
       </div>
       
        
        *527
      </p>


      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Curvature</h4>
                      <p>
                      Find the unit tangent vector T and the curvature k for the following parameterized curves.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = \langle 2t + 1, 4t - 5, 6t + 12 \rangle}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{T = \frac{ \langle 1,2,3 \rangle}{\sqrt{14}}, \hspace{.2cm} \kappa = 0}" />    
                         
                    </p>

                    *528
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Curvature</h4>
                      <p>
                      Find the unit tangent vector T and the curvature k for the following parameterized curves.
                      </p>
                      <MathComponent tex="\mathrm{r(t) = \langle t, 2t^{2} \rangle}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{T = \frac{ \langle 1,4t \rangle}{\sqrt{1 + 16t^{2}}}, \hspace{.2cm} \kappa = \frac{4}{(1+16t^{2})^{3/2}}}" />    
                         
                    </p>

                    *529
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Alternative curvature formula</h4>
                      <p>
                        Use the alternative curvature formula 
                      </p>
                      <MathComponent tex="\kappa = \frac{\vert v \hspace{.1cm} x \hspace{.1cm} a \vert}{\vert v \vert ^{3}}" /> 
                      <p>to find the curvature of the following parameterized curves.</p>
                      <MathComponent tex="\mathrm{r(t) = \langle -3 \hspace{.1cm} cos \hspace{.1cm} t, 3 \hspace{.1cm} sin \hspace{.1cm} t, 0 \rangle}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{1}{3}" />    
                         
                    </p>

                    *530
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Alternative curvature formula</h4>
                      <p>
                        Use the alternative curvature formula 
                      </p>
                      <MathComponent tex="\kappa = \frac{\vert v \hspace{.1cm} x \hspace{.1cm} a \vert}{\vert v \vert ^{3}}" /> 
                      <p>to find the curvature of the following parameterized curves.</p>
                      <MathComponent tex="\mathrm{r(t) = \langle 4 \hspace{.1cm} cos \hspace{.1cm} t, \hspace{.1cm} sin \hspace{.1cm} t, 2 \hspace{.1cm} cos \hspace{.1cm} t \rangle}" />
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\frac{2 \sqrt{5}}{(20 \hspace{.1cm} sin ^{2} t + cos ^{2} t)^{3/2}}" />    
                         
                    </p>

                    *531
                    </div>
                </div>





            </div>
            </div>
           
    );
}