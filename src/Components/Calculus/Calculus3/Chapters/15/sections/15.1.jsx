import { Link } from "react-router-dom";
import "./15.1.css";
import { MathComponent } from "mathjax-react";
import graph1 from "./images/graph1.png";
import graph2 from "./images/graph2.png";
import graph3 from "./images/graph3.png";

export default function Calculus3_Ch15_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 15 Sec. 1 Graphs and Level Curves</h1>
        <div className="sectionText">

      
      <h2>Function, Domain, and Range with Two Independent Variables</h2>
      <p className="textBorder">
       <p>
        A function z = f(x,y) assigns to each point (x,y) in a set D in 
       </p>
        <MathComponent tex="\mathbb{R}^{2}" />
        <p>
            a unique real number z in a subset of 
        </p>
        <MathComponent tex="\mathbb{R}" />
        <p>
            The set D is the domain of f. The range of f is the set of real numbers z that are assumed as the points (x,y) vary over the domain.
        </p>
        *532
      </p>


      <h2>Function, Domain, and Range with n Independent Variables</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{The \hspace{.2cm} function \hspace{.2cm} x_{n+1} = f(x_{1}, x_{2}, ..., x_{n}) \hspace{.2cm} assigns \hspace{.2cm} a \hspace{.2cm} unique \hspace{.2cm} real \hspace{.2cm} number \hspace{.2cm} x_{n+1} \hspace{.2cm} to \hspace{.2cm} each \hspace{.2cm} point \hspace{.2cm} (x_{1}, x_{2}, ..., x_{n}) \hspace{.2cm} in \hspace{.2cm} a \hspace{.2cm} set \hspace{.2cm} D \hspace{.2cm} in \hspace{.2cm} \mathbb{R}^{n}}" />
        <p>The set D is the domain of f. The range is the set of real numbers</p>
        <MathComponent tex="\mathrm{x_{n+1} \hspace{.2cm} that \hspace{.2cm} are \hspace{.2cm} assumed \hspace{.2cm} as \hspace{.2cm} the \hspace{.2cm} points \hspace{.2cm} (x_{1}, x_{2}, ..., x_{n}) \hspace{.2cm} vary \hspace{.2cm} over \hspace{.2cm} the \hspace{.2cm} domain.}" />
        *533
      </p>




            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Domains</h4>
                      <p>
                        Find the domains of the following function.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = 2xy - 3x + 4y}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{D = \mathbb{R}^{2}}" />    
                         
                    </p>

                    *534
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Domains</h4>
                      <p>
                        Find the domains of the following function.
                      </p>
                      <MathComponent tex="\mathrm{f(x,y) = sin \frac{x}{y}}" /> 
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="\mathrm{D = \{(x,y): y \neq 0 \} }" />    
                         
                    </p>

                    *535
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Graphs of familiar functions</h4>
                      <p>
                        Use what you learned about surfaces in Sections 13.5 and 13.6 to sketch a graph of the following functions.
                        In each case, identify the surface and state the domain and range of the function.
                      </p>
                      <MathComponent tex="f(x,y) = 6 - x - 2y" /> 
                     
                    <p>
                        Answer: <br/>
                        <p>Plane</p>
                        <MathComponent tex="\mathrm{D = \mathbb{R}^{2}, \hspace{.2cm} R = \mathbb{R}}" /> <br/>
                        <img src={graph1} alt="Graph of function" className="imageWidth"></img>  <br/>
                        
                         
                    </p>

                    *536
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Graphs of familiar functions</h4>
                      <p>
                        Use what you learned about surfaces in Sections 13.5 and 13.6 to sketch a graph of the following functions.
                        In each case, identify the surface and state the domain and range of the function.
                      </p>
                      <MathComponent tex="G(x,y) = - \sqrt{1 + x^{2} + y^{2}}" /> 
                     
                    <p>
                        Answer: <br/>
                        <p>Lower part of a hyperboloid of two sheets</p>
                        <MathComponent tex="\mathrm{D = \mathbb{R}^{2}, \hspace{.2cm} R = (- \infty, -1)}" /><br/>
                        <img src={graph2} alt="Graph of function" className="imageWidth"></img>  <br/>
                        <img src={graph3} alt="Graph of function" className="imageWidth"></img>  <br/>
                         
                         
                    </p>

                    *537
                    </div>
                </div>



            </div>
            </div>
           
    );
}