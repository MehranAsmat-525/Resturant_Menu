const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className="navbar">
                {menuList.map((CV) => {
                    return (
                        <>
                            <button onClick={() => filterItem(CV)}>
                                {CV}
                            </button>
                        </>
                    );
                })}

                {/* <button onClick={() => setmenudata(Menu)}>All</button> */}
            </div>
        </>
    );
};

export default Navbar;
