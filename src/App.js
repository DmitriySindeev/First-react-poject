import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Proffile from './components/Proffile/Proffile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='proffile/*' element={<Proffile />} />
            <Route path='dialogs/*' element={<DialogsContainer />} />
            <Route path='news/*' element={<News />} />
            <Route path='music/*' element={<Music />} />
            <Route path='settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};





export default App;
