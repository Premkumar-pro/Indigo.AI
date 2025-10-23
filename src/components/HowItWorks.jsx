import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleGenerateClick = () => {
    navigate("/dashboard");
  };

  const steps = [
    {
      step: 1,
      title: "Describe Your Vision",
      description:
        "Type what you want to create. Be specific with details, styles, and colors for best results.",
      prompt: "A pop-art inspired room with vibrant colors and diverse graphics",
      image:
        "data:image/jpeg;base64,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",
      buttonText: "Start Creating",
    },
    {
      step: 2,
      title: "Choose Style & Settings",
      description:
        "Select from various art styles, adjust settings, and customize your image generation preferences.",
      prompt: "An open space with modern furniture and vibrant graphics",
      image:
        "https://www.pict.ai/images/secure/GLNlq3/8kCiNjaRiA7cWy6_1732201750.png",
      buttonText: "View Styles",
    },
    {
      step: 3,
      title: "Generate & Download",
      description:
        "Get multiple AI-generated images in seconds. Download high-quality results for your projects.",
      prompt: "Minimalist workspace with creative elements and bright accents",
      image:
        "https://w0.peakpx.com/wallpaper/30/671/HD-wallpaper-phoenix-ai-art-dark-background-digital-art-phoenix-ai.jpg",
      buttonText: "Generate Now",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#ffffff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1976D2",
              mb: 2,
            }}
          >
            Create with AI Image Generator
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "text.secondary",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Transform your ideas into stunning visuals with our AI image generator.
            Create exactly what you imagine for your presentations, social media,
            and creative projects.
          </Typography>
        </Box>

        {/* Steps - Alternating Layout */}
        {steps.map((step, index) => (
          <Box
            key={step.step}
            sx={{
              mb: { xs: 6, md: 10 },
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Grid
              container
              spacing={4}
              direction={isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
            >
              {/* Image */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={step.image}
                  alt={step.title}
                  sx={{
                    width: "100%",
                    height: { xs: "250px", md: "400px" },
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Grid>

              {/* Text Side */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // vertical center
                  height: { xs: "auto", md: "400px" }, // match image height
                  px: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#1976D2",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {step.description}
                </Typography>

                {/* Example Prompt */}
                <Box
                  sx={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "8px",
                    padding: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      fontWeight: 600,
                      mb: 1,
                      color: "#6c757d",
                    }}
                  >
                    Example Prompt:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", color: "#495057" }}
                  >
                    "{step.prompt}"
                  </Typography>
                </Box>

                {/* CTA Button */}
                <Button
                  variant={step.step === 3 ? "contained" : "outlined"}
                  onClick={step.step === 3 ? handleGenerateClick : undefined}
                  sx={{
                    borderRadius: "8px",
                    py: 1.2,
                    px: 4,
                    fontWeight: 600,
                    textTransform: "none",
                    alignSelf: "flex-start",
                    ...(step.step === 3
                      ? {
                          backgroundColor: "#1976D2",
                          "&:hover": { backgroundColor: "#1565C0" },
                          color: "#fff",
                        }
                      : {
                          borderColor: "#1976D2",
                          color: "#1976D2",
                          "&:hover": {
                            borderColor: "#1565C0",
                            backgroundColor: "rgba(25,118,210,0.04)",
                          },
                        }),
                  }}
                >
                  {step.buttonText}
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default HowItWorks;
