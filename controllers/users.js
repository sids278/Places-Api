const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      email: 'test@test.com',
      password: 'testers'
    }
];


const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
    const { id,name, email, password } = req.body;
  
    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if (hasUser) {
      throw new HttpError('Could not create user, email already exists.', 422);
    }
  
    const createdUser = {
      id,
      name, // name: name
      email,
      password
    };
  
    DUMMY_USERS.push(createdUser);
  
    res.status(201).json({user: createdUser});
  };
exports.getUsers=getUsers;
exports.signup=signup;