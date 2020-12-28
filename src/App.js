import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { getMainPagePosts } from "redux/reducers/Main";
import { Header } from "./components";
import PostsPage from "./pages/PostsPage";
import MyPosts from "./pages/MyPosts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainPagePosts());
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <Route exact path="/" component={PostsPage} /> */}
        {/* <Route path="/saved" component={MyPosts} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
