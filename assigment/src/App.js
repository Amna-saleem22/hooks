
import './App.css';
import { BrowserRouter as Router , Routes,Route}from "react-router-dom";
import Home from './component/Home';
import Hello from "./component/hello"
function App() {
  return (
    <>
    
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hello' element={<Hello/>}/>
      </Routes>
     </Router>
     
    </>
  );
}

export default App;
