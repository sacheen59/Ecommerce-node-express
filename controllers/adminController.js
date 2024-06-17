const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product',
        {
            pageTitle: "Admin || Add Product",
            path: "/admin/add-product"
        })
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    Product.fetchAll((products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: "Admin || products",
            path: '/admin-products',
            hasProducts: products.length > 0,
        })
    }));
}