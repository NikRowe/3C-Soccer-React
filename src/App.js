import React from "react";
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBarComponent'
import Home from './Pages/Home'
import About from './Pages/About'
import SmallGroupTraining from './Pages/SmallGroupTraining'
import SummerCamps from './Pages/SummerCamps'
import "./styles.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/smallGroupTraining" component={SmallGroupTraining} />
          <Route exact path="/summerCamps" component={SummerCamps} />
        </Switch>
      </div>
    </>
  );
}
