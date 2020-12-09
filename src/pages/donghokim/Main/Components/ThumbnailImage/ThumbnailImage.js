import React from "react";
import { Link } from "react-router-dom";
import "./ThumbnailImage.scss";

class ThumbnailImage extends React.Component {
  render() {
    return (
      <div className="thumbnail_image_container">
        <Link to={this.props.link || "#"}>
          <img
            alt="user_thumbnail"
            height={this.props.height}
            width={this.props.width}
            src={this.props.src}
          />
        </Link>
      </div>
    );
  }
}

export default ThumbnailImage;
