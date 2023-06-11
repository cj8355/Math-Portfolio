import { Link, Route, Routes } from 'react-router-dom';
import "./modernAlgebra.css";

export default function ModernAlgebra() {
    
    
    return (
        <div className='container'> 
        <h1>Modern Algebra</h1>
        <Link to="Ch.1"><p>Part 1 </p></Link>
        <p>Intro to ch 1</p>
        <Link to="Ch.2"><p>Ch. 2</p></Link>
        <p>Intro to ch 2</p>
        <Link to="Ch.3"><p>Ch. 3</p></Link>
        <p>Intro to ch 3</p>
        <Link to="Ch.4"><p>Ch. 4</p></Link>
        <p>Intro to ch 4</p>
        <Link to="Ch.5"><p>Ch. 5</p></Link>
        <p>Intro to ch 5</p>
        
        
        </div>
    );
}