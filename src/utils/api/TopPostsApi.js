import axios from "axios";
import { redditApi } from "../../constants";

export const getTopPosts = async () => {
  const result = await axios.get(`${redditApi}/popular/top.json?limit=100`);
  return result.data?.data?.children;
};
