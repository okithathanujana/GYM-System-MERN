import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Feedback from './screens/Feedback';
import AdminShowFeedbacks from './screens/AdminShowFeedbacks';
import CreateFeedback from  './screens/CreateFeedback';
import UpdateFeedback from  './screens/UpdateFeedback';
import ShowPackagesFeedbacks from  './screens/ShowPackagesFeedbacks';
import ShwInstructorsFeedbacks from  './screens/ShwInstructorsFeedbacks';
// import AdminShowFeedbacks from  '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/admin/feedback/:type' element={<AdminShowFeedbacks />} />
        <Route path='/feedback/create/:type' element={<CreateFeedback />} />
        <Route path='/feedback/edit' element={<UpdateFeedback />} />
        <Route path='/feedback/packages' element={<ShowPackagesFeedbacks />} />
        <Route path='/feedback/istructors' element={<ShwInstructorsFeedbacks />} />
        {/* <Route path='/feedback' element={<Users />} /> */}
        {/* <Route path='/feedback' element={<Users />} /> */}
        {/* <Route path='/feedback' element={<Users />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
