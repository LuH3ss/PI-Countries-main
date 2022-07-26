import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Home } from './components/home/home';
import  Countries  from './components/countries/countries.jsx'
import CountryId from './components/countryById/countryId';
import CreateActivity from './components/createActivity/createActivity';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/countries" exact>
        <Countries/>
      </Route>
      <Route path="/country/:id">
        <CountryId />
      </Route>
      <Route path="/activity">
        <CreateActivity />
      </Route>
    </Switch>
    </>
  );
}

export default App;
