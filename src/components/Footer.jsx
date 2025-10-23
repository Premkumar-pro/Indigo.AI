import React from 'react'
import { Box, Container, Typography, Grid, Link, IconButton,} from '@mui/material'
import { 
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material'

const Footer = () => {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'AI Image Generator', url: '/generate' },
        { name: 'Examples', url: '/examples' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Features', url: '/features' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', url: '/help' },
        { name: 'Documentation', url: '/docs' },
        { name: 'API', url: '/api' },
        { name: 'Status', url: '/status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
        { name: 'License', url: '/license' }
      ]
    }
  ]

  const socialLinks = [
    { icon: <FacebookIcon />, url: '#', name: 'Facebook' },
    { icon: <TwitterIcon />, url: '#', name: 'Twitter' },
    { icon: <InstagramIcon />, url: '#', name: 'Instagram' },
    { icon: <LinkedInIcon />, url: '#', name: 'LinkedIn' },
    { icon: <GitHubIcon />, url: '#', name: 'GitHub' }
  ]

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: { xs: '40px 0', md: '60px 0' }
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1976D2',
                mb: 2,
                fontSize: '1.5rem'
              }}
            >
              AI ImageGen
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#cccccc',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: '300px'
              }}
            >
              Transform your ideas into stunning visuals with our advanced AI image generator. 
              Create, inspire, and bring your imagination to life.
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: '#cccccc',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: '#1976D2',
                      color: 'white'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} md={2} key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  mb: 2,
                  fontSize: '1rem'
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#1976D2'
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid #333333',
            paddingTop: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: '#999999'
            }}
          >
            © {currentYear} AI ImageGen. All rights reserved.
          </Typography>

          {/* Additional Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap'
            }}
          >
            <Link
              href="/privacy"
              sx={{
                color: '#999999',
                textDecoration: 'none',
                fontSize: '0.8rem',
                '&:hover': {
                  color: '#1976D2'
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: '#999999',
                textDecoration: 'none',
                fontSize: '0.8rem',
                '&:hover': {
                  color: '#1976D2'
                }
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              sx={{
                color: '#999999',
                textDecoration: 'none',
                fontSize: '0.8rem',
                '&:hover': {
                  color: '#1976D2'
                }
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>

        {/* Made With Love */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant="caption"
            sx={{
              color: '#666666',
              fontSize: '0.75rem'
            }}
          >
            Made with ❤️ for creators worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer