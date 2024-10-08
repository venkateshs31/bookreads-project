const express = require('express')
const app = express()
const port = process.env.PORT || 7000;
const cors = require('cors')

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://reads-bookstore:reads-bookstore@mern-e-commerce.y0dlh.mongodb.net/?retryWrites=true&w=majority&appName=MERN-E-commerce";

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
    await client.connect();

    // create a collection document
    const books = client.db("bookInventory").collection("books");

    // insert a book to db: post method
    app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await books.insertOne(data);
        res.send(result); 
    }) 

    // get all books from database
    // app.get("/all-books", async(req, res) => {
    //     const book = books.find();
    //     const result = await book.toArray();
    //     res.send(result);
    // })

    // update a book data : patch or update method
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        const updateBookdata = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              ...updateBookdata
            },
          };

        //   update
        const result = await books.updateOne(filter, updateDoc, options);
        res.send(result);
        })

        // delete
        app.delete("/book/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await books.deleteOne(filter);
            res.send(result);
        })

        // find category wise books
        app.get("/all-books", async(req, res) =>{
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const result = await books.find(query).toArray();
            res.send(result);
        })

        // to get single book
        app.get("/book/:id", async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await books.findOne(filter);
            res.send(result);
        })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})