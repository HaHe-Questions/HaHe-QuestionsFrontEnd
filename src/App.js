import './App.css';
import Kyselylista from './components/Kyselylista';
import Kysely from './components/Kysely';
import Vastaukset from './components/Vastaukset';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/kyselylista">Kyselyt</Link>{' '}
          <Switch>
            <Route path="/kyselylista" component={Kyselylista} />
            <Route path="/kysely/:paramsid" component={Kysely} />
            <Route path="/kysymys/:paramskysymys" component={Vastaukset} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;