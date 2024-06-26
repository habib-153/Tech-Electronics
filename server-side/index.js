const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5000;

// middle
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.29d8nwh.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const brandProdCollection = client.db('brandProdDB').collection('brandProd');

    app.get('/brandProd', async(req, res)=>{
        const result = await brandProdCollection.find().toArray();
        res.send(result);
    })

    app.get('/brandProd/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await brandProdCollection.findOne(query);
        res.send(result);
    })
    
    app.post('/brandProd', async(req, res)=>{
        const newProduct = req.body;
        //console.log(newProduct);
        const result = await brandProdCollection.insertOne(newProduct);
        res.send(result);
    })
    
    app.put('/brandProd/:id', async(req, res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const options = { upsert: true};
        const updatedProd = req.body;
        const product = {
            $set:{
              product_name: updatedProd.product_name,
              product_image: updatedProd.product_image,
              price: updatedProd.price,
              brand_name: updatedProd.brand_name,
              brand_image: updatedProd.brand_image,
              rating: updatedProd.rating,
              type: updatedProd.type
            }
          }
          const result = await brandProdCollection.updateOne(filter, product, options);
          res.send(result)
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('Server is running')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

