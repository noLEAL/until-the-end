import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: process.env.POSTEGRES_PASSWORD,
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
