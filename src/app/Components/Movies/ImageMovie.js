import Image from "next/image";


export default function ImageMovie({addres, title}){

    return(
        <img src={`https://image.tmdb.org/t/p/original/${addres}`} alt={title} className="w-auto" />

    )

}