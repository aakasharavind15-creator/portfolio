import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";

export function PdfViewer({ pdfPath }: { pdfPath: string }) {
  return (
    <Stack spacing={2}>
      <Paper variant="outlined" sx={{ height: { xs: "60vh", md: "85vh" }, overflow: "hidden" }}>
        <object data={pdfPath} type="application/pdf" width="100%" height="100%">
          <Box sx={{ p: 3 }}>
            <Typography>
              Your browser can&apos;t display this PDF inline.
            </Typography>
            <Button
              component="a"
              href={pdfPath}
              download
              startIcon={<DownloadIcon />}
              sx={{ mt: 2 }}
            >
              Download the PDF
            </Button>
          </Box>
        </object>
      </Paper>
      <Button
        component="a"
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<OpenInNewIcon />}
        variant="outlined"
        sx={{ alignSelf: "flex-start" }}
      >
        Open PDF in new tab
      </Button>
    </Stack>
  );
}
