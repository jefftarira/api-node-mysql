import movieRoutes from './movies/movie.routes';

export default app => {
  app.use('/api/movies', movieRoutes);
};
