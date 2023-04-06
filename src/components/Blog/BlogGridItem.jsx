import React from 'react';
import './styles.css';

const BlogGridItem = ({ post }) => {
  const datos = post.attributes;
  const { title, slug, readingTime, imagen, author } = datos;

  const img = imagen.data.attributes.formats;
  const baseUrl = import.meta.env.PUBLIC_BASE_URL;

  return (
    <div className="card-container">
      <div className="card">
        <a href={`/${slug}`} className="card-img">
          <img
            src={
              imagen
                ? `${baseUrl}${img.medium.url}`
                : 'https://via.placeholder.com/1080'
            }
            alt={title}
          />
        </a>
        <div className="card-content">
          <div className="card-content-data">
            <img
              className="image-avatar"
              // src={`${baseUrl}/uploads/profile_pic_3_181a7caa75.webp`}
              src=""
              alt="Raul Avatar"
            />
            <a href="" className="card-content-data-autor">
              {author.data.attributes.name}
            </a>
            <span className="separador"> | </span>
            <span className="card-content-data-time">
              {readingTime} de lectura
            </span>
          </div>
          <h4 className="card-content-title">
            <a href={`/${slug}`}>{title}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogGridItem;
