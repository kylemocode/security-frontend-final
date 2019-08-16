import React,{Fragment} from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import ComputerList from '../Containers/Computerlist';
import ScanningHistory from '../Containers/ScanningHistory';
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
                    <Route path="/scanningHistory/:id"  component={ScanningHistory}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default AppRouter;