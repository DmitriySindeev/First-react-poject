import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Proffile from './components/Proffile/Proffile';
import Dialog from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='proffile/*' element={<Proffile
              proffilePage={props.state.proffilePage}
              dispatch={props.dispatch} />} />
            <Route path='dialogs/*' element={<Dialog
              store={props.store} />} />
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
