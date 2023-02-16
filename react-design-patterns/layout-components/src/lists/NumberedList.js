export const NumberedList = ({items, resourceName, itemComponent: ItemComponent}) => {

    return (
        <>
            {items.map((item, i) => {
                // {...{[resourceName]: item}} e.g., person={item}
                return (
                <>
                <h4>{i + 1}</h4>
                <ItemComponent key={i} {...{[resourceName]: item}} />
                </>
                )
            })}
        </>
    )

}