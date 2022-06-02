import { validationResult } from "express-validator";
import { UserModel } from "../models/usersModel.js";

//get all orders
export const getUsers = async (req, res, next) => {
  try {
    const getUsers = await UserModel.find();
    res.status(201).json(getUsers);
  } catch (error) {
    next(error);
  }
};

//get single order
/* export const getUser = async (req, res, next) => {
  try {
    const getUser = await UserModel.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
}; */

//delete order
/* export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: "User deleted!" });
  } catch (error) {
    next(error);
  }
}; */

//create
export const createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(402).json({
        errors: errors.array().map((err) => err.msg),
      });
    }

    const addUser = new UserModel(req.body);
    await addUser.save();
    res.status(201).json(addUser);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

//update order
/* export const updateUser = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}; */
