import { Client } from "pg";

async function query(queryObject) {
  // Load test environment variables from .env file
  // console.log(process.env.POSTGRES_HOST);
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  client.end();
  return result;
}

export default {
  query: query,
};

// await client.connect();

// const res = await client.query("SELECT NOW()");
// console.log(res.rows[0].menssage);
// await client.end();
