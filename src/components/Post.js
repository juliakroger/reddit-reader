import React from 'react';
import {Card, Image, Icon, List} from 'semantic-ui-react';

function timeDifference(current, previous) {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;
  let elapsed = current - previous;

  if (elapsed < msPerMinute) return Math.round(elapsed/1000) + ' seconds ago';
  else if (elapsed < msPerHour) return Math.round(elapsed/msPerMinute) + ' minutes ago';
  else if (elapsed < msPerDay ) return Math.round(elapsed/msPerHour ) + ' hours ago';
  else if (elapsed < msPerMonth) return Math.round(elapsed/msPerDay) + ' days ago';
  else if (elapsed < msPerYear) return Math.round(elapsed/msPerMonth) + ' months ago';
  else return Math.round(elapsed/msPerYear ) + ' years ago';
};

const Post = (props) => {
  let current = Date.now();
  let date = timeDifference(current, props.post.created * 1000);
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
          <List horizontal><List.Item>{date}</List.Item></List>
        </Card.Content>
      </Card>
  );
};

  export default Post;