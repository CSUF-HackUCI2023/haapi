const { Client } = require("pg");

const displayUsersTable = async () => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let displayResult = await client.query("SELECT * FROM users")
    await client.end()
  }
  
  const displayestablishmentsTable = async () => {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()
    let displayRResult = await client.query("SELECT * FROM establishments")
    await client.end()
  }