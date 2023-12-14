import Link from "next/link";

import {useSearchParams} from "next/navigation";


export default function NavbarItem({title, param}){

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    return(
        <Link className={`mx-3 capitalize tracking-wider select-none ${
            genre && genre === param && `underline underline-offset-8 decoration-4 decoration-gray-700 dark:decoration-amber-400 
            rounded-lg `
        }`} href={`/?genre=${param}`}>
            {title}
        </Link>
    )
}