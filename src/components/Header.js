import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.div
         whileHover={{ scale: 1.2, rotate: 0, opacity: 10 }}
      >
        <img className="logo" src={logo} alt="Saad Iqbal' Logo" />
      </motion.div>
      <NavLinks />
    </header>
  );
};

export default Header;
