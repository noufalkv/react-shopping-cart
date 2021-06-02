import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModels.js';
import User from '../models/userModels.js';

const productRouter = express.Router();

productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        // await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.send({ createdProducts });

    })
);

productRouter.get('/',
expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.send(product);
}));

productRouter.get('/:id',
expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product)
    {
        res.send(product);
    }
    else{
       res.status(404).send( {message: ' Product Not found'} )
    }
    
}))



export default productRouter;