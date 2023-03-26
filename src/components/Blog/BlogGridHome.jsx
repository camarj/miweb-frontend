import React from 'react';
import BlogGridItem from './BlogGridItem';

import './styles.css';

const BlogGridHome = ({ posts }) => {
  return (
    <div className="container-cards-home">
      {posts && posts.length > 0
        ? posts.map(post => <BlogGridItem post={post} />)
        : 'No posts founds'}
    </div>
  );
};

export default BlogGridHome;
