import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import RequireNotAuth from './hoc/RequireNotAuth';
import LandingLayout from "./layouts/LandingLayout";

const App = () => (
    <Provider store={configureStore()}>
        <Router basename="/">
            <Switch>
                <Route path="/" component= {RequireNotAuth(LandingLayout)} />
            </Switch>
        </Router>
    </Provider>
);

export default App;