import React, {Component} from 'react';
import {Grid, Button, Pagination, Image, Icon, Container, Modal} from 'semantic-ui-react';
import Post from "../components/Post";
import axios from "axios";
class postsPage extends Component {
  state = {
    posts: null,
    page: 1,
    currentPost: null,
    modalOpen: false,
    modalMessage: ''
  };

  componentWillMount()  {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/rickandmorty/top.json?limit=50')
        .then(res => {
          const data = res.data.data;
          localStorage.setItem('data', JSON.stringify(data));
          
          this.setState({posts: data.children})
        })
        .catch(error => console.log(error))
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({page: activePage})
    window.scrollTo(0, 0);
  };

  removeAllHandler = () => {
    this.setState({posts: []});
    let data = JSON.parse(localStorage.getItem('data'));
    data.children = this.state.posts;
    localStorage.setItem('data', JSON.stringify(data))
  };

  changeReadStatus = (post) => {
    post.data.visited = true;
  };

  currentPostHandler = (post) => {
    this.changeReadStatus(post);
    this.setState({currentPost: post.data});
    window.scrollTo(0, 0);
  };

  deleteThisPost = (postIndex) => {
    let data = JSON.parse(localStorage.getItem('data'));
    data.children.splice(postIndex, 1);
    this.setState({posts: data.children});
    localStorage.setItem('data', JSON.stringify(data))
  };

  savePostHandler = () => {
    let items = JSON.parse(localStorage.getItem('savedPosts'));
    if (items === null) items = [];

    const currentPost = this.state.currentPost;
    let exists = false;

    items.some(item => {
      exists = item.id === currentPost.id;
      return exists;
    });

    if (exists) {
      this.setState({modalOpen: true, modalMessage: 'This post is already added to your gallery'})
    }
    else {
      items.push(currentPost);
      localStorage.setItem('savedPosts', JSON.stringify(items))
      this.setState({modalOpen: true, modalMessage: 'Post added to your gallery'})
    }
  };

  close = () => this.setState({ modalOpen: false })

  render() {
    return (
        <Container>
          <Modal size='mini' open={this.state.modalOpen} onClose={this.close}>
            <Modal.Content>
              <p>{this.state.modalMessage}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.close} inverted>
                <Icon name='checkmark' /> Gotcha
              </Button>
            </Modal.Actions>
          </Modal>


        <Grid columns={2} style={{margin: '8px'}}>
          <Grid.Row>
            <Grid.Column width={10} style={{minWidth: '400px', marginBottom: '20px'}}>
              {
                (this.state.currentPost) &&
                    <div>
                      <h1>{this.state.currentPost.title}</h1>
                      <p color='grey'>posted by {this.state.currentPost.author}</p>
                      {
                        (this.state.currentPost.post_hint === 'image') ? <Image src={this.state.currentPost.url} style={{width: '80%'}}/> :
                            <a href={this.state.currentPost.url}>{this.state.currentPost.url}</a>
                      }
                      <div style={{marginTop: '40px'}}>
                        <Button positive onClick={this.savePostHandler}>Save</Button>
                        <Icon name='comment outline' color='orange' style={{marginLeft: '10px'}}/>{this.state.currentPost.num_comments}  Comments
                      </div>
                    </div>
              }

            </Grid.Column>

            <Grid.Column width={6}>
              <Button basic color='orange' fluid style={{ minWidth: '250px'}} onClick={this.removeAllHandler}>Delete all posts</Button>
              {
                (this.state.posts) &&
                    <div style={{marginTop: '10px'}}>
                      {
                        this.state.posts.map((post, i)=> {
                          let pageMin = (this.state.page - 1) * 10;
                          let pageMax = (this.state.page * 10) - 1;
                          if (pageMin <= i && i <= pageMax) {
                            return (
                                <Post post={post.data} key={post.data.id} currentPostHandler={() => this.currentPostHandler(post)} deleteThisPost={() => this.deleteThisPost(i)} imageWidth={'20%'}/>
                            )}

                        })
                      }
                      <Pagination defaultActivePage={this.state.page}
                                  firstItem={null}
                                  pointing secondary
                                  lastItem={null}
                                  totalPages={5}
                                  onPageChange={this.handlePaginationChange}/>
                    </div>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    );
  };
};



export default postsPage;