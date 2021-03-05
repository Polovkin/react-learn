import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";


const App = () => {
    return (
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route exact
                                   path={'/'}
                                   component={Home}/>
                            <Route path={'/about'}
                                   component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
    );
}

export default App;
