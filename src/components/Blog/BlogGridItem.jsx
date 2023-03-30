import React from 'react';
import './styles.css';

const BlogGridItem = ({ post }) => {
  const datos = post.attributes;
  const { title, slug, readingTime, imagen, author } = datos;

  const img = imagen.data.attributes.formats;

  return (
    <div className="card-container">
      <div className="card">
        <a href={`/${slug}`} className="card-img">
          <img
            src={
              imagen
                ? `http://192.168.100.28:1337${img.medium.url}`
                : 'https://via.placeholder.com/1080'
            }
            alt={title}
          />
        </a>
        <div className="card-content">
          <div className="card-content-data">
            Por:
            <a href="/" className="card-content-data-autor">
              {author.data.attributes.name}
            </a>
            <span className="separador"> | Tiempos de lectura: </span>
            <span className="card-content-data-time">{readingTime}</span>
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
