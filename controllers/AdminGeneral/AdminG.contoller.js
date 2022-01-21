const AdminG = require('../../models/AdminG.model');
const Manager = require('../../models/Manager.model');
// ------------------- create -------------------

exports.create = (req, res) => {

  var password = (Math.random() + 1).toString(36).substring(8);

  // Create admin
  const manager = new Manager({
    name:  req.body.name, // String is shorthand for {type: String}
    email: req.body.email,
    password:  password
  });

  // Save admin in the database 
  manager
    .save(manager)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

};

// ------------------- fetch -------------------

exports.findAll = (req,res) => {

  Manager.find()
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

  Manager.findByIdAndRemove(id)
  .then(data => {

    if (!data) {
      res.status(404).send({
        message: `Manager not found!`
      });
    } else {
      res.send({
        message: "Manager deleted successfully!"
      });
    }

  })
  .catch(err => console.log(err));

};

// ------------------- update -------------------

exports.update = (req,res) => {

  const id = req.params._id;

  Manager.findByIdAndUpdate(id, req.body) 
  .then(data => {

    if (!data) {
      
      res.status(404).send({
        message: `Manager not found!`
      });

    } else {
      res.send({
        message: "Manager updated successfully!"
      });
    }
    
  })
  .catch(err => console.log(err));

} 