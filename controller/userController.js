import User from "../modals/userModal.js";

export const getAllUser = async (req, res) => {
  try {
    let user = await User.find();
    if (user.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User does not exists!",
      });
    } else {
      res.status(200).json({
        user,
        success: true,
        message: "user",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signupUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All field are required!",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and ConfirmPassword does not match!",
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    } else if (!user) {
      let userData = await User.create({
        username,
        email,
        password,
        confirmPassword,
      });
      res.status(200).json({
        userData,
        success: true,
        message: "user signup successfully!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password) {
      return res.status(421).json({
        success: false,
        message: "Email and Password is required",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and ConfirmPassword does not match!",
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist!",
      });
    } else if (user) {
      res.status(200).json({
        user,
        success: false,
        message: "user login successfully!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
