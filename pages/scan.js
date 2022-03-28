import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

function Scan() {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "40%", height: "40%" }}
      />
      <p>{data}</p>
    </>
  );
}

export default Scan;
