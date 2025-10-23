import type { IUser, UserRegisterInput } from "./user.js";
import userModel from "./user.model.js";



export class UserService {
  async createUser(userData: UserRegisterInput): Promise<IUser> {
    const user = await userModel.create(userData);
    return user;
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return await userModel.findOne({ email });
  }

  async findUserById(id: string): Promise<IUser | null> {
    return await userModel.findById(id).select('-password');
  }

  async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return await userModel.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
  }

  async blockUser(id: string): Promise<IUser | null> {
    return await userModel.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
  }

  async unblockUser(id: string): Promise<IUser | null> {
    return await userModel.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
  }

  async getAllUsers(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const users = await userModel.find().select('-password').skip(skip).limit(limit);
    const total = await userModel.countDocuments();
    
    return {
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    };
  }
}