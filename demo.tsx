import React from 'react';
import './index.css';
import { Button, QRCode } from 'antd';
import { useReactToPrint } from 'react-to-print';

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
  return (
    <div id="myqrcode">
      <div ref={componentRef}>
      <QRCode  value="https://ant.design/" style={{ marginBottom: 16 }} />
      </div>
      <Button type="primary" onClick={handlePrint}>
        Download
      </Button>
    </div>
  );
};

export default App;
