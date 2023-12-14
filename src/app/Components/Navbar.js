import NavbarItem from "@/app/Components/Navbar/NavbarItem";

const Navbar = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-600 justify-center h-14 items-center my-3 ">
            <NavbarItem title="Trending" param="featchTreanding"/>
            <NavbarItem title="Top Rated" param="featchTopRated"/>
        </div>
    );
};

export default Navbar;