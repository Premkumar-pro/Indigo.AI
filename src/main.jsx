// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { CssBaseline } from '@mui/material'
// // import { unstable_composeClasses } from '@mui/material';
// // ...existing code...
// import { unstable_composeClasses } from '@mui/utils';
// // quick use to silence linter
// const _ = unstable_composeClasses;
// // ...existing code...
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CssBaseline />
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
