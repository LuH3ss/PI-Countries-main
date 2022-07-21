import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Home } from './components/home/home';
import  Countries  from './components/countries/countries.jsx'

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
    </Switch>
    </>
  );
}

export default App;
