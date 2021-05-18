import './App.css';
import EmployeePage from "./components/EmployeePage";
import PropertyPage from "./components/PropertyPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/property">Property Grid</Link>
                        </li>
                        <li>
                            <Link to="/employee">Employee Grid</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/property">
                        <PropertyPage />
                    </Route>
                    <Route path="/employee">
                        <EmployeePage />
                    </Route>
                </Switch>
            </div>
        </Router>

    </div>
  );
}

export default App;
