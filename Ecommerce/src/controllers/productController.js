const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        return res.render('./products/products', {products: products});
    },
    detail: (req, res) => {
		let id = parseInt(req.params.id)
		const product = products.filter(p => p.id == id)
		res.render('./products/detail', {product: product})
    },
    productCart: (req, res) => {
        return res.render('./products/productCart');
    },
    create: (req, res) => {
        return res.render('./products/createForm');
    },
    edit: (req, res) => {
        let id = parseInt(req.params.id)
		const product = products.filter(p => p.id == id)
        return res.render('./products/editForm', {product: product});
    }
}

module.exports = controller;