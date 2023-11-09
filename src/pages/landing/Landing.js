import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      zIndex: "0"
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "white",
      fontWeight: "500",
      marginTop: "-100px",
      paddingBottom: "28px",
      letterSpacing: "0px",
    },
    download: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "2",
    }
  };

  return (
    <span>
      <Draw />
      <section className="landing" style={styles.landing}>
        <div className="textContainer" style={styles.textContainer}>
          <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h1 className="name" style={styles.name}>
            Saad Iqbal
            </h1>       
          </motion.div>
          <div className="description">
            <Typewriter
              className="description"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Software Engineer")
                  .start();
              }}
            />
          </div>
          <SocialIcons />
        </div>
      </section>
    </span>
  );
};
export default Landing;
