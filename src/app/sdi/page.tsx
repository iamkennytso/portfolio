import PdfContainer from "../ui/pdfContainer"

export default function SDI() {
  return (
    <PdfContainer>
      <iframe src="/SDI_Results.pdf" height='100%' width='100%'/>
    </PdfContainer>
  );
}
