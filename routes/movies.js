import express from 'express';

import { getmovies, createmovie, getmovie, deletemovie, updatemovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getmovies);

router.post('/', createmovie);

router.get('/:id', getmovie);

router.delete('/:id', deletemovie);

router.patch('/:id', updatemovie);

export default router;