import React,{Fragment} from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import ComputerList from '../Containers/Computerlist';
import ScanningHistory from '../Containers/ScanningHistory';
import FileDetail from '../Containers/FileDetail';
import MainPage from '../Containers/MainPage';
import scanningDetail from '../Containers/ScanningDetail';
import createHistory from 'history/createBrowserHistory';
import FileUpload from '../Containers/FileUpload';
import FileUploadResult from '../Containers/FileUploadResult';

export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <Fragment>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/computerlist" exact component={ComputerList}/>
                    <Route path="/scanningHistory/:id"  component={ScanningHistory}/>
                    <Route path="/scanningDetail/:id" component={scanningDetail} />
                    <Route path="/fileDetail/:id" component={FileDetail} />
                    <Route path="/fileUpload" component={FileUpload} />
                    <Route path="/fileUploadResult" component={FileUploadResult}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default AppRouter;