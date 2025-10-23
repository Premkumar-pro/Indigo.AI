import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Upload as UploadIcon,
  Settings as SettingsIcon,
  PlayArrow as PlayIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  Storage as StorageIcon,
  Security as SecurityIcon,
  CloudUpload as CloudUploadIcon,
  AutoAwesome as MagicIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Import all video files
import creativeUpscale from "../../../assets/image_gen_tools/creative-upscale.webm";
import facePortrait from "../../../assets/image_gen_tools/face-portrait.webm";
import imageEditor from "../../../assets/image_gen_tools/image-editor.webm";
import png from "../../../assets/image_gen_tools/png.webm";
import realtimeGeneration from "../../../assets/image_gen_tools/realtime-generation.webm";
import reimagine from "../../../assets/image_gen_tools/reimagine.webm";
import restructure from "../../../assets/image_gen_tools/restructure.webm";
import textToImageV2 from "../../../assets/image_gen_tools/text-to-image-v2.webm";
import trainModel from "../../../assets/image_gen_tools/trainmodel.webm";

const TrainDocs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Training steps
  const steps = [
    {
      label: 'Data Preparation',
      description: 'Prepare and upload your training dataset',
      icon: <UploadIcon />,
      content: [
        'Collect and organize your training images',
        'Ensure image quality and consistency',
        'Create proper labeling and categorization',
        'Split data into training/validation sets'
      ]
    },
    {
      label: 'Model Configuration',
      description: 'Configure your AI model parameters',
      icon: <SettingsIcon />,
      content: [
        'Select base model architecture',
        'Set training parameters (epochs, batch size)',
        'Configure learning rate and optimization',
        'Define output specifications'
      ]
    },
    {
      label: 'Training Process',
      description: 'Monitor the training progress',
      icon: <PlayIcon />,
      content: [
        'Initialize model training',
        'Monitor loss and accuracy metrics',
        'Validate model performance',
        'Adjust parameters as needed'
      ]
    },
    {
      label: 'Deployment',
      description: 'Deploy your trained model',
      icon: <CheckIcon />,
      content: [
        'Model evaluation and testing',
        'Export trained model files',
        'Integrate with your applications',
        'Monitor model performance in production'
      ]
    }
  ];

  // Training templates with all videos
  const trainingTemplates = [
    {
      id: 1,
      name: 'Creative Upscale',
      description: 'Enhance and upscale your images with AI',
      difficulty: 'Intermediate',
      duration: '2-3 hours',
      dataRequired: '100+ images',
      useCase: 'Image enhancement',
      video: creativeUpscale
    },
    {
      id: 2,
      name: 'Face Portrait',
      description: 'Generate realistic human face portraits',
      difficulty: 'Advanced',
      duration: '4-5 hours',
      dataRequired: '500+ images',
      useCase: 'Portrait generation',
      video: facePortrait
    },
    {
      id: 3,
      name: 'Image Editor',
      description: 'AI-powered image editing and manipulation',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      dataRequired: '200+ images',
      useCase: 'Photo editing',
      video: imageEditor
    },
    {
      id: 4,
      name: 'PNG Generator',
      description: 'Create transparent PNG images automatically',
      difficulty: 'Beginner',
      duration: '1-2 hours',
      dataRequired: '50+ images',
      useCase: 'Graphic design',
      video: png
    },
    {
      id: 5,
      name: 'Real-time Generation',
      description: 'Instant image generation with live preview',
      difficulty: 'Advanced',
      duration: '5-6 hours',
      dataRequired: '800+ images',
      useCase: 'Real-time apps',
      video: realtimeGeneration
    },
    {
      id: 6,
      name: 'Reimagine',
      description: 'Transform and reimagine existing images',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      dataRequired: '300+ images',
      useCase: 'Creative transformation',
      video: reimagine
    },
    {
      id: 7,
      name: 'Restructure',
      description: 'Modify image composition and structure',
      difficulty: 'Expert',
      duration: '6-8 hours',
      dataRequired: '1000+ images',
      useCase: 'Architectural design',
      video: restructure
    },
    {
      id: 8,
      name: 'Text to Image V2',
      description: 'Advanced text-to-image generation model',
      difficulty: 'Intermediate',
      duration: '4-5 hours',
      dataRequired: '500+ text pairs',
      useCase: 'Content creation',
      video: textToImageV2
    }
  ];

  // Features list
  const features = [
    {
      icon: <CloudUploadIcon />,
      title: 'Easy Data Upload',
      description: 'Drag and drop your dataset with automatic validation'
    },
    {
      icon: <MagicIcon />,
      title: 'Smart Preprocessing',
      description: 'Automatic image enhancement and normalization'
    },
    {
      icon: <SettingsIcon />,
      title: 'Custom Configuration',
      description: 'Fine-tune every aspect of your model training'
    },
    {
      icon: <ScheduleIcon />,
      title: 'Progress Tracking',
      description: 'Real-time monitoring of training metrics and progress'
    },
    {
      icon: <StorageIcon />,
      title: 'Model Versioning',
      description: 'Keep track of different model versions and iterations'
    },
    {
      icon: <SecurityIcon />,
      title: 'Secure Training',
      description: 'Your data and models are protected with enterprise security'
    }
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleStartTraining = (template) => {
    alert(`Starting training with template: ${template.name}`);
    // Navigate to training interface
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      case 'Expert': return '#9C27B0';
      default: return '#666666';
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#ffffff', 
      padding: 3,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Back to Dashboard Button */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', mb: 2 }}>
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

      {/* Header Section with reduced margin */}
      <Box sx={{ 
        mb: 4, 
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        mt: 2
      }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: '#333333',
            mb: 1,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.2rem', md: '2.8rem' }
          }}
        >
          AI Model Training
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#666666',
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}
        >
          Train custom AI models with your data. Follow our step-by-step guide to create powerful image generation models.
        </Typography>
      </Box>

      {/* Training Process Guide with Video */}
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto 50px auto'
      }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Side - Stepper */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '20px', p: 3, height: '100%' }}>
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: '#333333' }}>
                  Training Process Guide
                </Typography>
                
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        StepIconComponent={() => (
                          <Box sx={{ 
                            color: activeStep >= index ? '#6a11cb' : '#cccccc',
                            fontSize: '1.5rem'
                          }}>
                            {step.icon}
                          </Box>
                        )}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333333' }}>
                          {step.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {step.description}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <List>
                          {step.content.map((item, itemIndex) => (
                            <ListItem key={itemIndex} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckIcon sx={{ color: '#6a11cb', fontSize: '1rem' }} />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                        <Box sx={{ mb: 2, mt: 2 }}>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ 
                              mr: 1,
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              textTransform: 'none'
                            }}
                          >
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ borderRadius: '8px', textTransform: 'none' }}
                          >
                            Back
                          </Button>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Video */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Box sx={{ position: 'relative', height: '400px' }}>
                <video
                  width="100%"
                  height="100%"
                  muted
                  loop
                  autoPlay
                  style={{ 
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <source src={trainModel} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333333' }}>
                  Training Process Demo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Watch how our AI model training process works from data preparation to deployment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Training Templates with All Videos - 4 per row */}
      <Box sx={{ 
        backgroundColor: '#1a1a1a',
        py: 5,
        mb: 6
      }}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600, 
              mb: 4, 
              color: '#ffffff', 
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            Training Templates
          </Typography>
          
          {/* First Row - 4 videos */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {trainingTemplates.slice(0, 4).map((template) => (
              <Grid item xs={12} sm={6} md={3} key={template.id}>
                <Card 
                  sx={{ 
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: '1px solid #333333',
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(106, 17, 203, 0.3)',
                      borderColor: '#6a11cb'
                    }
                  }}
                >
                  {/* Video */}
                  <Box sx={{ 
                    position: 'relative', 
                    height: '180px', 
                    borderRadius: '12px 12px 0 0', 
                    overflow: 'hidden' 
                  }}>
                    <video
                      width="100%"
                      height="100%"
                      muted
                      loop
                      style={{ 
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                      }}
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source src={template.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                  
                  <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>
                        {template.name}
                      </Typography>
                      <Chip 
                        label={template.difficulty}
                        size="small"
                        sx={{
                          backgroundColor: getDifficultyColor(template.difficulty),
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.6rem',
                          height: '20px'
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body2" sx={{ mb: 2, flex: 1, color: '#cccccc', fontSize: '0.8rem' }}>
                      {template.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Duration:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {template.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Data Required:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {template.dataRequired}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Use Case:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#6a11cb' }}>
                          {template.useCase}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PlayIcon />}
                      onClick={() => handleStartTraining(template)}
                      sx={{
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        textTransform: 'none',
                        fontWeight: 600,
                        color: 'white',
                        fontSize: '0.8rem',
                        py: 0.8
                      }}
                    >
                      Start Training
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Second Row - 4 videos */}
          <Grid container spacing={2}>
            {trainingTemplates.slice(4, 8).map((template) => (
              <Grid item xs={12} sm={6} md={3} key={template.id}>
                <Card 
                  sx={{ 
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: '1px solid #333333',
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(106, 17, 203, 0.3)',
                      borderColor: '#6a11cb'
                    }
                  }}
                >
                  {/* Video */}
                  <Box sx={{ 
                    position: 'relative', 
                    height: '180px', 
                    borderRadius: '12px 12px 0 0', 
                    overflow: 'hidden' 
                  }}>
                    <video
                      width="100%"
                      height="100%"
                      muted
                      loop
                      style={{ 
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                      }}
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source src={template.video} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                  
                  <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>
                        {template.name}
                      </Typography>
                      <Chip 
                        label={template.difficulty}
                        size="small"
                        sx={{
                          backgroundColor: getDifficultyColor(template.difficulty),
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.6rem',
                          height: '20px'
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body2" sx={{ mb: 2, flex: 1, color: '#cccccc', fontSize: '0.8rem' }}>
                      {template.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Duration:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {template.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Data Required:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#ffffff' }}>
                          {template.dataRequired}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="caption" sx={{ color: '#999999' }}>
                          Use Case:
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#6a11cb' }}>
                          {template.useCase}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PlayIcon />}
                      onClick={() => handleStartTraining(template)}
                      sx={{
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        textTransform: 'none',
                        fontWeight: 600,
                        color: 'white',
                        fontSize: '0.8rem',
                        py: 0.8
                      }}
                    >
                      Start Training
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Platform Features - Centered */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', mb: 6 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4,
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600, 
              color: '#333333',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            Platform Features
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/text-to-image')}
            sx={{
              borderRadius: '12px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Ready to Generate
          </Button>
        </Box>
        
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                borderRadius: '16px', 
                height: '100%',
                textAlign: 'center'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ 
                    color: '#6a11cb', 
                    fontSize: '3rem', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333333' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Getting Started Alert */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Alert 
          severity="info" 
          sx={{ 
            borderRadius: '12px',
            '& .MuiAlert-message': {
              width: '100%'
            }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Ready to start training?
          </Typography>
          <Typography variant="body2">
            Choose a template above or contact our team for custom model training solutions. 
            Our experts can help you achieve the best results for your specific use case.
          </Typography>
        </Alert>
      </Box>
    </Box>
  );
};

export default TrainDocs;