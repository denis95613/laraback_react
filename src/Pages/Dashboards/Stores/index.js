import React from "react";
import Slider from "react-slick";
import slider_img1 from "../../../assets/images/booking-desktop-banner.png";
import slider_img2 from "../../../assets/images/booking-banner.png";
import slider_img3 from "../../../assets/images/lightinthebox-desktop-banner.png";
import slider_img4 from "../../../assets/images/hostgator-desktop-banner.png";
import rewmove from "../../../assets/images/romwe-us.png";
import banggood from "../../../assets/images/banggood.jpg";
import hostgator from "../../../assets/images/hostgator-in.png";
import hostpot from "../../../assets/images/hotspotshield-int.jpg";
import berrylook from "../../../assets/images/berrylook.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="container content_slider">
        <div className="row ">
          <div className="col-xl-9 col-lg-8 col-12 mb-lg-0 mb-md-5 mb-3 slider_img">
            <div>
              <Slider {...settings}>
                <div>
                  <div className="slider_img">
                    <img src={slider_img1} alt="" />
                  </div>
                </div>
                <div>
                  <div className="slider_img">
                    <img src={slider_img2} alt="" />
                  </div>
                </div>
                <div>
                  <div className="slider_img">
                    <img src={slider_img4} alt="" />
                  </div>
                </div>
                <div>
                  <div className="slider_img">
                    <img src={slider_img3} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-12">
            <div className="offer_slider">
              <div className="offer_main">
                <Slider {...settings}>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <div className="remove_img">
                          <img src={hostgator} alt="" />
                        </div>
                        <h5>Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <h5 className="dresses">Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <div className="remove_img">
                          <img src={rewmove} alt="" />
                        </div>
                        <h5>Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <div className="remove_img">
                          <img src={banggood} alt="" />
                        </div>
                        <h5>Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <div className="remove_img">
                          <img src={hostpot} alt="" />
                        </div>
                        <h5>Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="offer_box">
                      <h6>Offer Of The Day</h6>
                      <div className="contant_main">
                        <div className="remove_img">
                          <img src={berrylook} alt="" />
                        </div>
                        <h5>Dresses on sale UP TO 87%</h5>
                        <h3>Upto 8% Cashback</h3>
                        <a href="#">Get Discount</a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
