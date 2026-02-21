import { useParams } from "react-router-dom";


export default function MovieDetails() {

        const { id } = useParams();

    return (

        <>
            <h1>MOVIE DETAILS</h1>
            <span>{id}</span>
        </>
        
    )
}