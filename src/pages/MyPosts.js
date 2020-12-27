import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Post } from "../components";

const MyPosts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const lsData = JSON.parse(localStorage.getItem("savedPosts"));
      setData(lsData);
    } catch (err) {
      console.log("Error while getting saved posts at localstorage");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedPosts", JSON.stringify(data));
  }, [data]);

  const deleteThisPost = (postIndex) => {
    setData((prev) => prev.splice(postIndex, 1));
  };

  return (
    <Container style={{ marginTop: "50px", width: "60%" }}>
      {data ? (
        data.map((post, index) => {
          return (
            <Post
              post={post}
              key={post.id}
              currentPostHandler={() => {
                return;
              }}
              deleteThisPost={() => deleteThisPost(index)}
              imageWidth={"70%"}
            />
          );
        })
      ) : (
        <p>You don't have saved posts yet</p>
      )}
    </Container>
  );
};

export default MyPosts;
