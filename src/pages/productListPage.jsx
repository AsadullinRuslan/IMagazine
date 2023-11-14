import "../App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/product/ProductItem";
import Title from "../components/title/Title";
import { getProducts } from "../slice/productListSlice";
import Loader from "../components/loader/Loader";
// import CategoryItem from "../components/category/CategoryItem";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
// ];

const categoryList = [
    { id: 1, value: "electronics", label: "electronics" },
    { id: 2, value: "jewelery", label: "jewelery"  },
    { id: 3, value: "men's clothing", label: "men's clothing"  },
    { id: 4, value: "women's clothing", label: "women's clothing"  },
];

const ProductList = () => {
    const [category, setCategory] = useState('');

    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    });

    const editCategory = (category) => {
        setCategory(category && category.value)
    };

    const animatedComponents = makeAnimated();

    return (
        <div className="container">
            <div>
                <Title>Магазин товаров для дома</Title>
            </div>

            <p style={{ margin: 0 }}>Выберете категорию: </p>

            <div className="drop-down">
                <Select
                    placeholder='Select category...'
                    onChange={editCategory}
                    name="categories"
                    id="categories-select"
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    // isMulti
                    options={categoryList}
                    isClearable={true}
                />
            </div>
            <br />

            <div className="listItem">
                {products.length === 0 ? (
                    <Loader />
                ) : category ? (
                    products
                        .filter((item) => item.category === category)
                        .map((prod) => (
                            <ProductItem prod={prod} key={prod.id} />
                        ))
                ) : (
                    products.map((prod) => (
                        <ProductItem prod={prod} key={prod.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
