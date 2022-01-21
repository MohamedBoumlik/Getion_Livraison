const Driver = require('../../models/Driver.model');
var jwt = require('jsonwebtoken');

exports.Driver_Auth = async(req,res) => {

  const found_driver = await Driver.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (!found_driver) {

    res.status(404).send({ message:'user not found !' })

  }else{

    const token = jwt.sign(
      { id: found_driver._id, email:found_driver.email, password:found_driver.password, role:'driver' },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json(token);

  }
 
};