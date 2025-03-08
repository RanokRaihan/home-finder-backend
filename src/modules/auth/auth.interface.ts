export type TUserRole = "admin" | "landlord" | "tenant";
export interface IjwtPayload {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: TUserRole;
}
