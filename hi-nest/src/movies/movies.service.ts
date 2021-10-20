import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id); // +id === parseInt(id)
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: string): boolean {
    this.movies.filter((movie) => movie.id === +id);
    return true;
  }
}
