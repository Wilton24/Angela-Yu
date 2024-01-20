import { useEffect, useState } from "react";

export default function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  return (
    <div>
      <p>{windowSize}</p>
    </div>
  );
}
