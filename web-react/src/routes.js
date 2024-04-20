import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/home/index"
import Users from "./containers/users/index"

export default function Rotas() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/usuarios" element={<Users />} />
            </Switch>
        </Router>
    )
}