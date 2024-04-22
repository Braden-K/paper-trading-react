export type FirebaseAuthUserInfo = { email: string; password: string };

export type CreateUserInfo = {
  firstName: string;
} & FirebaseAuthUserInfo;

export type ResponseStatus = { success: boolean };

export type UserAuthResponse = ResponseStatus & { uid: string | null };

export type User = {
  uid: string;
  firstName: string;
  email: string;
};

export type UserState = {
  user: User | null;
};

export type UserResponse = ResponseStatus & { user: User | null };
