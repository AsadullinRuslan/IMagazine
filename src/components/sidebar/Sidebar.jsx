import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProductById } from "../../slice/productSlice";

const Sidebar = () => {
    const visitedItem = useSelector((state) => state.visited.visitedProduct);

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <h2>Недавно смотрели</h2>
            {visitedItem?.map((item) => (
                <div key={item.id} style={{ maxWidth: "80%" }}>
                    <img
                        className="visitedItemImage"
                        src={item.image}
                        alt="productImage"
                    />
                    <Link 
                        to={`/products/${item.id}`}
                        onClick={() => {dispatch(setProductById(item))}}
                    >
                        <h4>{item.title}</h4>
                    </Link>
                    ----------------
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
