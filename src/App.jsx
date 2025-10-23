// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LandingPage from './pages/LandingPage'
// import Dashboard from './pages/Dashboard'
// import ImageGenerator from "./components/dashboard/ImageGenerator";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/dashboard" element={<ImageGenerator />} />

        
//       </Routes>
//     </Router>
//   )
// }

// export default App
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
