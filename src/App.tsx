import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/home';


function App() {

  return (
    <div className="App bg-gray-900 h-screen overflow-y-auto">
      <NavBar />
      <HomePage/>
    </div>
  );
}

export default App;
