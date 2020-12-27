import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import PostsPage from "./PostsPage";
import MyPosts from "./MyPosts";

const App = () => {
  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/rickandmorty/top.json?limit=50")
      .then((res) => {
        localStorage.setItem("data", JSON.stringify(res.data.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={PostsPage} />
        <Route path="/saved" component={MyPosts} />
      </BrowserRouter>
    </div>
  );
};

export default App;
