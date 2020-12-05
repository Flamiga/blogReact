import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Blogs from "./Blogs";
import Blog from "./Blog"; 

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/blogs`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  function getBlog(id) {
    const blogObject = data.find(data => data._id === id);
    return blogObject;
  }

  return (
    <>
      <h1>Blog App!</h1>
     <Router>
       <Blogs path="/" blogs={data}></Blogs>
       <Blog path="/blogs/:id" getBlog={getBlog}></Blog>
     </Router>
    
    </>
  );
}

export default App;
