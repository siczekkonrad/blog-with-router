import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Home from './routes/Home/Home';
import About from './routes/Author/Author';
import Contact from './routes/Contact/Contact';
import Post from './routes/Post/Post';
import Default from './routes/404/404';

const PageContainer = styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

class App extends Component {
  state = {
    fixedHeader : false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY >= 80) {
      this.setState({
          fixedHeader : true
      }) 
    } else {
      this.setState({
        fixedHeader: false
      })
    }
  }

  render() {
    return (
      <Router>
          <Header fixedHeader={this.state.fixedHeader} />
            <PageContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/autor" component={About} />
                <Route path="/kontakt" component={Contact} />
                <Route path="/post/:id" component={Post} />
                <Route path="*" component={Default} />
              </Switch>
            </PageContainer>
          <Footer />
      </Router>
    );
  }
}

export default App;
