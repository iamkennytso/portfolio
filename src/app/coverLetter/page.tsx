import PdfContainer from "../ui/pdfContainer"

export default function CoverLetter() {
  return (
    <PdfContainer>
      <iframe src='https://firebasestorage.googleapis.com/v0/b/kentsoportfolio.appspot.com/o/coverLetter.pdf?alt=media&token=0bb1afba-1f37-494a-87f7-7cab24b3eae7' height='100%' width='100%'/>
    </PdfContainer>
  );
}
