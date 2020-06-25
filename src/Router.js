import React, {Component} from 'react';
import './Router.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Apparatus from './Apparatus';
import Beans from './Beans';
import Brew from './Brew';
import Carousel from './Carousel'

export default class Routes extends Component {


    render() {
        return (
            <Router>
                    <nav className='NavBar'>
                        <NavLink className="Routes-NavLink" to='/'>Home</NavLink>
                        <NavLink className="Routes-NavLink" to='/Brew'>Brew</NavLink>
                        <NavLink className="Routes-NavLink" to='/Beans'>Beans</NavLink>
                        <NavLink className="Routes-NavLink" to='/Apparatus'>Apparatus</NavLink>
                    </nav>
                
                <Switch> 
                    <Route exact path="/" 
                        render={() => <Carousel />} />
                    <Route exact path="/starships"
                        render={() => <Brew />} />
                    <Route exact path="/vehicles"
                        render={<Beans />} />
                    <Route exact path="/people"
                        render={<Apparatus />} />

                   
                </Switch>
            </Router>
        );
    }

}