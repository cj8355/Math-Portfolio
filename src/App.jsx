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
import Calculus2_Ch7 from './Components/Calculus/Calculus2/Chapters/7/ch7';
import Calculus2_Ch7_Sec1 from './Components/Calculus/Calculus2/Chapters/7/sections/7.1';
import Calculus2_Ch7_Sec2 from './Components/Calculus/Calculus2/Chapters/7/sections/7.2';
import Calculus2_Ch7_Sec3 from './Components/Calculus/Calculus2/Chapters/7/sections/7.3';
import Calculus2_Ch8 from './Components/Calculus/Calculus2/Chapters/8/ch8';
import Calculus2_Ch8_Sec1 from './Components/Calculus/Calculus2/Chapters/8/sections/8.1';
import Calculus2_Ch8_Sec2 from './Components/Calculus/Calculus2/Chapters/8/sections/8.2';
import Calculus2_Ch8_Sec3 from './Components/Calculus/Calculus2/Chapters/8/sections/8.3';
import Calculus2_Ch8_Sec4 from './Components/Calculus/Calculus2/Chapters/8/sections/8.4';
import Calculus2_Ch8_Sec5 from './Components/Calculus/Calculus2/Chapters/8/sections/8.5';
import Calculus2_Ch8_Sec8 from './Components/Calculus/Calculus2/Chapters/8/sections/8.8';
import Calculus2_Ch8_Sec9 from './Components/Calculus/Calculus2/Chapters/8/sections/8.9';
import Calculus2_Ch10 from './Components/Calculus/Calculus2/Chapters/10/ch10';
import Calculus2_Ch10_Sec1 from './Components/Calculus/Calculus2/Chapters/10/sections/10.1';
import Calculus2_Ch10_Sec2 from './Components/Calculus/Calculus2/Chapters/10/sections/10.2';
import Calculus2_Ch10_Sec3 from './Components/Calculus/Calculus2/Chapters/10/sections/10.3';
import Calculus2_Ch10_Sec4 from './Components/Calculus/Calculus2/Chapters/10/sections/10.4';
import Calculus2_Ch10_Sec5 from './Components/Calculus/Calculus2/Chapters/10/sections/10.5';
import Calculus2_Ch10_Sec6 from './Components/Calculus/Calculus2/Chapters/10/sections/10.6';
import Calculus2_Ch10_Sec7 from './Components/Calculus/Calculus2/Chapters/10/sections/10.7';
import Calculus2_Ch10_Sec8 from './Components/Calculus/Calculus2/Chapters/10/sections/10.8';
import Calculus2_Ch11 from './Components/Calculus/Calculus2/Chapters/11/ch11';
import Calculus2_Ch11_Sec1 from './Components/Calculus/Calculus2/Chapters/11/sections/11.1';
import Calculus2_Ch11_Sec2 from './Components/Calculus/Calculus2/Chapters/11/sections/11.2';
import Calculus2_Ch11_Sec3 from './Components/Calculus/Calculus2/Chapters/11/sections/11.3';
import Calculus2_Ch11_Sec4 from './Components/Calculus/Calculus2/Chapters/11/sections/11.4';
import Calculus3_Ch12 from './Components/Calculus/Calculus3/Chapters/12/ch12';
import Calculus3 from './Components/Calculus/Calculus3/Calculus3';
import Calculus3_Ch12_Sec1 from './Components/Calculus/Calculus3/Chapters/12/sections/12.1';
import Calculus3_Ch12_Sec2 from './Components/Calculus/Calculus3/Chapters/12/sections/12.2';
import Calculus3_Ch12_Sec3 from './Components/Calculus/Calculus3/Chapters/12/sections/12.3';
import Calculus3_Ch12_Sec4 from './Components/Calculus/Calculus3/Chapters/12/sections/12.4';
import Calculus3_Ch13 from './Components/Calculus/Calculus3/Chapters/13/ch13';
import Calculus3_Ch13_Sec1 from './Components/Calculus/Calculus3/Chapters/13/sections/13.1';
import Calculus3_Ch13_Sec2 from './Components/Calculus/Calculus3/Chapters/13/sections/13.2';
import Calculus3_Ch13_Sec3 from './Components/Calculus/Calculus3/Chapters/13/sections/13.3';
import Calculus3_Ch13_Sec4 from './Components/Calculus/Calculus3/Chapters/13/sections/13.4';
import Calculus3_Ch13_Sec5 from './Components/Calculus/Calculus3/Chapters/13/sections/13.5';
import Calculus3_Ch13_Sec6 from './Components/Calculus/Calculus3/Chapters/13/sections/13.6';
import Calculus3_Ch14 from './Components/Calculus/Calculus3/Chapters/14/ch14';
import Calculus3_Ch14_Sec1 from './Components/Calculus/Calculus3/Chapters/14/sections/14.1';
import Calculus3_Ch14_Sec2 from './Components/Calculus/Calculus3/Chapters/14/sections/14.2';
import Calculus3_Ch14_Sec3 from './Components/Calculus/Calculus3/Chapters/14/sections/14.3';
import Calculus3_Ch14_Sec4 from './Components/Calculus/Calculus3/Chapters/14/sections/14.4';
import Calculus3_Ch14_Sec5 from './Components/Calculus/Calculus3/Chapters/14/sections/14.5';
import Calculus3_Ch15 from './Components/Calculus/Calculus3/Chapters/15/ch15';
import Calculus3_Ch15_Sec1 from './Components/Calculus/Calculus3/Chapters/15/sections/15.1';
import Calculus3_Ch15_Sec2 from './Components/Calculus/Calculus3/Chapters/15/sections/15.2';
import Calculus3_Ch15_Sec3 from './Components/Calculus/Calculus3/Chapters/15/sections/15.3';
import Calculus3_Ch15_Sec4 from './Components/Calculus/Calculus3/Chapters/15/sections/15.4';
import Calculus3_Ch15_Sec5 from './Components/Calculus/Calculus3/Chapters/15/sections/15.5';
import Calculus3_Ch15_Sec6 from './Components/Calculus/Calculus3/Chapters/15/sections/15.6';
import Calculus3_Ch15_Sec7 from './Components/Calculus/Calculus3/Chapters/15/sections/15.7';
import Calculus3_Ch15_Sec8 from './Components/Calculus/Calculus3/Chapters/15/sections/15.8';
import Calculus3_Ch16 from './Components/Calculus/Calculus3/Chapters/16/ch16';
import Calculus3_Ch16_Sec1 from './Components/Calculus/Calculus3/Chapters/16/sections/16.1';
import Calculus3_Ch16_Sec2 from './Components/Calculus/Calculus3/Chapters/16/sections/16.2';
import Calculus3_Ch16_Sec3 from './Components/Calculus/Calculus3/Chapters/16/sections/16.3';
import Calculus3_Ch16_Sec4 from './Components/Calculus/Calculus3/Chapters/16/sections/16.4';
import Calculus3_Ch16_Sec5 from './Components/Calculus/Calculus3/Chapters/16/sections/16.5';
import Calculus3_Ch16_Sec6 from './Components/Calculus/Calculus3/Chapters/16/sections/16.6';
import Calculus3_Ch16_Sec7 from './Components/Calculus/Calculus3/Chapters/16/sections/16.7';
import Abstract from './Components/Abstract-Math/Abstract';
import FinancialMath from './Components/Financial-Math/FinancialMath';
import NumberTheory from './Components/Number-Theory/NumberTheory';
import ModernAlgebra from './Components/Modern-Algebra/ModernAlgebra';
import NumberTheory_Ch1 from './Components/Number-Theory/Chapters/1/ch1';
import NumberTheory_Ch1_Sec1 from './Components/Number-Theory/Chapters/1/Sections/1.1';
import NumberTheory_Ch1_Sec2 from './Components/Number-Theory/Chapters/1/Sections/1.2';
import NumberTheory_Ch1_Sec3 from './Components/Number-Theory/Chapters/1/Sections/1.3';
import NumberTheory_Ch1_Sec4 from './Components/Number-Theory/Chapters/1/Sections/1.4';
import NumberTheory_Ch1_Sec5 from './Components/Number-Theory/Chapters/1/Sections/1.5';
import NumberTheory_Ch2 from './Components/Number-Theory/Chapters/2/ch2';
import NumberTheory_Ch2_Sec1 from './Components/Number-Theory/Chapters/2/sections/2.1';
import NumberTheory_Ch3 from './Components/Number-Theory/Chapters/3/ch3';
import NumberTheory_Ch3_Sec1 from './Components/Number-Theory/Chapters/3/sections/3.1';
import NumberTheory_Ch3_Sec2 from './Components/Number-Theory/Chapters/3/sections/3.2';
import ModernAlgebra_Ch1 from './Components/Modern-Algebra/Chapters/1/ch1';
import ModernAlgebra_Part1_Sec0 from './Components/Modern-Algebra/Chapters/1/sections/1.0';
import ModernAlgebra_Part1_Sec1 from './Components/Modern-Algebra/Chapters/1/sections/1.1';
import ModernAlgebra_Part1_Sec2 from './Components/Modern-Algebra/Chapters/1/sections/1.2';
import ModernAlgebra_Part1_Sec3 from './Components/Modern-Algebra/Chapters/1/sections/1.3';
import ModernAlgebra_Part1_Sec4 from './Components/Modern-Algebra/Chapters/1/sections/1.4';
import ModernAlgebra_Part1_Sec5 from './Components/Modern-Algebra/Chapters/1/sections/1.5';
import ModernAlgebra_Part1_Sec6 from './Components/Modern-Algebra/Chapters/1/sections/1.6';
import ModernAlgebra_Part1_Sec7 from './Components/Modern-Algebra/Chapters/1/sections/1.7';
import ModernAlgebra_Ch2 from './Components/Modern-Algebra/Chapters/2/ch2';
import ModernAlgebra_Part2_Sec8 from './Components/Modern-Algebra/Chapters/2/sections/2.8';
import ModernAlgebra_Part2_Sec9 from './Components/Modern-Algebra/Chapters/2/sections/2.9';
import ModernAlgebra_Part2_Sec10 from './Components/Modern-Algebra/Chapters/2/sections/2.10';
import NumberTheory_Ch3_Sec3 from './Components/Number-Theory/Chapters/3/sections/3.3';
import NumberTheory_Ch3_Sec4 from './Components/Number-Theory/Chapters/3/sections/3.4';
import NumberTheory_Ch3_Sec5 from './Components/Number-Theory/Chapters/3/sections/3.5';
import NumberTheory_Ch3_Sec6 from './Components/Number-Theory/Chapters/3/sections/3.6';
import FinancialMath_Ch1 from './Components/Financial-Math/Chapters/ch1';
import FinancialMath_Ch2 from './Components/Financial-Math/Chapters/ch2';
import FinancialMath_Ch3 from './Components/Financial-Math/Chapters/ch3';
import FinancialMath_Ch4 from './Components/Financial-Math/Chapters/ch4';
import FinancialMath_Ch5 from './Components/Financial-Math/Chapters/ch5';
import FinancialMath_Ch6 from './Components/Financial-Math/Chapters/ch6';
import FinancialMath_Ch7 from './Components/Financial-Math/Chapters/ch7';
import FinancialMath_Ch8 from './Components/Financial-Math/Chapters/ch8';
import NumberTheory_Ch3_Sec7 from './Components/Number-Theory/Chapters/3/sections/3.7';
import NumberTheory_Ch4 from './Components/Number-Theory/Chapters/4/ch4';
import NumberTheory_Ch4_Sec1 from './Components/Number-Theory/Chapters/4/sections/4.1';
import NumberTheory_Ch4_Sec2 from './Components/Number-Theory/Chapters/4/sections/4.2';
import NumberTheory_Ch4_Sec3 from './Components/Number-Theory/Chapters/4/sections/4.3';
import NumberTheory_Ch5 from './Components/Number-Theory/Chapters/5/ch5';
import NumberTheory_Ch5_Sec1 from './Components/Number-Theory/Chapters/5/sections/5.1';
import NumberTheory_Ch6 from './Components/Number-Theory/Chapters/6/ch6';
import NumberTheory_Ch6_Sec1 from './Components/Number-Theory/Chapters/6/sections/6.1';
import NumberTheory_Ch6_Sec3 from './Components/Number-Theory/Chapters/6/sections/6.3';
import NumberTheory_Ch7 from './Components/Number-Theory/Chapters/7/ch7';
import NumberTheory_Ch7_Sec1 from './Components/Number-Theory/Chapters/7/sections/7.1';
import NumberTheory_Ch7_Sec2 from './Components/Number-Theory/Chapters/7/sections/7.2';
import NumberTheory_Ch7_Sec3 from './Components/Number-Theory/Chapters/7/sections/7.3';
import NumberTheory_Ch8 from './Components/Number-Theory/Chapters/8/ch8';
import NumberTheory_Ch8_Sec1 from './Components/Number-Theory/Chapters/8/sections/8.1';
import ModernAlgebra_Ch3 from './Components/Modern-Algebra/Chapters/3/ch3';
import ModernAlgebra_Part3_Sec12 from './Components/Modern-Algebra/Chapters/3/sections/3.12';
import ModernAlgebra_Part3_Sec13 from './Components/Modern-Algebra/Chapters/3/sections/3.13';
import ModernAlgebra_Ch5 from './Components/Modern-Algebra/Chapters/5/ch5';
import ModernAlgebra_Part5_Sec22 from './Components/Modern-Algebra/Chapters/5/sections/5.22';
import ModernAlgebra_Part5_Sec23 from './Components/Modern-Algebra/Chapters/5/sections/5.23';
import ModernAlgebra_Part5_Sec24 from './Components/Modern-Algebra/Chapters/5/sections/5.24';
import ModernAlgebra_Ch6 from './Components/Modern-Algebra/Chapters/6/ch6';
import ModernAlgebra_Part6_Sec26 from './Components/Modern-Algebra/Chapters/6/sections/6.26';
import FinancialMath_Ch9 from './Components/Financial-Math/Chapters/ch9';
import FinancialMath_Ch10 from './Components/Financial-Math/Chapters/ch10';

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


        <Route path='/calculus/calculus2/Ch.7' element={<Calculus2_Ch7 />}/>
        <Route path='/calculus/calculus2/Ch.7/Sec7.1' element={<Calculus2_Ch7_Sec1/>}/>
        <Route path='/calculus/calculus2/Ch.7/Sec7.2' element={<Calculus2_Ch7_Sec2/>}/>
        <Route path='/calculus/calculus2/Ch.7/Sec7.3' element={<Calculus2_Ch7_Sec3/>}/>


        <Route path='/calculus/calculus2/Ch.8' element={<Calculus2_Ch8 />}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.1' element={<Calculus2_Ch8_Sec1/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.2' element={<Calculus2_Ch8_Sec2/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.3' element={<Calculus2_Ch8_Sec3/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.4' element={<Calculus2_Ch8_Sec4/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.5' element={<Calculus2_Ch8_Sec5/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.8' element={<Calculus2_Ch8_Sec8/>}/>
        <Route path='/calculus/calculus2/Ch.8/Sec8.9' element={<Calculus2_Ch8_Sec9/>}/>


        <Route path='/calculus/calculus2/Ch.10' element={<Calculus2_Ch10 />}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.1' element={<Calculus2_Ch10_Sec1/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.2' element={<Calculus2_Ch10_Sec2/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.3' element={<Calculus2_Ch10_Sec3/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.4' element={<Calculus2_Ch10_Sec4/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.5' element={<Calculus2_Ch10_Sec5/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.6' element={<Calculus2_Ch10_Sec6/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.7' element={<Calculus2_Ch10_Sec7/>}/>
        <Route path='/calculus/calculus2/Ch.10/Sec10.8' element={<Calculus2_Ch10_Sec8/>}/>


        <Route path='/calculus/calculus2/Ch.11' element={<Calculus2_Ch11 />}/>
        <Route path='/calculus/calculus2/Ch.11/Sec11.1' element={<Calculus2_Ch11_Sec1/>}/>
        <Route path='/calculus/calculus2/Ch.11/Sec11.2' element={<Calculus2_Ch11_Sec2/>}/>
        <Route path='/calculus/calculus2/Ch.11/Sec11.3' element={<Calculus2_Ch11_Sec3/>}/>
        <Route path='/calculus/calculus2/Ch.11/Sec11.4' element={<Calculus2_Ch11_Sec4/>}/>


        <Route path='/calculus/calculus3' element={<Calculus3 />}/>
        <Route path='/calculus/calculus3/Ch.12' element={<Calculus3_Ch12 />}/>
        <Route path='/calculus/calculus3/Ch.12/Sec12.1' element={<Calculus3_Ch12_Sec1/>}/>
        <Route path='/calculus/calculus3/Ch.12/Sec12.2' element={<Calculus3_Ch12_Sec2/>}/>
        <Route path='/calculus/calculus3/Ch.12/Sec12.3' element={<Calculus3_Ch12_Sec3/>}/>
        <Route path='/calculus/calculus3/Ch.12/Sec12.4' element={<Calculus3_Ch12_Sec4/>}/>
        

        <Route path='/calculus/calculus3/Ch.13' element={<Calculus3_Ch13 />}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.1' element={<Calculus3_Ch13_Sec1/>}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.2' element={<Calculus3_Ch13_Sec2/>}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.3' element={<Calculus3_Ch13_Sec3/>}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.4' element={<Calculus3_Ch13_Sec4/>}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.5' element={<Calculus3_Ch13_Sec5/>}/>
        <Route path='/calculus/calculus3/Ch.13/Sec13.6' element={<Calculus3_Ch13_Sec6/>}/>


        <Route path='/calculus/calculus3/Ch.14' element={<Calculus3_Ch14 />}/>
        <Route path='/calculus/calculus3/Ch.14/Sec14.1' element={<Calculus3_Ch14_Sec1/>}/>
        <Route path='/calculus/calculus3/Ch.14/Sec14.2' element={<Calculus3_Ch14_Sec2/>}/>
        <Route path='/calculus/calculus3/Ch.14/Sec14.3' element={<Calculus3_Ch14_Sec3/>}/>
        <Route path='/calculus/calculus3/Ch.14/Sec14.4' element={<Calculus3_Ch14_Sec4/>}/>
        <Route path='/calculus/calculus3/Ch.14/Sec14.5' element={<Calculus3_Ch14_Sec5/>}/>


        <Route path='/calculus/calculus3/Ch.15' element={<Calculus3_Ch15 />}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.1' element={<Calculus3_Ch15_Sec1/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.2' element={<Calculus3_Ch15_Sec2/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.3' element={<Calculus3_Ch15_Sec3/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.4' element={<Calculus3_Ch15_Sec4/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.5' element={<Calculus3_Ch15_Sec5/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.6' element={<Calculus3_Ch15_Sec6/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.7' element={<Calculus3_Ch15_Sec7/>}/>
        <Route path='/calculus/calculus3/Ch.15/Sec15.8' element={<Calculus3_Ch15_Sec8/>}/>


        <Route path='/calculus/calculus3/Ch.16' element={<Calculus3_Ch16 />}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.1' element={<Calculus3_Ch16_Sec1/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.2' element={<Calculus3_Ch16_Sec2/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.3' element={<Calculus3_Ch16_Sec3/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.4' element={<Calculus3_Ch16_Sec4/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.5' element={<Calculus3_Ch16_Sec5/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.6' element={<Calculus3_Ch16_Sec6/>}/>
        <Route path='/calculus/calculus3/Ch.16/Sec16.7' element={<Calculus3_Ch16_Sec7/>}/>


        <Route path='/abstractMath' element={<Abstract/>}/>


        <Route path='/financialMath' element={<FinancialMath/>}/>
        <Route path='/financialMath/Ch.1' element={<FinancialMath_Ch1 />}/>
        <Route path='/financialMath/Ch.2' element={<FinancialMath_Ch2 />}/>
        <Route path='/financialMath/Ch.3' element={<FinancialMath_Ch3 />}/>
        <Route path='/financialMath/Ch.4' element={<FinancialMath_Ch4 />}/>
        <Route path='/financialMath/Ch.5' element={<FinancialMath_Ch5 />}/>
        <Route path='/financialMath/Ch.6' element={<FinancialMath_Ch6 />}/>
        <Route path='/financialMath/Ch.7' element={<FinancialMath_Ch7 />}/>
        <Route path='/financialMath/Ch.8' element={<FinancialMath_Ch8 />}/>
        <Route path='/financialMath/Ch.9' element={<FinancialMath_Ch9 />}/>
        <Route path='/financialMath/Ch.10' element={<FinancialMath_Ch10 />}/>



        <Route path='/numberTheory' element={<NumberTheory/>}/>
        <Route path='/numberTheory/Ch.1' element={<NumberTheory_Ch1 />}/>
        <Route path='/numberTheory/Ch.1/Sec1.1' element={<NumberTheory_Ch1_Sec1/>}/>
        <Route path='/numberTheory/Ch.1/Sec1.2' element={<NumberTheory_Ch1_Sec2/>}/>
        <Route path='/numberTheory/Ch.1/Sec1.3' element={<NumberTheory_Ch1_Sec3/>}/>
        <Route path='/numberTheory/Ch.1/Sec1.4' element={<NumberTheory_Ch1_Sec4/>}/>
        <Route path='/numberTheory/Ch.1/Sec1.5' element={<NumberTheory_Ch1_Sec5/>}/>


        <Route path='/numberTheory/Ch.2' element={<NumberTheory_Ch2 />}/>
        <Route path='/numberTheory/Ch.2/Sec2.1' element={<NumberTheory_Ch2_Sec1/>}/>


        <Route path='/numberTheory/Ch.3' element={<NumberTheory_Ch3 />}/>
        <Route path='/numberTheory/Ch.3/Sec3.1' element={<NumberTheory_Ch3_Sec1/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.2' element={<NumberTheory_Ch3_Sec2/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.3' element={<NumberTheory_Ch3_Sec3/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.4' element={<NumberTheory_Ch3_Sec4/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.5' element={<NumberTheory_Ch3_Sec5/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.6' element={<NumberTheory_Ch3_Sec6/>}/>
        <Route path='/numberTheory/Ch.3/Sec3.7' element={<NumberTheory_Ch3_Sec7/>}/>


        <Route path='/numberTheory/Ch.4' element={<NumberTheory_Ch4 />}/>
        <Route path='/numberTheory/Ch.4/Sec4.1' element={<NumberTheory_Ch4_Sec1/>}/>
        <Route path='/numberTheory/Ch.4/Sec4.2' element={<NumberTheory_Ch4_Sec2/>}/>
        <Route path='/numberTheory/Ch.4/Sec4.3' element={<NumberTheory_Ch4_Sec3/>}/>

        <Route path='/numberTheory/Ch.5' element={<NumberTheory_Ch5 />}/>
        <Route path='/numberTheory/Ch.5/Sec5.1' element={<NumberTheory_Ch5_Sec1/>}/>

        <Route path='/numberTheory/Ch.6' element={<NumberTheory_Ch6 />}/>
        <Route path='/numberTheory/Ch.6/Sec6.1' element={<NumberTheory_Ch6_Sec1/>}/>
        <Route path='/numberTheory/Ch.6/Sec6.3' element={<NumberTheory_Ch6_Sec3/>}/>

        <Route path='/numberTheory/Ch.7' element={<NumberTheory_Ch7 />}/>
        <Route path='/numberTheory/Ch.7/Sec7.1' element={<NumberTheory_Ch7_Sec1/>}/>
        <Route path='/numberTheory/Ch.7/Sec7.2' element={<NumberTheory_Ch7_Sec2/>}/>
        <Route path='/numberTheory/Ch.7/Sec7.3' element={<NumberTheory_Ch7_Sec3/>}/>

        <Route path='/numberTheory/Ch.8' element={<NumberTheory_Ch8 />}/>
        <Route path='/numberTheory/Ch.8/Sec8.1' element={<NumberTheory_Ch8_Sec1/>}/>


        <Route path='/modernAlgebra' element={<ModernAlgebra/>}/>
        <Route path='/modernAlgebra/Ch.1' element={<ModernAlgebra_Ch1 />}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.0' element={<ModernAlgebra_Part1_Sec0/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.1' element={<ModernAlgebra_Part1_Sec1/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.2' element={<ModernAlgebra_Part1_Sec2/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.3' element={<ModernAlgebra_Part1_Sec3/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.4' element={<ModernAlgebra_Part1_Sec4/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.5' element={<ModernAlgebra_Part1_Sec5/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.6' element={<ModernAlgebra_Part1_Sec6/>}/>
        <Route path='/modernAlgebra/Ch.1/Sec1.7' element={<ModernAlgebra_Part1_Sec7/>}/>

        <Route path='/modernAlgebra/Ch.2' element={<ModernAlgebra_Ch2 />}/>
        <Route path='/modernAlgebra/Ch.2/Sec2.8' element={<ModernAlgebra_Part2_Sec8/>}/>
        <Route path='/modernAlgebra/Ch.2/Sec2.9' element={<ModernAlgebra_Part2_Sec9/>}/>
        <Route path='/modernAlgebra/Ch.2/Sec2.10' element={<ModernAlgebra_Part2_Sec10/>}/>

        <Route path='/modernAlgebra/Ch.3' element={<ModernAlgebra_Ch3 />}/>
        <Route path='/modernAlgebra/Ch.3/Sec3.12' element={<ModernAlgebra_Part3_Sec12/>}/>
        <Route path='/modernAlgebra/Ch.3/Sec3.13' element={<ModernAlgebra_Part3_Sec13/>}/>

        <Route path='/modernAlgebra/Ch.5' element={<ModernAlgebra_Ch5 />}/>
        <Route path='/modernAlgebra/Ch.5/Sec5.22' element={<ModernAlgebra_Part5_Sec22/>}/>
        <Route path='/modernAlgebra/Ch.5/Sec5.23' element={<ModernAlgebra_Part5_Sec23/>}/>
        <Route path='/modernAlgebra/Ch.5/Sec5.24' element={<ModernAlgebra_Part5_Sec24/>}/>


        <Route path='/modernAlgebra/Ch.6' element={<ModernAlgebra_Ch6 />}/>
        <Route path='/modernAlgebra/Ch.6/Sec6.26' element={<ModernAlgebra_Part6_Sec26/>}/>


      </Routes>
    </div>
  );
}

export default App;
