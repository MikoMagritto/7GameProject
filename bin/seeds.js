const mongoose = require("mongoose");

const Field = require("../models/Field.model.js");

mongoose.connect('mongodb://localhost/sevengameproject',{

//  mongoose.connect(`mongodb+srv://ChloeT:AxC36oVEkWZF775W@cluster0.jwh3k.mongodb.net/sevengameproject`, {
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
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/charriere.png" },
availibility:{ type: Date },
},

{name: { type :"Playground Weill-Hallé"},
longitude: { type: "2.3793764" },
lattitude:{type :"48.8292883"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/weill.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Blaise Cendrars"},
longitude: { type: "2.3443576" },
lattitude:{type :"48.861984"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/blaise.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Jemmape"},
longitude: { type: "2.3656321" },
lattitude:{type :"48.8767436"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/jemmape.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Choisy"},
longitude: { type: "2.3584463" },
lattitude:{type :"48.8277698	"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/choisy.jpeg" },
availibility:{ type: Date },

},
{name: { type :"Playground Luxembourg"},
longitude: { type: "2.3325491" },
lattitude:{type :"48.8482236"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/luxembourg.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Glaciere"},
longitude: { type: "2.3424762" },
lattitude:{type :"48.831268"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/glaciere.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Grenelle"},
longitude: { type: "2.2914439" },
lattitude:{type :"48.8514602"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/grenelle.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Roquette"},
longitude: { type: "2.3856989" },
lattitude:{type :"48.8593115"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/roquette.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Bir-Hakeim"},
longitude: { type: "2.2933029" },
lattitude:{type :"48.8558607"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/bir-hakeim.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Champs de Mars"},
longitude: { type: "2.3036154" },
lattitude:{type :"48.8539424"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/champs de mars.jpg" },
availibility:{ type: Date },
},
{name: { type :"Playground Saint Paul"},
longitude: { type: "2.3609262" },
lattitude:{type :"48.8540242"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/St Paul.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Baudricourt"},
longitude: { type: "2.3623413" },
lattitude:{type :"48.8255138"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/moureu.jpg" },
availibility:{ type: Date },
},

{name: { type :"Playground Factory"},
longitude: { type: "2.3036154" },
lattitude:{type :"48.8539424"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/factory.jpg" },
availibility:{ type: Date },
},


{name: { type :"Playground Trevise"},
longitude: { type: "2.3452803" },
lattitude:{type :"48.8734829"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/trevise.jpg" },
availibility:{ type: Date },
},



{name: { type :"Playground Curial"},
longitude: { type: "2.367224" },
lattitude:{type :"48.8843156"},
img:{ type: "/home/chloe/ironhack/7GameProject/public/images/fields/Curial.jpg" },
availibility:{ type: Date },
},


];

Field.insertMany(fields)
  .then(function (fieldsFromDB) {
    console.log(`${fieldsFromDB.length} créés en base`);
  })
  .catch((err) => console.log(err));