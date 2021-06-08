import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home.js'
import About from './pages/about.js' 
import Header from './Header.js'
import Form from './pages/form.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/form' component={Form} />
      </Router>
    </div>
  );
}

export default App;
