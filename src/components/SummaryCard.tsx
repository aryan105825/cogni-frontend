import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  summary: string;
}

export default function SummaryCard({ summary }: Props) {
  return (
    <Card
      elevation={6}
      sx={{
        borderRadius: 3,
        background:
          "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Summary
        </Typography>
        <Typography variant="body1">{summary}</Typography>
      </CardContent>
    </Card>
  );
}
