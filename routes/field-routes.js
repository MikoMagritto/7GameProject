const express = require("express");
const Field = require("../models/Field");
const fieldRoutes = express.Router();



fieldRoutes.get("/",(req,res,next)=>{
  Field.find()
    .then(AllFieldFromDb => {
      console.log("AllFieldsFromDb", AllFieldsFromDb)
      res.json(AllFieldsFromDb);
    })
    .catch(err => console.log(err))
})


fieldRoutes.post("/createFields", (req, res, next) => {
  const organisator = req.session.currentUser;
  if (req.session.currentUser.role==="admin"){
  const {
    name, longitude, lattitude, img, availibility} = req.body;

  // if (!name || !availibility) {
  //   res.status(400).json({ message: "informations missing" });
  //   return;
  // }

  const aNewField = new Field({
    organisator: req.session.currentUser._id,
    name: name,
    longitude: longitude,
    lattitude : lattitude,
    // img: img,
    availibility : availibility,
  })

  aNewField
  .save()
  .then(()=>{
    res.status(200).json(aNewField)
  })

}
else{
  res.status(403).json({message:'not author autorized'})
}
})

fieldRoutes.put("/edit/:id", (req, res, next) => {
  //console.log("editRoad")
  const organisator = req.session.currentUser;

  const { name, longitude, lattitude, img, availibility} = req.body;

  const data = { name, longitude, lattitude, img, availibility};

  console.log('data is : ', data);

  const id = req.params.id;
  //console.log(id);

  if (!req.session.currentUser) {
    res.status(401).json({ message: "You need to be logged in!" });
    return;
  }
  if (req.file) {
    data.img = req.file.path;
  }
  Field.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true }
  )
    .then((newField) => {
      console.log("new user", newField);
      res.status(200).json(newField);
    })
    .catch(next);
});

fieldRoutes.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  Fields.findByIdAndDelete(id).then(() => res.redirect('/')).catch(error => console.log(error));
});

module.exports = fieldRoutes;
