import HTTPStatus from 'http-status';

import Movie from './movie.model';

export async function getAll(req, res) {
  try {
    const movies = await Movie.getAll();
    return res.status(HTTPStatus.OK).json(movies);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
