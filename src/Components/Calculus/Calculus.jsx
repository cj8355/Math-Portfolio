import Calculus1 from "./Calculus1/Calculus1";
import Calculus2 from "./Calculus2/Calculus2";
import { Link, Route, Routes } from 'react-router-dom';

export default function Calculus() {
    
    
    return (
        <div className='container'> 
        Calc222
        <Link to="calculus1"><p>CAlculus 1</p></Link>
        <p>Intro to Calc 1</p>
        <Link to="calculus2"><p>CAlculus 2</p></Link>
        <p>Intro to Calc 2</p>
        <Link to="calculus3"><p>CAlculus 3</p></Link>
        <p>Intro to Calc 3</p>
        <Link to="calculus4"><p>CAlculus 4</p></Link>
        <p>Intro to Calc 4</p>
        
        </div>
    );
}