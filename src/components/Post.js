import React from 'react';
import {Card, Image, Icon, List} from 'semantic-ui-react';
import Moment from 'react-moment';


const Post = (props) => {
  let color = {cursor: 'pointer', color: '#f2711c'};
  if (props.post.visited) color = {cursor: 'pointer', color: '#a09ba2'};

  return (
      <Card style={{width: '100%', minWidth: '250px'}} centered>
        <Card.Content>
          <List floated='right' horizontal>
            <List.Item>
              <Icon name='remove circle' color='orange' onClick={() => props.deleteThisPost(props.post)} style={{cursor: 'pointer'}}/>
            </List.Item>

          </List>
          <List horizontal>
            <List.Item>
              <Card.Header onClick={() => props.currentPostHandler(props.post)} style={color}>{props.post.title}</Card.Header>
              <Card.Meta>Created by {props.post.author}</Card.Meta>
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content>
          {
            (props.post.post_hint === 'image') ? <Image src={props.post.url} style={{width: props.imageWidth}}/> :
                <a href={props.post.url}>{props.post.url}</a>
          }
        </Card.Content>

        <Card.Content>
          <List floated='right' horizontal>
            <List.Item>
              <Icon name='comment outline' color='orange'/> {props.post.num_comments} Comments
            </List.Item>
          </List>
          <List horizontal><List.Item><Moment fromNow>{props.post.created*1000}</Moment></List.Item></List>
        </Card.Content>
      </Card>
  );
};

  export default Post;