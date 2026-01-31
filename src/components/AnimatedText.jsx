import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ fontSize: "2.5rem", fontWeight: "bold" }}
    >
      {text}
    </motion.h1>
  );
}