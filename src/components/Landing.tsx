import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/app");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 12,
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CogniPath 🧠
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
          >
            AI-powered adaptive learning companion that transforms any educational content
            into a personalized, multi-modal learning experience. Learn smarter, faster, and more
            effectively.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleStart}
            sx={{
              py: 1.5,
              px: 5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: 3,
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              background: "linear-gradient(90deg, #7b1fa2 0%, #4a148c 100%)",
              "&:hover": {
                background: "linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 6, textAlign: "center", color: "#4a148c" }}
          >
            Core Features
          </Typography>
          <Box 
            sx={{ 
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              justifyContent: "center"
            }}
          >
            {[
              {
                title: "Focus Summary",
                description: "Generate concise, jargon-free summaries of any content.",
              },
              {
                title: "Audio Digest",
                description: "Listen to the content with AI-generated audio summaries.",
              },
              {
                title: "Interactive Quiz",
                description: "Test your knowledge with flashcards and multiple-choice questions.",
              },
              {
                title: "Analogy Engine",
                description: "Understand difficult concepts with simple analogies (Stretch Goal).",
              },
            ].map((feature, idx) => (
              <Box key={idx}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 5, 
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    },
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#7b1fa2" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {feature.description}
                  </Typography>
                </Paper>
                </Box>
            ))}
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: "center", pt: 6, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 CogniPath. Built for the "Barriers to Learning" Hackathon.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}