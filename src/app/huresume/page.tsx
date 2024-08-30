import PdfContainer from "../ui/pdfContainer"

export default function Huresume() {
  return (
    <PdfContainer>
      <iframe src='https://firebasestorage.googleapis.com/v0/b/kentsoportfolio.appspot.com/o/resume.pdf?alt=media&token=60db5f42-579f-4b1e-92d9-f7dd1779b7a5' height='100%' width='100%'/>
    </PdfContainer>
  );
}
