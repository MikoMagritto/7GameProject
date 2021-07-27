const mongoose = require("mongoose");

const Field = require("../models/Field.model.js");

//mongoose..connect('mongodb://localhost/sevengameproject',{

mongoose.connect(`mongodb+srv://ChloeT:AxC36oVEkWZF775W@cluster0.jwh3k.mongodb.net/sevengameproject`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("victoire") })
  .catch((err) => console.log(err));



User.insertMany(users)
  .then(function (usersFromDB) {
    console.log(`${usersFromDB.length} créés en base`);
  })
  .catch((err) => console.log(err));

const fields = [{

  name: {type : "Playground Duperré"},
    longitude: {type:"2.3354309" },
    lattitude:{ type: "48.8822048"},
    img:{type: "/home/chloe/ironhack/7GameProject/public/images/fields/duperre.jpg"},
    availibility:{ type: Date }
},

{name: { type :"Playground Paris 14"},
longitude: { type: "2.3070487" },
lattitude:{type :"48.8288236"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/14e.jpg" },
availibility:{ type: Date },
},
  
{name: { type :"Playground Montsouris"},
longitude: { type: "2.3258708" },
lattitude:{type :"48.8231764"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date }
},

{name: { type :"Playground Charriere"},
longitude: { type: "2.3816903" },
lattitude:{type :"48.8534879"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Montsouris"},
longitude: { type: "2.3258708" },
lattitude:{type :"48.8231764"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Montsouris"},
longitude: { type: "2.3258708" },
lattitude:{type :"48.8231764"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Montsouris"},
longitude: { type: "2.3258708" },
lattitude:{type :"48.8231764"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Montsouris"},
longitude: { type: "2.3258708" },
lattitude:{type :"48.8231764"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/montsouris.jpg" },
availibility:{ type: Date },


];

Field.insertMany(fields)
  .then(function (fieldsFromDB) {
    console.log(`${fieldsFromDB.length} créés en base`);
  })
  .catch((err) => console.log(err));