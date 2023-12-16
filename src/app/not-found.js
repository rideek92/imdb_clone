import Link from "next/link";

export default function NotFound(){

    return(
        <div className={`flex flex-col justify-center items-center py-10 select-none`}>
            <h1 className={`mb-3 text-2xl`}>Szukana strona nie istnieje</h1>
            <Link className={`hover:text-amber-600 `} href={`/`}>Spróbuj ponownie</Link>
        </div>
    )
}