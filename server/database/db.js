import mongoose, { connect } from 'mongoose';
import 'dotenv/config';

let url = process.env.DATABASE_URI.replace("<>", process.env.DATABASE_PASSWORD)

connect(url)
  .then(() => console.log('Successfully connected to the database!'))
  .catch(err => console.error('Error connecting to the database', err));

export default mongoose;