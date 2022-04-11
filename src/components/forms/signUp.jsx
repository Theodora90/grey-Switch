import React, { Component } from "react";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import GoogleLogo from "../../images/google_logo.png";
import Logo from "../../images/logo.png";
import Hand from "../../images/hand.png";

let slideIndex = 0;

class SignUp extends Component {
  state = {};

  componentDidMount() {
    this.showSlides();
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(this.showSlides, 2000);
  }

  render() {
    return (
      <section className="d-flex main">
        <div className="slideshow-container">
          <div className="logo-container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="logo" width="150" height="24" />
            </a>
          </div>
          <div className="mySlides fade">
            <img src={ImageOne} className="slide-img" />
          </div>

          <div className="mySlides fade">
            <img src={ImageTwo} className="slide-img" />
          </div>

          <div className="mySlides fade">
            <img src={ImageOne} className="slide-img" />
          </div>
          <div className="dot-container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="text-container text-white">
            <h4 className="h3 fw-bold">Open an Account in a flash.</h4>
            <p>
              Our process is fast and easy. No paperworks. Get back to <br />
              managing what matters in no time.
            </p>
          </div>
        </div>
        <div className="p-3 form-container">
          <div className="container">
            <div className="mainform-container">
              <div className="d-flex">
                <h3 className="me-3 fw-bold">Welcome back</h3>
                <img src={Hand} className="mb-2" alt="welcome-emoji" />
              </div>
              <p className="mb-5">
                To get started, please provide the information needed <br />
                below.
              </p>
              <form>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                  />
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">
                    Continue with email
                  </button>
                </div>
                <p class="option">OR</p>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-white border">
                    <img
                      src={GoogleLogo}
                      alt="google logo"
                      width="15"
                      height="15"
                      class="my-2 mx-1"
                    />
                    Continue with Google
                  </button>
                </div>
                <p class="text-center mt-4 sign-up-text">
                  Don’t have an account? <a href="#">Sign up now</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
