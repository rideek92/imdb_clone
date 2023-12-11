import Link from "next/link";


export default function MenuItem({title, addres, itemLogo}){

    return(
        <Link className="m-2 max-lg:my-2 hover:text-amber-600 select-none " href={addres}>
            <div className="text-3xl lg:hidden ">{itemLogo}</div>
            <p className="max-lg:hidden">{title}</p>
        </Link>
    )
}