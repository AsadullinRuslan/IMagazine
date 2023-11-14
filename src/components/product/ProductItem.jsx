import { Link } from "react-router-dom";
import "./productItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addVisitedProduct } from "../../slice/visitedProductSlice"
import { setProductById } from "../../slice/productSlice";
import { addToBasket } from "../../slice/basketSlice";
import basketIcon from '../../img/free-icon-font-shopping-cart-3916598.svg'

const ProductItem = (prod) => {
    
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.baskets)

    return (
        <div className="productItem">
            <div className="itemImage">
                <img
                    className="imageItem"
                    src={prod.prod.image}
                    alt="product"
                />
            </div>
            <h1>{prod.prod.title.slice(0, 20)}</h1>
            <span style={{ maxHeight: "77px", overflow: "hidden" }}>
                {prod.prod.description}
            </span>
            <button className="addToBasket" onClick={() => dispatch(addToBasket(prod.prod))}>
                В корзину  
                <img src={basketIcon} className="basket"/>
            </button>
            <Link
                to={`/products/${prod.prod.id}`}
                onClick={() => {dispatch(addVisitedProduct(prod.prod)), dispatch(setProductById(prod.prod))}}
            >
                Просмотреть...
            </Link>
        </div>
    );
};

export default ProductItem;
