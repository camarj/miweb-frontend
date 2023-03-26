import React from 'react';

const BlogGridItem = ({ post }) => {
  const { title, slug, featuredImage, author } = post;
  const { name, bioImage } = author;

  return (
    <div className="slick-slide-in">
      <div className="st-post-single st-style1">
        <a href="blog-details.html" className="st-post-thumb st-zoom">
          <img
            src={
              featuredImage
                ? `http://localhost:1337${featuredImage.url}`
                : 'https://via.placeholder.com/1080'
            }
            className="st-zoom-in"
            alt={title}
          />
        </a>
        <div className="st-post-info">
          <div className="st-post-date">
            Por:
            <a href="/miweb-frontend" className="st-post-author">
              {name}
            </a>
            <span className="st-post-date-divider">|</span>
            <span className="st-post-publish-date">27-09-2020</span>
          </div>
          <h4 className="st-post-title">
            <a href={`/post/${slug}`}>{title}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogGridItem;
