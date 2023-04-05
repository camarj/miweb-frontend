import React from 'react';
import BlogGridItem from './BlogGridItem';
import { useId } from 'react';

import './styles.css';

const BlogGridHome = ({ posts }) => {
  const id = useId();
  return (
    <div className="container-cards-home">
      {posts && posts.length > 0
        ? posts.map(post => <BlogGridItem key={id} post={post} />)
        : 'Aún no hay posts publicados'}
    </div>
  );
};

export default BlogGridHome;
