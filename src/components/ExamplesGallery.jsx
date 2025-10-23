import React from 'react'
import { Box, Container, Typography,} from '@mui/material'

const ExamplesGallery = () => {
  

  const imageRows = [
    {
      direction: 'left',
      images: [
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1543857778-c4a1a569eafe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ]
    },
    {
      direction: 'right',
      images: [
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1558591710-4b4a0ae27f17?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1543857778-c4a1a569eafe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ]
    },
    {
      direction: 'left',
      images: [
        'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1558591710-4b4a0e0e4a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ]
    }
  ]

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