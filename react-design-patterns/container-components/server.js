const express = require('express');

const app = express();

app.use(express.json())

let currentUser = {
    id: 3,
    name: 'Jane Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling']
}

let users = [{
    id: "1",
    name: 'Jane Doe',
    age: 24,
    hairColor: 'black',
    hobbies: ['surfing', 'hockey']
}, {
    id: "2",
    name: 'Malik Ramos',
    age: 33,
    hairColor: 'brown',
    hobbies: ['math', 'rock climbing']
}]

let products = [{
    sku: '0456',
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD Screen, a great deal',
    rating: 4.5
}, {
    sku: '0123',
    name: 'Soccer Ball',
    price: '$30',
    description: 'Used by the pros',
    rating: 4.2
}, {
    sku: '0789',
    name: 'Running Shoes',
    price: '$100',
    description: 'Run like the wind',
    rating: 3.8
}]


app.get('/current-user', (req, res) => {
    res.json(currentUser);
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;

    res.json(users.find(user => user.id === id))
})

app.post('/users/:id', (req, res) => {
    const {id} = req.params;
    const {user: updatedUser} = req.body;

    users = users.map(user => user.id === id ? updatedUser : null)

    res.json(users.find(user => user.id === id))
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;

    res.json(products.find(product => product.id === id))
})

app.get('/products', (req, res) => {
    res.json(products)
})


app.listen(8080, () => {
    console.log('App is listening on PORT 8080')
})