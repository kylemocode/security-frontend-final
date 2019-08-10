import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/index';
import ComputerList from '../Containers/Computerlist';
import MainPage from '../Containers/MainPage';

const AppRouter = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/computerlist" exact component={ComputerList}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default AppRouter;