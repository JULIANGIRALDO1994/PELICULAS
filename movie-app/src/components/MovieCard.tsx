import React from "react"; // Importa React
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Movie } from "../types/Movie"; // Importa la interfaz Movie

interface MovieCardProps {
movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Ruta dinámica para importar la imagen basada en el título
const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

const showDetails = () => {
    Swal.fire({
    title: movie.title,
    text: `Descripcion: ${movie.descripcion}`,
      imageUrl: imageSrc, // Usamos la imagen en SweetAlert2
    imageWidth: 300,
    imageAlt: `${movie.title} Poster`,
    confirmButtonText: "Atras",
    });
};

return (
    <div className="movie-card" onClick={showDetails}>
    <img src={imageSrc} alt={movie.title} className="movie-image" />
    <h3>{movie.title}</h3>
    <p>{movie.descripcion}</p>
    </div>
);
};

export default MovieCard;
