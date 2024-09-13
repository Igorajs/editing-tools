import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-danger">Przycisk</button>
    </>
  );
}

export default App;
