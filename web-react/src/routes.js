import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import Home from "./containers/home/index"
import Users from "./containers/users/index"

export default function Rotas() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    )
}