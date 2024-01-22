const express = require('express');

const app = express();

app.use(express.json());

const products = [{
    id: '123',
    name: 'Hat',
    price: '50.00',
}, {
    id: '234',
    name: 'Shoes',
    price: '60.00',
}, {
    id: '345',
    name: 'Pants',
    price: '120.00',
}];

const cartIds = ['123'];

app.use((req, res, next) => {
    setTimeout(next, 3000);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/cart', (req, res) => {
    res.json(cartIds);
});

app.post('/cart', (req, res) => {
    const { productId } = req.body;
    cartIds.push(productId);
    res.json(cartIds);
})

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});