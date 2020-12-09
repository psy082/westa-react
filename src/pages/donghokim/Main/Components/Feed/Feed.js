import React from "react";
import { Link } from "react-router-dom";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";
import FeedImageSlider from "./FeedImageSlider";
import CommentsContainer from "../CommentContainer/CommentsContainer";
import {
  OptionButton,
  LikeButton,
  CommentButton,
  ShareButton,
  StoreButton,
} from "../Buttons";
import mockComments from "../../../data/mockComments";
import "./Feed.scss";

const USER_NAME = "dongho_223";

class Feed extends React.Component {
  state = {
    comments: [...mockComments],
    postButtonStatus: true,
    commentInput: "",
  };

  onKeyPress = ({ key }) => {
    if (key === "Enter" && this.state.commentInput) {
      this.addComment();
    }
  };

  onClick = () => {
    if (this.state.commentInput) {
      this.addComment();
    }
  };

  changeButtonStatus = () => {
    this.setState({ postButtonStatus: this.state.commentInput ? false : true });
  };

  updateInputs = ({ target: { value } }) => {
    if (value !== "\n") {
      this.setState({ commentInput: value }, this.changeButtonStatus);
    }
  };

  addComment = () => {
    const {
      state: { comments, commentInput },
      changeButtonStatus,
    } = this;
    this.setState(
      {
        comments: [...comments, { nickname: USER_NAME, text: commentInput }],
        commentInput: "",
      },
      changeButtonStatus
    );
  };

  render() {
    return (
      <div className="feed">
        <article>
          <header>
            <ThumbnailImage
              height={"32px"}
              width={"32px"}
              src={
                "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/10311323_712444138821261_1788202839_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=zBjZjJAHpKMAX_SN2cG&oh=57e0adda471e7f8f5ec7e9b46b43b552&oe=5F503C98"
              }
            />
            <div className="user_info_container">
              <div className="author">
                <Link to="#" className="author_link">
                  ligonier
                </Link>
              </div>
              <div className="location">Ulsan, South Korea</div>
            </div>
            <OptionButton />
          </header>
          <FeedImageSlider />
          <div className="interaction_container">
            <div className="reactions_container">
              <LikeButton height={"24px"} width={"24px"} />
              <CommentButton />
              <ShareButton />
            </div>
            <StoreButton />
          </div>
          <div className="number_of_likes">
            <button>좋아요 2,925개</button>
          </div>
          <div className="text_container">
            <div className="description_container">
              <button className="author">ligonier</button>
              <span className="text">
                Only hours remain in our $5 Friday sale. Save on trustworthy
                discipleship resources when you order before 11:59 p.m. ET. Link
                in bio.
              </span>
            </div>
            <CommentsContainer comments={this.state.comments} />
          </div>
          <div className="time_stamp_container">
            <time dateTime="2020-08-01T00:06:20.000Z" title="2020년 8월 1일">
              8시간 전
            </time>
          </div>
          <div className="comment_input">
            <form>
              <textarea
                name="comment"
                placeholder="댓글 달기..."
                autoComplete="off"
                onKeyPress={this.onKeyPress}
                onChange={this.updateInputs}
                value={this.state.commentInput}
              />
              <button
                className="submit"
                disabled={this.state.postButtonStatus}
                onClick={this.onClick}
              >
                게시
              </button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
