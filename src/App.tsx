import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuilderPage from './pages/builder';


function App() {

  return (
    <div className="App bg-gray-900 h-screen w-screen">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/conceptor" element={<BuilderPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
