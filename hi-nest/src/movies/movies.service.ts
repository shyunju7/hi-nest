import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    const foundMovie = this.movies.find((movie) => movie.id === id);

    if (!foundMovie) {
      throw new NotFoundException(`Movie with ID ${id} not Found!`);
    }

    return foundMovie;
  }

  createMovie(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: number) {
    this.getMovieById(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  updateMovie(id: number, updateData) {
    const movie = this.getMovieById(id);
    this.deleteMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
