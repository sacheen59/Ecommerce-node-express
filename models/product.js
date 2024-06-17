const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'product.json');

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })

    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}