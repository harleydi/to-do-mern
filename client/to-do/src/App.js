import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='sidebarSection'>
          <Sidebar />
        </div>
        <div className='mainSection'>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
