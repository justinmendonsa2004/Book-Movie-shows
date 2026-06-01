import "../Styles/cardslides.css";
import { useRef } from "react";

function MovieSlider({ movies }) {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="slider-container">
      <button className="nav-btn left" onClick={scrollLeft}>
        ⬅
      </button>

      <div className="slider" ref={sliderRef}>
        {movies.map((movie, index) => (
          <div className="slide" key={index}>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))}
      </div>

      <button className="nav-btn right" onClick={scrollRight}>
        ➡
      </button>
    </div>
  );
}

export default MovieSlider;
