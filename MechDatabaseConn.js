const { DatabaseClient } = require( "./dababaseConnect")

class MechDataBaseClient extends DatabaseClient {
    constructor(connString){
        this.connString = connString;
        this.client = new MongoClient(this.connString);
    }

    async addToMechDB (entry) {      //CREATE
        try {
            await this.connect();
            const db = this.client.db('Batt_Proj');
            const collection = db.collection('Mechs"');
            const newUser = await collection.insertOne (entry);
            return "Added to Database!";
        } catch (e) {
            throw e;
        }
        finally {
            await this.close(); 
        }
    }



    

} 

module.exports = MechDataBaseClient;