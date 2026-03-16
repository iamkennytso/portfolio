import PdfContainer from "../ui/pdfContainer"

export default function CoverLetter() {
  return (
    <PdfContainer>
      <iframe src="/coverLetter.pdf" height='100%' width='100%'/>
    </PdfContainer>
  );
}
