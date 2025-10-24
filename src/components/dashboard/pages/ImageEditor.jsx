import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Divider,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Download as DownloadIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  RestartAlt as ResetIcon,
  Tune as AdjustIcon,
  Palette as FilterIcon,
  Crop as CropIcon,
  TextFields as TextIcon,
  Brush as DrawIcon,
  AutoAwesome as EffectsIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  Flip as FlipIcon,
  AddPhotoAlternate as UploadIcon,
  AspectRatio as AspectRatioIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ImageEditor = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [activeTool, setActiveTool] = useState('adjust');
  const [imageHistory, setImageHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [cropDialog, setCropDialog] = useState(false);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState('free');

  // Aspect ratios
  const aspectRatios = [
    { label: 'Free', value: 'free' },
    { label: '1:1', value: 1 },
    { label: '4:3', value: 4/3 },
    { label: '16:9', value: 16/9 },
    { label: '3:2', value: 3/2 },
    { label: '2:3', value: 2/3 },
    { label: '9:16', value: 9/16 }
  ];

  // Adjustments state
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    exposure: 100,
    hue: 0,
    blur: 0,
    sharpen: 0
  });

  // Text state
  const [textConfig, setTextConfig] = useState({
    content: 'Add your text here',
    fontFamily: 'Arial',
    fontSize: 24,
    color: '#000000',
    x: 100,
    y: 100
  });

  // Font families (27 fonts)
  const fontFamilies = [
    'Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana',
    'Courier New', 'Impact', 'Comic Sans MS', 'Trebuchet MS',
    'Palatino', 'Garamond', 'Bookman', 'Tahoma', 'Lucida Console',
    'Franklin Gothic', 'Century Gothic', 'Candara', 'Calibri',
    'Cambria', 'Consolas', 'Constantia', 'Corbel', 'Ebrima',
    'Segoe UI', 'Microsoft Sans Serif', 'System UI', 'Monospace'
  ];

  // Filter presets
  const filterPresets = [
    { name: 'Normal', brightness: 100, contrast: 100, saturation: 100, hue: 0 },
    { name: 'Vintage', brightness: 110, contrast: 120, saturation: 80, hue: 30 },
    { name: 'Black & White', brightness: 100, contrast: 120, saturation: 0, hue: 0 },
    { name: 'Cool', brightness: 100, contrast: 110, saturation: 120, hue: 200 },
    { name: 'Warm', brightness: 110, contrast: 110, saturation: 120, hue: -20 },
    { name: 'Dramatic', brightness: 90, contrast: 150, saturation: 110, hue: 0 },
    { name: 'Cinematic', brightness: 95, contrast: 130, saturation: 90, hue: 10 }
  ];

  const saveToHistory = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    const newHistory = imageHistory.slice(0, historyIndex + 1);
    newHistory.push(imageData);
    setImageHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setRotation(0);
          setScale(1);
          // Initialize history with original image
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          canvas.width = 800;
          canvas.height = 600;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw image centered on canvas
          drawImageOnCanvas(img);
          saveToHistory();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const drawImageOnCanvas = (img = image) => {
    if (!img || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas with white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Save context state
    ctx.save();
    
    // Move to center of canvas
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Apply rotation
    ctx.rotate((rotation * Math.PI) / 180);
    
    // Apply scale
    ctx.scale(scale, scale);
    
    // Apply filters
    ctx.filter = `
      brightness(${adjustments.brightness}%)
      contrast(${adjustments.contrast}%)
      saturate(${adjustments.saturation}%)
      hue-rotate(${adjustments.hue}deg)
      blur(${adjustments.blur}px)
    `;
    
    // Draw image centered
    const width = img.width * 0.8; // Scale down to fit canvas
    const height = img.height * 0.8;
    ctx.drawImage(img, -width / 2, -height / 2, width, height);
    
    // Restore context state
    ctx.restore();
  };

  useEffect(() => {
    drawImageOnCanvas();
  }, [image, adjustments, rotation, scale]);

  const handleAdjustmentChange = (property, value) => {
    setAdjustments(prev => ({
      ...prev,
      [property]: value
    }));
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      loadFromHistory(newIndex);
    }
  };

  const redo = () => {
    if (historyIndex < imageHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      loadFromHistory(newIndex);
    }
  };

  const loadFromHistory = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = imageHistory[index];
  };

  const resetAdjustments = () => {
    setAdjustments({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      exposure: 100,
      hue: 0,
      blur: 0,
      sharpen: 0
    });
    setRotation(0);
    setScale(1);
  };

  const rotateImage = (degrees) => {
    setRotation(prev => prev + degrees);
    saveToHistory();
  };

  const zoomImage = (factor) => {
    setScale(prev => Math.max(0.1, Math.min(5, prev + factor)));
  };

  const applyCrop = (ratio) => {
    if (!image) return;
    
    setSelectedAspectRatio(ratio);
    
    if (ratio === 'free') {
      // Reset to original aspect ratio
      drawImageOnCanvas();
    } else {
      // Apply aspect ratio crop logic
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Calculate new dimensions based on aspect ratio
      let newWidth, newHeight;
      
      if (image.width / image.height > ratio) {
        // Image is wider than desired ratio
        newHeight = Math.min(canvas.height, image.height);
        newWidth = newHeight * ratio;
      } else {
        // Image is taller than desired ratio
        newWidth = Math.min(canvas.width, image.width);
        newHeight = newWidth / ratio;
      }
      
      // Draw image with new aspect ratio
      const x = (canvas.width - newWidth) / 2;
      const y = (canvas.height - newHeight) / 2;
      
      ctx.save();
      ctx.filter = `
        brightness(${adjustments.brightness}%)
        contrast(${adjustments.contrast}%)
        saturate(${adjustments.saturation}%)
        hue-rotate(${adjustments.hue}deg)
        blur(${adjustments.blur}px)
      `;
      ctx.drawImage(image, x, y, newWidth, newHeight);
      ctx.restore();
    }
    
    saveToHistory();
    setCropDialog(false);
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'indigo-design.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const applyFilterPreset = (filter) => {
    setAdjustments({
      brightness: filter.brightness,
      contrast: filter.contrast,
      saturation: filter.saturation,
      hue: filter.hue,
      blur: 0,
      sharpen: 0
    });
  };

  const renderToolOptions = () => {
    switch (activeTool) {
      case 'adjust':
        return (
          <Box sx={{ space: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2d3748', fontWeight: 600 }}>
              Image Adjustments
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Brightness: {adjustments.brightness}%
              </Typography>
              <Slider
                value={adjustments.brightness}
                onChange={(e, value) => handleAdjustmentChange('brightness', value)}
                min={0}
                max={200}
                sx={{ color: '#667eea' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Contrast: {adjustments.contrast}%
              </Typography>
              <Slider
                value={adjustments.contrast}
                onChange={(e, value) => handleAdjustmentChange('contrast', value)}
                min={0}
                max={200}
                sx={{ color: '#667eea' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Saturation: {adjustments.saturation}%
              </Typography>
              <Slider
                value={adjustments.saturation}
                onChange={(e, value) => handleAdjustmentChange('saturation', value)}
                min={0}
                max={200}
                sx={{ color: '#667eea' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Hue: {adjustments.hue}°
              </Typography>
              <Slider
                value={adjustments.hue}
                onChange={(e, value) => handleAdjustmentChange('hue', value)}
                min={-180}
                max={180}
                sx={{ color: '#667eea' }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Blur: {adjustments.blur}px
              </Typography>
              <Slider
                value={adjustments.blur}
                onChange={(e, value) => handleAdjustmentChange('blur', value)}
                min={0}
                max={20}
                sx={{ color: '#667eea' }}
              />
            </Box>
          </Box>
        );

      case 'filters':
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: '#2d3748', fontWeight: 600 }}>
              Filter Presets
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {filterPresets.map((filter, index) => (
                <Chip
                  key={index}
                  label={filter.name}
                  onClick={() => applyFilterPreset(filter)}
                  sx={{
                    justifyContent: 'flex-start',
                    backgroundColor: '#f7fafc',
                    border: '1px solid #e2e8f0',
                    '&:hover': {
                      backgroundColor: '#667eea',
                      color: 'white'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        );

      case 'crop':
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: '#2d3748', fontWeight: 600 }}>
              Crop & Aspect Ratio
            </Typography>
            <Button
              fullWidth
              variant="contained"
              startIcon={<AspectRatioIcon />}
              onClick={() => setCropDialog(true)}
              sx={{
                backgroundColor: '#667eea',
                '&:hover': { backgroundColor: '#5a6fd8' }
              }}
            >
              Choose Aspect Ratio
            </Button>
            <Typography variant="body2" sx={{ mt: 2, color: '#718096' }}>
              Current: {selectedAspectRatio === 'free' ? 'Free' : selectedAspectRatio}
            </Typography>
          </Box>
        );

      case 'text':
        return (
          <Box sx={{ space: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2d3748', fontWeight: 600 }}>
              Text Tool
            </Typography>
            
            <TextField
              fullWidth
              label="Text Content"
              value={textConfig.content}
              onChange={(e) => setTextConfig(prev => ({ ...prev, content: e.target.value }))}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Font Family</InputLabel>
              <Select
                value={textConfig.fontFamily}
                label="Font Family"
                onChange={(e) => setTextConfig(prev => ({ ...prev, fontFamily: e.target.value }))}
              >
                {fontFamilies.map((font) => (
                  <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#4a5568', fontWeight: 500 }}>
                Font Size: {textConfig.fontSize}px
              </Typography>
              <Slider
                value={textConfig.fontSize}
                onChange={(e, value) => setTextConfig(prev => ({ ...prev, fontSize: value }))}
                min={12}
                max={72}
                sx={{ color: '#667eea' }}
              />
            </Box>

            <TextField
              fullWidth
              type="color"
              label="Text Color"
              value={textConfig.color}
              onChange={(e) => setTextConfig(prev => ({ ...prev, color: e.target.value }))}
              sx={{ mb: 2 }}
            />
          </Box>
        );

      default:
        return (
          <Box>
            <Typography variant="h6" sx={{ color: '#2d3748', fontWeight: 600 }}>
              Select a tool to start editing
            </Typography>
          </Box>
        );
    }
  };

  const tools = [
    { id: 'adjust', icon: <AdjustIcon />, label: 'Adjust', color: '#667eea' },
    { id: 'filters', icon: <FilterIcon />, label: 'Filters', color: '#667eea' },
    { id: 'crop', icon: <CropIcon />, label: 'Crop', color: '#667eea' },
    { id: 'text', icon: <TextIcon />, label: 'Text', color: '#667eea' },
    { id: 'draw', icon: <DrawIcon />, label: 'Draw', color: '#667eea' },
    { id: 'effects', icon: <EffectsIcon />, label: 'Effects', color: '#667eea' }
  ];

  return (
    <Box sx={{ 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8fafc'
      }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate('/dashboard')}
          sx={{
            color: '#4a5568',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#edf2f7' }
          }}
        >
          Back to Dashboard
        </Button>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Indigo.AI Editor
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            onClick={undo}
            disabled={historyIndex <= 0}
            sx={{ color: historyIndex <= 0 ? '#cbd5e0' : '#4a5568' }}
          >
            <UndoIcon />
          </IconButton>
          <IconButton 
            onClick={redo}
            disabled={historyIndex >= imageHistory.length - 1}
            sx={{ color: historyIndex >= imageHistory.length - 1 ? '#cbd5e0' : '#4a5568' }}
          >
            <RedoIcon />
          </IconButton>
          <IconButton 
            onClick={resetAdjustments}
            sx={{ color: '#4a5568' }}
          >
            <ResetIcon />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            disabled={!image}
            sx={{
              backgroundColor: '#667eea',
              '&:hover': { backgroundColor: '#5a6fd8' },
              '&:disabled': { backgroundColor: '#cbd5e0' }
            }}
          >
            Export
          </Button>
        </Box>
      </Box>

      {/* Main Editor Area */}
      <Box sx={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
        {/* Left Toolbar */}
        <Box sx={{ 
          width: 80, 
          backgroundColor: '#f8fafc',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 2
        }}>
          {/* Upload Button */}
          <IconButton
            onClick={() => fileInputRef.current?.click()}
            sx={{ 
              color: '#667eea', 
              mb: 3,
              backgroundColor: 'rgba(102, 126, 234, 0.1)',
              '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.2)' }
            }}
          >
            <UploadIcon />
          </IconButton>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />

          <Divider sx={{ width: '60%', backgroundColor: '#e2e8f0', mb: 2 }} />

          {/* Tools */}
          {tools.map((tool) => (
            <Box key={tool.id} sx={{ textAlign: 'center', mb: 2 }}>
              <IconButton
                onClick={() => setActiveTool(tool.id)}
                sx={{
                  color: activeTool === tool.id ? '#ffffff' : '#667eea',
                  backgroundColor: activeTool === tool.id ? '#667eea' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#667eea',
                    color: '#ffffff'
                  }
                }}
              >
                {tool.icon}
              </IconButton>
              <Typography variant="caption" sx={{ 
                color: activeTool === tool.id ? '#667eea' : '#718096',
                fontSize: '0.7rem',
                mt: 0.5
              }}>
                {tool.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Tool Options Panel */}
        <Box sx={{ 
          width: 300, 
          backgroundColor: '#f8fafc',
          borderRight: '1px solid #e2e8f0',
          p: 3,
          overflow: 'auto'
        }}>
          {renderToolOptions()}
        </Box>

        {/* Canvas Area */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: '#f7fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          position: 'relative'
        }}>
          <Card sx={{ 
            p: 2, 
            backgroundColor: 'white',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            borderRadius: '12px'
          }}>
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              style={{
                display: 'block',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0'
              }}
            />
          </Card>

          {/* Canvas Controls */}
          {image && (
            <Box sx={{ 
              position: 'absolute', 
              bottom: 20, 
              display: 'flex', 
              gap: 1,
              backgroundColor: 'white',
              p: 1,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <IconButton 
                size="small" 
                onClick={() => zoomImage(0.1)}
                sx={{ color: '#667eea' }}
              >
                <ZoomInIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => zoomImage(-0.1)}
                sx={{ color: '#667eea' }}
              >
                <ZoomOutIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => rotateImage(-90)}
                sx={{ color: '#667eea' }}
              >
                <RotateLeftIcon />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => rotateImage(90)}
                sx={{ color: '#667eea' }}
              >
                <RotateRightIcon />
              </IconButton>
              <Chip 
                label={`${Math.round(scale * 100)}%`} 
                size="small" 
                sx={{ backgroundColor: '#667eea', color: 'white' }}
              />
            </Box>
          )}

          {!image && (
            <Box sx={{ textAlign: 'center', color: '#718096' }}>
              <UploadIcon sx={{ fontSize: 64, mb: 2, color: '#cbd5e1' }} />
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Start Editing
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Upload an image to begin your creative journey
              </Typography>
              <Button
                variant="contained"
                startIcon={<UploadIcon />}
                onClick={() => fileInputRef.current?.click()}
                sx={{
                  backgroundColor: '#667eea',
                  '&:hover': { backgroundColor: '#5a6fd8' }
                }}
              >
                Upload Image
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Crop Dialog */}
      <Dialog open={cropDialog} onClose={() => setCropDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Choose Aspect Ratio
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {aspectRatios.map((ratio) => (
              <Button
                key={ratio.value}
                variant={selectedAspectRatio === ratio.value ? "contained" : "outlined"}
                onClick={() => applyCrop(ratio.value)}
                sx={{
                  justifyContent: 'flex-start',
                  mb: 1,
                  backgroundColor: selectedAspectRatio === ratio.value ? '#667eea' : 'transparent',
                  color: selectedAspectRatio === ratio.value ? 'white' : '#4a5568'
                }}
              >
                {ratio.label}
              </Button>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCropDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ImageEditor;