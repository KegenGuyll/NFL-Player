import app from './app';
import { MongoClient } from 'mongodb';
require('dotenv').config();

const port = process.env.PORT || 8080;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const uri = `mongodb+srv://${user}:${password}@${host}`;

export const client = new MongoClient(uri);

const retryConnection = () => {
  client.connect().catch((e) => {
    console.error(e);
    retryConnection();
  });
};

retryConnection();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
