import { Link } from "react-router-dom";
import "./13.6.css";
import { MathComponent } from "mathjax-react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

export default function Calculus3_Ch13_Sec6() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 13 Sec. 6 Cylinders and Quadric Surfaces</h1>
        <div className="sectionText">

      
      <h2>Trace</h2>
      <p className="textBorder">
       <p>
        A trace of a surface is the set of points at which the surface intersects a plane that is parallel to one of the coordinate
        planes. The traces in the coordinate planes are called the xy-trace, the yz-trace, and the xz-trace.
       </p>
       <img src={image1} alt="Graph of function" className="imageWidth"></img><br/>
        *490
      </p>


      <h2>Common Shapes</h2>
      <p className="textBorder">
       
      <img src={image2} alt="Graph of function" className="imageWidth"></img><br/>
        *491
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