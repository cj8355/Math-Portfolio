import { Link } from "react-router-dom";
import "./2.1.css";
import { MathComponent } from "mathjax-react";


export default function Calculus1_Ch2_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 1 The Idea of Limits</h1>
        <div className="sectionText">

        <h2>Average Velocity</h2>
        Average velocity is an objects change in position divided by the elapsed time

        <MathComponent tex="v_{av} = \frac{s(t_{1}) - s(t_{0})}{t_{1} - t_{0}}" />


           <span> with s being the position of the object and t representing time</span>
            <div>
                <h2>Instantaneous Velocity </h2>
                The instantaneous velocity of an object is the limit of the average velocity as the elapsed time approaches zero
                    <span>
                    <MathComponent tex="v_{av} = \frac{s(t) - s(1)}{t - 1}" />
                    
                    </span>

                    
                    
                    <span>
                    

               
                </span>
              
                </div>
                
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    <span>How is the radian measure of an angle determined?</span>
                    
                    <span>
                        <p>Answer:</p>
                        The radian measure of an angle <MathComponent tex="\theta" /> is the length s of an arc on the unit circle associated with <MathComponent tex="\theta" />
                    </span>
                </div>

             
               

                
            </div>
            </div>
           
    );
}