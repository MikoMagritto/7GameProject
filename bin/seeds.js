const mongoose = require("mongoose");

const Field = require("../models/Field");

mongoose.connect('mongodb://localhost/sevengameproject',{

// mongoose.connect(`mongodb+srv://ChloeT:AxC36oVEkWZF775W@cluster0.jwh3k.mongodb.net/sevengameproject`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("victoire") })
  .catch((err) => console.log(err));




const fields = [{

  name: "Playground Duperré",
  longitude: "2.3354309",
  lattitude: "48.8822048",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/image_ym09z4.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Paris 14",
  longitude: "2.3070487",
  lattitude: "48.8288236",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581099/14e_nr5njf.jpg",
  availibility: "De 08h à 18h",
},

{
  name: "Playground Montsouris",
  longitude: "2.3258708",
  lattitude: "48.8231764",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/montsouris_lyndvs.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Charriere",
  longitude: "2.3816903",
  lattitude: "48.8534879",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/charriere_u7owec.png",
  availibility: "De 10h à 20h",
},

{
  name: "Playground Weill-Hallé",
  longitude: "2.3793764",
  lattitude: "48.8292883",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/weill_gjyxky.jpg",
  availibility: "De 09h à 19h",
},

{
  name: "Playground Blaise Cendrars",
  longitude: "2.3443576",
  lattitude: "48.861984",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/blaise_dg9x4v.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Jemmape",
  longitude: "2.3656321",
  lattitude: "48.8767436",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/jemmape_ibuz76.jpg",
  availibility: "24h/24h",
},

{
  name: "Playground Choisy",
  longitude: "2.3584463",
  lattitude: "48.8277698",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/choisy_uy9rpr.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Luxembourg",
  longitude: "2.3325491",
  lattitude: "48.8482236",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/luxembourg_pd8yhj.jpg",
  availibility: "De 09h à 20h",
},

{
  name: "Playground Glaciere",
  longitude: "2.3424762",
  lattitude: "48.831268",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/glaciere_yl3uyc.jpg",
  availibility: "24h/24h",
},

{
  name: "Playground Grenelle",
  longitude: "2.2914439",
  lattitude: "48.8514602",
  img: "https://res-console.cloudinary.com/dp1lq7mea/thumbnails/v1/image/upload/v1627581101/Z3JlbmVsbGVfamJ0ZGZu/preview",
  availibility: "De 08h à 20h",
},

{
  name: "Playground Roquette",
  longitude: "2.3856989",
  lattitude: "48.8593115",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/roquette_klkzdm.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Bir-Hakeim",
  longitude: "2.2933029",
  lattitude: "48.8558607",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581099/bir-hakeim_eeh866.webp",
  availibility: "24h/24h",
},

{
  name: "Playground Champs de Mars",
  longitude: "2.3036154",
  lattitude: "48.8539424",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581099/champs_de_mars_bnmojy.jpg",
  availibility: "24h/24h",
},

{
  name: "Playground Saint Paul",
  longitude: "2.3609262",
  lattitude: "48.8540242",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/St_Paul_nzpqdz.jpg",
  availibility: "De 10h à 19h",
},

{
  name: "Playground Baudricourt",
  longitude: "2.3623413",
  lattitude: "48.8255138",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/moureu_e6ek2s.jpg",
  availibility: "De 09h à 19h",
},

{
  name: "Playground Factory",
  longitude: "2.3036154",
  lattitude: "48.8539424",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/factory_jwzhd1.jpg",
  availibility: "De 10h à 18h",
},

{
  name: "Playground Trevise",
  longitude: "2.3452803",
  lattitude: "48.8734829",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/trivse_fd75vt.jpg",
  availibility: "De 09h à 20h",
},

{
  name: "Playground Curial",
  longitude: "2.367224",
  lattitude: "48.8843156",
  img: "https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/Curial_pdablf.jpg",
  availibility: "De 08h à 19h",
},


];

Field.insertMany(fields)
  .then(function (fieldsFromDB) {
    console.log(`${fieldsFromDB.length} créés en base`);
  })
  .catch((err) => console.log(err));
