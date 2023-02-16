import React, {useState, useEffect} from 'react'
import axios from 'axios'


/*

The code example here is good for only loading one currentUserLoader, however, it only has one functionality and not allow to load any user.

See UserLoader.js for example of how to dynamically load different users info

*/

export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null)

    // load data from the server 
    // it can only load a single user
    useEffect(() => {
        (async () => {
            console.log('current user loader rendered')
            const response = await axios.get('/current-user')
            const currentUser = response.data
            setUser(currentUser)
        })()

    }, []) // only execute when first rendered

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