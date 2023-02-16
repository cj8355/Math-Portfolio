import { Link } from "react-router-dom";
import "./8.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch8_Sec1() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 8 Sec. 1 Basic Approaches</h1>
        <div className="sectionText">

      <h2></h2>
      <p className="textBorder">
       <div className="splitContainer">
        <div className="leftSide">
        <span className="oneLine"><b>1. </b><MathComponent tex="\int k \hspace{.15cm} dx = kx \hspace{.15cm} + \hspace{.15cm} C, k \hspace{.15cm} real" /></span>
        <span className="oneLine"><b>2. </b><MathComponent tex="\int x^{p} \hspace{.15cm} dx = \frac{x^{p + 1}}{p + 1} \hspace{.15cm} + \hspace{.15cm} C, p \neq -1 \hspace{.15cm} real" /></span>
        <span className="oneLine"><b>3. </b><MathComponent tex="\int cos \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} sin \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>4. </b><MathComponent tex="\int sin \hspace{.15cm} ax \hspace{.15cm} dx = - \frac{1}{a} cos \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>5. </b><MathComponent tex="\int sec^{2} \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} tan \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>6. </b><MathComponent tex="\int csc^{2} \hspace{.15cm} ax \hspace{.15cm} dx = - \frac{1}{a} cot \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>7. </b><MathComponent tex="\int sec \hspace{.15cm} ax \hspace{.15cm} tan \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} sec \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>8. </b><MathComponent tex="\int csc \hspace{.15cm} ax \hspace{.15cm} cot \hspace{.15cm} ax \hspace{.15cm} dx = - \frac{1}{a} csc \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} C" /></span>
        
        </div>
        <div>
        <span className="oneLine"><b>9. </b><MathComponent tex="\int e^{ax} \hspace{.15cm} dx = \frac{1}{a} e^{ax} \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>10. </b><MathComponent tex="\int \frac{dx}{x} = ln|x| \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>11. </b><MathComponent tex="\int \frac{dx}{a^{2} + x^{2}} = \frac{1}{a} tan^{-1} \frac{x}{a} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>12. </b><MathComponent tex="\int \frac{dx}{\sqrt{a^{2} - x^{2}}} = sin^{-1} \frac{x}{a} + \hspace{.15cm} C, \hspace{.15cm} a > 0" /></span>
        <span className="oneLine"><b>13. </b><MathComponent tex="\int \frac{dx}{x \sqrt{x^{2} - a^{2}}} = \frac{1}{a} sec^{-1} |\frac{x}{a}| + \hspace{.15cm} C, \hspace{.15cm} a > 0" /></span>
        <span className="oneLine"><b>14. </b><MathComponent tex="\int tan \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} ln |sec \hspace{.15cm} ax| \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>15. </b><MathComponent tex="\int cot \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} ln |sin \hspace{.15cm} ax| \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>16. </b><MathComponent tex="\int sec \hspace{.15cm} ax \hspace{.15cm} dx = \frac{1}{a} ln |sec \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} tan \hspace{.15cm} ax| \hspace{.15cm} + \hspace{.15cm} C" /></span>
        <span className="oneLine"><b>17. </b><MathComponent tex="\int csc \hspace{.15cm} ax \hspace{.15cm} dx = - \frac{1}{a} ln |csc \hspace{.15cm} ax \hspace{.15cm} + \hspace{.15cm} cot \hspace{.15cm} ax| \hspace{.15cm} + \hspace{.15cm} C" /></span>
        </div>
       </div>
        
        *312
      </p>



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4>Integration review</h4>
                      <p>
                        Evaluate the following integral
                      </p>
                      <MathComponent tex="\int \frac{dx}{(3 - 5x)^{4}}" />
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="u = 3 - 5x, \hspace{.15cm} du = -5dx, \hspace{.15cm} dx = - \frac{1}{5} du" />
                         <MathComponent tex="= \hspace{.15cm} \int \frac{1}{u^{4}} \cdot \frac{1}{-5} du" />
                         <MathComponent tex="= \hspace{.15cm} - \frac{1}{5} \int u^{-4} \hspace{.15cm} du" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{15(3-5x)^{3}} + C" />    
                         
                    </p>

                    *313
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                    <h4>Integration review</h4>
                      <p>
                        Evaluate the following integral
                      </p>
                      <MathComponent tex="\int \frac{x + 2}{x^{2} + 4} dx" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\int \frac{x}{x^{2} + 4} dx + \hspace{.15cm} \int \frac{2}{x^{2} + 4} dx" />
                         <MathComponent tex="u = x^{2} + 4, \hspace{.15cm} du = 2xdx,x \hspace{.15cm} dx = \frac{1}{2} du" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{2} \int \frac{1}{u} \hspace{.15cm} du + \hspace{.15cm} 2 \int \frac{1}{x^{2} + 2^{2}} dx" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{2}(ln(|u|)) + C) \hspace{.15cm} + \hspace{.15cm} 2(\frac{1}{2} tan^{-1} (\frac{x}{2}) + C" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{2} ln(|x^{2} + 4|) \hspace{.15cm} + \hspace{.15cm} tan^{-1} (\frac{x}{2}) + C" />    
                         
                    </p>

                    *314
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                    <h4>Integration review</h4>
                      <p>
                        Evaluate the following integral
                      </p>
                      <MathComponent tex="\int \frac{dx}{x^{2} - 2x + 10}" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="\int \frac{1}{(x-1)^{2} + 9} dx" />
                         <MathComponent tex="u = x - 1, \hspace{.15cm} du = dx" />
                         <MathComponent tex="= \hspace{.15cm} \int \frac{1}{u^{2} + 3^{2}} \hspace{.15cm} du" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{3} tan^{-1}(\frac{1}{3}u) + C" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{3} tan^{-1}(\frac{x-1}{3}) + C" />    
                         
                    </p>

                    *315
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                    <h4>Integration review</h4>
                      <p>
                        Evaluate the following integral
                      </p>
                      <MathComponent tex="\int sin \hspace{.15cm} x \hspace{.15cm} sin \hspace{.15cm} 2x \hspace{.2cm} dx" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="2 \int sin^{2} x \hspace{.15cm} cos \hspace{.15cm} x \hspace{.15cm} dx" />
                         <MathComponent tex="u = sin(x), \hspace{.15cm} du = cos(x) \hspace{.15cm} dx" />
                         <MathComponent tex="= 2 \cdot \frac{u^{3}}{3}" />
                         <MathComponent tex="= 2 \cdot \frac{sin^{3}(x)}{3}" />
                         <MathComponent tex="= \hspace{.15cm} \frac{2sin^{3}(x)}{3} \hspace{.15cm} + C" />    
                         
                    </p>

                    *316
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                    <h4>Integration review</h4>
                      <p>
                        Evaluate the following integral
                      </p>
                      <MathComponent tex="\int_{1}^{3} \frac{2}{x^{2} + 2x + 1} \hspace{.2cm} dx" />
                     
                    <p>
                        Answer: <br/>
                        <MathComponent tex="2 \int_{1}^{3} \frac{1}{(x+1)^{2}} \hspace{.15cm} dx" />
                         <MathComponent tex="u = x + 1, \hspace{.15cm} du = dx" />
                         <MathComponent tex="= 2 \int_{2}^{4} \frac{1}{u^{2}} \hspace{.15cm} du" />
                         <MathComponent tex="= 2(-u^{-1} \vert_{2}^{4})" />
                         <MathComponent tex="= \hspace{.15cm} \frac{1}{2}" />    
                         
                    </p>

                    *317
                    </div>
                </div>




            </div>
            </div>
           
    );
}