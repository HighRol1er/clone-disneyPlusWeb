
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
