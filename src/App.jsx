import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRout from './hook/ProtectedRout';

const Client = React.lazy(() => import('./pages/Client'))
const Login = React.lazy(() => import('./pages/Login'))
const Admin = React.lazy(() => import('./pages/Admin'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<ProtectedRout Component={Client} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<ProtectedRout Component={Admin} />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
