import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PatientsList from './components/Patients/PatientsList/PatientsList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
      </Routes>
    </div>
  );
}

export default App;
