import React from 'react';
import {Link} from '@reach/router';

function Blog(props) {
    const { id, getBlog } = props;
    const blog = getBlog(id);


    let content = <p>loading...</p>;
    if (blog) {

        content = 
        <>
        <Link to="/">Back</Link>
            <h2>Title:{blog.title}</h2>
            <p>Description: {blog.description}</p>
            <p>{blog.date}</p>

        </>
    }
        return (
            <>
                <div>{content}</div>
            </>
        );

    };

    export default Blog;