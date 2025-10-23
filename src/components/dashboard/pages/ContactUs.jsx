import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Collapse,
  useMediaQuery,
  Divider  // Added Divider import
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
  SupportAgent as SupportIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [chatOpen, setChatOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // FAQ Data
  const faqItems = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 24 hours during business days (Monday to Friday, 9 AM to 6 PM EST)."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we provide comprehensive technical support for all our AI image generation services and platform features."
    },
    {
      question: "Can I request custom AI model training?",
      answer: "Absolutely! We offer custom model training services for specific use cases. Contact us to discuss your requirements."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available Monday to Friday, 9 AM to 6 PM EST. Emergency support may be available outside these hours."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes, we provide enterprise-grade AI solutions with custom pricing, dedicated support, and advanced features."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security seriously. All your data is encrypted and we comply with industry-standard security protocols."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ponnadapremkumar777@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message
    alert('✅ Your message has been prepared! Please send it from your email client. Our team will respond within 24 hours.');
  };

  const handleFAQToggle = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const chatOptions = [
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      description: '+91 9347307579',
      action: () => window.location.href = 'tel:+919347307579',
      color: '#4CAF50'
    },
    {
      icon: <ChatIcon />,
      title: 'Chat with Us',
      description: 'Start a conversation',
      action: () => window.location.href = 'mailto:ponnadapremkumar777@gmail.com',
      color: '#2196F3'
    },
    {
      icon: <LinkedInIcon />,
      title: 'Connect on LinkedIn',
      description: 'Prem Kumar Ponnada',
      action: () => window.open('https://www.linkedin.com/in/prem-kumar-ponnada-789995335/', '_blank'),
      color: '#0077B5'
    }
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc',
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      {/* Back to Dashboard Button */}
      <Box sx={{ px: 3, pt: 3, maxWidth: '100%', boxSizing: 'border-box' }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate('/dashboard')}
          sx={{
            color: '#6a11cb',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(106, 17, 203, 0.1)'
            }
          }}
        >
          Back to Dashboard
        </Button>
      </Box>

      {/* Main Content Container */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        px: { xs: 2, md: 3 },
        py: 4,
        boxSizing: 'border-box'
      }}>
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#333333',
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3rem' },
              wordWrap: 'break-word'
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#666666',
              maxWidth: '100%',
              margin: '0 auto',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              px: 2
            }}
          >
            Get in touch with our team. We're here to help you with any questions or support needs.
          </Typography>
        </Box>

        {/* Contact Form and Info Container - Side by Side */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Left Side - Contact Information */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              borderRadius: '20px', 
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Animated Background */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.05) 50%, transparent 100%)',
                animation: 'shimmer 6s infinite linear',
                backgroundSize: '200% 100%',
                opacity: 0.6,
              }} />
              
              <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 4, 
                    color: '#2d3748',
                    textAlign: 'center'
                  }}
                >
                  Get In Touch
                </Typography>

                {/* Contact Items */}
                <Box sx={{ space: 3 }}>
                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <EmailIcon sx={{ color: '#667eea', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#2d3748' }}>
                        Email Us
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1rem' }}>
                        ponnadapremkumar777@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <PhoneIcon sx={{ color: '#667eea', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#2d3748' }}>
                        Call Us
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1rem' }}>
                        +91 9347307579
                      </Typography>
                    </Box>
                  </Box>

                  {/* LinkedIn */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <LinkedInIcon sx={{ color: '#667eea', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#2d3748' }}>
                        LinkedIn
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1rem' }}>
                        Prem Kumar Ponnada
                      </Typography>
                    </Box>
                  </Box>

                  {/* Support Hours */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ScheduleIcon sx={{ color: '#667eea', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#2d3748' }}>
                        Support Hours
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1rem' }}>
                        Mon - Fri: 9AM - 6PM EST
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Divider */}
                <Box sx={{ my: 4 }}>
                  <Divider sx={{ borderColor: 'rgba(102, 126, 234, 0.2)' }} />
                </Box>

                {/* Response Time */}
                <Box sx={{ textAlign: 'center' }}>
                  <Chip 
                    icon={<SupportIcon />}
                    label="24h Response Time"
                    sx={{ 
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      fontWeight: 700,
                      fontSize: '1rem',
                      py: 2,
                      px: 3,
                      border: '2px solid rgba(102, 126, 234, 0.2)'
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Contact Form */}
       <Grid item xs={12} md={6}>
  <Card sx={{ 
    borderRadius: '20px', 
    height: '100%',
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.1)',
    backdropFilter: 'blur(10px)',
    width:'700px'
  }}>
    <CardContent sx={{ p: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 700, 
          mb: 4, 
          color: '#2d3748',
          textAlign: 'center'
        }}
      >
        Send us a Message
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Your Name */}
          <TextField
            fullWidth
            name="name"
            label="Your Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.1)'
                },
              }
            }}
          />

          {/* Email Address */}
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.1)'
                },
              }
            }}
          />

          {/* Subject */}
          <TextField
            fullWidth
            name="subject"
            label="Subject *"
            value={formData.subject}
            onChange={handleInputChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.1)'
                },
              }
            }}
          />

          {/* Your Message */}
          <TextField
            fullWidth
            name="message"
            label="Your Message *"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.1)'
                },
              }
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            sx={{
              borderRadius: '12px',
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              textTransform: 'none',
              width: '100%',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
              }
            }}
          >
            Send Message via Email
          </Button>
        </Box>
      </form>
    </CardContent>
  </Card>
</Grid>
        </Grid>

        {/* FAQ Section - Full Width */}
        <Box sx={{ width: '100%' }}>
          <Card sx={{ 
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.1)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#2d3748', textAlign: 'center' }}>
                Frequently Asked Questions
              </Typography>
              <Box sx={{ space: 2 }}>
                {faqItems.map((faq, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      mb: 2, 
                      borderRadius: '12px',
                      border: '1px solid rgba(102, 126, 234, 0.1)',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      '&:hover': {
                        borderColor: 'rgba(102, 126, 234, 0.3)',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.1)'
                      }
                    }}
                  >
                    <Box 
                      onClick={() => handleFAQToggle(index)}
                      sx={{ 
                        p: 3,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        '&:hover': {
                          backgroundColor: 'rgba(102, 126, 234, 0.05)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', color: '#2d3748' }}>
                        {faq.question}
                      </Typography>
                      {expandedFAQ === index ? 
                        <ExpandLessIcon sx={{ color: '#667eea' }} /> : 
                        <ExpandMoreIcon sx={{ color: '#667eea' }} />
                      }
                    </Box>
                    <Collapse in={expandedFAQ === index}>
                      <Box sx={{ p: 3, pt: 0 }}>
                        <Typography variant="body1" color="#4a5568" sx={{ lineHeight: 1.6 }}>
                          {faq.answer}
                        </Typography>
                      </Box>
                    </Collapse>
                  </Card>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Floating Live Chat */}
      <Box sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000
      }}>
        {/* Chat Options */}
        {chatOpen && (
          <Card sx={{
            width: 300,
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            mb: 2,
            overflow: 'hidden'
          }}>
            <Box sx={{ 
              p: 2, 
              backgroundColor: '#6a11cb',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Quick Connect
              </Typography>
              <IconButton 
                onClick={() => setChatOpen(false)} 
                sx={{ color: 'white' }}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ p: 2 }}>
              {chatOptions.map((option, index) => (
                <Button
                  key={index}
                  fullWidth
                  startIcon={React.cloneElement(option.icon, { sx: { color: option.color } })}
                  onClick={option.action}
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    mb: 1,
                    p: 2,
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    color: '#333333',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                      borderColor: option.color
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: option.color }}>
                      {option.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {option.description}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>
          </Card>
        )}

        {/* Chat Toggle Button */}
        <IconButton
          onClick={() => setChatOpen(!chatOpen)}
          sx={{
            backgroundColor: '#6a11cb',
            color: 'white',
            width: 60,
            height: 60,
            borderRadius: '50%',
            boxShadow: '0 8px 25px rgba(106, 17, 203, 0.3)',
            '&:hover': {
              backgroundColor: '#5a0db5',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          {chatOpen ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
      </Box>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default ContactUs;