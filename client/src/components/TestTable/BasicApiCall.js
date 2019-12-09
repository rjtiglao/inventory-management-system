import React, { useState, useEffect } from "react";
import axios from "axios";

const TestDataTable = () => {
  //These are states
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);
  //IT's THE SAME AS state objects
  // state = {
  //     post: [];
  // }
  // rather than having to call it with this.state.post

  // useeffect runs when component mounts or everytime it updates
  useEffect(() => {
    const fetchPosts = async () => {
      // set loading to true because we are in the process of loading
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return <div></div>;
};

export default TestDataTable;
