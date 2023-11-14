import "./basketList.css";
import removeItem from "../../img/dustbin.png";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slice/basketSlice";

const BasketList = (el) => {

    const dispatch = useDispatch();

    return (
        <div className="basketElement">
            <img className="basketItemImage" src={el.el.image} alt="" />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "85%",
                    alignItems: "center",
                }}
            >
                <h3>{el.el.title}</h3>
                <button onClick={() => dispatch(removeFromBasket(el.el.id))}>
                    <img
                        style={{ width: "25px" }}
                        src={removeItem}
                        alt="remove"
                    />
                </button>
            </div>
        </div>
    );
};

export default BasketList;
