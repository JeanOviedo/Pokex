import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Landing from "./Componentes/Landing";
import Navbar from "./Componentes/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Landing></Landing>
      <div className="App">
        <h1>Henry Pokemon</h1>
      </div>
    </Fragment>
  );
}

export default App;
