import React from "react";
import { withRouter, Link } from "react-router-dom";
import DemoImages from "./Components/DemoImages/DemoImages";
import InfoContainer from "../components/InfoContainer";
import validation from "../_utils/validation";
import "./Login.scss";

const ipAddress = "http://10.58.3.254:8000";

const validate = (() => {
  const config = {
    username: validation.min(5).contains("@").done(),
    password: validation.min(5).done(),
  };

  return (properties) => validation.validate(config, properties);
})();

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    buttonStatus: true,
  };

  updateInputs = ({ name, value }) => {
    this.setState({ [name]: value }, this.changeButtonStatus);
  };

  changeButtonStatus = () => {
    this.setState({
      buttonStatus: !validate({
        username: this.state.username,
        password: this.state.password,
      }),
    });
  };

  signUp = () => {
    fetch(`${ipAddress}/User/SignUp`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  signin = () => {
    fetch(`${ipAddress}/User/SignIn`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  goToMain = () => {
    this.props.history.push("/main-dongho");
  };

  render() {
    return (
      <div className="login_root">
        <main>
          <article>
            <DemoImages />
            <div className="interaction_container">
              <div className="login_container">
                <div className="logo">
                  <img
                    alt="instagram"
                    className="logo_image"
                    src="/images/donghokim/logo_text.png"
                  />
                </div>
                <div className="form_container">
                  <form
                    action="#"
                    className="login_form"
                    onChange={({ target }) => this.updateInputs(target)}
                  >
                    <div className="input_container">
                      <label className="label_container">
                        <span className="placeholder">
                          전화번호, 사용자 이름 또는 이메일
                        </span>
                        <input
                          type="text"
                          name="username"
                          maxLength="75"
                          autoCapitalize="off"
                          autoComplete="off"
                        />
                      </label>
                    </div>
                    <div className="input_container">
                      <label className="label_container">
                        <span className="placeholder">비밀번호</span>
                        <input
                          type="password"
                          name="password"
                          autoCapitalize="off"
                          autoComplete="off"
                        />
                      </label>
                      <div className="password_mode">
                        <div className="button_wrapper">
                          <button>숨기기</button>
                        </div>
                      </div>
                    </div>
                    <div className="login_button">
                      <button
                        disabled={this.state.buttonStatus}
                        onClick={this.signin}
                      >
                        로그인
                      </button>
                    </div>
                    <div className="or">
                      <div className="vertical_line"></div>
                      <div className="or_text">또는</div>
                      <div className="vertical_line"></div>
                    </div>
                    <div className="alternative_login">
                      <button className="facebook_login">
                        <span className="spriteFacebook"></span>
                        <span className="login_text">Facebook으로 로그인</span>
                      </button>
                    </div>
                    <Link
                      className="find_password"
                      to="https://instagram.com/accounts/password/reset/"
                    >
                      비밀번호를 잊으셨나요?
                    </Link>
                  </form>
                </div>
              </div>
              <div className="signup_container">
                <div className="text_container">
                  <p className="signup_text">
                    "계정이 없으신가요? "
                    <Link to="https://instagram.com/accounts/emailsignup/">
                      가입하기
                    </Link>
                  </p>
                </div>
              </div>
              <div className="download_container">
                <p className="download_text">앱을 다운로드 하세요</p>
                <div className="download_links">
                  <Link
                    className="image_link"
                    to="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                  >
                    <img
                      alt="App Store에서 이용 가능"
                      src="https://instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                    />
                  </Link>
                  <Link
                    className="image_link"
                    to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB83B8986-2F09-4ADA-A7C4-6935A556139E%26utm_content%3Dlo%26utm_medium%3Dbadge"
                  >
                    <img
                      alt="Google Play에서 이용 가능"
                      src="https://instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
        <footer>
          <InfoContainer />
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
