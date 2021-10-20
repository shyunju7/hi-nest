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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movies...';
  }

  @Get('/search')
  searchMovie(@Query('name') movieName: String) {
    return `search movie name... ${movieName}`;
  }

  @Get('/:id')
  getMovieById(@Param('id') movieId: String) {
    return `this will return one movies(id : ${movieId})…`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(`movieData`, movieData);
    return movieData;
  }

  @Delete('/:id')
  removeMovie(@Param('id') movieId: String) {
    return `this will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: String, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
