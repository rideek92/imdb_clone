import MenuItem from "@/app/Components/MenuItem";
import {IoInformationCircleOutline} from "react-icons/io5";
import {GoHome} from "react-icons/go";
import DarkModeElement from "@/app/Components/DarkModeElement";

import Link from "next/link";


export default function Headers(){
    return(
        <div className="flex justify-between max-w-7xl">
            <div className="flex py-2 items-center">
                <MenuItem title="Home" addres="/" itemLogo={GoHome()}/>
                <MenuItem title="About" addres="/about" itemLogo={IoInformationCircleOutline()}/>
            </div>
            <div className="flex mr-2 items-center">
                <DarkModeElement/>
                <Link href="/" className="text-xl select-none"><span
                    className="p-1 bg-amber-500 rounded-md mx-1 tracking ">IMDb</span><span>Clone</span>
                </Link>


            </div>

        </div>
    )
}