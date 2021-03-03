import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";


const App = () => {
    return (
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route exact path={'/'}
                               component={Home}/>
                        <Route path={'/about'}
                               component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
    );
}

export default App;
