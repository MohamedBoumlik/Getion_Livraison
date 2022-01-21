const AdminG = require('../../models/AdminG.model');
var jwt = require('jsonwebtoken');

exports.AdminG_Auth = async(req,res) => {

  const found_admin = await AdminG.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (!found_admin) {

    res.status(404).send({ message:'user not found !' })

  }else{

    const token = jwt.sign(
      { id: found_admin._id, email:found_admin.email, password:found_admin.password, role:'admin' },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json(token);

  }
 
};