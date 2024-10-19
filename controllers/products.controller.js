import { addProductToDb, getAllProducts, getOneProduct, updateProduct, deleteProduct } from "../services/phone.service.js"


export const createProducstController = (req, res, next) => {
  try {
    addProductToDb(req.body)
    return res.status(200).send({Status:"Created",Data: req.body})
  } catch (error) {
    next(error)
  }
}

export const getAllProducstsController = (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;  
    const limit = parseInt(req.query.limit) || 10; 

    const filters = {
      name: req.query.name || null
  }

    let products = getAllProducts(page, limit, filters)
    return res.send(products)
  } catch (error) {
    next(error)
  }
}

export const getByIdProducstController = (req, res, next) => {
  try {
    const id = req.params.id
    const product = getOneProduct(id)
    return res.send(product)
  } catch (error) {
    next(error)
  }
}


export const updateByIdProducstcontroller = (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    updateProduct(id, data)
    res.send({Status: "Changed", Data: data})
  } catch (error) {
    next(error)
  }
}


export const deleteByIdProducstController = (req, res, next) => {
  try {
    const id = req.params.id
    deleteProduct(id)
    res.send({Status: "Deleted"})
  } catch (error) {
    next(error)
  }
}