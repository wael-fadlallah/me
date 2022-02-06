import { useEffect, useRef } from "react";
import "./styles/index.css";
import Me from "./components/Me/Index";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion";
import scene from "./assets/scene.json";
import { Application } from "./assets/runtime";

function App() {
  const windowRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const { current } = canvasRef;
    if (current.width) {
      // const app = new speRuntimeFactory();
      // app.start(scene, current);
      new Application().start(scene);
    }
  }, [canvasRef]);
  return (
    <div
      className="h-screen bg-slate-900 text-white flex justify-center items-center flex-col"
      ref={windowRef}
    >
      <Me />
      <motion.div drag dragConstraints={windowRef}>
        <DiReact size={80} />
      </motion.div>

      <canvas ref={canvasRef} id="canvas3d"></canvas>

      {/* <Spline scene={scene} /> */}
    </div>
  );
}

export default App;
