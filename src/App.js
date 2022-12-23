import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import './App.css';

function App() {
  return (
    <Router>
        <div id="app">
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
