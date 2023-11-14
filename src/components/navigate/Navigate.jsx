import "./navigate.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import basketIcon from "../../img/free-icon-font-shopping-cart-3916598.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../modal/Modal";

const Navigate = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const counter = useSelector((state) => state.basket.baskets.length);
    console.log(modalIsOpen);

    return (
        <nav className="nav">
            <div className="nav-container">
                <div>
                    <Link to="/">
                        <img className="logo" src={logo} />
                    </Link>
                </div>
                <div className="nav-menu">
                    <button onClick={() => setIsOpen(!modalIsOpen)}>
                        Modal Window
                    </button>
                    {modalIsOpen && (
                        <div className="modal"><Modal /></div>
                    )}
                    <Link to="/">
                        <span>Каталог</span>
                    </Link>
                    <Link to="/basket" className="basketItem">
                        Корзина <img src={basketIcon} className="basket" />
                        <div className="counter">{counter}</div>
                    </Link>
                    <div className="caret"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navigate;
