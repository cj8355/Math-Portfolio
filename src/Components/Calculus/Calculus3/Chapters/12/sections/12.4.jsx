import { Link } from "react-router-dom";
import "./12.4.css";
import { MathComponent } from "mathjax-react";
import graph4 from "./images/graph4.png";
import graph5 from "./images/graph5.png";
import graph6 from "./images/graph6.png";

export default function Calculus3_Ch12_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 12 Sec. 4 Conic Sections</h1>
        <div className="sectionText">

      <h2>Equations of Four Standard Parabolas</h2>
      <p className="textBorder">
       <p>
        Let p be a real number. The parabola with focus at (0, p) and directix y = -p is symmetric about the y-axis and has the equation
       </p>
        <MathComponent tex="x^{2} = 4py. \hspace{.2cm} \mathrm{If \hspace{.2cm} p > 0, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} parabola \hspace{.2cm} opens \hspace{.2cm} upward; \hspace{.2cm} if \hspace{.2cm} p < 0, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} parabola \hspace{.2cm} opens \hspace{.2cm} downward.}" />
        <p>
        The parabola with focus at (p,0) and directix x = -p is symmetric about the x-axis and has the equation
       </p>
       <MathComponent tex="y^{2} = 4px. \hspace{.2cm} \mathrm{If \hspace{.2cm} p > 0, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} parabola \hspace{.2cm} opens \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} right; \hspace{.2cm} if \hspace{.2cm} p < 0, \hspace{.2cm} then \hspace{.2cm} the \hspace{.2cm} parabola \hspace{.2cm} opens \hspace{.2cm} to \hspace{.2cm} the \hspace{.2cm} left.}" />
        <p>Each of these parabolas has its vertex at the origin.</p>
        *439
      </p>


      <h2>Equations of Standard Ellipses</h2>
      <p className="textBorder">
       <p>An ellipse centered at the origin with foci</p>
        <MathComponent tex="F_{1} \hspace{.2cm} \mathrm{and \hspace{.2cm} F_{2} \hspace{.2cm} at \hspace{.2cm} (\pm c, 0) \hspace{.2cm} and \hspace{.2cm} vertices \hspace{.2cm} V_{1} \hspace{.2cm} and \hspace{.2cm} V_{2} \hspace{.2cm} at \hspace{.2cm} (\pm a, 0) \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} equation }" />
        <MathComponent tex="\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1, \hspace{1cm} \mathrm{where} \hspace{.2cm} a^{2} = b^{2} + c^{2}." />
        <p>An ellipse centered at the origin with foci at</p>
        <MathComponent tex="\mathrm{ (0, \pm c) \hspace{.2cm} and \hspace{.2cm} vertices \hspace{.2cm} at \hspace{.2cm} (0, \pm a) \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} equation}" />
        <MathComponent tex="\frac{y^{2}}{a^{2}} + \frac{x^{2}}{b^{2}} = 1, \hspace{1cm} \mathrm{where} \hspace{.2cm} a^{2} = b^{2} + c^{2}." />
        <MathComponent tex="\mathrm{In \hspace{.2cm} both \hspace{.2cm} cases, \hspace{.2cm} a > b > 0 \hspace{.2cm} and \hspace{.2cm} a > c > 0,}" />
        <p>the length of the long axis (calles the major axis) is 2a, and the length of the short axis (called the minor axis) is 2b.</p>
        *440
      </p>


      <h2>Equations of Standard Hyperbolas</h2>
      <p className="textBorder">
       <p>A hyperbola centered at the origin with foci </p>
      <MathComponent tex="F_{1} \hspace{.2cm} \mathrm{and \hspace{.2cm} F_{2} \hspace{.2cm} at \hspace{.2cm} (\pm c, 0) \hspace{.2cm} and \hspace{.2cm} vertices \hspace{.2cm} V_{1} \hspace{.2cm} and \hspace{.2cm} V_{2} \hspace{.2cm} at \hspace{.2cm} (\pm a, 0) \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} equation }" />
        <MathComponent tex="\frac{x^{2}}{a^{2}} - \frac{y^{2}}{b^{2}} = 1. \hspace{1cm} \mathrm{where} \hspace{.2cm} b^{2} = c^{2} - a^{2}." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} hyperbola \hspace{.2cm} has \hspace{.2cm} asymptotes \hspace{.2cm} y = \pm bx/a.}" />
        <p>A hyperbola centered at the origin with foci at</p>
        <MathComponent tex="\mathrm{ (0, \pm c) \hspace{.2cm} and \hspace{.2cm} vertices \hspace{.2cm} at \hspace{.2cm} (0, \pm a) \hspace{.2cm} has \hspace{.2cm} the \hspace{.2cm} equation}" />
        <MathComponent tex="\frac{y^{2}}{a^{2}} - \frac{x^{2}}{b^{2}} = 1. \hspace{1cm} \mathrm{where} \hspace{.2cm} b^{2} = c^{2} - a^{2}." />
        <MathComponent tex="\mathrm{The \hspace{.2cm} hyperbola \hspace{.2cm} has \hspace{.2cm} asymptotes \hspace{.2cm} y = \pm ax/b.}" />
        <MathComponent tex="\mathrm{In \hspace{.2cm} both \hspace{.2cm} cases, \hspace{.2cm} c > a > 0 and \hspace{.2cm} c > b > 0.}" />
        *441
      </p>


      <h2>Eccentricity-Directix Theorem</h2>
      <p className="textBorder">
       <p>Suppose L is a line, F is a point not on L, and e is a positive real number. Let C be the set of points P in a 
        plane with the proerty that
       </p>
        <MathComponent tex="\frac{\vert PF \vert}{\vert PL \vert} = e," />
        <p>where |PL| is the perpendicular distance from P to l.</p>
        <p>1. If e = 1, C is a parabola.</p>
        <MathComponent tex="2. \hspace{.2cm} \mathrm{If \hspace{.2cm} 0 < e < 1, \hspace{.2cm} C \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} ellipse.}" />
        <MathComponent tex="3. \hspace{.2cm} \mathrm{If \hspace{.2cm} e > 1, \hspace{.2cm} C \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} hyperbola.}" />
        *442
      </p>


      <h2>Polar Equations of Conic Sections</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} d > 0.}" />
        <p>The conic section with a focus at the origin and eccentricity e has the polar equation</p>
        <MathComponent tex="r = \frac{ed}{1 + e \hspace{.1cm} cos \hspace{.1cm} \theta} \hspace{1cm} or \hspace{1cm} r = \frac{ed}{1 - e \hspace{.1cm} cos \hspace{.1cm}  \theta}." /> 
        <p>The conic section with a focus at the origin and eccentricity e has the polar equation</p>
        <MathComponent tex="r = \frac{ed}{1 + e \hspace{.1cm} sin \hspace{.1cm} \theta} \hspace{1cm} or \hspace{1cm} r = \frac{ed}{1 - e \hspace{.1cm} sin \hspace{.1cm}  \theta}." /> 
        <MathComponent tex="\mathrm{If \hspace{.2cm} 0 < e < 1, \hspace{.2cm} the \hspace{.2cm} conic \hspace{.2cm} section \hspace{.2cm} is \hspace{.2cm} an \hspace{.2cm} ellipse; \hspace{.2cm} if \hspace{.2cm} e = 1, \hspace{.2cm} it \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} parabola; and \hspace{.2cm} if \hspace{.2cm} e > 1, \hspace{.2cm}it \hspace{.2cm} is \hspace{.2cm} a \hspace{.2cm} hyperbola.}" /> 
        <MathComponent tex="\mathrm{The \hspace{.2cm} curves \hspace{.2cm} are \hspace{.2cm} defined \hspace{.2cm} over \hspace{.2cm} any \hspace{.2cm} interval \hspace{.2cm} in \hspace{.2cm} \theta \hspace{.2cm} of \hspace{.2cm} length \hspace{.2cm} 2 \pi.}" /> 
        *443
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Graphing conic sections</h4>
                      <p>
                        Determine whether the following equations describe a parabola, an ellipse, or a hyperbola, and then
                        sketch a graph of the curve. For each parabola, specify the location of the focus and the equation of the directis;
                        for each ellipse, label the coordinates of the vertices and foci, and find the lengths of the major and minor axis;
                        for each hyperbola, label the coordinates of the vertices and foci, and find the equations of the asymptotes.
                      </p>
                      <MathComponent tex="x^{2} = 12y" /> 
                     
                    <p>
                        Answer: <br/>
                        Parabola<br/>
                        <img src={graph4} alt="Graph of function" ></img>
                         
                    </p>

                    *444
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Graphing conic sections</h4>
                      <p>
                        Determine whether the following equations describe a parabola, an ellipse, or a hyperbola, and then
                        sketch a graph of the curve. For each parabola, specify the location of the focus and the equation of the directis;
                        for each ellipse, label the coordinates of the vertices and foci, and find the lengths of the major and minor axis;
                        for each hyperbola, label the coordinates of the vertices and foci, and find the equations of the asymptotes.
                      </p>
                      <MathComponent tex="\frac{x^{2}}{4} + y^{2} = 1" /> 
                     
                    <p>
                        Answer: <br/>
                        Ellipse<br/>
                        <img src={graph5} alt="Graph of function" ></img>
                        <MathComponent tex="\mathrm{Vertices: \hspace{.2cm} (\pm 2,0); \hspace{.2cm} foci: \hspace{.2cm} (\pm \sqrt{3},0)}" />
                        <p>major axis has length 4; minor axis has length 2.</p>
                    </p>

                    *445
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Graphing conic sections</h4>
                      <p>
                        Determine whether the following equations describe a parabola, an ellipse, or a hyperbola, and then
                        sketch a graph of the curve. For each parabola, specify the location of the focus and the equation of the directis;
                        for each ellipse, label the coordinates of the vertices and foci, and find the lengths of the major and minor axis;
                        for each hyperbola, label the coordinates of the vertices and foci, and find the equations of the asymptotes.
                      </p>
                      <MathComponent tex="\frac{x^{2}}{4} - y^{2} = 1" /> 
                     
                    <p>
                        Answer: <br/>
                        Hyperbola <br/>
                        <img src={graph6} alt="Graph of function" ></img>
                        <MathComponent tex="\mathrm{Vertices: \hspace{.2cm} (\pm 2,0); \hspace{.2cm} foci: \hspace{.2cm} (\pm \sqrt{5},0)}; \hspace{.2cm} asymptotes: \hspace{.2cm} y = \pm \frac{1}{2} x" />
                        
                    </p>

                    *446
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4>Equations of parabolas</h4>
                      <p>
                        Find an equation of the following parabolas. Unless otherwise specified, assume the vertex is at the origin.
                      </p>
                      <p>A parabola that opens to the right with directix x = -4</p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="y^{2} = 16x" />    
                         
                    </p>

                    *447
                    </div>
                </div>



            </div>
            </div>
           
    );
}