import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Post from '../components/Post';


class MyPosts extends Component {
  state = {
    data: null
  };
  componentWillMount() {
    let lsData = JSON.parse(localStorage.getItem('savedPhotos'));
    if (lsData != null) {
      this.setState({data: lsData.array})
    }
  };

  deleteThisPost = (post) => {
    let array = [];
    this.state.data.map(current => {
      if (post.id !== current.id) array.push(current)
    })
    let obj = {array}
    this.setState({data: array})
    localStorage.setItem('savedPhotos', JSON.stringify(obj))
  };

  render() {
    return (
        <Container style={{marginTop: '50px', width: '60%'}}>
          {
            (this.state.data) ?
                this.state.data.map(post => {
                  return <Post post={post} key={post.id} currentPostHandler={() => {return}} deleteThisPost={() => this.deleteThisPost(post)} imageWidth={'70%'}/>
                })
                : <p>You don't have saved posts yet</p>
          }
        </Container>
    );
  }
}

export default MyPosts;
