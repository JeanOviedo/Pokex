import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Landing from "./Componentes/Landing";
import Navbar from "./Componentes/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {/* 
        <Route exact path="/pokemones">
          <Pokemones />
        </Route>

        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route path="/pokemones/:id"  /> */}
      </Switch>
      
    </Fragment>
  );
}

export default App;
