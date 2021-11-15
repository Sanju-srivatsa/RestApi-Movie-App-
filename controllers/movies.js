import { v4 as uuid } from 'uuid';

let movies = [];

export const getmovies = (req, res) => {
    console.log(`movies in the database: ${movies}`);

    res.send(movies);
}

export const createmovie = (req, res) => {   
    const movie = req.body;

    movies.push({...movie, id: uuid()});
    
    console.log(`movie [${movie.moviename}] added to the database.`);
};

export const getmovie = (req, res) => {
    res.send(req.params.id)
};

export const deletemovie = (req, res) => { 
    console.log(`movie with id ${req.params.id} has been deleted`);
    
    movies = movies.filter((movie) => movie.id !== req.params.id);
};

export const updatemovie =  (req,res) => {
    const movie = movies.find((movie) => movie.id === req.params.id);
    
    movie.moviename = req.body.moviename;
    movie.age = req.body.age;

    console.log(`moviename has been updated to ${req.body.moviename}.age has been updated to ${req.body.age}`)
};