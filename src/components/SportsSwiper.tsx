import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SportsCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      swipeable
      emulateTouch
      interval={2000}
      infiniteLoop
      statusFormatter={() => ""}
      className="sports-carousel"
    >
      <div>
        <img
          className="swiper-image"
          style={{ borderRadius: "15px" }}
          src={"/images/dairy.jpeg"}
          alt=""
        />
        <p className="legend">Dairy Farming</p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/maize.jpg"} alt="" />
        <p className="legend">
          Maize Crop
        </p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/dorper.jpeg"} alt="" />
        <p className="legend">Dorper & Dairy Goat Farming</p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/moiben.jpg"} alt="" />
        <p className="legend">
          Wheat Farming
        </p>
      </div>
    </Carousel>
  );
}
