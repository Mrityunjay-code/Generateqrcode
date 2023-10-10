import React from 'react';
import QRCode from 'qrcode.react';
import './ui.css';

const QRCodeDisplay = ({ website, socialMedia }) => {
  return (
    <div className="qrcode-container">
      <div className="qrcode1">
       
        <QRCode value={website} id='web1'/>
        <h3>Website</h3>
      </div>
      <div className="qrcode2">
       
        <QRCode value={socialMedia} id='web2'/>
        <h3>Social Media </h3>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
