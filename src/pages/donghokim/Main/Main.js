import React from "react";
import Storybar from "./Components/Storybar/Storybar";
import Feed from "./Components/Feed/Feed";
import Aside from "./Components/Aside/Aside";
import Navbar from "./Components/Navbar/Navbar";
import mockUserStories from "../data/mockUserStories";
import "./Main.scss";

class Main extends React.Component {
  state = {
    userStories: [...mockUserStories],
  };

  render() {
    return (
      <div className="main_root">
        <main>
          <section>
            <div className="contents_container">
              <Storybar userStories={this.state.userStories} />
              <div className="article_container">
                <Feed />
                <Feed />
              </div>
            </div>
            <Aside />
          </section>
        </main>
        <Navbar />
      </div>
    );
  }
}

export default Main;
