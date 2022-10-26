import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculus from './Components/Calculus/Calculus';
import Calculus1 from './Components/Calculus/Calculus1/Calculus1';
import Calculus1_Ch1 from './Components/Calculus/Calculus1/Chapters/1/Ch1';
import Calculus1_Ch1_Sec1 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.1';
import Calculus1_Ch1_Sec2 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.2';
import Calculus2 from './Components/Calculus/Calculus2/Calculus2';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Math Portfolio</h1>
        <h3>Charles Callender</h3>
        <Link to="/">Home</Link>
        <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='*' element={<NotFound />}/>
        
        <Route path='/calculus' element={<Calculus/>}/>

        
        <Route path='/calculus/calculus1' element={<Calculus1 />}/>
        <Route path='/calculus/calculus1/Ch.1' element={<Calculus1_Ch1 />}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.1' element={<Calculus1_Ch1_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.2' element={<Calculus1_Ch1_Sec2/>}/>

        <Route path='/calculus/calculus2' element={<Calculus2 />}/>
        
      </Routes>
    </div>
  );
}

export default App;
