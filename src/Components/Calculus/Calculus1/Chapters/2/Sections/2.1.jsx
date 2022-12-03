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
                    <span><bold>Average Velocity</bold>The position of an object moving vertically along a line is given by the function <MathComponent tex="s(t) = -16t^{2} + 128t" />
                            Find the average velocity of the object over the following intervals:
                     </span>
                    
                    <span>
                        <p>a. [1,4]</p>
                        <MathComponent tex="=\frac{s(4) - s(1)}{4 - 1} = \frac{256 - 112}{3} = 48" /> 
                        <p>b. [1,3]</p>
                        <MathComponent tex="=\frac{s(3) - s(1)}{3 - 1} = \frac{240 - 112}{2} = 64" /> 
                        <p>c. [1,2]</p> 
                        <MathComponent tex="=\frac{s(2) - s(1)}{2 - 1} = \frac{192 - 112}{1} = 80" /> 
                    </span> *10
                </div>

                <div className="Example2">
                    <h3>Example 2</h3>
                    <span><bold>Instantaneous Velocity</bold>Consider the position function <MathComponent tex="s(t) = -16t^{2} + 100t" />
                            Complete the following table with the appropriate average velocities. Then make a conjecture about the value of the instantaneaous velocity at t = 3
                     </span>
                    
                    <span>
                        
                        <MathComponent tex="\begin{array} {|r|r|}\hline Time Interval & Average Velocity \\ \hline [2,3] &  \\ \hline [2.9,3] &  \\ \hline [2.99,3] &  \\ \hline [2.999,3] &  \\ \hline [2.999,3] &  \\ \hline  \end{array}" /> 
                        <p>Answer:</p>
                        <MathComponent tex="\begin{array} {|r|r|}\hline Time Interval & Average Velocity \\ \hline [2,3] & 20 \\ \hline [2.9,3] & 5.6 \\ \hline [2.99,3] & 4.16 \\ \hline [2.999,3] & 4.016 \\ \hline [2.999,3] & 4.002 \\ \hline  \end{array}" />

                        <MathComponent tex="v_{inst} = 4" /> 
                    </span> *11
                </div>           
               

                
            </div>
            </div>
           
    );
}