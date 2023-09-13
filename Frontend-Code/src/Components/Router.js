import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Filterpage from './Filterpage';
import Detailspage from './Detailspage';

function Router(){
    return(
        <BrowserRouter>
            <Route exact path='/' component={Homepage}/>
            <Route path='/filter' component={Filterpage} />
            <Route path='/details' component={Detailspage} />
        </BrowserRouter>
    );
}

export default Router;

