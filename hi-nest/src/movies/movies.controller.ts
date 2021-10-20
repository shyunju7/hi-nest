import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movies...';
  }

  @Get('/:id')
  getMovieById(@Param('id') movieId: String) {
    return `this will return one movies(id : ${id})…`;
  }
}
