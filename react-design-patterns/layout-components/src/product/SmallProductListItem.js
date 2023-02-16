export const SmallProductListItem = ({product}) => {
    // destructure the information needed
    const {name, price} = product;

    return (
    <h3>{name} - {price}</h3>
     )

}