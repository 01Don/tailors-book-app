import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/welcomPage";
import SutiPage from './pages/sutiPage';
import ContactList from "./pages/listcontact.js";
import Clientdetail from "./pages/clientdetail.js"


function App() {
  return (
    <div className="App">
      <Router>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/sutipage' element={<SutiPage/>}/>
      <Route path='/contactlist' element={<ContactList/>}/>
      <Route path='/clientdetail' element={<Clientdetail/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
