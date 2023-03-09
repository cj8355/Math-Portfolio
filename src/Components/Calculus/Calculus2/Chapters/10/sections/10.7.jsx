import { Link } from "react-router-dom";
import "./10.7.css";
import { MathComponent } from "mathjax-react";

export default function Calculus2_Ch10_Sec7() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 10 Sec. 7 The Ratio and Root Tests</h1>
        <div className="sectionText">

      <h2>Ratio Test</h2>
      <p className="textBorder">
       
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \sum a_{k} \hspace{.2cm} be \hspace{.2cm} an \hspace{.2cm} infinite \hspace{.2cm} series, \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} r = \lim_{k \to \infty} \bigg\vert \frac{a_{k+1}}{a_{k}} \bigg\vert.}" />
        <p className="oneLine">1. If  <MathComponent tex="r < 1," /> the series converges absolutely, and therefore it converges.</p>
        <p className="oneLine">2. If  <MathComponent tex="r > 1, \hspace{.2cm} (\mathrm{including \hspace{.2cm} r = \infty})," /> the series diverges.</p>
        <p className="oneLine">3. If  r = 1, the test is inconclusive.</p>
        *395
      </p>


      <h2>Root Test</h2>
      <p className="textBorder">
        <MathComponent tex="\mathrm{Let \hspace{.2cm} \sum a_{k} \hspace{.2cm} be \hspace{.2cm} an \hspace{.2cm} infinite \hspace{.2cm} series, \hspace{.2cm} and \hspace{.2cm} let \hspace{.2cm} \rho = \lim_{k \to \infty} \sqrt[k]{\vert a_{k} \vert}.}" />
        <p className="oneLine">1. If  <MathComponent tex="\rho < 1," /> the series converges absolutely, and therefore it converges.</p>
        <p className="oneLine">2. If  <MathComponent tex="\rho > 1, \hspace{.2cm} (\mathrm{including \hspace{.2cm} \rho = \infty})," /> the series diverges.</p>
        <p className="oneLine">3. If  <MathComponent tex="\rho = 1," /> the test is inconclusive.</p>
        *396
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