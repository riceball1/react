// Good example of a container that you can pass dynamically the data source


import React, {useState, useEffect} from 'react'

// pass a getDataFunc 
export const DataSourceLoader = ({  getDataFunc = () => {}, resourceName, children}) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            // call the get data function
            const data = await getDataFunc();
            setState(data)
        })()

    }, [getDataFunc]) 

    // pass information to its children
    return children.length > 0 ? (
        <>
            {React.Children.map(children, child => {
                // safety check it is a child component
                if (React.isValidElement(child)) {
                    // then add user state into that user prop
                    return React.cloneElement(child, {[resourceName]: state})
                }

                return child
            })}
        
        </>
    ) : <p>Loading...</p>
}