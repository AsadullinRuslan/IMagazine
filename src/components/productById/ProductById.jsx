import { useNavigate } from 'react-router-dom';
import './ProductById.css'

const ProductById = ( product ) => {
    // console.log(product)

    const navigate = useNavigate()

    const goBack = () => navigate('/')

    return (
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>{product.product.title}</h2>
                <div className="singleProductDescription">
                    <img
                        style={{ maxWidth: "350px" }}
                        src={product.product.image}
                        alt="image"
                        className="imageById"
                    />
                    <div className="description">
                        <p>{product.product.description}</p>
                        <h5>{`${product.product.category}`}</h5>
                        <h4>{`${product.product.price} $`}</h4>
                        {/* <h4>{`${product.rating.rate}`}</h4> */}
                        <button className='backBtn' onClick={goBack}>Назад</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductById;
