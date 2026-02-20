import { useState } from "react";

export function MovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    director: "",
    year: "",
  });

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formData);
    };
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

  return (
    <>
      <h1>ADD MOVIE</h1>

      <form>
        <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
        <input type="text" placeholder="Description" name="description" onChange={handleChange}/>
        <input type="text" placeholder="Director"  name="director" onChange={handleChange}/>
        <button type="submit">DODAJ FILM DO BAZY</button>
      </form>
    </>
  );
}
export default MovieForm;
