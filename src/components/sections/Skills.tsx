import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const skills = [
  "Financial Modeling",
  "Excel / VBA",
  "DCF & Comps Valuation",
  "Financial Statement Analysis",
  "Variance Analysis",
  "FP&A",
  "PowerPoint Storytelling",
  "Bloomberg / Capital IQ",
];

export function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Skills
        </Typography>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                fontWeight: 600,
                px: 1,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
