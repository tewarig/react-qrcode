import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";

function Scan() {
  const [data, setData] = useState("No result");

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
            
          } 
        }
        constraints	={{ facingMode:  "environment"  }}
          style={{ width: "40%", height: "40%" }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Scan;
