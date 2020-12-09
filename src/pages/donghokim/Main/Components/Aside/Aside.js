import React from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";
import RecommendedUser from "./RecommendedUser";
import InfoContainer from "../../../components/InfoContainer";
import mockRecommendation from "../../../data/mockRecommendations";
import "./Aside.scss";

class Aside extends React.Component {
  state = {
    UserRecommendations: [...mockRecommendation],
  };

  render() {
    return (
      <div className="main_right">
        <div className="user_container">
          <ThumbnailImage
            heigth={"56px"}
            width={"56px"}
            src={
              "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/46667604_2237749169793267_945848138990616576_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EQshKzGkP7EAX-VODiE&oh=18c2fab276a5c0c538ca218e66ff7c93&oe=5F5DB2E9"
            }
          />
          <div className="user_info_container main_user">
            <button className="nickname">dongho_223</button>
            <div className="username">김동호</div>
          </div>
        </div>
        <div className="recommendation_containter">
          <div className="recommendation_text">
            <span>회원님을 위한 추천</span>
            <button className="show_all_button">모두 보기</button>
          </div>
          <div className="recommended_users">
            {this.state.UserRecommendations.map(
              ({ nickname, image_src, desc }, idx) => (
                <RecommendedUser
                  key={idx}
                  nickname={nickname}
                  src={image_src}
                  desc={desc}
                />
              )
            )}
          </div>
        </div>
        <InfoContainer />
      </div>
    );
  }
}

export default Aside;
