import Link from "next/link";
import ImageMovie from "@/app/Components/Movies/ImageMovie";
import { BsHandThumbsUp } from "react-icons/bs"


export default function ItemsMovie({data}){

    return(
        <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6 my-10  ">
            {!data ? <h1>Home</h1> : data.map(movie => {
                return (
                    <Link href={`/movie/${movie.id}`} key={movie.id} className="rounded-xl overflow-hidden border-[1px] border-gray-800 dark:border-gray-200 hover:scale-95 shadow-2xl">
                        <ImageMovie addres={movie.backdrop_path} title={movie.title}/>
                        <h1 className="text-center text-[0.8rem] uppercase font-bold py-2 px-1  overflow-hidden  bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-yellow-50 h-12 flex justify-center items-center ">{!movie.name ? movie.title : movie.name}</h1>
                        <div className={`max-h-[7rem] p-2 min-h-[6rem] text-[0.9rem]` }>
                            <p className={` line-clamp-2`}>{movie.overview}</p>
                            <div className={`my-5 flex justify-between`}>
                                <p className={`text-[0.8rem]`}>
                                    <span className={`font-semibold mr-2`}>Release:</span>
                                    <span>{movie.release_date || movie.first_air_date || `In production`}</span>
                                </p>
                                <div className="flex justify-center items-center">
                                    <BsHandThumbsUp/>
                                    <p className={`font-light ml-2`}>{movie.vote_average}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                )
            })
            }
        </div>

    )
}