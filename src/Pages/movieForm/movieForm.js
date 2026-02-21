import { useState } from "react";
import "./movieForm.css";

export function MovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    director: "",
    year: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await fetch("http://localhost:3005/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (result.status !== 201) {
        console.error("wrong status");
        return;
      }

      await result.json();
      alert("Film dodany 🎬");
    } catch (e) {
      alert("Coś poszło nie tak 😢");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="movie-form">
      <h1 className="movie-form__title">ADD MOVIE</h1>

      <form className="movie-form__form" onSubmit={handleSubmit}>
        <input
          className="movie-form__input"
          placeholder="Title"
          type="text"
          name="title"
          onChange={handleChange}
        />

        <textarea
          className="movie-form__textarea"
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />

        <input
          className="movie-form__input"
          placeholder="Director"
          type="text"
          name="director"
          onChange={handleChange}
        />
        <input
          className="movie-form__input"
          placeholder="Year"
          type="number"
          name="year"
          onChange={handleChange}
          min="1970"
        />

        <button className="movie-form__button" type="submit">
          🎬 DODAJ FILM
        </button>
      </form>
    </div>
  );
}

export default MovieForm;