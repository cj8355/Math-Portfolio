import { Link } from "react-router-dom";
import "./1.4.css";
import { MathComponent } from "mathjax-react";


export default function Calculus1_Ch1_Sec4() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec 4 Trigonometric Functions and Their Inverses</h1>
        <div className="sectionText">

        <h2>Radian Measure</h2>
        <span>Working with a circle of radius r, the radian measure of an angle <MathComponent tex="\theta" /> is the length of the arc associated with
        <MathComponent tex="\theta" />, denoted s, divided by the radius of the circle r
        
        
        </span> *7


           <span>  where b  1</span>
            <div>
                <h2>Trigonometric Functions </h2>
                    
                    <span>
                    Let <MathComponent tex="P(x,y)" /> be a point on a circle of radius r associated with the angle <MathComponent tex="\theta" />
                    then:
                    <MathComponent tex="sin(\theta)=\frac{y}{r}" />
                    <MathComponent tex="cos(\theta)=\frac{x}{r}" />
                    <MathComponent tex="tan(\theta)=\frac{y}{x}" />
                    <MathComponent tex="cot(\theta)=\frac{x}{y}" />
                    <MathComponent tex="sec(\theta)=\frac{r}{x}" />
                    <MathComponent tex="csc(\theta)=\frac{r}{y}" /> *8
                    </span>

                    <h2>Trigonometric Identities </h2>
                    
                    <span>
                        <h3>Reciprocal Identities</h3>
                    
                        <MathComponent tex="tan(\theta)=\frac{sin\theta}{cos\theta}" />
                    <MathComponent tex="cot(\theta)=\frac{1}{tan\theta}=\frac{cos\theta}{sin\theta}" />
                    <MathComponent tex="csc(\theta)=\frac{1}{sin\theta}" />
                    <MathComponent tex="sec(\theta)=\frac{1}{cos\theta}" /> 

                    <h3>Pythagorean Identities</h3>
                    <MathComponent tex="sin^2(\theta)+cos^2(\theta)=1" />
                    <MathComponent tex="1+cot^2(\theta)=csc^2\theta" />
                    <MathComponent tex="tan^2(\theta)+1=sec^2\theta" />
                    


                    <h3>Double and Half-Angle Identities</h3>
                    <MathComponent tex="sin2(\theta)=2sin\theta cos\theta" />
                    <MathComponent tex="cos2(\theta)=cos^2\theta-sin^2\theta" />
                    <MathComponent tex="cos^2(\theta)=\frac{1+cos2\theta}{2}" />
                    <MathComponent tex="sin^2(\theta)=\frac{1-cos2\theta}{2}" />

                    *9

               
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

                <div className="Example2">
                    <h3>Example 2</h3>
                    <span><MathComponent tex="sin\frac{2\pi}{3}" /> = <MathComponent tex="\frac{\sqrt{3}}{2}" /></span>
                    
                    <span>
                         <MathComponent tex="cos0" /> = 1
                    </span>
                </div>

                <div className="Example3">
                    <h3>Example 3</h3>
                    <span><MathComponent tex="sin^{-1}1" /> = <MathComponent tex="\frac{\pi}{2}" /></span>
                    
                    <span>
                         <MathComponent tex="cos^{-1}(-\frac{1}{2})" /> = <MathComponent tex="\frac{2\pi}{3}" />
                    </span>
                </div>

                <div className="Example4">
                    <h3>Example 4</h3>
                    <span>Prove <MathComponent tex="sec\theta" /> = <MathComponent tex="\frac{1}{cos\theta}" /></span>
                    
                    <span>
                        Answer:
                        <MathComponent tex="sec\theta" /> = <MathComponent tex="\frac{r}{x}" /> = <MathComponent tex="\frac{1}{x/r}" /> = <MathComponent tex="\frac{1}{cos\theta}" />
                    </span>
                </div>

               

                
            </div>
            </div>
           
    );
}