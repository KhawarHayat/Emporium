import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemePage from './ThemePage';
import MyApp from './MyApp';
class Routes extends Component {
    render() {
        return (
            <Router>
                
                <Route path='/' exact component={MyApp} />
                <Route path='/Shop' component={ThemePage} />
               
            </Router>
        );
    }
}

export default Routes;