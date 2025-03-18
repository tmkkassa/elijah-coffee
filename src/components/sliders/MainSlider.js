import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/eli/main-bg.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the elijah coffee</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Awaken Your Senses <br />
                  With Pure Ethiopian Aroma
                </h2>
                <div className="kf-bts">
                  <Link href="menu-restaurant" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/eli/main-bg.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the elijah coffee</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Crafted by Tradition,
                  <br />
                  Perfected for You
                </h2>
                <div className="kf-bts">
                  <Link href="menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
  <div className="kf-started-item">
    {/* Video Background */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="video-bg"
    >
      <source src="/images/eli/video-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="container">
      <div className="description align-left">
        <div className="subtitles">Welcome to Elijah Coffee</div>
        <h2 className="name text-anim-1" data-splitting="chars">
          The Soul of Ethiopia <br />
          In Every Sip
        </h2>
        <div className="kf-bts">
          <Link href="menu-coffee" className="kf-btn">
            <span>Explore More</span>
            <i className="fas fa-chevron-right" />
          </Link>
          <Link href="reservation" className="kf-btn dark-btn">
            <span>Get Delivery</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;
