import HomePage from './Components/HomePage';
import SignIn from './Components/SignIn';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
