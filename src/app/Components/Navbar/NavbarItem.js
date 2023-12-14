import Link from "next/link";


export default function NavbarItem({title, param}){

    return(
        <Link className="mx-3 uppercase tracking-wider select-none hover:text-amber-600" href={`/?=${param}`}>
            {title}
        </Link>
    )
}