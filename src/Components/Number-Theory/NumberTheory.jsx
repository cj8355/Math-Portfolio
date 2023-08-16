import { Link, Route, Routes } from 'react-router-dom';
import "./numberTheory.css";

export default function NumberTheory() {
    
    
    return (
        <div className='container'> 
        <h1>Number Theory</h1>
        <Link to="Ch.1"><p>Ch. 1 The Integers</p></Link>
        <p>Intro to ch 1</p>
        <Link to="Ch.2"><p>Ch. 2</p></Link>
        <p>Intro to ch 2</p>
        <Link to="Ch.3"><p>Ch. 3</p></Link>
        <p>Intro to ch 3</p>
        <Link to="Ch.4"><p>Ch. 4</p></Link>
        <p>Intro to ch 4</p>
        <Link to="Ch.5"><p>Ch. 5</p></Link>
        <p>Intro to ch 5</p>
        <Link to="Ch.6"><p>Ch. 6</p></Link>
        <p>Intro to ch 5</p>
        
        
        </div>
    );
}