import HTTPStatus from 'http-status';

import * as Movie from './movie.model';

export async function getAll(req, res) {
  try {
    const movies = await Movie.getAll();
    return res.status(HTTPStatus.OK).json(movies);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json({ error: e });
  }
}

export async function createMovie(req, res) {
  try {
    const movie = await Movie.createMovie(req.body);
    return res.status(HTTPStatus.CREATED).json(movie);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json({ error: e });
  }
}
