import React from 'react';
import {Card, Image, Icon, List} from 'semantic-ui-react';


const Post = (props) => {
  return (
      <Card style={{width: '100%', minWidth: '250px'}} centered>
        <Card.Content>
          <List floated='right' horizontal>
            <List.Item>
              <Icon name='remove circle' color='orange' style={{cursor: 'pointer'}}/>
            </List.Item>

          </List>
          <List horizontal>
            <List.Item>
              <Card.Header style={{color: 'orange'}}>Title</Card.Header>
              <Card.Meta>Created by author</Card.Meta>
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content>
          <Image src='' style={{width: props.imageWidth}}/>
        </Card.Content>

        <Card.Content>
          <List floated='right' horizontal>
            <List.Item>
              <Icon name='comment outline' color='orange'/> 65 Comments
            </List.Item>
          </List>
          <List horizontal><List.Item>4 hours ago</List.Item></List>
        </Card.Content>
      </Card>
  );
};

  export default Post;