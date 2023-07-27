import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import samplePDF from '../files/saad_resume_2023.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css'; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
  return (
    <div style={{padding: '0px 50px 0px 50px'}}>
  <Document file={samplePDF} onLoadError={console.error} scale={10.0}  >
            <Page pageNumber={1} scale={2.0} />
        </Document>
    </div>
      

  );
}