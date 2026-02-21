import "./card.css";

export function Card({ movie }) {
    return (
        <div className="card">
            <span>{movie.id}</span>
            <div className="card__content">
                <h2 className="card__title">{movie.title}</h2>
                <p className="card__description">{movie.description}</p>
                <p className="card__director">{movie.director}</p>
                <p className="card__likes">{movie.likes}</p>
                <span className="card__year">{movie.year}</span>
            </div>
        </div>
    );
}

export default Card;