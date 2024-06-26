import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/welcomPage";
import SutiPage from './pages/sutiPage';
import contactList from './pages/contactList';


function App() {
  return (
    <div className="App">
      <Router>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/sutipage' element={<SutiPage/>}/>
      <Route path='./contactlist' element={<contactList/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
