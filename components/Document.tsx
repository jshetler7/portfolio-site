import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const [file, setFile] = useState("./Resume_2022.pdf");
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

    // @ts-ignore
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

  return (
    <div>
      <div className="grid grid-cols-1 mb-5">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className='grid place-self-center max-w-lg mt-5' options={options}>
        {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
      </div>
    </div>
  );
}