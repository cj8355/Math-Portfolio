import Calculus1 from "./Calculus1/Calculus1";
import Calculus2 from "./Calculus2/Calculus2";
import { Link, Route, Routes } from 'react-router-dom';
import "./calculus.css";

export default function Calculus() {
    
    
    return (
        <div className='container'> 
        <Link to="calculus1"><p>Calculus 1</p></Link>
        <p>Intro to Calc 1</p>
        <Link to="calculus2"><p>Calculus 2</p></Link>
        <p>Intro to Calc 2</p>
        <Link to="calculus3"><p>Calculus 3</p></Link>
        <p>Intro to Calc 3</p>
        <Link to="calculus4"><p>Calculus 4</p></Link>
        <p>Intro to Calc 4</p>
        
        </div>
    );
}