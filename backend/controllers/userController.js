const asyncHandler = require('express-async-handler')

// @desc Register new User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Register User' })
})

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
