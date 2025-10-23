import React from 'react';
import { Box, Typography } from '@mui/material';

const TextToImage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#333333', mb: 1 }}>
        Describe your ideas and generate
      </Typography>
      <Typography variant="h6" sx={{ color: '#666666', mb: 4 }}>
        Transform your imagination into stunning AI-generated images
      </Typography>
      
      {/* Input field and generate button will go here */}
      <Box sx={{ backgroundColor: '#f8f9fa', p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Input field and generate button coming next...
        </Typography>
      </Box>
    </Box>
  );
};

export default TextToImage;