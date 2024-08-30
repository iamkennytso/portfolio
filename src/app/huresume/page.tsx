import { huresumeUrl } from "../consts/urls";
import PdfContainer from "../ui/pdfContainer"

export default function Huresume() {
  return (
    <PdfContainer>
      <iframe src={huresumeUrl} height='100%' width='100%'/>
    </PdfContainer>
  );
}
