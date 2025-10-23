export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "provider" | "user" | "admin";
  profilePicture?: string;
  phone?: string;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRegisterInput = {
  name: string;
  email: string;
  password: string;
  role: "user" | "provider";
};

export type UserLoginInput = {
  email: string;
  password: string;
};
