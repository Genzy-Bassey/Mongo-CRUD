const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const IP = process.env.IP || 3500;
app.get (`/`, (req, res) =>{
    res.send ('Testing Express Server!');
});

app.listen(PORT, IP, () => {
    console.log(`The Server is running on at: http://localhost:${PORT}/`)
});


const { MongoClient }= require("mongodb");
const uri = "mongodb://localhost:3500/";
const client = new
MongoClient(uri);
async function run() {
    try{
        await client.connect();
        await client.db("admin").command({ping: 1 });
        console.log("connected Successfully");
    } finally{
        await client.close();
    }
}
run().catch(console.dir);

// MongoClient.connect (url, (err, client) => {
//     if (!err) {
//         console.log("successfully connection with the server");
//     }
//     else
//         console.log("Error in the connectivity");
// })


const mongoose = require("mongoose");
const Router = require("./routes")


app.use(express.json());


mongoose.connect("mongodb://localhost:3500/usersdb",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
);

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error"));
db.once("open", function () {
    console.log("connected successfully");
});

app.use(Router);

