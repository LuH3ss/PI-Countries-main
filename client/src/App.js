import './App.css';
import { Route, Switch } from 'react-router-dom';
import  Home  from './components/home/home';
import  Countries  from './components/countries/countries.jsx'
import CountryId from './components/countryById/countryId';
import CreateActivity from './components/createActivity/createActivity';
import Navbar from './components/navbar/navbar';




function App() {
  return (
    <>

    

    <Switch>
      
      <Route path="/" exact>
        <Home/>
      </Route>
      
      <Route path="/countries" exact>
      <Navbar />
        <Countries />
      </Route>
      
      <Route path="/country/:id">
      <Navbar />
        <CountryId />
      </Route>
      
      <Route path="/activity">
      <Navbar />
        <CreateActivity />
      </Route>
     
    
    </Switch>
    </>
  );
}

export default App;
