import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Dows from "./pages/Dows"
import TeamDota from "./pages/TeamDota"
import TeamCSGO from "./pages/TeamCSGO"
import TeamPokemon from "./pages/TeamPokemon"
import TeamMario from "./pages/TeamMario"
import TeamFM from "./pages/TeamFM"


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>

            {/* Team section routes */}
            <Route path="dota" component={TeamDota}></Route>
            <Route path="csgo" component={TeamCSGO}></Route>
            <Route path="pokemon" component={TeamPokemon}></Route>
            <Route path="supermario" component={TeamMario}></Route>
            <Route path="fm" component={TeamFM}></Route>

            {/* Player profile routes */}
            <Route path="dows-" component={Dows}></Route>
        </Route>


    </Router>,
app);
