import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div className="col-md-4">
            <div className="d-flex">
                <img style={{ height: '50px' }} src={blog.authorImg} alt="" />
                <div className='ms-2'>
                    <h6 style={{ color: '#1CC7C1' }}>{blog.author}</h6>
                    <small>{blog.date}</small>
                </div>
            </div>
            <h6 className="mt-5">{blog.title}</h6>
            <br />
            <p>{blog.description}</p>
        </div>
    );
};

export default BlogPost;