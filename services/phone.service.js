import { read } from "fs";
import { v4 } from "uuid";
import { readProductsDb, writeProductsDb } from "./database.service.js";
import path from 'path'


const dbFilePath = path.join(import.meta.dirname, '../database/products.json')


export const addProductToDb = (newProduct) => {
    let products = readProductsDb(dbFilePath)
    const id = v4()
    newProduct = {id, ...newProduct}
    products.push(newProduct)
    writeProductsDb(dbFilePath, products)
}


export const getAllProducts = () => {
    const products = readProductsDb(dbFilePath)
    return products
}


export const getOneProduct = (id) => {
    const products = readProductsDb(dbFilePath)
    const product = products.find(product => product.id == id)
    if(!product){
        throw new Error(`Mahsulot topilamdi`)
    }else{
        return product
    }
}


export const updateProduct = (id, data) => {
    let products = readProductsDb(dbFilePath)
    let found = false
    for(let product of products){
        if(product.id == id){
            Object.assign(product, data)
            found = true
            break
        }
    }
    if(found){
        writeProductsDb(dbFilePath, products)
        return data
    }else{
        throw new Error('Mahsulot topilmadi')
    }
}


export const deleteProduct = async (id) => {
    const products = await readProductsDb(dbFilePath)
    const newProducts = products.filter(product => product.id == id)
    if(newProducts.length == products.length){
        throw new Error(`Mahsulot topilamdi`)
    }else{
        writeProductsDb(dbFilePath, newProducts)
    }
}