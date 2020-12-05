import React from 'react';
import { Link } from "@reach/router";

function Blogs(props) {
  const {blogs} = props;

  if (!blogs) return <p>Loading...</p>;

  const list = blogs.map(blog =>
    <li key={blog._id}>
      <Link to={"/blogs/" + blog._id}>{blog.title}</Link>, {blog.description}, {blog.date}
    </li>
  );

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default Blogs;