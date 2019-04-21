import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Home from './routes/Home/Home'
import About from './routes/Author/Author'
import Contact from './routes/Contact/Contact'
import Post from './routes/Post/Post'
import Default from './routes/404/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/autor' component={About} />
              <Route path='/kontakt' component={Contact} /> 
              <Route path='/post/:id' component={Post} /> 
              <Route path="*" component={Default} />
            </Switch>
          <Footer />
        </div>
      </Router>
     
    )
  }
}

export default App;
