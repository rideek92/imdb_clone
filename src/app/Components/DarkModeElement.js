"use client"

import {FaMoon} from "react-icons/fa";
import {MdOutlineWbSunny} from "react-icons/md";
import {useTheme} from "next-themes";
import {useState , useEffect} from "react";

function DarkModeElement({logo}) {
    const [mounted, setMounted] = useState(false)
    const {resolvedTheme, theme , setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <>
            <button className="mx-2 hover:text-amber-600" onClick={()=> setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ?  FaMoon() :MdOutlineWbSunny() }
            </button>
        </>

    )
}

export default DarkModeElement;