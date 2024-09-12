
const cars = require("./cars-model")
function checkCarId() {
  // DO YOUR MAGIC
  return(req,res,next) =>{
    cars.getById(req.params.id)
    .then((car)=>{
      if(car){
        req.car = car
        next()
      }else{
        res.status(404).json({
          message: "car with id <car id> is not found"
        })
      }
    })
    
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
