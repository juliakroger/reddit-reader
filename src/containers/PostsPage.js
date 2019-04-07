import React, { Component } from 'react';
import {Grid, Image, Button, Icon, Pagination} from 'semantic-ui-react';
import Post from '../components/Post';


class PostsPage extends Component {
  state = {
    posts: null,
  };

  componentWillMount() {
    let data = JSON.parse(localStorage.getItem('data'));
    this.setState({posts: data.children})
  };

  render() {
    return (
        <Grid columns={2} style={{margin: '8px'}}>
          <Grid.Row>
            <Grid.Column width={10} style={{minWidth: '400px', marginBottom: '20px'}}>
                <h1>Title</h1>
                <p color='grey'>posted by author</p>
                <Image src='' style={{width: '80%'}}/>

                <div style={{marginTop: '40px'}}>
                  <Button.Group size='mini'>
                    <Button>Hide</Button>
                    <Button.Or />
                    <Button positive>Save</Button>
                  </Button.Group>
                  <Icon name='comment outline' color='orange' style={{marginLeft: '10px'}}/>70  Comments
                </div>
            </Grid.Column>

            <Grid.Column width={6} widthSm>
              <Button basic color='orange' fluid style={{ minWidth: '250px'}}>Delete all posts</Button>
              <div style={{marginTop: '10px'}}>
                <Post imageWidth={'20%'}/>
                <Pagination defaultActivePage={1}
                            firstItem={null}
                            pointing secondary
                            lastItem={null}
                            totalPages={5} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default PostsPage;
