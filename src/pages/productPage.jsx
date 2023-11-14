import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import fetchProducts from "../fetch/fetchProducts";
// import { useParams } from "react-router-dom";
import ProductById from "../components/productById/productById";
import { getProductById } from "../slice/productSlice";

const ProductPage = () => {
    
    // const [product1, setProduct] = useState([]);

    // const params = useParams();
    
    // const getProductById = async (id) => {
    //     const res = await fetchProducts.getById(id);
    //     setProduct(res);
    // };
    
    const product = useSelector(state => state.singleProduct.productId)
    const dispatch = useDispatch()

    console.log(product)

    useEffect(() => {
        dispatch(getProductById(product.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ProductById product={product} />;
};

export default ProductPage;
