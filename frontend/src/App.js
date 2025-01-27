import './App.css';
import About from './pages/About';
import Header from './pages/Header';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import ImageDetect from './pages/ImageDetect';
import Logparse from './pages/Logparse';
import LandingPage from './pages/LandingPage';
import Teams from './pages/Teams';
import ProfilePage from './pages/Profilepage';
import Land from './pages/LandingPage';
function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
       <Route path="/" element={<Land/>}/> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/team' element={<Teams/>}/>
      <Route path='/imagedetect' element={<ImageDetect/>}/>
      <Route path='/logparse' element={<Logparse/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  </div>
  );
}

export default App;
