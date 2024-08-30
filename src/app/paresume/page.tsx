
import { paresumeUrl } from "../consts/urls";
import PdfContainer from "../ui/pdfContainer"

export default function Paresume() {
  return (
    <PdfContainer>
      <iframe src={paresumeUrl} height='100%' width='100%'/>
    </PdfContainer>
  );
}
