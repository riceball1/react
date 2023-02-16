export const RegularList = ({items, resourceName, itemComponent: ItemComponent}) => {

    return (
        <>
            {items.map((item, i) => {
                // {...{[resourceName]: item}} e.g., person={item}
                return (<ItemComponent key={i} {...{[resourceName]: item}} />)
            })}
        </>
    )

}