import { Link } from "react-router-dom";
import "./3.11.css";
import { MathComponent } from "mathjax-react";



export default function Calculus1_Ch3_Sec11() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 3 Sec. 11 Related Rates</h1>
        <div className="sectionText">

        <h2>Steps for Related-Rate Problems </h2>
      
        <p>
        1. Read the problem carefully, making a sketch to organize the given information. Identify the rates that
        are given and the rate that is to be determined.
        2. Write one or more equations that express the basic relationships among the variables.
        3. Introduce rates of change by differentiating the appropriate equations(s) with respect to time t.
        4. Substitute known values and solve for the desired quantity.
        5. Check that units are consistent and the answer is reasonable.
        </p> *138


       
          
         
            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example1">
                    <h3>Example 1</h3>
                    <h4>Expanding Square</h4>
                    <p>
                        The sides of a square increase in length at a rate of 2 m/s.
                    </p>
                    <p>
                        a. At what rate is the area of the square changing when the sides are 10 m long?
                        b. At what rate is the area of the aquare changing when the sides are 20 m long?
                        
                    </p>

                    <p>
                        Answer:
                        a.  <MathComponent tex="40 m ^{2} / s" />
                        b.  <MathComponent tex="80 m ^{2} / s" />
                    </p>
                      
                   
                    *139
                </div>


              
                <div className="Example2">
                    <h3>Example 2</h3>
                    <h4>Expanding Circle</h4>
                    <p>
                        The area of a circle increases at a rate of <MathComponent tex="1 cm ^{2} / s" />
                    </p>
                    <p>
                        a. How fast is the radius changing when the radius is 2 cm?
                        b. How fast is the radius changing when the circumference is 2 cm?
                        
                    </p>

                    <p>
                        Answer:
                        a.  <MathComponent tex="\frac{1}{4 \pi} cm/s" />
                        b.  <MathComponent tex="\frac{1}{2} cm/s" />
                    </p>
                      
                   
                    *140
                </div>


                <div className="Example3">
                    <h3>Example 3</h3>
                    <h4>Balloons and motorcycles</h4>
                    
                    <p>
                        A hot-air balloon is 150 ft above the ground when a motorcycle (traveling in a straight line on a horizontal road)
                        passes directly beneath it going 40 mi/hr (58.67 ft/s). If the balloon rises vertically at a rate of 10 ft/s,
                        what is the rate of change of the distance between the motorcycle and the balloon 10 seconds later?
                        
                    </p>

                    <p>
                        Answer:
                        57.9 ft/s
                        
                    </p>
                      
                   
                    *141
                </div>
                

                <div className="Example4">
                    <h3>Example 4</h3>
                    <h4>Draining a water heater</h4>
                    
                    <p>
                        A water heater that has the shape of a right cylindrical tank with a radius of 1 ft and a height of 4 ft is
                        being drained. How fast is water draining out of the tank (in <MathComponent tex="ft^{3} / min" />)
                        if the water level is dropping at 6 in/min?
                    </p>

                    <p>
                        Answer:
                        <MathComponent tex="\frac{\pi}{2} ft^{3} / min" />
                        
                    </p>
                      
                   
                    *142
                </div>
           
             
                
            </div>
            </div>
           
    );
}