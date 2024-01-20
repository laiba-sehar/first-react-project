
import React from 'react';
import './App.css';
import LoginForm from './pages/login/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Links from './pages/links/Links';








function App() {
  
  return (
    <Routes>
      <Route path='/' element= {<LoginForm />}/>
      <Route path='profile' element= {<Profile />}/>
      <Route path='skills' element= {<Skills />}/>
      <Route path='projects' element= {<Projects />}/>
      {/* <Route path='project-detail' element= {<Projects />}/> */}
      <Route path='links' element= {<Links />}/>
    </Routes>
  );
}






export default App;
