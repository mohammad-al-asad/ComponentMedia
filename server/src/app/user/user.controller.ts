import jwt from 'jsonwebtoken';

import { UserService } from './user.service.js';
import type { Request, Response } from 'express';
import ApiResponse from '../../util/apiResponse.js';

const userService = new UserService();

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const userExists = await userService.findUserByEmail(email);
  if (userExists) {
    return new ApiResponse(400, 'User already exists').send(res);
  }

  const user = await userService.createUser({
    name,
    email,
    password,
    role
  });

  if (user) {
    new ApiResponse(201, 'User registered successfully', {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    }).send(res);
  } else {
    return new ApiResponse(400, 'Invalid user data').send(res);
  }
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userService.findUserByEmail(email);
  
  if (user && (await (user as any).matchPassword(password))) {
    if (user.isBlocked) {
      return new ApiResponse(403, 'Account is blocked').send(res);
    }

    new ApiResponse(200, 'Login successful', {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    }).send(res);
  } else {
    return new ApiResponse(401, 'Invalid email or password').send(res);
  }
}

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await userService.findUserById(req.user.id);
  
  if (user) {
    new ApiResponse(200, 'User profile fetched successfully', user).send(res);
  } else {
    return new ApiResponse(404, 'User not found').send(res);
  }
}

export const updateUserProfile =async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.user.id, req.body);
  
  if (user) {
    new ApiResponse(200, 'Profile updated successfully', user).send(res);
  } else {
    return new ApiResponse(404, 'User not found').send(res);
  }
}