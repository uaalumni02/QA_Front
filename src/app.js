import path from 'path';
import express from 'express';
import ejs from 'ejs';
import axios from 'axios'


const app = express();

const port = process.env.PORT || 8080;



app.listen(port, () => console.log('frontend is live'));