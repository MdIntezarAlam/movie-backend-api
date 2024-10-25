import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  movie_title: { type: String, unique: true },
  movie_banner: { type: String },
  movie_stars: { type: String },
  movie_reviews: { type: String },
  movie_director: { type: String },
  movie_writer: { type: String },
  movie_description: { type: String },
  movie_release_date: { type: String },
});

const Movie = new mongoose.model("Movie", movieSchema);

export default Movie;
