import React from 'react';

const BlogGridHome = ({ posts }) => {
  return (
    <div className="container">
      <div className="st-slider st-style2">
        <div
          className="slick-container"
          data-autoplay="0"
          data-loop="1"
          data-speed="600"
          data-center="0"
          data-slides-per-view="responsive"
          data-xs-slides="1"
          data-sm-slides="2"
          data-md-slides="3"
          data-lg-slides="3"
          data-add-slides="3">
          <div className="slick-wrapper">
            {posts && posts.length > 0
              ? posts.map(post => <BlogGridItem post={post} />)
              : 'No posts founds'}
          </div>
        </div>
        <div className="pagination st-style1 st-flex st-hidden"></div>
      </div>
    </div>
  );
};

export default BlogGridHome;
