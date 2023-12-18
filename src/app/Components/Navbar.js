import NavbarItem from "@/app/Components/Navbar/NavbarItem";

const Navbar = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-600 justify-center h-14 items-center my-3 ">
            <NavbarItem title="All Films" param="all"/>
            <NavbarItem title="Movies" param="movie"/>
            <NavbarItem title="Sprawdzenie" param="test"/>

        </div>
    );
};

export default Navbar;