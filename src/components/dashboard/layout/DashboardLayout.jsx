// import React from 'react';
// import { Box, useMediaQuery } from '@mui/material';
// import Sidebar from './Sidebar';

// const DashboardLayout = ({ children }) => {
//   const isMobile = useMediaQuery('(max-width: 900px)');

//   return (
//     <Box sx={{ 
//       display: 'flex', 
//       minHeight: '100vh', 
//       backgroundColor: '#ffffff',
//       overflow: 'hidden'
//     }}>
//       {/* Sidebar - Fixed position */}
//       <Box sx={{
//         width: isMobile ? 0 : 320,
//         flexShrink: 0
//       }}>
//         <Sidebar />
//       </Box>
      
//       {/* Main Content - Scrollable */}
//       <Box
//         component="main"
//         sx={{
//           flex: 1,
//           height: '100vh',
//           overflow: 'auto',
//           backgroundColor: '#ffffff',
//           position: 'relative',
//           width:'900px',
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default DashboardLayout;
import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Sidebar - Fixed position */}
      <Box sx={{
        width: isMobile ? 0 : 320,
        flexShrink: 0
      }}>
        <Sidebar />
      </Box>
      
      {/* Main Content - Scrollable */}
      <Box
        component="main"
        sx={{
          flex: 1,
          height: '100vh',
          overflow: 'auto',
          backgroundColor: '#ffffff',
          position: 'relative',
          width: 'calc(100vw - 320px)', // Fixed width calculation
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;