import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyReports from './components/MyReport'
import Home from './components/Home';
import ReportsList from './components/ReportsList';
import SingleReport from './components/SingleReport';
import Analyzation from './components/Analyzation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/myreports' element={<MyReports />} />
        <Route exact path='/reportslist' element={<ReportsList />} />
        <Route exact path='/singlereport' element={<SingleReport />} />
        <Route exact path='/analyzation' element={<Analyzation />} />
      </Routes>
    </BrowserRouter>
  )
}
