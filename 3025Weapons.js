const { v4: uuidv4 } =  require('uuid');
const WeaponsList = [
    {   
        _id: uuidv4(), 
        Name : "Large Laser",
        Cost : 123,
        Ammo_Per_Ton_Cost : 0,
        Tons : 5,
        Heat : 8,
        Damage : 8,
        Critical_Slots: 2,
        Ammo_Per_Ton: "N/A",
        MCost: 100000,
        MCostAmmo: 0,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 5
            },
            Medium_Range: {
                Minimum : 6,
                Maximum : 10
            },
            Long_Range: {
                Minimum : 11,
                Maximum : 15
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Medium Laser",
        Cost : 46,
        Ammo_Per_Ton_Cost : 0,
        Tons : 1,
        Heat : 3,
        Damage : 5,
        Critical_Slots: 1,
        Ammo_Per_Ton: "N/A",
        MCost: 40000,
        MCostAmmo: 0,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 3
            },
            Medium_Range: {
                Minimum : 4,
                Maximum : 6            },
            Long_Range: {
                Minimum : 7,
                Maximum : 9
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Small Laser",
        Cost : 9,
        Ammo_Per_Ton_Cost : 0,
        Tons : 0.5,
        Heat : 1,
        Damage : 3,
        Critical_Slots: 1,
        Ammo_Per_Ton: "N/A",
        MCost: 11250,
        MCostAmmo: 0,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 1
            },
            Medium_Range: {
                Minimum : 2,
                Maximum : 2
            },
            Long_Range: {
                Minimum : 3,
                Maximum : 3
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "PPC",
        Cost : 176,
        Ammo_Per_Ton_Cost : 0,
        Tons : 7,
        Heat : 10,
        Damage : 8,
        Critical_Slots: 2,
        Ammo_Per_Ton: "N/A",
        MCost: 200000,
        MCostAmmo: 0,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 5
            },
            Medium_Range: {
                Minimum : 6,
                Maximum : 10
            },
            Long_Range: {
                Minimum : 11,
                Maximum : 15
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Flamer",
        Cost : 6,
        Ammo_Per_Ton_Cost : 0,
        Tons : 1,
        Heat : 3,
        Damage : 2,
        Critical_Slots: 1,
        Ammo_Per_Ton: "N/A",
        MCost: 7500,
        MCostAmmo: 0,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 1
            },
            Medium_Range: {
                Minimum : 2,
                Maximum : 2
            },
            Long_Range: {
                Minimum : 3,
                Maximum : 3
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "LRM-5",
        Cost : 55,
        Ammo_Per_Ton_Cost : 6,
        Tons : 2,
        Heat : 2,
        Damage : "1/MSL",
        Critical_Slots: 1,
        Ammo_Per_Ton: 24,
        MCost: 30000,
        MCostAmmo: 30000,
        Range_Bands : {
            Minimum_Range: 6,
            Short_Range: {
                Minimum : 1,
                Maximum : 7
            },
            Medium_Range: {
                Minimum : 8,
                Maximum : 14
            },
            Long_Range: {
                Minimum : 15,
                Maximum : 21
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "LRM-10",
        Cost : 90,
        Ammo_Per_Ton_Cost : 11,
        Tons : 5,
        Heat : 4,
        Damage : "1/MSL",
        Critical_Slots: 2,
        Ammo_Per_Ton: 12,
        MCost: 100000,
        MCostAmmo: 30000,
        Range_Bands : {
            Minimum_Range: 6,
            Short_Range: {
                Minimum : 1,
                Maximum : 7
            },
            Medium_Range: {
                Minimum : 8,
                Maximum : 14
            },
            Long_Range: {
                Minimum : 15,
                Maximum : 21
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "LRM-15",
        Cost :136,
        Ammo_Per_Ton_Cost : 17,
        Tons : 7,
        Heat : 5,
        Damage : "1/MSL",
        Critical_Slots: 3,
        Ammo_Per_Ton: 8,
        MCost: 175000,
        MCostAmmo: 30000,
        Range_Bands : {
            Minimum_Range: 6,
            Short_Range: {
                Minimum : 1,
                Maximum : 7
            },
            Medium_Range: {
                Minimum : 8,
                Maximum : 14
            },
            Long_Range: {
                Minimum : 15,
                Maximum : 21
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "LRM-15",
        Cost :136,
        Ammo_Per_Ton_Cost : 17,
        Tons : 7,
        Heat : 5,
        Damage : "1/MSL",
        Critical_Slots: 3,
        Ammo_Per_Ton: 8,
        MCost: 175000,
        MCostAmmo: 30000,
        Range_Bands : {
            Minimum_Range: 6,
            Short_Range: {
                Minimum : 1,
                Maximum : 7
            },
            Medium_Range: {
                Minimum : 8,
                Maximum : 14
            },
            Long_Range: {
                Minimum : 15,
                Maximum : 21
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "LRM-20",
        Cost :181,
        Ammo_Per_Ton_Cost : 23,
        Tons : 10,
        Heat : 6,
        Damage : "1/MSL",
        Critical_Slots: 5,
        Ammo_Per_Ton: 6,
        MCost: 250000,
        MCostAmmo: 30000,
        Range_Bands : {
            Minimum_Range: 6,
            Short_Range: {
                Minimum : 1,
                Maximum : 7
            },
            Medium_Range: {
                Minimum : 8,
                Maximum : 14
            },
            Long_Range: {
                Minimum : 15,
                Maximum : 21
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "SRM-2",
        Cost :21,
        Ammo_Per_Ton_Cost : 0,
        Tons : 1,
        Heat : 2,
        Damage : "2/MSL",
        Critical_Slots: 1,
        Ammo_Per_Ton:50,
        MCost: 10000,
        MCostAmmo: 27000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 3
            },
            Medium_Range: {
                Minimum : 4,
                Maximum : 6
            },
            Long_Range: {
                Minimum : 7,
                Maximum : 9
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "SRM-4",
        Cost :39,
        Ammo_Per_Ton_Cost : 0,
        Tons : 2,
        Heat : 3,
        Damage : "2/MSL",
        Critical_Slots: 1,
        Ammo_Per_Ton: 25,
        MCost: 60000,
        MCostAmmo: 27000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 3
            },
            Medium_Range: {
                Minimum : 4,
                Maximum : 6
            },
            Long_Range: {
                Minimum : 7,
                Maximum : 9
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "SRM-6",
        Cost :59,
        Ammo_Per_Ton_Cost : 0,
        Tons : 3,
        Heat : 4,
        Damage : "2/MSL",
        Critical_Slots: 2,
        Ammo_Per_Ton: 15,
        MCost: 80000,
        MCostAmmo: 27000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 3
            },
            Medium_Range: {
                Minimum : 4,
                Maximum : 6
            },
            Long_Range: {
                Minimum : 7,
                Maximum : 9
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Autocannon/2",
        Cost :37,
        Ammo_Per_Ton_Cost : 5,
        Tons : 6,
        Heat : 1,
        Damage : 2,
        Critical_Slots: 1,
        Ammo_Per_Ton: 45,
        MCost: 75000,
        MCostAmmo: 1000,
        Range_Bands : {
            Minimum_Range: 4,
            Short_Range: {
                Minimum : 1,
                Maximum : 8
            },
            Medium_Range: {
                Minimum : 9,
                Maximum : 16
            },
            Long_Range: {
                Minimum : 17,
                Maximum : 24
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Autocannon/5",
        Cost :70,
        Ammo_Per_Ton_Cost : 9,
        Tons : 8,
        Heat : 1,
        Damage : 5,
        Critical_Slots: 4,
        Ammo_Per_Ton: 20,
        MCost: 125000,
        MCostAmmo: 4500,
        Range_Bands : {
            Minimum_Range: 3,
            Short_Range: {
                Minimum : 1,
                Maximum : 6
            },
            Medium_Range: {
                Minimum : 7,
                Maximum : 12
            },
            Long_Range: {
                Minimum : 13,
                Maximum : 18
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Autocannon/10",
        Cost :123,
        Ammo_Per_Ton_Cost : 15,
        Tons : 12,
        Heat : 3,
        Damage : 10,
        Critical_Slots: 7,
        Ammo_Per_Ton: 10,
        MCost: 200000,
        MCostAmmo: 6000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 5
            },
            Medium_Range: {
                Minimum : 6,
                Maximum : 10
            },
            Long_Range: {
                Minimum : 11,
                Maximum : 15
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Autocannon/20",
        Cost :178,
        Ammo_Per_Ton_Cost : 22,
        Tons : 14,
        Heat : 7,
        Damage : 20,
        Critical_Slots: 10,
        Ammo_Per_Ton: 5,
        MCost: 300000,
        MCostAmmo: 10000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 3
            },
            Medium_Range: {
                Minimum : 4,
                Maximum : 6
            },
            Long_Range: {
                Minimum : 7,
                Maximum : 9
            } 
        }
    },
    {   
        _id: uuidv4(), 
        Name : "Machine Gun",
        Cost :5,
        Ammo_Per_Ton_Cost : 1,
        Tons : 0.5,
        Heat : 0,
        Damage : 2,
        Critical_Slots: 1,
        Ammo_Per_Ton: 200,
        MCost: 5000,
        MCostAmmo: 1000,
        Range_Bands : {
            Minimum_Range: 0,
            Short_Range: {
                Minimum : 1,
                Maximum : 1
            },
            Medium_Range: {
                Minimum : 2,
                Maximum : 2
            },
            Long_Range: {
                Minimum : 3,
                Maximum : 3
            } 
        }
    },
    


]

module.exports = {WeaponsList}