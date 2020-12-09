import React from "react";

class FeedImageSlider extends React.Component {
  render() {
    return (
      <div className="image_container">
        <div className="image_slider_view">
          <ul className="image_slider_lists">
            <li className="image_content">
              <img
                alt="image_uploaded"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/116253651_300899534664631_1050555177117324798_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AcUDeEGiJPMAX-L-gIc&oh=7cc10e05c19a77535e8c8f4a416e1777&oe=5F4FB270"
              />
            </li>
            <li className="image_content">
              <img
                alt="image_uploaded"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/116253651_300899534664631_1050555177117324798_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=AcUDeEGiJPMAX-L-gIc&oh=7cc10e05c19a77535e8c8f4a416e1777&oe=5F4FB270"
              />
            </li>
          </ul>
          <button className="left_button">
            <div className="button_image"></div>
          </button>
          <button className="right_button">
            <div className="button_image"></div>
          </button>
        </div>
        <div className="slider_dots">
          <div className="active_dot"></div>
          <div className="not_active_dot"></div>
        </div>
      </div>
    );
  }
}

export default FeedImageSlider;
