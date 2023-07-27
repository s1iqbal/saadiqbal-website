import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.div
         whileHover={{ scale: 1.2, rotate: 0, opacity: 10 }}
      >
      </motion.div>
      <NavLinks />
    </header>
  );
};

export default Header;
