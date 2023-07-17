import { useState, useEffect } from "react";
import resume from "../files/saad_resume_2023.pdf";

const Download = () => {
  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "saad_iqbal_resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="buttonContainer">
      <button
        className="btn downloadCV"
        onClick={handleDownload}
        disabled={downloading}
      >
        {downloading ? "Downloading..." : "Download Resume"}
      </button>{" "}
    </div>
  );
};

export default Download;
