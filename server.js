const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='toyStoreApplication'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('Products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();