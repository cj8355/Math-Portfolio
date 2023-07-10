import { Link, Route, Routes } from 'react-router-dom';
import "./financialMath.css";

export default function FinancialMath() {
    
    
    return (
        <div className='container'> 
        <Link to="Ch.1"><p>Probability</p></Link>
        <p>Intro to </p>
        <Link to="Ch.2"><p>Normal Random Variables</p></Link>
        <p>Intro to </p>
        <Link to="Ch.3"><p>Probability</p></Link>
        <p>Intro to </p>
        <Link to="Ch.4"><p>Interest Rates and Present Value Analysis</p></Link>
        <p>Intro to </p>
        <Link to="Ch.5"><p>Pricing Contracts via Arbitrage</p></Link>
        <p>Intro to </p>
        <Link to="Ch.6"><p>The Arbitrage Theorem</p></Link>
        <p>Intro to </p>
        <Link to="Ch.7"><p>The Black-Scholes</p></Link>
        <p>Intro to </p>
        <Link to="Ch.8"><p>Additional Results on Options</p></Link>
        <p>Intro to </p>
        
        
        </div>
    );
}