import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

// needBaseType
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
