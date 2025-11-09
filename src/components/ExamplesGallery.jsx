import React from 'react'
import { Box, Container, Typography,} from '@mui/material'
import anime1 from '../assets/gallary/anime/anime1.webp';
import anime2 from '../assets/gallary/anime/anime2.webp';
import anime3 from '../assets/gallary/anime/anime3.webp';
import anime4 from '../assets/gallary/anime/anime1.webp';
import anime19 from '../assets/gallary/anime/anime2.webp';
import anime7 from '../assets/gallary/anime/anime3.webp';
import anime10 from '../assets/gallary/anime/anime3.webp';

// Logo Images
import artistic1 from '../assets/gallary/artistic/artistic1.webp';
import artistic2 from '../assets/gallary/artistic/artistic2.webp';
import artistic3 from '../assets/gallary/artistic/artistic3.webp';
import artistic4 from '../assets/gallary/artistic/artistic4.webp';
import artistic5 from '../assets/gallary/artistic/artistic5.webp';
import artistic6 from '../assets/gallary/artistic/artistic6.webp';
import artistic7 from '../assets/gallary/artistic/artistic7.webp';


const ExamplesGallery = () => {
  const imageRows = [
  {
    direction: 'left',
    images: [anime1, anime2, anime3,anime4, anime19, anime7,anime10] // Add all your anime images here
  },
  {
    direction: 'right',
    images: [artistic1,artistic2,artistic3,artistic4,artistic5,artistic6,artistic7,] // Add all your logo images here
  },
  // {
  //   direction: 'left',
  //   images: [logo1, logo2, logo3] // Add all your logo images here
  // }
];
  

  

  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#ffffff',
              mb: 2
            }}
          >
            AI Generated Gallery
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#cccccc',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Explore stunning images created with our AI technology
          </Typography>
        </Box>

        {/* Carousel Rows */}
        <Box sx={{ overflow: 'hidden' }}>
          {imageRows.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: 'flex',
                gap: 3,
                mb: 4,
                animation: `${row.direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${30 + rowIndex * 5}s linear infinite`,
                '&:hover': {
                  animationPlayState: 'paused'
                }
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[...row.images, ...row.images].map((image, imgIndex) => (
                <Box
                  key={imgIndex}
                  sx={{
                    flexShrink: 0,
                    width: { xs: '200px', md: '250px' },
                    height: { xs: '150px', md: '180px' },
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      zIndex: 2
                    }
                  }}
                >
                  <img 
                    src={image} 
                    alt={`AI Generated Art ${imgIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Hover Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(25, 118, 210, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        textAlign: 'center',
                        padding: 2
                      }}
                    >
                      AI Generated Art
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>

   
      </Container>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  )
}

export default ExamplesGallery