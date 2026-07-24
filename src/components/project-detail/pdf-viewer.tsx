import { Download, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PdfViewer({ pdfPath }: { pdfPath: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-border/60 shadow-sm">
        <object
          data={pdfPath}
          type="application/pdf"
          className="h-[60vh] w-full sm:h-[85vh]"
        >
          <div className="flex flex-col items-start gap-3 p-6">
            <p className="text-sm text-muted-foreground">
              Your browser can&apos;t display this PDF inline.
            </p>
            <Button asChild variant="outline">
              <a href={pdfPath} download>
                <Download className="size-4" />
                Download the PDF
              </a>
            </Button>
          </div>
        </object>
      </div>
      <Button asChild variant="outline" className="w-fit">
        <a href={pdfPath} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="size-4" />
          Open PDF in new tab
        </a>
      </Button>
    </div>
  );
}
