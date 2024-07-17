const { MongoClient } = require('mongodb')

class DatabaseClient {
    constructor(connString, db, coll){
        this.database = db;
        this.connString = connString;
        this.collection = coll;
        this.client = new MongoClient(this.connString);
    }

    async connect() {
        await this.client.connect();
        console.log('Connected successfully to server');
    }

    async close() {
        await this.client.close();
        console.log('Disconnected from server');
    }
    
  
    async addToDB (entry) {      //CREATE
        try {
            await this.connect();
            const db = this.client.db(this.database);
            const collection = db.collection(this.collection);
            const newUser = await collection.insertOne (entry);
            return "Added to Database!";
        } catch (e) {
            throw e;
        }
        finally {
            await this.close(); 
        }
    }

    async addManyToDB (entry) {      //CREATE
        try {
            await this.connect();
            const db = this.client.db(this.database);
            const collection = db.collection(this.collection);
            const newUser = await collection.insertMany (entry);
            return "Added to Database!";
        } catch (e) {
            throw e;
        }
        finally {
            await this.close(); 
        }
    }

    async FindInDB (value, key) {      //READ
       try {
        await this.connect();
        const db = this.client.db(this.database);
        const collection = db.collection(this.collection);
        const foundDocument = await collection.findOne({ [key] : value})
            if (foundDocument){
                console.log("Document Found")
                return foundDocument;
            } 
            return foundDocument;
        } catch (e) {
            throw e;
        }
        finally {
            await this.close(); 
        }
    }

    async UpdateInDB (key, value, updateValue) {      //Update
        try {
         await this.connect();
         const db = this.client.db(this.database);
         const collection = db.collection(this.collection);
         const foundDocument = await collection.findOne({[key] : value})
         console.log(foundDocument);
         const clone = {...foundDocument, ...updateValue};
         console.log(clone);
        //  const newDocument = await collection.findOneAndReplace({[key] : value}, clone)
        //  const changedDocument = await collection.findOneAndUpdate({ [key] : keyValue}, {updateValue})
        //      if (changedDocument){
        //          console.log("Document Changed")
        //          return changedDocument;
        //      } 
         } catch (e) {
             throw e;
         }
         finally {
             await this.close(); 
         }
     }


    async removeFromDB (entry) {   //DELETE
        try{
        await this.connect();
        const db = this.client.db(this.database);
        const collection = db.collection(this.collection);
        const eUser = await collection.findOne({Username : entry.Username})
            if (eUser) {
                await collection.deleteOne(eUser);
                await this.client.close(); 
                return "User Deleted From Database";
            }
            else{
                return "User does not exist!"
            }
        } catch (e) {
            throw e;
        }
        finally {
        await this.close(); 
        }
    }
    async removeAllFromDB () {   //DELETE
        try{
        await this.connect();
        const db = this.client.db(this.database);
        const collection = db.collection(this.collection);
        const deleteFromDb = await collection.deleteMany({})
                return('Collection Reset!')
        } catch (e) {
            throw e;
        }
        finally {
            await this.close(); 
        }
    }
}

 module.exports = {DatabaseClient}