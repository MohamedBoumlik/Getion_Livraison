const Command = require('../../models/Command.model');
const axios = require('axios')
const nodemailer = require('nodemailer');
const Driver = require('../../models/Driver.model');

// ------------------- Mail ---------------------

EMAIL = (email)=>{

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testcoding975@gmail.com',
      pass: 'testCoding1998'
    }
  });
    
  var mailOptions = {
    from: 'testcoding975@gmail.com',
    to: email,
    subject: 'Command ',
    text: 'You have a new command'
  };
    
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// ------------------- create -------------------

exports.create = async(req, res) => {

  let distance = await axios(`https://www.distance24.org/route.json?stops=${req.body.villeD}|${req.body.villeA}`)

  let prix = req.body.poid*40;

  if(req.body.poid > 3){
    prix =(40*3) + (req.body.poid - 3) * 5
  };
  
  const command = new Command({
    Nom:  req.body.name,
    VilleD: req.body.villeD,
    VilleA: req.body.villeA,
    Poid: req.body.poid,
    Prix: prix,
    Distance: distance.data.distance+' KM',
    Status:  'En cour',
  });

  command
    .save()
    .then(async(data) => {
      res.json(data)
      const driver = await Driver.find();

      // Sending email to the drivers
      
      driver.forEach(element => {

        if (element.Vehicule == 'car' && req.body.poid > 0 && req.body.poid <= 200 ) {

          EMAIL(element.email);
          
        }else if (element.Vehicule == 'PetitCamio' && req.body.poid > 200 && req.body.poid <= 800 ) {

          EMAIL(element.email);

        } else if (element.Vehicule == 'GrandCamio' && req.body.poid > 800 && req.body.poid <= 1600 ) {

          EMAIL(element.email);

        }

      })

    })
    .catch(err => console.log(err));

};

// ------------------- fetch -------------------

exports.findAll = async(req,res) => {

  await Command.find().populate('Driver')
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