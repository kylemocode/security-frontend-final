import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ComputerList from '../Containers/Computerlist';
import MainPage from '../Containers/MainPage';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
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