const { Client } = require("pg");

export const createUsersTable = async () => {
  const client = new Client(process.env.DATABASE_URL)
  await client.connect()
  let tableResult = await client.query("CREATE TABLE IF NOT EXISTS users (email varchar(255), password varchar(255), PRIMARY KEY (email, password))")
  await client.end()
}

export const createBusinessTable = async () => {
  const client = new Client(process.env.DATABASE_URL)
  await client.connect()
  let tableResult = await client.query("CREATE TABLE IF NOT EXISTS establishments (BusinessName varchar(255), address varchar(255), email varchar(255), password varchar(255), PRIMARY KEY (BusinessName, address), FOREIGN KEY (email, password) REFERENCES users (email, password))")
  await client.end()
}