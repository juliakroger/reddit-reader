import React, {Component} from 'react';
import {Grid, Button, Pagination, Image, Icon} from 'semantic-ui-react';
import Post from "../components/Post";

class postsPage extends Component {
  state = {
    posts: null,
    page: 1,
    currentPost: null
  };

  componentWillMount()  {
    let data = JSON.parse(localStorage.getItem('data'));
    this.setState({posts: data.children})
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({page: activePage})
    window.scrollTo(0, 0);
  };

  removeAllHandler = () => {
    this.setState({posts: []});
  };

  changeReadStatus = (post) => {
    post.data.visited = true;
  };

  currentPostHandler = (post) => {
    this.changeReadStatus(post);
    this.setState({currentPost: post.data});
    window.scrollTo(0, 0);
  };

  deleteThisPost = (post) => {
    let newArray = []
    this.state.posts.forEach(po => {
      if (po.data.id !== post.data.id) newArray.push(po)
    });
    this.setState({posts: newArray});
  }

  savePostHandler = () => {
    let items = JSON.parse(localStorage.getItem('savedPhotos'));
    if (items === null) {
      let array = [];
      array.push(this.state.currentPost);
      items = {array};
    }
    else {
      items.array.push(this.state.currentPost);
    }
    localStorage.setItem('savedPhotos', JSON.stringify(items))
    alert('photo added to your gallery')
  };

  render() {
    return (
        <Grid columns={2} style={{margin: '8px'}}>
          <Grid.Row>
            <Grid.Column width={10} style={{minWidth: '400px', marginBottom: '20px'}}>
              {
                (this.state.currentPost) ?
                    <div>
                      <h1>{this.state.currentPost.title}</h1>
                      <p color='grey'>posted by {this.state.currentPost.author}</p>
                      {
                        (this.state.currentPost.post_hint === 'image') ? <Image src={this.state.currentPost.url} style={{width: '80%'}}/> :
                            <a href={this.state.currentPost.url}>{this.state.currentPost.url}</a>
                      }
                      <div style={{marginTop: '40px'}}>
                        <Button.Group size='mini'>
                          <Button>Hide</Button>
                          <Button.Or />
                          <Button positive onClick={this.savePostHandler}>Save</Button>
                        </Button.Group>
                        <Icon name='comment outline' color='orange' style={{marginLeft: '10px'}}/>{this.state.currentPost.num_comments}  Comments
                      </div>
                    </div> : null
              }

            </Grid.Column>

            <Grid.Column width={6} widthSm>
              <Button basic color='orange' fluid style={{ minWidth: '250px'}} onClick={this.removeAllHandler}>Delete all posts</Button>
              {
                (this.state.posts) ?
                    <div style={{marginTop: '10px'}}>
                      {
                        this.state.posts.map((post, i)=> {
                          let pageMin = (this.state.page - 1) * 10;
                          let pageMax = (this.state.page * 10) - 1;
                          if (pageMin <= i && i <= pageMax) {
                            return (
                                <Post post={post.data} key={post.data.id} currentPostHandler={() => this.currentPostHandler(post)} deleteThisPost={() => this.deleteThisPost(post)} imageWidth={'20%'}/>
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
                    : null
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  };
};



export default postsPage;