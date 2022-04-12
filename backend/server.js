const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3200;
const {movies} = require('./data/movieDB');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Server is running fine');
})

app.get('/getmovies',(req,res)=>{
    res.json(movies);
})

app.post('/addmovie',(req,res)=>{
    const {name,rating,released_year} = req.body;
    const newMovie = {
        id: movies.length + 1,
        name,
        rating,
        released_year
    }
    if(name.length > 0 && rating > 0 && released_year > 0){
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(400).json({
            error: `oops! it seems like you haven't filled all the fields`
        })
    }
   
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})