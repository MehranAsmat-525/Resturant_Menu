import "./resturant.css";
const MenuCard = ({ menudata }) => {
    return (
        <>
            <div className="card_container">
                {menudata.map((CV) => {
                    const { id, image, description, category, name, price } =
                        CV;
                    return (
                        <>
                            <div className="card_container1" key={id}>
                                <span className="id">{id}</span>
                                <div className="card_body">
                                    <h3>{category}</h3>
                                    <div className="two">
                                        <span>{name}</span>
                                        <span className="price">{price}</span>
                                    </div>
                                    <img src={image} alt="" />
                                    <p className="description">{description}</p>
                                </div>
                                <div className="btn">Order</div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default MenuCard;
