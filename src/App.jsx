import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculus from './Components/Calculus/Calculus';
import Calculus1 from './Components/Calculus/Calculus1/Calculus1';
import Calculus1_Ch1 from './Components/Calculus/Calculus1/Chapters/1/Ch1';
import Calculus1_Ch1_Sec1 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.1';
import Calculus1_Ch1_Sec2 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.2';
import Calculus1_Ch1_Sec3 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.3';
import Calculus1_Ch1_Sec4 from './Components/Calculus/Calculus1/Chapters/1/Sections/1.4';
import Calculus1_Ch2 from './Components/Calculus/Calculus1/Chapters/2/Ch2';
import Calculus1_Ch2_Sec1 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.1';
import Calculus1_Ch2_Sec2 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.2';
import Calculus1_Ch2_Sec3 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.3';
import Calculus1_Ch2_Sec4 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.4';
import Calculus1_Ch2_Sec5 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.5';
import Calculus1_Ch2_Sec6 from './Components/Calculus/Calculus1/Chapters/2/Sections/2.6';

import Calculus1_Ch3 from './Components/Calculus/Calculus1/Chapters/3/ch3';
import Calculus1_Ch3_Sec1 from './Components/Calculus/Calculus1/Chapters/3/sections/3.1';
import Calculus1_Ch3_Sec10 from './Components/Calculus/Calculus1/Chapters/3/sections/3.10';
import Calculus1_Ch3_Sec11 from './Components/Calculus/Calculus1/Chapters/3/sections/3.11';
import Calculus1_Ch3_Sec2 from './Components/Calculus/Calculus1/Chapters/3/sections/3.2';
import Calculus1_Ch3_Sec3 from './Components/Calculus/Calculus1/Chapters/3/sections/3.3';
import Calculus1_Ch3_Sec4 from './Components/Calculus/Calculus1/Chapters/3/sections/3.4';
import Calculus1_Ch3_Sec5 from './Components/Calculus/Calculus1/Chapters/3/sections/3.5';
import Calculus1_Ch3_Sec6 from './Components/Calculus/Calculus1/Chapters/3/sections/3.6';
import Calculus1_Ch3_Sec7 from './Components/Calculus/Calculus1/Chapters/3/sections/3.7';
import Calculus1_Ch3_Sec8 from './Components/Calculus/Calculus1/Chapters/3/sections/3.8';
import Calculus1_Ch3_Sec9 from './Components/Calculus/Calculus1/Chapters/3/sections/3.9';
import Calculus1_Ch4_Sec1 from './Components/Calculus/Calculus1/Chapters/4/sections/4.1';
import Calculus1_Ch4 from './Components/Calculus/Calculus1/Chapters/4/ch4';
import Calculus2 from './Components/Calculus/Calculus2/Calculus2';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import Calculus1_Ch4_Sec2 from './Components/Calculus/Calculus1/Chapters/4/sections/4.2';
import Calculus1_Ch4_Sec3 from './Components/Calculus/Calculus1/Chapters/4/sections/4.3';
import Calculus1_Ch4_Sec4 from './Components/Calculus/Calculus1/Chapters/4/sections/4.4';
import Calculus1_Ch4_Sec5 from './Components/Calculus/Calculus1/Chapters/4/sections/4.5';
import Calculus1_Ch4_Sec6 from './Components/Calculus/Calculus1/Chapters/4/sections/4.6';
import Calculus1_Ch4_Sec7 from './Components/Calculus/Calculus1/Chapters/4/sections/4.7';
import Calculus1_Ch4_Sec8 from './Components/Calculus/Calculus1/Chapters/4/sections/4.8';
import Calculus1_Ch4_Sec9 from './Components/Calculus/Calculus1/Chapters/4/sections/4.9';
import Calculus1_Ch5 from './Components/Calculus/Calculus1/Chapters/5/ch5';
import Calculus1_Ch5_Sec1 from './Components/Calculus/Calculus1/Chapters/5/sections/5.1';
import Calculus1_Ch5_Sec2 from './Components/Calculus/Calculus1/Chapters/5/sections/5.2';
import Calculus1_Ch5_Sec3 from './Components/Calculus/Calculus1/Chapters/5/sections/5.3';
import Calculus1_Ch5_Sec4 from './Components/Calculus/Calculus1/Chapters/5/sections/5.4';
import Calculus1_Ch5_Sec5 from './Components/Calculus/Calculus1/Chapters/5/sections/5.5';
import Calculus2_Ch6 from './Components/Calculus/Calculus2/Chapters/6/ch6';
import Calculus2_Ch6_Sec1 from './Components/Calculus/Calculus2/Chapters/6/sections/6.1';
import Calculus2_Ch6_Sec2 from './Components/Calculus/Calculus2/Chapters/6/sections/6.2';
import Calculus2_Ch6_Sec3 from './Components/Calculus/Calculus2/Chapters/6/sections/6.3';
import Calculus2_Ch6_Sec4 from './Components/Calculus/Calculus2/Chapters/6/sections/6.4';
import Calculus2_Ch6_Sec5 from './Components/Calculus/Calculus2/Chapters/6/sections/6.5';
import Calculus2_Ch6_Sec6 from './Components/Calculus/Calculus2/Chapters/6/sections/6.6';
import Calculus2_Ch6_Sec7 from './Components/Calculus/Calculus2/Chapters/6/sections/6.7';

function App() {
  return (
    <div className="App">
      <h1>Math Portfolio</h1>
        <h3>Charles Callender</h3>
        <Link to="/" className='HomeLink'>Home</Link>
        <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='*' element={<NotFound />}/>
        
        <Route path='/calculus' element={<Calculus/>}/>

        
        <Route path='/calculus/calculus1' element={<Calculus1 />}/>
        <Route path='/calculus/calculus1/Ch.1' element={<Calculus1_Ch1 />}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.1' element={<Calculus1_Ch1_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.2' element={<Calculus1_Ch1_Sec2/>}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.3' element={<Calculus1_Ch1_Sec3/>}/>
        <Route path='/calculus/calculus1/Ch.1/Sec1.4' element={<Calculus1_Ch1_Sec4/>}/>

        <Route path='/calculus/calculus1/Ch.2' element={<Calculus1_Ch2 />}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.1' element={<Calculus1_Ch2_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.2' element={<Calculus1_Ch2_Sec2/>}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.3' element={<Calculus1_Ch2_Sec3/>}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.4' element={<Calculus1_Ch2_Sec4/>}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.5' element={<Calculus1_Ch2_Sec5/>}/>
        <Route path='/calculus/calculus1/Ch.2/Sec2.6' element={<Calculus1_Ch2_Sec6/>}/>

        <Route path='/calculus/calculus1/Ch.3' element={<Calculus1_Ch3 />}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.1' element={<Calculus1_Ch3_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.2' element={<Calculus1_Ch3_Sec2/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.3' element={<Calculus1_Ch3_Sec3/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.4' element={<Calculus1_Ch3_Sec4/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.5' element={<Calculus1_Ch3_Sec5/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.6' element={<Calculus1_Ch3_Sec6/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.7' element={<Calculus1_Ch3_Sec7/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.8' element={<Calculus1_Ch3_Sec8/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.9' element={<Calculus1_Ch3_Sec9/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.10' element={<Calculus1_Ch3_Sec10/>}/>
        <Route path='/calculus/calculus1/Ch.3/Sec3.11' element={<Calculus1_Ch3_Sec11/>}/>

        <Route path='/calculus/calculus1/Ch.4' element={<Calculus1_Ch4 />}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.1' element={<Calculus1_Ch4_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.2' element={<Calculus1_Ch4_Sec2/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.3' element={<Calculus1_Ch4_Sec3/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.4' element={<Calculus1_Ch4_Sec4/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.5' element={<Calculus1_Ch4_Sec5/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.6' element={<Calculus1_Ch4_Sec6/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.7' element={<Calculus1_Ch4_Sec7/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.8' element={<Calculus1_Ch4_Sec8/>}/>
        <Route path='/calculus/calculus1/Ch.4/Sec4.9' element={<Calculus1_Ch4_Sec9/>}/>

        <Route path='/calculus/calculus1/Ch.5' element={<Calculus1_Ch5 />}/>
        <Route path='/calculus/calculus1/Ch.5/Sec5.1' element={<Calculus1_Ch5_Sec1/>}/>
        <Route path='/calculus/calculus1/Ch.5/Sec5.2' element={<Calculus1_Ch5_Sec2/>}/>
        <Route path='/calculus/calculus1/Ch.5/Sec5.3' element={<Calculus1_Ch5_Sec3/>}/>
        <Route path='/calculus/calculus1/Ch.5/Sec5.4' element={<Calculus1_Ch5_Sec4/>}/>
        <Route path='/calculus/calculus1/Ch.5/Sec5.5' element={<Calculus1_Ch5_Sec5/>}/>

        <Route path='/calculus/calculus2' element={<Calculus2 />}/>
        <Route path='/calculus/calculus2/Ch.6' element={<Calculus2_Ch6 />}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.1' element={<Calculus2_Ch6_Sec1/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.2' element={<Calculus2_Ch6_Sec2/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.3' element={<Calculus2_Ch6_Sec3/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.4' element={<Calculus2_Ch6_Sec4/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.5' element={<Calculus2_Ch6_Sec5/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.6' element={<Calculus2_Ch6_Sec6/>}/>
        <Route path='/calculus/calculus2/Ch.6/Sec6.7' element={<Calculus2_Ch6_Sec7/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
