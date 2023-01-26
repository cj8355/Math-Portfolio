import { Link } from "react-router-dom";
import "./4.5.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch4_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 4 Sec. 5 Optimization Problems</h1>
        <div className="sectionText">

        <h2>Guidelines for Optimization Problems</h2>
     
        <div>
        <p>
           <b>1.</b> Read the problem carefully, identify the variables, and organize the given information with a picture.
        </p>
        <p>
            <b>2.</b>Identify the objective function (the function to be optimized). Write it in terms of the variables
            of the problem.
        </p>
        <p>
            <b>3.</b>Identify the constraint(s). Write them in terms of the variables of the problem.
        </p>
        <p>
            <b>4.</b>Use the constraint(s) to eliminate all but one independent variable of the objective function.
        </p>
        <p>
            <b>5.</b>With the objective function expressed in terms of a single variable, find the interval of interest for that variable.
        </p>
        <p>
            <b>6.</b>Use methods of calculus to find the absolute maximum or minimum value of the objective function on the
            interval of interest. If necessary, check the endpoints.
        </p>
        
     
      </div> *178



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                      <h4>Minimum-perimeter rectangles</h4>
                      <p>Of all rectangles of area 100, which one has the minimum perimeter.</p>
                      
                     
                      <MathComponent tex="" />
                      <p>
                        Answer: <br/>
                        Width = length = 10
                      </p>


                    *179
                </div>


                <div className="Example2">
                    <h3>Example 2</h3>
                      <h4>Minimum distance</h4>
                      <p>Find the point P on the line y = 3x that is closest to the point (50, 0). What is the least
                        distance between P and (50,0)?
                      </p>
                      
                     
                      <p>
                        Answer: <br/>
                        (5,15), distance <MathComponent tex="\approx" /> 47.4
                      </p>


                    *180
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                      <h4>Shortest ladder</h4>
                      <p>
                        An 8-ft-tall fence runs parallel to the wall of a house at a distance of 5 ft. Find the length
                        of the shortest ladder that extends from the ground to the house without touching the fence. Assume the 
                        vertical wall of the house is 20 ft high and the horizontal ground extends 20 ft from the fence.
                      </p>
                      
                     
                      <p>
                        Answer: <br/>
                        18.2 ft
                      </p>


                    *181
                </div>


             
                
            </div>
            </div>
           
    );
}