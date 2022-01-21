const Driver = require('../../models/Driver.model');
// ------------------- create -------------------

exports.create = (req, res) => {

  var password = (Math.random() + 1).toString(36).substring(8);

  const driver = new Driver({
    name:  req.body.name, // String is shorthand for {type: String}
    email: req.body.email,
    password:  password
  });

  driver
    .save(driver)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

};

// ------------------- fetch -------------------

exports.findAll = (req,res) => {

  Driver.find()
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

  Driver.findByIdAndRemove(id)
  .then(data => {

    if (!data) {
      res.status(404).send({
        message: `Driver not found!`
      });
    } else {
      res.send({
        message: "Driver deleted successfully!"
      });
    }

  })
  .catch(err => console.log(err));

};

// ------------------- update -------------------

exports.update = (req,res) => {

  const id = req.params._id;

  Driver.findByIdAndUpdate(id, req.body) 
  .then(data => {

    if (!data) {
      
      res.status(404).send({
        message: `Driver not found!`
      });

    } else {
      res.send({
        message: "Driver updated successfully!"
      });
    }
    
  })
  .catch(err => console.log(err));

} 