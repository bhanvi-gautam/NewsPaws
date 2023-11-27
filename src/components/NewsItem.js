
import React from "react";

const NewsItem = (props) =>{

    const { title, description, imageUrl, newsUrl, author, date, page, source } =
      props;
    return (
      <div className="my-3 py-3">
        
        <div
          className="card"
          style={{
            boxShadow:
              props.mode === "light"
                ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                : "none",
            backgroundColor:
              props.mode === "light" ? "#F9F6EE" : "#E5E4E2",
              
          }}
        >
         <div style={{
            display: 'flex',
            justifyContent:'flex-end',
            position: 'absolute',
            right:'0'
          }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-center" >
                  {source}
                </span>
                </div>
              
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{
              backgroundColor: props.mode === "light" ? "#F9F6EE" : "",
            }}
          >
            <h5
              className="card-title"
              style={{ color: props.mode === "light" ? "#333" : "" }}
            >
              {title} {page === 1 && (<span className="badge bg-secondary">New</span>)}
              
            </h5>
            <p
              className="card-text"
              style={{ color: props.mode === "light" ? "#555" : "" }}
            >
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "dark"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
};

export default NewsItem;