export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
}
export type Role = "admin" | "landlord" | "tenant";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}
