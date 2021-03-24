import React from "react";
import { Link } from "react-router-dom";

const Article = ({ articles }) => {
  //console.log('art', articles);

  return (
    <div>
      {articles.map((g, index) => (
        <div
          className="container"
          key={index}
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="row">
            <div
              className="col-12 col-md-4 offset-md-2 "
              style={{ backgroundColor: "#ccffff" }}
            >
              <div className="row">
                <div className="col-9 border rounded">
                  <Link to={`/articles/${g.name}`}>
                    <p>{g.name}</p>
                  </Link>
                </div>
                <div className="col-3 border rounded">
                  <p style={{ textAlign: "right" }}>{g.cost.toString()}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <button
                className="btn border rounded"
                style={{ backgroundColor: "#ccffcc" }}
              >
                edit
              </button>
              <button
                className="btn border rounded ml-1"
                style={{ backgroundColor: "#ffcccc" }}
              >
                del
              </button>
              <button className="btn btn-link">del</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
