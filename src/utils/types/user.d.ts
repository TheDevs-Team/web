declare type UserLoginType = {
  email: string;
  password: string;
};

declare type UserType = {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  type: string;
  financial_status: string;
  password: string;
  active: boolean;
  created_at?: Date;
  updated_at?: Date;
};

declare type UserLoginResponse = {
  user: UserType;
  token: string;
};

declare type CreateUserType = {
  name: string;
  document: string;
  email: string;
  phone: string;
  type: string;
  financial_status: string;
  password: string;
  confirm_password: string;
};

declare type ListUsersByType = {
  adms: UserType[];
  users: UserType[];
};
