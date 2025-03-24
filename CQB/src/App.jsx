import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/1. Navbar/Navbar';
import JavascriptPage from './Components/3. Language/Javascript/Javascript';
import PythonPage from './Components/3. Language/Python/Python';
import SqlPage from './Components/3. Language/Sql/Sql';
import Mainpage from './Components/2. Mainpage/Mainpage';
import Java from  "./Components/3. Language/Java/Java";

function App() {
  return (
    <div>
      {/* Navbar will be shown on every page */}
      <Navbar />
      
      {/* Define routes */}
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/javascript' element={<JavascriptPage />} />
        <Route path='/python' element={<PythonPage />} />
        <Route path='/sql' element={<SqlPage />} />
        <Route path='/java' element={<Java />}  />
      </Routes>
    </div>
  );
}

export default App;
