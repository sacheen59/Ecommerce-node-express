const Product = require('../models/product')



exports.getIndex = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: "Shop",
            path: '/',
            hasProducts: products.length > 0,
        })
    })
}

exports.getProduct = (req, res) => {
    Product.fetchAll((products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: "Shop",
            path: '/products',
            hasProducts: products.length > 0,
        })
    }));
}


exports.getCart = (req,res) => {
    res.render('shop/cart',{
        pageTitle: "Your Cart",
        path: '/cart'
    })
}

exports.getCheckout = (req,res)=>{
    res.render('shop/checkout',{
        pageTitle: "Checkout",
        path: '/checkout'
    })
}

