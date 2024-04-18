export type FirebaseAuthUserInfo = { email: string; password: string };

export type CreateUserInfo = {
  firstName: string;
  lastName: string;
} & FirebaseAuthUserInfo;

export type ResponseStatus = { success: boolean };

export type UserAuthResponse = ResponseStatus & { uid: string | null };

export type User = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
};
