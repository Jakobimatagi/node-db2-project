
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars')
  .where({id})
  .limit(1)
  
}

const create = (add) => {
  // DO YOUR MAGIC
   const [id] = db('cars').insert(add)
   return getById(id)
}


module.exports = {
  getAll,
  getById,
  create
}