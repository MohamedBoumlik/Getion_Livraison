const Command = require('../../models/Command.model');
const Prime = require('../../models/Prime.model');


// ------------------- Accept/Refuse a command -------------------

exports.update = async(req,res) => {
    let date = new Date();
    let m = date.getMonth()+1;

    const id = req.params._id;
  
    Command.findByIdAndUpdate( {_id: id}, { Status: req.body.status, Driver: req.body.driver} ) 
    .then(data => {
  
      if (!data) {

        res.status(404).send({
          message: `Something went wrong !!`
        });

      } else {

        res.send({
          message: "Command updated successfully!"
        });
        const prime = new Prime({
          Command_id: id,
          Driver_id: req.body.driver,
          Month: m
        });
        prime.save()

      }
      
    })
    .catch(err => console.log(err));
  
}