import React from "react";
import { Card, Image, Icon, List } from "semantic-ui-react";
import Moment from "react-moment";

const Post = ({ post, deleteThisPost, currentPostHandler, imageWidth }) => {
  let color = { cursor: "pointer", color: "#f2711c" };
  if (post.visited) color = { cursor: "pointer", color: "#a09ba2" };

  return (
    <Card style={{ width: "100%", minWidth: "250px" }} centered>
      <Card.Content>
        <List floated="right" horizontal>
          <List.Item>
            <Icon
              name="remove circle"
              color="orange"
              onClick={() => deleteThisPost(post)}
              style={{ cursor: "pointer" }}
            />
          </List.Item>
        </List>
        <List horizontal>
          <List.Item>
            <Card.Header onClick={() => currentPostHandler(post)} style={color}>
              {post.title}
            </Card.Header>
            <Card.Meta>Created by {post.author}</Card.Meta>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content>
        {post.post_hint === "image" ? (
          <Image src={post.url} style={{ width: imageWidth }} />
        ) : (
          <a href={post.url}>{post.url}</a>
        )}
      </Card.Content>

      <Card.Content>
        <List floated="right" horizontal>
          <List.Item>
            <Icon name="comment outline" color="orange" /> {post.num_comments}{" "}
            Comments
          </List.Item>
        </List>
        <List horizontal>
          <List.Item>
            <Moment fromNow>{post.created * 1000}</Moment>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
};

export default Post;
