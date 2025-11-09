// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
// import DashboardInput from '../components/dashboard/layout/DashboardInput';
// import TextToImage from '../components/dashboard/pages/TextToImage';
// import Prompts from '../components/dashboard/pages/Prompts';
// import ContactUs from '../components/dashboard/pages/ContactUs';
// import TrainDocs from '../components/dashboard/pages/TrainDocs';
// import Docs from '../components/dashboard/pages/Docs';
// import Gallery from '../components/dashboard/pages/Gallery';
// import ImageEditor from '../components/dashboard/pages/ImageEditor';

// const Dashboard = () => {
//   return (
//     <Routes>
//       {/* Main Dashboard with Sidebar */}
//       <Route path="/" element={
//         <DashboardLayout>
//           <DashboardInput />
//         </DashboardLayout>
//       } />
      
//       {/* Individual Pages WITHOUT Sidebar */}
//       <Route path="/text-to-image" element={<TextToImage />} />
//       <Route path="/prompts" element={<Prompts />} />
//       <Route path="/train-docs" element={<TrainDocs />} />
//       <Route path="/image-editor" element={<ImageEditor />} />
//       <Route path="/gallery" element={<Gallery />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/docs" element={<Docs />} />
//     </Routes>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import DashboardInput from '../components/dashboard/layout/DashboardInput';
import TextToImage from '../components/dashboard/pages/TextToImage';
import Prompts from '../components/dashboard/pages/Prompts';
import ContactUs from '../components/dashboard/pages/ContactUs';
import TrainDocs from '../components/dashboard/pages/TrainDocs';
import Docs from '../components/dashboard/pages/Docs';
import Gallery from '../components/dashboard/pages/Gallery';
import ImageEditor from '../components/dashboard/pages/ImageEditor';

const Dashboard = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Rainbow color palette
  const rainbowColors = [
    'linear-gradient(90deg, #ff0000, #ff8000)', // Red to Orange
    'linear-gradient(90deg, #ff8000, #ffff00)', // Orange to Yellow
    'linear-gradient(90deg, #ffff00, #00ff00)', // Yellow to Green
    'linear-gradient(90deg, #00ff00, #0080ff)', // Green to Blue
    'linear-gradient(90deg, #0080ff, #0000ff)', // Blue to Dark Blue
    'linear-gradient(90deg, #0000ff, #8000ff)', // Dark Blue to Purple
    'linear-gradient(90deg, #8000ff, #ff0080)', // Purple to Pink
    'linear-gradient(90deg, #ff0080, #ff0000)', // Pink to Red
  ];

  useEffect(() => {
    setShowContent(false);
    setLoading(true);
    setProgress(0);
    setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);

    let progressTimer;
    let completeTimer;
    
    const startLoading = () => {
      setProgress(10);
      
      // Simulate loading progress with different colors
      progressTimer = setTimeout(() => {
        setProgress(30);
        setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);
      }, 150);
      
      const timer2 = setTimeout(() => {
        setProgress(50);
        setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);
      }, 300);
      
      const timer3 = setTimeout(() => {
        setProgress(70);
        setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);
      }, 450);
      
      const timer4 = setTimeout(() => {
        setProgress(85);
        setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);
      }, 550);

      // Complete loading
      completeTimer = setTimeout(() => {
        setProgress(100);
        setCurrentColorIndex(prev => (prev + 1) % rainbowColors.length);
        
        // Show content after a small delay when loading completes
        setTimeout(() => {
          setLoading(false);
          setShowContent(true);
        }, 300);
      }, 700);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(completeTimer);
      };
    };

    startLoading();
  }, [location]);

  return (
    <>
      {/* Rainbow Loading Bar */}
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            zIndex: 9999,
            backgroundColor: '#f0f0f0',
            overflow: 'hidden',
          }}
        >
          {/* Main progress bar with rainbow colors */}
          <Box
            sx={{
              height: '100%',
              width: `${progress}%`,
              background: rainbowColors[currentColorIndex],
              backgroundSize: '200% 100%',
              transition: 'all 0.4s ease',
              position: 'relative',
              animation: 'rainbowFlow 2s ease-in-out infinite',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '30px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                animation: 'shimmer 1s ease-in-out infinite',
              }
            }}
          />
          
          {/* Pulsing end indicator */}
          {progress < 100 && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: `${progress}%`,
                height: '100%',
                width: '25px',
                background: rainbowColors[(currentColorIndex + 1) % rainbowColors.length],
                borderRadius: '0 4px 4px 0',
                animation: 'pulseGlow 0.8s ease-in-out infinite alternate',
                transform: 'translateX(-50%)',
                filter: 'brightness(1.2)',
              }}
            />
          )}
        </Box>
      )}

      {/* Content - Only show after loading completes */}
      {showContent && (
        <Routes>
          {/* Main Dashboard with Sidebar */}
          <Route path="/" element={
            <DashboardLayout>
              <DashboardInput />
            </DashboardLayout>
          } />
          
          {/* Individual Pages WITHOUT Sidebar */}
          <Route path="/text-to-image" element={<TextToImage />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/train-docs" element={<TrainDocs />} />
          <Route path="/image-editor" element={<ImageEditor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      )}

      {/* Show loading screen while loading */}
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9998,
            flexDirection: 'column',
            gap: 3
          }}
        >
          {/* Rainbow loading spinner */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #0000ff, #8000ff, #ff0080)',
              backgroundSize: '400% 400%',
              animation: 'rainbowRotate 3s ease-in-out infinite, pulse 2s ease-in-out infinite alternate',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'white',
                opacity: 0.9,
              }}
            />
          </Box>
          
          {/* Loading text */}
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #0000ff, #8000ff)',
                backgroundSize: '400% 400%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'rainbowRotate 4s ease-in-out infinite',
                mb: 1
              }}
            >
              Loading...
            </Box>
          </Box>
        </Box>
      )}

      
    </>
  );
};

export default Dashboard;