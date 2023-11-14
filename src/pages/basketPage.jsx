import { useSelector } from 'react-redux';
import BasketList from '../components/basket/basketList';

const BasketPage = () => {

    const baskets = useSelector(state => state.basket.baskets)

    return (
        <div>
            <div className="container">
                <h2>Список товаров в корзине</h2>
                    {
                        baskets.length === 0 
                        ?
                            <h3 style={{color:'gray'}}>Ваша корзина пуста</h3>
                        :
                            baskets.map((el) => (
                                <BasketList el={el} key={el.id} />
                            ))
                    }
            </div>
        </div>
    );
}

export default BasketPage;
