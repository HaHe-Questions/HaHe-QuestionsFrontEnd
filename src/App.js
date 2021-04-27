import logo from './logo.svg';
import './App.css';
import Kyselylista from './components/Kyselylista';
import Kysymyslista from './components/Kysymyslista';
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
          <Link to="/kysymyslista">Kysymykset</Link>{' '}
          <Switch>
            <Route path="/kyselylista" component={Kyselylista} />
            <Route path="/kysymyslista" component={Kysymyslista} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
