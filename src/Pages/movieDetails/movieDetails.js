import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function MovieDetails() {

        const { id } = useParams();

        useEffect(() => {}, [id])

            //fetch do backendu po szczegóły filmu o id z paramsów // do api /movies/:id
            //i naprawić żęby wyświetlało te szczegóły na stronie bo nie działa, a powinno


    return (

        <>
            <h1>MOVIE DETAILS</h1>
            <span>{id}</span>
        </>
        
    )
}