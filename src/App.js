import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

// Views
import Backbook from './view/backbook.view';
import Redirect from './view/redirect/redirect.view'

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                <Route path="/backbook">
                        <div className="full-y flex-row full-x">
                            <Backbook />
                        </div>
                    </Route>
                    <Route path="/" exact>
                        <Redirect />
                    </Route>
                </Switch>
                
            </Router>
        )
    }
}

export default App;
