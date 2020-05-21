import React from "react";
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBarComponent'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/FooterComponent'
import SmallGroupTraining from './Pages/SmallGroupTraining'
import SummerCamps from './Pages/SummerCamps'
import "./styles.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App pt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <div className="pages">
            <Route exact path="/about" component={About} />
            <Route exact path="/smallGroupTraining" component={SmallGroupTraining} />
            <Route exact path="/summerCamps" component={SummerCamps} />
          </div>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
