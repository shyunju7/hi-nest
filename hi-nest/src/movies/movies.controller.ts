import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movies...';
  }

  @Get('/:id')
  getMovieById(@Param('id') movieId: String) {
    return `this will return one movies(id : ${movieId})…`;
  }

  @Post()
  create() {
    return `this will create a movie!`;
  }

  @Delete('/:id')
  removeMovie(@Param('id') movieId: String) {
    return `this will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: String) {
    return `this will update a movie with the id : ${movieId}`;
  }
}
