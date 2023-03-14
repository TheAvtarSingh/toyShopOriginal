const {MongoClient} = require('mongodb')
const url= 'mongodb+srv://toyShop:Avtar123@toyshopcluster.iulurni.mongodb.net/?retryWrites=true&w=majority';
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