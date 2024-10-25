import Movie from "../modals/movieModal.js";

export const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find({});
    if (movies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Movies Not Found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Movies received successfully",
        movies,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const postMovie = async (req, res) => {
  try {
    const {
      movie_title,
      movie_stars,
      movie_reviews,
      movie_director,
      movie_writer,
      movie_release_date,
      movie_description,
      movie_banner,
    } = req.body;

    let existMovie = await Movie.findOne({ movie_title });
    if (existMovie) {
      return res.status(400).json({
        success: false,
        message: "This Movie Already Exist!",
      });
    }

    if (
      !movie_title ||
      !movie_description ||
      !movie_reviews ||
      !movie_stars ||
      !movie_director ||
      !movie_writer ||
      !movie_release_date
    ) {
      return res.status(422).json({
        success: false,
        message: "All required field is mandatory",
      });
    }

    const newMovie = new Movie({
      movie_title,
      movie_stars,
      movie_reviews,
      movie_director,
      movie_writer,
      movie_description,
      movie_release_date,
      movie_banner,
    });
    const saveMoview = await newMovie.save();
    res.status(200).json({
      success: true,
      message: "movie Added Sussessfully",
      saveMoview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mesage: error.message,
    });
  }
};
