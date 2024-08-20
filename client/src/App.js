import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import Refugee from './pages/Refugee'
import Volunteer from './pages/Volunteer'
import BoardOfDirectors from './pages/BoardOfDirectors'
import HighSchoolTeam from './pages/HighSchoolTeam'
import LetsCodePython from './pages/LetsCodePython';
import { block } from 'million/react'

const App = () => {
  const data = {
    studentCount: 1931,
    tutorCount: 1090,
    hoursCount: 11586,
    totalMembers: 3000,
  };

  // INITIALIZE ANIMATE ON SCROLL LIBRARY
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, [])

    return (
      <React.Fragment>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage data={data}/>}></Route>
          <Route path='/refugee' element={<Refugee/>}></Route>
          <Route path='/volunteer' element={<Volunteer/>}></Route>
          <Route path='/LetsCodePython' element={<LetsCodePython/>}></Route>
          <Route path='/board-of-directors' element={<BoardOfDirectors/>}></Route>
          <Route path='/team' element={<HighSchoolTeam/>}></Route>

        </Routes>
      </React.Fragment>
    );
};

export default App;
