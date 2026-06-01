import Navbar from "./components/Navbar";
import MovieCard from "./components/movieCards";
import MovieSlider from "./components/cardslides";

const movies = [
  {
    title: "Hi Nanna",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU4MzExZGQtYzUzZC00NGE2LTg5NTgtZWI3MWM4YzgyNWUxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Avengers",
    image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
  },
  {
    title: "Hridayam",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTQ3Y2JmNTItNTdkNC00YTlhLWIyMTItOTRiYmFiODJjZmYxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Batman",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png",
  },
  {
    title: "Natasaarvabhowma",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGVkZjlhNzAtNTgzMi00YzdiLTk0ODYtYzk4NWFjMDEyODczXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Spiderman",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
  },

  {
    title: "Sapta Sagaradaache Ello: Side B",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjYyOTRkYTItNDNjMi00YmNiLTk4NzAtYTY1MGQ3N2M0NzYwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "RRR",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
  },
  {
    title: "Thor",
    image: "https://m.media-amazon.com/images/I/81IfoBox2TL._AC_SY679_.jpg",
  },
  {
    title: "KGF-2",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
  },
  {
    title: "Black Panther",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
  },
  {
    title: "Vikram",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
  },
  {
    title: "Jawan",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
  },

  {
    title: "Kalki 2898 AD",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
  },
  {
    title: "Anjaam Pathiraa",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQ2NzBkMTMtNTdmMi00Y2E3LTg3NjQtMGNmZDE1OTQ4YzYwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Jailer",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTVjZDlhYWUtYzk1NS00ZTViLThkNzAtYzc1NDFhNjA1YjU2XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Leo",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDk5ODNjNzMtYzI5Yy00NmI3LWIwYzctMTFjZjcwN2I2Yzk2XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Manjummel Boys",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDVkOGEzZDgtYWU4Yi00MDA3LWE4YmQtYjQxNDgwNDYxNGU4XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Sita Ramam",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWE0NDNiNzEtNThmMi00NjZlLTk3NDAtYzIzOWNmNWQyYTI3XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Kaithi",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDk2NWQyMjQtODlkYi00YTJjLTkxMGItMGU0ZDExODI3OWIxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Maharaja",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Pushpa 2: The Rule",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDM3N2UzM2UtMjEwMC00NGUzLThmMmQtNGMyM2VmMDA0ZWEwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  ,
  {
    title: "Premam",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWJiMWMxYmMtNTQxMy00ZjE2LWEzYTAtNTdmODI4MGI4OTRlXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Coolie",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTYwYzYxMWYtZmI4MS00ZGRhLWEyMGEtZTdiODc3YjAyNDE0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Dia",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDkyNGE1OWEtZDg0ZC00MThjLThlYmYtNDhiNGNjMzQ1ZTcyXkEyXkFqcGc@._V1_SX300.jpg",
  },

  {
    title: "Love Mocktail",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDEwODVjYWQtYTVhNC00YzU0LWFjYTQtZmVlNDk0YmQ1YTY4XkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_SX300.jpg",
  },
  {
    title: "Thiruchitrambalam",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzUwZTMxZDItYTUzYi00YjQ5LWI1NjctMDc2MGUyYWE4YWYwXkEyXkFqcGc@._V1_SX300.jpg",
  },

  {
    title: "Bangalore Days",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWI0YTgyNTEtNGU2Yi00MWQ5LWFiOTUtYTQ3MzMyNDcwYTIzXkEyXkFqcGc@._V1_SX300.jpg",
  },
];
function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />

      <h2 style={{ color: "white", padding: "20px" }}>🔥 Trending</h2>
      <MovieSlider movies={movies} />

      <h2 style={{ color: "white", padding: "20px" }}>🎥 Movies</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
