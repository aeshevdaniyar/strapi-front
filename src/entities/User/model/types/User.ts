export interface User {
  blocked: boolean;
  confirmed: boolean;
  createdAt: Date;
  email: string;
  id: number;
  provider: string;
  updatedAt: Date;
  username: string;
}

export interface AuthData {
  user: User;
  jwt: string;
}
export interface UserSchema {
  userData?: User;
  jwt?: string;
  inited: boolean;
}
