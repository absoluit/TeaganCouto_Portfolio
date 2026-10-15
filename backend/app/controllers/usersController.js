import UsersModel from '../../models/users.model.js';

const users = [
  {id: 1, firstname: 'John', lastname: 'Doe', email: 'johndoe@example.com'},
  {id: 2, firstname: 'Jane', lastname: 'Smith', email: 'janesmith@example.com'},
  {id: 3, firstname: 'Alice', lastname: 'Johnson', email: 'alicejohnson@example.com'}
];

export async function getUsers(req, res, next) {
  try {
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req, res) {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User with ID ${userId} not found'
      })
    }

    res.status(200).json({
      success: true,
      data: user
    });
  }

export async function createUser(req, res) {
  const { firstname, lastname, email } = req.body;

  if (!firstname || !lastname || !email) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields'
    });
  }

  const newUser = {
    id: users.length + 1,
    firstname,
    lastname,
    email,
    password: 'defaultpassword',
    created: new Date(),
    updated: new Date()
  }
}