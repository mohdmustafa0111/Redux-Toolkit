import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-red-700 underline">
        Learn About Redux Toolkit
      </h1>
    </>
  );
}

export default App;
