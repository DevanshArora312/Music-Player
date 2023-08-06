//import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import SearchBox from "./Searchbox"
import Login from "./Login"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-header">
          <Routes>
            <Route exact path = "/" element= {<SearchBox/>}/>
            <Route exact path="/login" element= {<Login/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
