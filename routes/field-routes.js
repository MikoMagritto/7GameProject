const express = require("express");
const Field = require("../models/Field");
const fieldRoutes = express.Router();
const fileUpload = require('../configs/cloudinary.config');



fieldRoutes.get("/", (req, res, next) => {
  Field.find()
    .then(AllFieldsFromDb => {
      // console.log("AllFieldsFromDb", AllFieldsFromDb)
      res.json(AllFieldsFromDb);
    })
    .catch(err => console.log(err))
})


fieldRoutes.post("/createFields", fileUpload.single("img"), (req, res, next) => {
  const organisator = req.session.currentUser;
  if (req.session.currentUser.role === "admin") {
    const {
      name, longitude, lattitude, availibility } = req.body;

    // if (!name || !availibility) {
    //   res.status(400).json({ message: "informations missing" });
    //   return;
    // }

    const aNewField = new Field({
      organisator: req.session.currentUser._id,
      name: name,
      longitude: longitude,
      lattitude: lattitude,
      img: req.file.path,
      availibility: availibility,
    })

    aNewField
      .save()
      .then(() => {
        res.status(200).json(aNewField)
      })

  }
  else {
    res.status(403).json({ message: 'not author autorized' })
  }
})

fieldRoutes.put("/edit/:id", (req, res, next) => {

  if (req.session.currentUser.role === "admin") {


    const { name, longitude, lattitude, availibility } = req.body;

    const data = { name, longitude, lattitude, availibility };

    console.log('data is : ', data);

    const id = req.params.id;
    console.log(id);

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
        console.log("new Field", newField);
        res.status(200).json(newField);
      })
      .catch(next);
  } else {
    res.status(403).json({ message: 'not author autorized' })
  }
});

fieldRoutes.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  Field.findByIdAndDelete(id).then(() => res.redirect('/')).catch(error => console.log(error));
});

module.exports = fieldRoutes;
