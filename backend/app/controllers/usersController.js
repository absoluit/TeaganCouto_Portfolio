import usersModel from '../models/usersModel.js';

export async function getAllUsers(req, res, next) {
  try {
    let users = await usersModel.find();
    console.log(users);

    res.json({
      success: true,
      message: 'Users list retrieved successfully',
      data: users
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getUserById(req, res, next) {
  try {
    let userId = req.params.id;
    let user = await usersModel.findById(userId);

    res.json({
      success: true,
      message: 'User retrieved successfully',
      data: user
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function addUser(req, res, next) {
  try {
    let newUser = usersModel(req.body);

    let user = await usersModel.create(newUser);
    console.log(user);

    res.json({
      success: true,
      message: 'User added successfully',
      data: user
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function updateUser(req, res, next) {
  try {
    let userId = req.params.id;
    let updatedUser = usersModel(req.body);
    updatedUser._id = userId;

    let result = await usersModel.updateOne({ _id: userId }, updatedUser);
    console.log(result);

    res.json({
      success: true,
      message: 'User updated successfully',
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    let userId = req.params.id;

    let result = await usersModel.deleteOne({ _id: userId })
    console.log(result)

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: 'User deleted successfully.'
      });
    } else {
      throw new Error('User not found.');
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
} 