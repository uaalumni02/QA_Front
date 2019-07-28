import path from 'path';
import express from 'express';
import ejs from 'ejs';
import axios from 'axios'
import bodyParser from 'body-parser';


const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'))

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.render('login')
});



app.listen(port, () => console.log('frontend is live'));