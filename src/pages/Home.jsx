import Navbar from "../components/Navbar";
import MovieCard from "../components/movieCards";
import MovieSlider from "../components/cardslides";
import "../styles/Home.css";

function Home() {
  const movies = [
    {
      title: "Hi Nanna",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmU4MzExZGQtYzUzZC00NGE2LTg5NTgtZWI3MWM4YzgyNWUxXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=3Ld05Om2UWs",
    },
    {
      title: "Avengers",
      image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    },
    {
      title: "Hridayam",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTQ3Y2JmNTItNTdkNC00YTlhLWIyMTItOTRiYmFiODJjZmYxXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=48tqyDA5Sb0",
    },
    {
      title: "Batman",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png",
      trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    },
    {
      title: "Natasaarvabhowma",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGVkZjlhNzAtNTgzMi00YzdiLTk0ODYtYzk4NWFjMDEyODczXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=Npjuny2MrSY",
    },
    {
      title: "Spiderman",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      trailer: "https://www.youtube.com/watch?v=Tt5F0DQoWJA",
    },

    {
      title: "Sapta Sagaradaache Ello: Side B",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjYyOTRkYTItNDNjMi00YmNiLTk4NzAtYTY1MGQ3N2M0NzYwXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=llKjFW1gv0M",
    },
    {
      title: "RRR",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
      trailer: "https://www.youtube.com/watch?v=dL0w9pRyMJw",
    },
    {
      title: "Thor",
      image: "https://m.media-amazon.com/images/I/81IfoBox2TL._AC_SY679_.jpg",
      trailer: "https://www.youtube.com/watch?v=Go8nTmfrQd8",
    },
    {
      title: "KGF-2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
      trailer: "https://www.youtube.com/watch?v=sjOTjbUo5OI",
    },
    {
      title: "Black Panther",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
      trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    },
    {
      title: "Vikram",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
      trailer: "https://www.youtube.com/watch?v=OKBMCL-frPU",
    },
    {
      title: "Jawan",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
      trailer: "https://www.youtube.com/watch?v=MWOlnZSnXJo",
    },

    {
      title: "Kalki 2898 AD",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
      trailer: "https://www.youtube.com/watch?v=y1-w1kUGuz8",
    },
    {
      title: "Anjaam Pathiraa",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjQ2NzBkMTMtNTdmMi00Y2E3LTg3NjQtMGNmZDE1OTQ4YzYwXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=dn5KZD1E67Y",
    },
    {
      title: "Jailer",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTVjZDlhYWUtYzk1NS00ZTViLThkNzAtYzc1NDFhNjA1YjU2XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=VutF0FpL4Pw",
    },
    {
      title: "Leo",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDk5ODNjNzMtYzI5Yy00NmI3LWIwYzctMTFjZjcwN2I2Yzk2XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=Po3jStA673E",
    },
    {
      title: "Manjummel Boys",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDVkOGEzZDgtYWU4Yi00MDA3LWE4YmQtYjQxNDgwNDYxNGU4XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=id848Ww1YLo",
    },
    {
      title: "Sita Ramam",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWE0NDNiNzEtNThmMi00NjZlLTk3NDAtYzIzOWNmNWQyYTI3XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=40ylJVaRBxg",
    },
    {
      title: "Kaithi",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDk2NWQyMjQtODlkYi00YTJjLTkxMGItMGU0ZDExODI3OWIxXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=g79CvhHaj5I",
    },
    {
      title: "Maharaja",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=Otcr-vRuaQs",
    },
    {
      title: "Pushpa 2: The Rule",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDM3N2UzM2UtMjEwMC00NGUzLThmMmQtNGMyM2VmMDA0ZWEwXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=g3JUbgOHgdw",
    },
    ,
    {
      title: "Premam",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWJiMWMxYmMtNTQxMy00ZjE2LWEzYTAtNTdmODI4MGI4OTRlXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=pbgvTikmIMk",
    },
    {
      title: "Coolie",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTYwYzYxMWYtZmI4MS00ZGRhLWEyMGEtZTdiODc3YjAyNDE0XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=qeVfT2iLiu0",
    },
    {
      title: "Dia",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDkyNGE1OWEtZDg0ZC00MThjLThlYmYtNDhiNGNjMzQ1ZTcyXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=mMqcXDkCRLs",
    },

    {
      title: "Love Mocktail",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDEwODVjYWQtYTVhNC00YzU0LWFjYTQtZmVlNDk0YmQ1YTY4XkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=dksKhOPWEIM",
    },
    {
      title: "Thiruchitrambalam",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzUwZTMxZDItYTUzYi00YjQ5LWI1NjctMDc2MGUyYWE4YWYwXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=tNnPHz1u3RM",
    },

    {
      title: "Bangalore Days",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWI0YTgyNTEtNGU2Yi00MWQ5LWFiOTUtYTQ3MzMyNDcwYTIzXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=uVpHL5g4buY",
    },
    {
      title: "Bramayugam",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmZkZjQ5YzItOGQ0MC00ZmVlLWIxNjgtYzU2MmYzYjFmZWI2XkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=55pzldrBRJM",
    },
    {
      title: "Bhoothakaalam",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjNmZmZmYzAtMWI2Mi00ZTdmLWE4ZTUtMzNkYmFiMzhkYjVjXkEyXkFqcGc@._V1_SX300.jpg",
      trailer: "https://www.youtube.com/watch?v=NlaVyE-7POM",
    },
  ];

  return (
    <>
      <div className="home-container">
        <Navbar />

        <h2 className="section-title">🔥 Trending</h2>
        <MovieSlider movies={movies} />

        <h2 className="section-title">🎥 Movies</h2>

        <div className="movies-grid">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
