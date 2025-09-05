const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Signup logic
const signupUser = async (req, res) => {
  try {
    // 1️ Get data from the frontend
    const { firstname, lastname, email, username, password } = req.body;

    // 2️ Check if a user with the same email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or Username already exists" });
    }

    // 3️ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️ Create a new user
    const newUser = new User({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword,
    });

    // 5️ Save the user to the database
    await newUser.save();

    // 6️ Return success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    //  Get data from frontend
    const { identifier, password } = req.body; // identifier = username or email

    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  Find user by username or email
    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    //  Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    //  Return success
    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { signupUser, loginUser };
