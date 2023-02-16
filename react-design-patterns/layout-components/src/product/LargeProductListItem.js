export const LargeProductListItem = ({ product }) => {
    // destructure the information needed
    const { name, price, rating, description } = product;

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    )

}