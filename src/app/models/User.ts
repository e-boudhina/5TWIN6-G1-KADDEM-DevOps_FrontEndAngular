import { Role } from "./Role";

export interface User {
    id: number;
    username: String;
    email: String;
    password: String;
    roles: Role;
}