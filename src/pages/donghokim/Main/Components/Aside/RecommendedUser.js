import React from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";

class UserInfoContainer extends React.Component {
  render() {
    return (
      <div className="recommended_user">
        <div className="user_container">
          <ThumbnailImage height={"32px"} width={"32px"} src={this.props.src} />
          <div className="user_info_container">
            <button className="nickname">{this.props.nickname}</button>
            <div className="description">{this.props.desc}</div>
          </div>
        </div>
        <button className="follow_button">팔로우</button>
      </div>
    );
  }
}

export default UserInfoContainer;
