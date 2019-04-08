import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Post from '../components/Post';

class MyPosts extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    let lsData = JSON.parse(localStorage.getItem('savedPosts'));
    if (lsData !== null) {
      this.setState({data: lsData})
    }
  };

  deleteThisPost = (postIndex) => {
    let data = this.state.data;
    data.splice(postIndex, 1);
    this.setState({data});
    localStorage.setItem('savedPosts', JSON.stringify(data));
  };

  render() {
    return (
        <Container style={{marginTop: '50px', width: '60%'}}>
          {
            (this.state.data) ?
                this.state.data.map((post, index) => {
                  return <Post post={post} key={post.id} currentPostHandler={() => {return}} deleteThisPost={() => this.deleteThisPost(index)} imageWidth={'70%'}/>
                })
                : <p>You don't have saved posts yet</p>
          }
        </Container>
    );
  }
}

export default MyPosts;
