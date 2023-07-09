import "./resturant.css";
import Menu from "./MenuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const UniqueList = [
    ...new Set(
        Menu.map((CV) => {
            return CV.category;
        })
    ),
    "All",
];

const Resturant = () => {
    const [menudata, setmenudata] = useState(Menu);
    const [menuList, setmenuList] = useState(UniqueList);
    // console.log(setmenudata);
    const filterItem = (category) => {
        if (category === "All") {
            setmenudata(Menu);
            return
        }
        const UpdatedList = Menu.filter((CV) => {
            return CV.category === category;
        });
        setmenudata(UpdatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menudata={menudata} />
        </>
    );
};

export default Resturant;
