import { useRef } from "react";
import "./styles/index.css";
import Me from "./components/Me/Index";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion";

function App() {
  const windowRef = useRef(null);
  return (
    <div
      className="h-screen bg-slate-900 text-white flex justify-center items-center flex-col"
      ref={windowRef}
    >
      <Me />

      <motion.div drag dragConstraints={windowRef}>
        <DiReact size={70} />
      </motion.div>

    </div>
  );
}

export default App;
