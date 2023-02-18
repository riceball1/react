// Generic component that loads any type of resource


import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const ResourceLoader = ({resourceUrl, resourceName, children}) => {
    const [state, setState] = useState(null)

    // load data from the server 
    // it cxan only load a single user
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setState(response.data)
        })()

    }, [resourceUrl]) 

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