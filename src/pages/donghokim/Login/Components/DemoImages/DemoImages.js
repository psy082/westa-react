import React from "react";
import "./DemoImages.scss";

class DemoImages extends React.Component {
  render() {
    return (
      <div className="demo_container">
        <div className="image_frame">
          <img
            alt="demo"
            className="demo_image"
            src="https://instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
          />
          <img
            alt="demo"
            className="demo_image"
            src="https://instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg"
          />
          <img
            alt="demo"
            className="demo_image"
            src="https://instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"
          />
          <img
            alt="demo"
            className="demo_image"
            src="https://instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg"
          />
          <img
            alt="demo"
            className="demo_image"
            src="https://instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
          />
        </div>
      </div>
    );
  }
}

export default DemoImages;
