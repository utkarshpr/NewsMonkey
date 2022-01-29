import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";

function NewsItem(props) {
  return (
    <Zoom top cascade>
      <div className="px-3 py-3" style={{ background: props.background }}>
        <div
          className="card"
          style={{ width: "17rem", padding: "3px 3px", border: "3px solid" }}
        >
          <img
            src={
              !props.imageUrl
                ? "https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff"
                : props.imageUrl
            }
            className="card-img-top"
            alt="Sorry! no image to display 😢"
            style={{ height: "12rem" }}
          />

          <div
            className="card-body"
            style={{ background: props.background, color: props.color }}
          >
            <h5 className="card-title">{props.title}...</h5>
            <hr />
            <p className="card-text">{props.description}...</p>
            <a
              href={props.newsUrl}
              target="_blank"
              className="btn btn-outline-danger"
              style={{ cursor: "pointer" }}
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default NewsItem;
