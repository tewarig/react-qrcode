import React, { useState } from "react";
import QRCode from "react-qr-code";

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  

  return (
    <>
      {qrCodeValue != "" && <QRCode value={qrCodeValue} />}
      <input onChange={(e)=>{setQrCodeValue(e.target.value)}} /> 
      <div>Generate</div>
    </>
  );
}

export default Generate;
