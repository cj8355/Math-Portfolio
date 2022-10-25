import { Link } from "react-router-dom";
import "./1.1.css";
import { MathComponent } from "mathjax-react";

export default function Calculus1_Ch1_Sec1() {
    
    
    return (
        <div className='container'> 
        Ch. 1 Sec 1
        <div className="sectionText">
        <p>A <b>function</b> f is a rule that assigns to eash value x in a set D a unique value denoted f(x)
            The set D is the <b>domain</b>  of the funtion. The <b>range</b>  is the set of all values of f(x) 
            produces as x varies over the entire domain.</p>

            </div>
            <h1>Examples</h1>
            <div className="example1"> 
                
                <h2>Example 1</h2>
                <span>Use the table to evaluate the given compositions.</span>

                <p><i>x</i></p> <p>-1</p> <p>0</p> <p>1</p> <p>2</p> <p>3</p> <p>4</p>
                <p><i>f</i>(x)</p> <p>3</p> <p>1</p> <p>0</p> <p>-1</p> <p>-3</p> <p>-1</p>
                <p><i>g</i>(x)</p> <p>-1</p> <p>0</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p>
                <p><i>h</i>(x)</p> <p>0</p> <p>-1</p> <p>0</p> <p>3</p> <p>0</p> <p>4</p>

                <span className="solutions">
                    a. <i>h</i>(<i>g</i>(0))<br/>
                    Answer:<br/>
                    <i>g</i>(0) = 0 <i>h</i>(0) = -1<br/><br/>
                    </span>

                <span className="solutions">
                    b. <i>g</i>(<i>f</i>(4))<br/>
                    Answer:<br/>
                    <i>f</i>(4) = -1 <i>g</i>(-1) = -1<br/><br/>
                    </span>

                    <span className="solutions">
                    c. <i>h</i>(<i>h</i>(0))<br/>
                    Answer:<br/>
                    <i>h</i>(0) = -1 <i>h</i>(-1) = 0<br/><br/>
                    </span>

                   
            </div>
            <div className="example2"> 
                    <h2>Example 2</h2><br/>
                    <span>State the domain and range of the function: </span>
                    <span><MathComponent tex="f(x) = \frac{x - 2}{2 - x}" /></span>
                    <span className="solutions">
                        Domain: <MathComponent tex="(-\infty,2)\cup(2,\infty), {x|x \neq 2}" />
                        x can't be 2 as that would result in the denominator = 0<br/>
                        Range: <MathComponent tex=" {y|y = -1}" />
                        whatever the x value is, you will always end up with the same number positive 
                        in the numerator and negative in the denominator if x is positive or vice versa if x is negative
                    </span> 
                    </div>
                    <div className="example3"> 
                    <h2>Example 3</h2><br/>
                    <span>Determine the following composite functions and give their domains. </span>
                    <span><MathComponent tex="Let f(x) = |x|, g(x) = x^2 - 4, F(x) = \sqrt{(x)}, and G(x) = \frac{1}{(x - 2)}" /></span>
                    <span className="solutions">
                        a.<MathComponent tex="g \circ f" />
                        
                        <MathComponent tex="(|x|)^2 - 4 = x^2 - 4" />
                        Domain: <MathComponent tex="(-\infty,\infty)" />
                        
                        b. <MathComponent tex="g \circ g" />
                        <MathComponent tex="((x^2 - 4)^2 - 4) = x^4 - 8x^2 + 12" />
                        Domain: <MathComponent tex="(-\infty,\infty)" />
                        
                       
                    </span> 
                    </div>
        </div>
    );
}