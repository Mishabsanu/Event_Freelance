import './App.css';
import Home from './Page/home/Home';
import { Routes, Route } from "react-router-dom";
import AllDeatils from './components/alldeatils/AllDeatils';
function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/"element={ <Home />}/>
      <Route path="/viewDetails/:id"element={ <AllDeatils/>}/>
        </Routes>
     

    </div>
  );
}

export default App;
