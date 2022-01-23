const Prime = require('../../models/Prime.model')


// ------------------- fetch -------------------

exports.All_Primes = async(req,res) => {

    await Prime.find()
    .then(data => { 
      res.json(data)
    }) 
    .catch(err => { 
      console.log(err);
    })
  
};

exports.Primes_Drivers = async(req,res) => {
  
  const prime = await Prime.find().populate('Command_id').populate('Driver_id');
  let date = new Date().getMonth()+1
  let distance = 0;
  let price = 0;

  prime.forEach(element => {

    if (req.params.id == element.Driver_id.id && element.Month == date ) {
      distance += parseInt(element.Command_id.Distance) ;
      price += parseInt(element.Command_id.Prix);
    }

  });
  
  let distance_Prime = 0;
  if(distance < 1000){
    distance_Prime = price * 0.15;
  }

  res.json(distance_Prime)

};