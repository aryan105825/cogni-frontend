import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  mcq: any[];
  flashcards: any[];
}

export default function QuizCard({ mcq, flashcards }: Props) {
  return (
    <Card
      elevation={6}
      sx={{
        borderRadius: 3,
        background:
          "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Quiz
        </Typography>

        {/* MCQs */}
        {mcq.length > 0 && mcq.map((item, idx) => (
          <Accordion key={idx} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>

              {item.options.map((opt: string, i: number) => (
                <Typography key={i}>• {opt}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Flashcards */}
        {flashcards.length > 0 && flashcards.map((item, idx) => (
          <Accordion key={`fc-${idx}`} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.front}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.back}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
