import Image from "next/image";
import Link from "next/link";
import ImageMovie from "@/app/Components/Movies/ImageMovie";


export default function ItemsMovie({data}){

    return(
        <div className="grid grid-cols-3 gap-5 mx-5 ">
            {!data ? <h1>Home</h1> : data.map(movie => {
                return (
                    <div key={movie.id} className="max-w-sm p-5 border-2 border-gray-400 rounded-2xl">
                        <ImageMovie addres={movie.backdrop_path} title={movie.title}/>
                        <h1 className="text-center uppercase font-bold">{!movie.name ? movie.title : movie.name}</h1>

                    </div>

                )
            })
            }
        </div>

    )
}