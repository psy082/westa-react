import React from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";

class StoryButton extends React.Component {
  render() {
    return (
      <div className="user_story">
        <button>
          <ThumbnailImage
            height={this.props.height}
            width={this.props.width}
            src={this.props.src}
          />
          <span className="nickname">{this.props.nickname}</span>
        </button>
      </div>
    );
  }
}

export default StoryButton;
