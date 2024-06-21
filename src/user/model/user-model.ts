export class UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserResponse = Omit<UserModel, 'password'>;
