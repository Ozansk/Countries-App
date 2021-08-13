import express from 'express';
import data from './restcountries.json';

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Credentials', true);
    
    res.header('Access-Control-Allow-Origin',  req.headers.origin);

    res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
    
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
    
    next();
});

app.get('/api', (req, res) => {
    res.send(data)
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
