import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Converter from './components/converter/Converter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { getQuotations } from './actions/quotation';
import { getMarket } from './actions/market';


const App = () => {
    useEffect(() => {
        store.dispatch(getQuotations());
    }, [])

    useEffect(() => {
        store.dispatch(getMarket());
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Converter}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
