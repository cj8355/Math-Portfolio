import { Link } from "react-router-dom";
import "./1.1.css";

export default function Calculus1_Ch1_Sec1() {
    
    
    return (
        <div className='container'> 
        Ch. 1 Sec 1
        <div className="sectionText">
        <p>A <b>function</b> f is a rule that assigns to eash value x in a set D a unique value denoted f(x)
            The set D is the <b>domain</b>  of the funtion. The <b>range</b>  is the set of all values of f(x) 
            produces as x varies over the entire domain.</p>

            </div>
            <div className="example"> 
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
        </div>
    );
}