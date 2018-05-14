const MongoClient = require('mongodb').MongoClient
ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('test');

    // Iniciar servidor
    app.listen(5000);
    console.log("Escuchando servidor")
});

app.get('/shopping_cart', (req, res) => {
    res.render('shopping_cart', {});
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {});
})

app.get('/', (req, res) => {
    var prod = db.collection('videocards')
        .find();

    if (req.query.memory)
        prod.filter({
            memory: req.query.memory
        });

    if (req.query.category)
        prod.filter({
            category: req.query.category
        });

    if (req.query.gpu)
        prod.filter({
            gpu: req.query.gpu
        });

    if (req.query.min && req.query.max)
        prod.filter({
            price: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)
            }
        });
    prod.toArray((err, result) => {
        res.render('products', {
            videocards: result
        });
    })
});


app.get('/product', (req, res) => {
    res.render('product', {});
})

app.get('/product/:nombre', (req, res) => {
    db.collection('videocards').find({
        name: req.params.name
    }).toArray((err, result) => res.render('product', {
        tarjetica: result[0]
    }))
});


app.get('/productosPorId', (req, res) => {
    var arreglo = req.query.id.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var prod = db.collection('videocards')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});