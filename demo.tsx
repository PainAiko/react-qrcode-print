import React from 'react';
import './index.css';
import { Button, QRCode } from 'antd';
import { useReactToPrint } from 'react-to-print';
import JsPDF from 'jspdf';
const downloadQRCode = () => {
  const canvas: any = document.getElementById('myqrcode');
  // ?.querySelector<HTMLCanvasElement>('canvas');
  if (canvas) {
    /*const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);*/
    console.log(canvas);
    canvas.print();
  }
};

const App: React.FC = () => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const generatePDF = () => {
    const doc = new JsPDF('portrait', 'pt', 'a4');
    console.log(doc);
    doc.html(document.querySelector('#report') as HTMLElement).then(() => {
      doc.save('report.pdf');
    });
  };

  const downloadQRCode = () => {
    const canvas = document
      .getElementById('myqrcode')
      ?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = 'QRCode.png';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div id="myqrcode">
      <div id="report" ref={componentRef}>
        <QRCode value="https://ant.design/" style={{ marginBottom: 16 }} />
      </div>
      <Button type="primary" onClick={downloadQRCode}>
        Download
      </Button>
    </div>
  );
};

export default App;
