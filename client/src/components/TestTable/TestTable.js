import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "../CRUD/Post";
import Pagination from "./Pagination";

const TestDataTable = () => {
  //These are states
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
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
  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber, pagenu) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>My Test Table</h2>
      {/* posts takes a posts and loading prop */}
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default TestDataTable;
