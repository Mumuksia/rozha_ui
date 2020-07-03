import React from 'react';
//import logo from './logo.svg'
import './App.css';
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import ClanList from "./components/ClanList.jsx";
import About from "./components/About.jsx";
import LeagueGroup from "./components/LeagueGroup.jsx";
import LeagueRounds from "./components/LeagueRounds.jsx";
import LeagueGroupA from "./components/LeagueGroupA.jsx";
import LeagueRoundsA from "./components/LeagueRoundsA.jsx";
import ClanWar from "./components/ClanWar.jsx";
import header from "./assets/imgs/eose_header.png";
import Header from './components/Header.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div>
    
     <img src={header} class="stretchWidth" />
        <ul id="menu">
          <li>
            <Link to="/about">Про нас</Link>
          </li>
          <li>
            <Link to="/players">Гравці</Link>
          </li>
          <li>
            <Link to="/war">Кланова війна</Link>
          </li>
          <li>
            <Link to="/leaguegroup">Група ліги кланів</Link>
          </li>
          <li>
            <Link to="/leaguerounds">Раунди ліги кланів</Link>
          </li>
          <li>
            <Link to="/leaguegroupacademy">Група ліги кланів академія</Link>
          </li>
          <li>
            <Link to="/leagueroundsacademy">Раунди ліги кланів академія</Link>
          </li>
        </ul>

 
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/rozha_ui">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/players">
            <ClanList />
          </Route>
          <Route path="/leaguegroup">
            <LeagueGroup />
          </Route>
          <Route path="/leaguerounds">
            <LeagueRounds />
          </Route>
                    <Route path="/leaguegroupacademy">
                      <LeagueGroupA />
                    </Route>
                    <Route path="/leagueroundsacademy">
                      <LeagueRoundsA />
                    </Route>
          <Route path="/war">
            <ClanWar />
          </Route>
        </Switch>
   
</div>
    </Router>
  );
}

export default App;
