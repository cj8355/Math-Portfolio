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
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>




            </div>
            </div>
           
    );
}