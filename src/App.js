import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Header from './componentes/Header'
import RecipesProvider from './telaPrincipalDeReceitas/context/RecipesProvider';
import Recipes from './telaPrincipalDeReceitas/components/Recipes';

function App() {
  return (
<section>
<Header/>
    <Router>
      <RecipesProvider>
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/meals" component={ Recipes } />
          <Route path="/drinks" component={ Recipes } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact component={ Header } path="/done-recipes" />
          <Route exact component={ Header } path="/favorite-recipes" />
        </Switch>

      </RecipesProvider>
    </Router>

</section>
  );
}

export default App;
