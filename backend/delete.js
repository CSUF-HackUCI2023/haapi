const { Client } = require("pg");

export const deleteUsersTable = async () => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let deleteResult = await client.query("DROP TABLE IF EXISTS users")
    await client.end()
  }
  
export const deleteBusinessTable = async () => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let deleteResult = await client.query("DROP TABLE IF EXISTS establishments")
    await client.end()
  }
  
export const deleteBusiness = async (businessName, address) => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let queryString = "DELETE FROM establishments WHERE BusinessName='" + businessName + "' and address='" + address + "'"
    let removeResult = await client.query(queryString)
    await client.end()
  }
  
export const deleteUser = async (email, password) => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let queryStringEstablishments = "DELETE FROM establishments WHERE email='" + email + "' and password='" + password + "'"
    let queryStringUser =  "DELETE FROM users WHERE email='" + email + "' and password='" + password + "'"
    let deleteEstablishmentsResult = await client.query(queryStringEstablishments)
    let deleteUserResult = await client.query(queryStringUser)
    await client.end()
  }