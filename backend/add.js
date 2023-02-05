const { Client } = require("pg");

export const addUser = async (email, password) => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let queryString = "INSERT INTO users (email, password) values ('" + email + "', '" + password + "')"
    let result = await client.query(queryString)
    await client.end()
  }
  
export const addBusiness = async (name, address, email, password) => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let queryString = "INSERT INTO establishments (BusinessName, address, email, password) values ('" + name + "', '" + address + "', '" + email + "', '" + password + "')"
    // console.log(queryString)
    let result = await client.query(queryString)
    await client.end()
  }