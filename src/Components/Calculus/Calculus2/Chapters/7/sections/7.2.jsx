import { Link } from "react-router-dom";
import "./7.2.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch7_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 7 Sec. 2 Exponential Models</h1>
        <div className="sectionText">

      <h2>Exponential Growth Function</h2>
      <p className="textBorder">
       <p>
        Exponential growth is described by function of the form <MathComponent tex="y(t) = y_{0}e^{kt}." /> The initial value of
        y at t = 0 is <MathComponent tex="y(0) = y_{0}," /> and the rate constant <MathComponent tex="k > 0" /> determines the
        rate of growth. Exponential growth is characterized by a constant relative growth rate.
       </p>
        
        *296
      </p>


      <h2>Doubling Time</h2>
      <p className="textBorder">
       <p>
        The quantity desribed by the function <MathComponent tex="y(t) = y_{0} e^{kt}," /> for <MathComponent tex="k > 0," />
        has a constant doubling time of <MathComponent tex="T_{2} = \frac{ln2}{k}," /> with the same units as t.
       </p>
        *297
      </p>


      <h2>Exponential Decay Functions</h2>
      <p className="textBorder">
       <p>
        Exponential decay is describes by functions of the form <MathComponent tex="y(t) = y_{0} e^{kt}." /> The initial
        value of y is <MathComponent tex="y(0) = y_{0}," /> and the rate constant <MathComponent tex="k < 0" /> determines
        the rate of decay. Exponential decay is characterized by a constant relative decay rate. The constant half-life is
        <MathComponent tex="T_{1/2} = \frac{ln(1/2)}{k}," /> with the same untis as t.
       </p>
        
        *298
      </p>
      

      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Designing exponential growth functions</h4>
                     <ol>
                        <li><b>a. </b>Find the rate constant k and use it to devise an exponential growth function that fits the given data</li>
                        <li><b>b. </b> Answer the accompanying questions.</li>
                     </ol>
                      <p>
                        <b>Population</b><br/>
                        The population of a town with a 2016 population of 90,000 grows at a rate of 2.4%/yr. In what year will
                        the population reach 120,000?
                      </p>
                     
                    <p>
                        Answer: <br/>
                         a. <MathComponent tex="ln 1.024 \apprx 0.02372;" />
                         <MathComponent tex="y(t) = 90,000e^{tln1.024}" />  
                         b. 2028
                    </p>

                    *299
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Population of Texas</h4>
                     
                      <p>
                        Texas was the third fastest growing state in the United States in 2016. Texas grew from 25.1 million
                        in 2010 to 26.47 million in 2016. Use an exponential growth model to predict the population of Texas in 2025.
                      </p>
                     
                    <p>
                        Answer: <br/>
                        28.7 million
                         
                    </p>

                    *300
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4>Caffeine</h4>
                      <p>
                        After an individual drinks a beverage containing caffeine, the amount of caffeine in the bloodstream
                        can be modeled by an exponential decay function, with a half-life that depends on several factors, including
                        age and body weight. For the sake of simplicity, assume the caffeine in the following drink immediately 
                        the bloodstream upon consumption.
                      </p>
                      <p>
                        An individual consumes an energy drink that contains caffeine. If 80% of the caffeine from the energy
                        drink is still in the bloodstream 2 hours later, find the half-life of caffeine for this individual.
                      </p>
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="k = - \frac{ln(4/5)}{2}" />    
                         <MathComponent tex="T_{1/2} = \frac{2ln(1/2)}{ln(4/5)} = 6.2 hrs" /> 
                    </p>

                    *301
                    </div>
                </div>


            </div>
            </div>
           
    );
}