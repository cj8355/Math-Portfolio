import { Link, Route, Routes } from 'react-router-dom';
import Calculus from '../Calculus/Calculus';
import "./home.css";

export default function Home() {
    
    
    return (
        <div className='container'> 
        



        <div className='branches'>
        
        <Link to="/calculus" className='branch'>Calculus</Link>
        <Link to="/abstractMath" className='branch'>Abstract Mathematics</Link>
        <Link to="/linearAlgebra" className='branch'>Linear Algebra</Link>
        <Link to="/stats" className='branch'>Elements of Statistical Inference</Link>
      </div>

      <Routes>
        
        
      </Routes>
        </div>
    );
}