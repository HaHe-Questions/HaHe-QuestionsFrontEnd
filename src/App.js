import './App.css';
import Kyselylista from './components/Kyselylista';
import Kysely from './components/Kysely';
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
          <Link to="/kysely">Kysymykset</Link>{' '}
          <Switch>
            <Route path="/kyselylista" component={Kyselylista} />
            <Route path="/kysely" component={Kysely} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
// Open koodi 29.04 tunnin lopulta
// return (
//   <div className="App">
//     <Router>

//       <div>
//         <Route exact path="/" render={() => <KyselyLista data={data} />} />
//         <Route 
//           path="/kyselyt/:id"
//           render={() => <Kysely />}
//         />
//       </div>
//     </Router>
//   </div>
// );
// <Route 
//           path="/kyselyt/:id"
//           render={() => <Kysely />}
//         />
