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
    let newArray = [];
    this.state.data.map(current => {
      if (post.id !== current.id) newArray.push(current)
    })
    console.log(newArray)
    this.setState({data: newArray})
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
