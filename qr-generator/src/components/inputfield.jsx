import React, { useState } from "react";

export const Inputfield = () => {
  const [img, setImg] = useState("");

  const [loading, setLoading] = useState(false);

  const [qrdata, setQrdata] = useState("");

  const [qrsize, setQrsize] = useState("");

  async function generateQR() {
    setLoading(true);
  
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(qrdata)}/`;
      console.log("Generated URL:", url);
      setLoading(true);
      setImg(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);

      
    }
  }

  function downloadQr(){
    setTimeout(() => {
      alert("Download functionality wasnt implemented")
    }, 1000);
  }

  return (
    <div className="qr-container">
      <h1>Qr code generator</h1>
      {img && <img src={img} alt="Qr code" className="qr-img" />}

      {loading && <p>please wait ....</p>}

      <label htmlFor="dataInput" className="input-label">
        Paste your link :
      </label>
      <input
        type="text"
        className="inputField"
        value={qrdata}
        placeholder="Enter your link..."
        onChange={(e) =>setQrdata(e.target.value)}
      />

      <label htmlFor="sizeInput" className="input-label">
        provide QR img size
      </label>
      <input
        type="text"
        className="inputField"
        value={qrsize}
        placeholder="Ex : 150"
        onChange={(e) =>setQrsize(e.target.value)}
      />
      <div className="buttons">
        <button onClick={generateQR} disabled={loading}>Generate</button>
        <button onClick={downloadQr}>Download</button>
      </div>
      <p>Designed by Gowtham...</p>
    </div>
  );
};
