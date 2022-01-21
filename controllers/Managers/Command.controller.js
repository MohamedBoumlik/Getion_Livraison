const Command = require('../../models/Command.model');
const axios = require('axios')
const nodemailer = require('nodemailer');
const Driver = require('../../models/Driver.model');

// ------------------- create -------------------

exports.create = async(req, res) => {

  let distance = await axios(`https://www.distance24.org/route.json?stops=${req.body.villeD}|${req.body.villeA}`)

  let prix = req.body.poid*40;

  if(req.body.piod > 3){
    prix =(40*3) + (req.body.poids - 3) * 5
  };

  const command = new Command({
    Nom:  req.body.name,
    VilleD: req.body.villeD,
    VilleA: req.body.villeA,
    Poid: req.body.poid,
    Prix: prix,
    Distance: distance.data.distance+' KM',
    Status:  req.body.status,
  });

  command
    .save(command)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

};

// ------------------- fetch -------------------

exports.findAll = (req,res) => {

  Command.find()
  .then(data => { 
    res.json(data)
  }) 
  .catch(err => { 
    console.log(err);
  })

};

// ------------------- delete -------------------

exports.delete = (req,res) => {
  const id = req.params._id;
  const driver = Driver.find()

  Command.findByIdAndRemove(id)
  .then(data => {

    if (!data) {
      res.status(404).send({
        message: `Command not found!`
      });
    } else {
      res.send({
        message: "Command deleted successfully!"
      });
    }

  })
  .catch(err => console.log(err));

};

// ------------------- update -------------------

exports.update = (req,res) => {

  const id = req.params._id;

  Command.findByIdAndUpdate(id, req.body) 
  .then(data => {

    if (!data) {
      
      res.status(404).send({
        message: `Command not found!`
      });

    } else {
      res.send({
        message: "Command updated successfully!"
      });
    }
    
  })
  .catch(err => console.log(err));

} 