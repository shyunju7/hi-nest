import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { throws } from 'assert';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/search')
  searchMovie(@Query('name') movieName: string) {
    return `search movie name... ${movieName}`;
  }

  @Get('/:id')
  getMovieById(@Param('id') movieId: string): Movie {
    return this.movieService.getMovieById(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.createMovie(movieData);
  }

  @Delete('/:id')
  removeMovie(@Param('id') movieId: string) {
    return this.movieService.deleteMovie(movieId);
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: string, @Body() updateData) {
    return this.movieService.updateMovie(movieId, updateData);
  }
}
