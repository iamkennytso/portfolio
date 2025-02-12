import { coverLetterUrl } from "../../consts/urls";
import PdfContainer from "../ui/pdfContainer"

export default function CoverLetter() {
  return (
    <PdfContainer>
      <iframe src={coverLetterUrl} height='100%' width='100%'/>
    </PdfContainer>
  );
}
