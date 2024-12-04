import React, { useState } from "react";
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Jurassic World",
      genre: "Ciencia Ficción",
      image: "Jurassic World .jpg",
    },
    {
      id: 2,
      title: "Kun Fu Panda 4",
      genre: "Anime",
      image: "kung-fu-panda-4-.jpg",
    },
    {
      id: 3,
      title: "Venon 3 ",
      genre: "Ciencia ficción",
      image: "venom-3-.jpg",
    },
    {
      id: 4,
      title: "Bad Boys ",
      genre: "Action",
      image: "Bad Boys.jpg",
    },
    {
      id: 5,
      title: "Codigo Traje Rojo",
      genre: "Ciencia Ficción",
      image: "codigo traje rojo.jpg",
    },
    {
      id: 6,
      title: "Furiosa",
      genre: "Action",
      image: "furiosa.jpg",
    },
    {
      id: 7,
      title: "Planeta De Los Simios ",
      genre: "Ciencia ficción",
      image: "planeta de los simios.jpg",
    },
    {
      id: 8,
      title: "Kraven El Cazador",
      genre: "Action",
      image: "kraven el cazador.jpg",
    },
    {
      id: 9,
      title: "Gladiator",
      genre: "Action",
      image: "gladiator2.jpg",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List 🎬</h1>
      <MovieList movies={movies} />
      <footer className="app-footer">
        <p>© 2024 MovieList. Todos los derechos reservados.</p>
        <p>
          Desarrollado por{" Julian Giraldo"}
        </p>
        <p>
          Visítanos en{" "}
          <a href="www.linkedin.com/in/julian-giraldo1994" target="_blank" rel="noopener noreferrer">
          www.linkedin.com/in/julian-giraldo1994
          </a>
        </p>
      </footer>
    </div> 
  );
};

export default App;
