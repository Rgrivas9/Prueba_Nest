import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;
  @Prop()
  year: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);