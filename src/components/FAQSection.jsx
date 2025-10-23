import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
//   useTheme, 
//   useMediaQuery 
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

const FAQSection = () => {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const faqItems = [
    {
      question: "How does the AI image generator work?",
      answer: "Our AI uses advanced machine learning models trained on millions of images. You provide a text description, and the AI generates unique images based on your input. The more detailed your description, the better the results."
    },
    {
      question: "What image formats and resolutions are supported?",
      answer: "We support multiple formats including PNG, JPEG, and WebP. Images are generated in high resolution (up to 2048x2048 pixels) suitable for both web and print use. You can download in your preferred format and size."
    },
    {
      question: "Is there a limit to how many images I can generate?",
      answer: "We offer generous free tiers for all users. Free users can generate up to 50 images per month. Premium users enjoy unlimited generation, faster processing, and access to exclusive styles."
    },
    {
      question: "Can I use the generated images for commercial purposes?",
      answer: "Yes! All images generated through our platform come with full commercial rights. You can use them in your projects, products, marketing materials, and social media without any attribution required."
    },
    {
      question: "How long does it take to generate an image?",
      answer: "Typically, image generation takes 10-30 seconds depending on complexity and server load. Premium users enjoy priority processing with faster generation times."
    },
    {
      question: "What kind of images can I create with the AI?",
      answer: "You can create virtually any type of image: realistic photos, digital art, abstract designs, illustrations, product mockups, architectural visualizations, and much more. The only limit is your imagination!"
    },
    {
      question: "Do I need any design skills to use this tool?",
      answer: "No design skills required! Our AI image generator is designed to be user-friendly. Simply describe what you want in plain English, and the AI will handle the rest. It's perfect for both beginners and professionals."
    },
    {
      question: "How do I get the best results from the AI?",
      answer: "For best results, be specific in your descriptions. Include details about style, colors, composition, mood, and any specific elements you want. You can also reference art styles or combine multiple concepts for unique creations."
    }
  ]

  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#ffffff'
      }}
    >
      <Container maxWidth="md">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1976D2',
              mb: 2
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Find answers to common questions about our AI image generator. 
            Can't find what you're looking for? Contact our support team.
          </Typography>
        </Box>

        {/* FAQ Accordions */}
        <Box sx={{ width: '100%' }}>
          {faqItems.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px !important',
                boxShadow: 'none',
                marginBottom: 2,
                '&:before': {
                  display: 'none'
                },
                '&:hover': {
                  borderColor: '#1976D2',
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.1)'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#1976D2' }} />}
                sx={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  padding: { xs: '16px 20px', md: '20px 24px' },
                  '&:hover': {
                    backgroundColor: '#f1f5f9'
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: '0'
                  }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#1976D2',
                    fontSize: { xs: '0.95rem', md: '1rem' }
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: { xs: '16px 20px', md: '24px' },
                  backgroundColor: '#ffffff',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px'
                }}
              >
                <Typography
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Bottom Contact */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: 6,
            padding: 4,
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            border: '1px solid #e9ecef'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#1976D2',
              mb: 2,
              fontWeight: 600
            }}
          >
            Still have questions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3
            }}
          >
            Our support team is here to help you get the most out of our AI image generator.
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              backgroundColor: '#1976D2',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#1565C0',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Contact Support
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default FAQSection