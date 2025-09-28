import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Paper,
  Box,
  Grid
} from "@mui/material";
import SummaryCard from "./components/SummaryCard";
import QuizCard from "./components/QuizCard";
import { processContent, getJobResult } from "./api";

export default function App() {
  const [content, setContent] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (!jobId) return;

    const interval = setInterval(async () => {
      const res = await getJobResult(jobId);
      if (res.status === "done") {
        setResult(res.result);
        setLoading(false);
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId]);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    setLoading(true);
    setResult(null);
    const res = await processContent(content);
    setJobId(res.job_id);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(180deg, #f3e5f5 0%, #e1bee7 100%)",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
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
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Transform any content into an AI-powered, personalized Learning Hub
          </Typography>
        </Box>

        {/* Input Section */}
        <Paper
          elevation={12}
          sx={{
            p: 5,
            mb: 6,
            borderRadius: 4,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          <TextField
            label="Paste your content here"
            multiline
            rows={6}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: 3,
              background: "linear-gradient(90deg, #7b1fa2 0%, #4a148c 100%)",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {loading ? (
              <CircularProgress size={28} sx={{ color: "white" }} />
            ) : (
              "Generate Learning Hub"
            )}
          </Button>
        </Paper>

        {/* Result Section */}
        {result && (
          <Grid container spacing={4}>
            <Box key="summary" sx={{ width: { xs: "100%", md: "50%" }, p: 1 }}>
              <SummaryCard summary={result.summary} />
            </Box>

            {result.quiz && (
              <Box key="quiz" sx={{ width: { xs: "100%", md: "50%" }, p: 1 }}>
                <QuizCard
                  mcq={result.quiz.mcq}
                  flashcards={result.quiz.flashcards}
                />
              </Box>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
}