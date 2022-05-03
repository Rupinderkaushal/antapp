import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EnterRace from './Components/enterRace/EnterRace';
import Scheduled from './Components/scheduled race/Scheduled';
import Spinner from './Components/spinner/Spinner';
import Spinnr from './Components/SpinnerExample/Spinnr';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     {/* <Home/> */}
     <Routes>
       <Route path="/enterrace" element={<EnterRace/>} />
       <Route path="/scheduledrace" element={<Scheduled/>} />
       <Route path="/spinner" element={<Spinner/>}/>
       <Route path='/spin' element={<Spinnr/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
