import React from "react";
import StoryButton from "./StoryButton";
import "./Storybar.scss";

class Storybar extends React.Component {
  render() {
    return (
      <div className="storybar_slider_wrap">
        <div className="storybar_slider_view">
          <div className="storybar_slider_lists">
            {this.props.userStories.map(({ nickname, image_src }, idx) => (
              <StoryButton
                key={idx}
                height={"56px"}
                width={"56px"}
                src={image_src}
                nickname={nickname}
              />
            ))}
          </div>
          <button className="left_button">
            <div className="button_image"></div>
          </button>
          <button className="right_button">
            <div className="button_image"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default Storybar;
