const {WeaponsList} =require('./3025Weapons.js');
const { MongoClient } = require('mongodb')
const {DatabaseClient} = require('./dababaseConnect')

const connToDb = new DatabaseClient('mongodb://localhost:27017' ,'Batt_Proj_Equip' , 'Equipment')

async function seedDB () {
    await connToDb.removeAllFromDB(); //Clear the collection before re-seeding
    await connToDb.addManyToDB(WeaponsList);
    
}

seedDB();

