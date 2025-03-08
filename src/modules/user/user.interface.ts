export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "landlord" | "tenant";
  comparePassword(candidatePassword: string): Promise<boolean>;
}
