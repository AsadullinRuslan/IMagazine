import './CategoryItem.css'

const CategoryItem = (item) => {

    return (
        <>
                {/* <option value="" disabled style={{color: 'gray'}}>Select category...</option>
                <option value="" placeholder='Choose Category...' > --- </option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men&apos;s clothing</option> */}
                {/* <option value="women's clothing">women&apos;s clothing</option> */}
                <option value={`${item.item.value}`}>{`${item.item.value}`}</option>
        </>
    );
};

export default CategoryItem;
