import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Post from '../components/Post';


class MyPosts extends Component {
  render() {
    return (
        <Container style={{marginTop: '50px', width: '60%'}}>
        <Post imageWidth={'70%'}/>
        </Container>
    );
  }
}

export default MyPosts;
