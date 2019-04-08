import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from '../components/Header';
import PostsPage from './PostsPage';
import MyPosts from './MyPosts';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Route exact path='/' component={PostsPage} />
          <Route path='/saved' component={MyPosts} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
