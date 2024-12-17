import React, { useState } from "react";
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Conjunto rosa mujer",
      descripcion: "Conjunto rosa para dama $145.000",
      image: "Conjunto mujer.jpg",
    },
    {
      id: 2,
      title: "Guantes",
      descripcion: "Guantes GYM Golty $50.000",
      image: "YTR.jpg",
    },
    {
      id: 3,
      title: "Venon 3 ",
      descripcion: "Guantes arquero Golty $200.000",
      image: "aaa.jpg",
    },
    {
      id: 4,
      title: "Camisa",
      descripcion: "Camias America de cali $265.000",
      image: "camisaamerica.jpg",
    },
    {
      id: 5,
      title: "Balon",
      descripcion: "Balon futbol 8 Venon $70.000",
      image: "balonvenon.jpg",
    },
    {
      id: 6,
      title: "Camisa",
      descripcion: "Casmisa Edicion F1 $500.000",
      image: "F1camisa.jpg",
    },
    {
      id: 7,
      title: "Camisa",
      descripcion: "Camisa manchester city $165.000",
      image: "city.jpg",
    },
    {
      id: 8,
      title: "Tenis",
      descripcion: "Tenis hombre blancos $400.000",
      image: "tenis.jpg",
    },
    {
      id: 9,
      title: "Balon",
      descripcion: "Balon futbol Golty $150.000",
      image: "balon.jpg",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">TIENDA SPORT JG</h1>
      <MovieList movies={movies} />
      <footer className="app-footer">
        <p>© 2024 tienda deportiva a la moda . Todos los derechos reservados.</p>
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
