import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Cards from './Cards';
import Subscription from './Subscription';
import Match from './Match'
import Gateway from './Gateway';
import Girlsprofile from './Girlsprofile'
import Boysprofile from './Boysprofile';
 import BProfile from './BProfile';
 import GProfile from './GProfile';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
function App() {
  return (
    <>
  <Router>
     <Navbar />
     <Routes>
     <Route exact path='/' element={<Register />}/>
     <Route exact path="/Login" element={<Login/>}/>
     <Route exact path="/Subscription" element={<Subscription/>}/>
     <Route exact path='/Match' element={<Match/>}/>
     <Route exact path='/Gateway' element={<Gateway/>}/>
     <Route exact path='/Girlsprofile' element={<Girlsprofile/>}/>
     <Route exact path='/Boysprofile' element={<Boysprofile/>}/>
     <Route exact path='/BProfile' element={<BProfile/>}/>
     <Route exact path='/GProfile' element={<GProfile/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
