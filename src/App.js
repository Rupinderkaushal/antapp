import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EnterRace from './Components/enterRace/EnterRace';
import Scheduled from './Components/scheduled race/Scheduled';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Home/>
     <Routes>
       <Route path="/enterrace" element={<EnterRace/>} />
       <Route path="/scheduledrace" element={<Scheduled/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
