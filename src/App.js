
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import Header from './components/Header';
import Home from "./components/Home";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
