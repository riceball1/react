import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null)

    // load data from the server 
    // it cxan only load a single user
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            const currentUser = response.data
            setUser(currentUser)
        })()

    }, [userId]) // run when userId changes

    // pass information to its children
    return children.length > 0 ? (
        <>
            {React.Children.map(children, child => {
                // safety check it is a child component
                if (React.isValidElement(child)) {
                    // then add user state into that user prop
                    return React.cloneElement(child, {user})
                }

                return child
            })}
        
        </>
    ) : <p>Loading...</p>
}