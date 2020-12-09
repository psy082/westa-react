import React from "react";
import { OptionButton, LikeButton } from "../Buttons";

class Comment extends React.Component {
  render() {
    return (
      <li className="comment_container">
        <div className="comment">
          <button className="author">{this.props.nickname}</button>
          <span className="text">{this.props.text}</span>
        </div>
        <LikeButton height={"12px"} width={"12px"} />
        <OptionButton />
      </li>
    );
  }
}

export default Comment;
