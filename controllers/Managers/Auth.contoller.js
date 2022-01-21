const Manager = require('../../models/Manager.model');
var jwt = require('jsonwebtoken');

exports.Manager_Auth = async(req,res) => {

    const found_manager = await Manager.findOne({
      email: req.body.email,
      password: req.body.password
    })
  
    if (!found_manager) {
  
      res.status(404).send({ message:'user not found !' })
  
    }else{
  
      const token = jwt.sign(
        { id: found_manager._id, email:found_manager.email, password:found_manager.password, role:'manager' },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json(token);
  
    }
   
  };