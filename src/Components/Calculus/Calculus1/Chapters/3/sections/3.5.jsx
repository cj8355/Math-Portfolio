import { Link } from "react-router-dom";
import "./3.5.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch3_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 5 Derivatives of Trigonometric Functions</h1>
        <div className="sectionText">

        <h2>Trigonometric Limits</h2>
      <p>
            <MathComponent tex="\lim_{x\to 0} \frac{sin x}{x} = 1" />
            <MathComponent tex="\lim_{x\to 0} \frac{cos x - 1}{x} = 1" />
            </p> *92

            
            <h2>Derivatives of Sine and Cosine</h2>
      <p>
            <MathComponent tex="\frac{d}{dx} (sin x) = cos x" />
            <MathComponent tex="\frac{d}{dx} (cos x) = -sin x" />
            </p> *93


            <h2>Derivatives of the Trigonometric Functions</h2>
      <p>
        <div>
            <MathComponent tex="\frac{d}{dx} (sin x) = cos x" />
            <MathComponent tex="\frac{d}{dx} (tan x) = sec^{2} x" />
            <MathComponent tex="\frac{d}{dx} (sec x) = sec x tan x" />
        </div>
        <div>
            <MathComponent tex="\frac{d}{dx} (cos x) = -sin x" />
            <MathComponent tex="\frac{d}{dx} (cot x) = -csc^{2} x" />
            <MathComponent tex="\frac{d}{dx} (csc x) = -csc x cot x" />
        </div>
            
            </p> *94


            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Trigonometric limits</h4>
                    <p>Use Trigonometric Limits to evaluate the following limits.</p>
                    <MathComponent tex="\lim_{x\to 0} \frac{sin 3x}{x}" />

                    <p>
                        Answer:
                        3
                    </p>
                    *95
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Trigonometric limits</h4>
                    <p>Use Trigonometric Limits to evaluate the following limits.</p>
                    <MathComponent tex="\lim_{x\to 0} \frac{tan 5x}{x}" />

                    <p>
                        Answer:
                        5
                    </p>
                    *96
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Calculating Derivatives</h4>
                    <p>Find the derivative of the following function.</p>
                    <MathComponent tex="y = sinx + cosx" />

                    <p>
                        Answer:
                        <MathComponent tex="cos x - sin x" />
                    </p>
                    *97
                </div>


                <div className="Example4">
                    <h3>Example 4</h3>
                      <h4>Calculating Derivatives</h4>
                    <p>Find the derivative of the following function.</p>
                    <MathComponent tex="y = cos^{2} x" />

                    <p>
                        Answer:
                        <MathComponent tex="-2 sinx cosx = -sin 2x" />
                    </p>
                    *98
                </div>


                <div className="Example5">
                    <h3>Example 5</h3>
                      <h4>Second Derivatives</h4>
                    <p>Find y" for the following function.</p>
                    <MathComponent tex="y = x sin x" />

                    <p>
                        Answer:
                        <MathComponent tex="2 cos x - x sin x" />
                    </p>
                    *99
                </div> 
             
             
                
            </div>
            </div>
           
    );
}