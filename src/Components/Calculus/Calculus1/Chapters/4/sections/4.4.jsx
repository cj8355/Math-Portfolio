import { Link } from "react-router-dom";
import "./4.4.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 4 Graphing Functions</h1>
        <div className="sectionText">

        <h2>Graphing Guidelines for y = f(x)</h2>
      <div>
        <p><b>Identify the domain or interval of interest</b>
            On what interval(s) should the function be graphed? It may be the domain of the function or some subset of the domain.
        </p>
        <p><b>Exploit symmetry</b>
            Take advantage of symmetry. For example, is the function even (f(-x) = f(x)), odd (f(-x) = -f(x)), or neither?
        </p>
        <p><b>Find the first and second derivatives</b>
            They are needed to determine extreme values, concavity, inflection points, and the intervals on which f is increasing or decreasing.
            Computing derivatives -- particularly second derivatives-- may not be practical, so some functions may need to be graphed without complete
            derivative information.
        </p>
        <p><b>Find critical points and possible inflection points</b>
            Determine points at which f'(x) = 0 or f' is undefined. Determine points at which f''(x) = 0 or f'' is undefined.
        </p>
        <p><b>Find intervals an which the functions is increasing/decreasing and concave up/down</b>
            The first derivative determines the intervals on which f is increasing or decreasing. The second derivative determines the intervals
            on which the function is concave up or concave down.
        </p>
        <p><b>Identify extreme values and inflection points</b>
            Use either the First or Second Derivative Test to classify the critical points. Both x- and y-coordinates of maxima,
            minima, and inflection points are needed for graphing.
        </p>
        <p><b>Locate all asymptotes and determine end behavior</b>
            Vertical asymptotesoften occur at at zeros of denominators. Horizontal asymptotes require examining limits as <MathComponent tex="x \arrow \pm \infty" />;
            these limits determine end behavior. Slant asymptotes occur with rational functions in which the degree of the numerator
            is one more than the degree of the denominator.
        </p>
        <p><b>Find the intercepts</b>
            The y-intercept of the graph is found by setting x = 0. The x-intercepts are found by solving f(x) = 0; they are the
            real zeros (or roots) of f.
        </p>
        <p><b>Change an appropriate graphing window and plot a graph</b>
            Use the results of the previous steps to graph the function. If you use graphing software, check for consistency with your
            analytical work. Is your graph complete-- that is, does it show all the essential details of the function?
        </p>
      </div> *173



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4></h4>
                      
                     
                      <MathComponent tex="" />
                      


                    *
                </div>


             
                
            </div>
            </div>
           
    );
}