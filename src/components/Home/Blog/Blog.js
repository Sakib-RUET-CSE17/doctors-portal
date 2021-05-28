import React from 'react';
import wilson from '../../../images/wilson.png'
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css'

const blogData=[
    {
        title:'Check at least a doctor in a year for',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam eius ex vel iusto laudantium.',
        author:'Dr. Cudi',
        authorImg:wilson,
        date:'23 April 2019',
    },
    {
        title:'2 time brush in a day can keep you healthy',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam eius ex vel iusto laudantium.',
        author:'Dr. Sinthia',
        authorImg:wilson,
        date:'23 April 2019',
    },
    {
        title:'The tooth cancer is taking a challenge',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam eius ex vel iusto laudantium.',
        author:'Dr. Cudi',
        authorImg:wilson,
        date:'23 April 2019',
    },
]


const Blog = () => {
    return (
        <section className='blogs my-5'>
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        blogData.map(blog=><BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;