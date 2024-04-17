export type FirebaseAuthUserInfo = { email: string; password: string };

export type CreateUserInfo = { name: string } & FirebaseAuthUserInfo;

export type UserAuthReponse = { success: boolean; user: any };
