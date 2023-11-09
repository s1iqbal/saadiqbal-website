import aboutMeImg from "../images/profile.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../files/saad_resume_2023.pdf";
import reactLogo from '../images/react-logo.svg'
import nodeLogo from '../images/node-js-logo.svg'
import javaLogo from '../images/java-logo.svg'
import dockerLogo from '../images/docker-logo.svg'
import nestLogo from '../images/nest-logo.svg'
import kubernetesLogo from '../images/kubernetes-logo.svg'

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    // <p style={{ color: "grey" }}>Stay tuned for updates!</p>
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>"You will face many defeats in life, but never let your self be defeated" - Maya Angelou</h4>
            <h5>I have passion for programming, music, art, and staying active.</h5>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Saad Iqbal</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Role:</span>
                  <p>{brand}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
            </div>
            <div className="infoContainer">
            <div className="row">
              <div className="col">
                <img className="tech-logo" src={reactLogo} alt={name} />
              </div>
              <div className="col">
                <img className="tech-logo" src={nodeLogo} alt={name} />
              </div>
              <div className="col">
                <img className="tech-logo" src={kubernetesLogo} alt={name} />
              </div>
              <div className="col">
                <img className="tech-logo"  src={nestLogo} alt={'nest-js'} />
              </div>
              <div className="col">
                <img className="tech-logo"  src={dockerLogo} alt={'nest-js'} />
              </div>
              <div className="col">
                <img className="tech-logo"  src={javaLogo} alt={'nest-js'} />
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
